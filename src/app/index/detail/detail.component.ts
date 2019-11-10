import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import { CreateCommentInput, ArticleStatus } from "../../API.service";
import API, { graphqlOperation } from "@aws-amplify/api";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Auth, Storage } from "aws-amplify";
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
import { MyAPIService } from "../../API.my";
import { CreateInvitedRoomInput, invitedStatus } from "../../API.service";
import { ulid } from "ulid";

@Component({
  selector: "detail-cmp",
  moduleId: module.id,
  templateUrl: "detail.component.html"
})
export class DetailComponent implements OnInit {
  constructor(
    private router: Router,
    private api: MyAPIService,
    private route: ActivatedRoute
  ) {}
  user: any;
  htmlContent = "";
  title = "";
  reader = new FileReader();
  fileUrl: Object | String;
  articleId = "";
  comment = "";
  comments: any;
  company: any;

  async ngOnInit() {
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);
    this.user = loginedUser;
    this.articleId = this.route.snapshot.queryParams["id"];

    //Getのパラメータをkeyにarticleを取得
    /*await this.api.MyGetArticle(this.articleId).then(data => {
      console.log(data);
      console.log(data.comments.items);
      this.comments = data.comments.items;
      this.company = data.company;
      this.title = data.title;
      this.htmlContent = data.content;
      Storage.get("article/" + data.id + ".png")
        .then(result => {
          console.log(result);
          this.fileUrl = result;
        })
        .catch(err => console.log("1234"));
       this.api.ListComments().then(data => {
        this.comments = data.items;
        console.log(this.comments);
      });
  }); */

    const url =
      "https://elice4go7fd2tc6cw2ynyivxei.appsync-api.ap-northeast-1.amazonaws.com/graphql";

    var dataString =
      '{ "query": "query GetArticle {getArticle(id:' +
      this.articleId +
      ') {id,title,content,company {__typename,id,name,email,logo,backgroundImg,about,area {__typename,id,content,createdAt,updatedAt}},comments { __typename,items {__typename,id,content,user {__typename,id,username,displayName,logo,user_role,createdAt,updatedAt},createdAt,updatedAt}nextToken}}}" }';

    console.log(dataString);
    const options = {
      headers: {
        "Content-Type": "application/graphql",
        "x-api-key": "da2-2gyv5pknsnarzcpyu3dzooaody"
      },
      body: dataString,
      method: "Post"
    };
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.company = data.data.getArticle.company;
        this.comments = data.data.getArticle.comments.items;
        this.title = data.data.getArticle.title;
        this.htmlContent = data.data.getArticle.content;
      });
  }
  async post() {
    //コメントの生成
    const now = Math.floor(new Date().getTime());
    var tempId = ulid();

    const commentInput: CreateCommentInput = {
      id: tempId,
      content: this.comment,
      createdAt: now,
      updatedAt: now,
      commentUserId: this.user.id,
      commentArticleId: this.articleId
    };
    console.log(commentInput);
    const sent = await this.api.CreateComment(commentInput).then();
    setTimeout("location.reload()", 1000);
  }

  async newRoom() {
    // 応募&問い合わせする
    const now = Math.floor(new Date().getTime() / 1000);
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);

    const newRoomInput = {
      id: ulid(),
      name: cognitUser.username,
      owner: cognitUser.username,
      roomUserId: loginedUser.id,
      image: "https://loremflickr.com/320/240?random=" + now,
      createdAt: now,
      updatedAt: now
    };
    const newRoom = await this.api.CreateRoom(newRoomInput);

    const input: CreateInvitedRoomInput = {
      id: ulid(),
      invitedRoomRoomId: newRoom.id,
      invitedRoomToUserId: this.company.owner.username,
      toUsername: this.company.owner.username,
      invitedRoomFromUserId: cognitUser.username,
      status: invitedStatus.hold,
      createdAt: now,
      updatedAt: now
    };
    this.api.CreateInvitedRoom(input);

    this.api
      .CreateRoomUser({
        id: ulid(),
        username: loginedUser.username,
        roomUserRoomId: newRoom.id,
        roomUserUserId: loginedUser.id,
        createdAt: now,
        updatedAt: now
      })
      .then(() => this.router.navigate(["/messenger/rooms/" + newRoom.id]));
  }
}
