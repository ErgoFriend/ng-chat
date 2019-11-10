import { Component, OnInit, QueryList } from "@angular/core";
import Amplify, { Auth, Hub, graphqlOperation, Storage } from "aws-amplify";
import { MyAPIService } from "../../API.my";

import {} from "../../API.service";

@Component({
  selector: "index-cmp",
  moduleId: module.id,
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit {
  articleList: Array<any>;
  articleImgList: Array<any>;
  user: any;
  constructor(private api: MyAPIService) {}
  async ngOnInit() {
    const url =
      "https://6u6a24bdebb4fl6kehogztkzmy.appsync-api.ap-northeast-1.amazonaws.com/graphql";

    //var dataString =
    //'{ "query": "query GetArticle {getArticle(id:2) {id,title,comments { __typename,items {__typename,id,content,user {__typename,id,username,displayName,logo,user_role,createdAt,updatedAt},createdAt,updatedAt}nextToken}}}" }';

    var dataString =
      '{ "query": "query ListArticles($id: ID, $filter: ModelArticleFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {listArticles(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {__typename,items {__typename,id,title,thumbnail,content,isOpen,createdAt,updatedAt,},nextToken}}" }';

    const options = {
      headers: {
        "Content-Type": "application/graphql",
        "x-api-key": "da2-ro3owspsk5hhnmakwekyxnoyvy"
      },
      body: dataString,
      method: "Post"
    };
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.articleList = data.data.listArticles.items;
      });

    try {
      const cognitUser = await Auth.currentAuthenticatedUser();
      if (cognitUser != null) {
        const loginedUser = await this.api.GetUser(cognitUser.username);
        this.user = loginedUser;
      }
    } catch (e) {
      console.log(e);
    }

    // XMLHttpRequestオブジェクトの作成
    var request = new XMLHttpRequest();

    // URLを開く
    request.open("GET", "https://mail-255905.appspot.com/auth/123456789", true);
    var acces_token;
    // レスポンスが返ってきた時の処理を記述
    request.onload = function() {
      var data = this.response;
      acces_token = data;
      console.log(data);
      data.replace('"', "");
      console.log(data);
      var url = "https://mail-255905.appspot.com/get_mail"; // リクエスト先URL
      var dataPost = "id=2&access_token=" + acces_token; // 送信データ ('param=value&...')
      var requestPost = new XMLHttpRequest();
      requestPost.open("POST", url, true);
      requestPost.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );
      requestPost.onreadystatechange = function() {
        if (requestPost.readyState != 4) {
          console.log("1");
        } else if (requestPost.status != 200) {
          console.log("2");
        } else {
          // 送信成功
          console.log("3");
          var result = requestPost.responseText;
          console.log(result);
        }
      };
      requestPost.send(dataPost);
    };
    // リクエストをURLに送信
    request.send();

    //articleListにデータを突っ込む
    /*this.api.ListArticles().then(data => {
      var tmp = Array();
      for (let i = 0; i < data.items.length; i++) {
        Storage.get("article/" + data.items[i].id + ".png")
          .then(result => {
            console.log(result);
            tmp.push(result);
          })
          .catch(err => console.log("1234"));
      }
      this.articleList = data.items;
      this.articleImgList = tmp;
    });*/
  }

  redirect(id) {
    location.href = "/detail?id=" + id;
  }
}
