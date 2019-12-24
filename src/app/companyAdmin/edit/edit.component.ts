import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import {
  CreateArticleInput,
  ArticleStatus,
  UpdateArticleInput,
  ModelAreaFilterInput,
  ModelStringFilterInput,
  ModelSortDirection
} from "../../API.service";
import API, { graphqlOperation } from "@aws-amplify/api";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Auth, Storage } from "aws-amplify";
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
import { MyAPIService } from "../../API.my";
import { ulid } from "ulid";

@Component({
  selector: "table-cmp",
  moduleId: module.id,
  templateUrl: "edit.component.html",
  styleUrls: ["edit.component.css"]
})
export class EditComponent implements OnInit {
  user: any;
  constructor(private api: MyAPIService, private route: ActivatedRoute) {}
  selectedFile: File;

  htmlContent = "";
  title = "";
  temId = "";
  ArticleId = "";
  articleStatus = open;
  reader = new FileReader();
  fileUrl: Object | String;
  AreaList: Array<any>;
  Area: string;
  AreaPara: string;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "15rem",
    minHeight: "5rem",
    placeholder: "Enter text here...",
    translate: "no"
  };

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "15rem",
    showToolbar: true,
    minHeight: "5rem",
    placeholder: "Enter text here...",
    translate: "no",
    defaultFontName: "Arial",
    customClasses: [
      {
        name: "quote",
        class: "quote"
      },
      {
        name: "redText",
        class: "redText"
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1"
      }
    ]
  };

  async ngOnInit() {
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);
    this.user = loginedUser;
    let param1 = this.route.snapshot.queryParams["id"];

    //Getのパラメータをkeyにarticleを取得
    if (param1 != null) {
      this.ArticleId = param1;
      await this.api.GetArticle(param1).then(data => {
        this.title = data.title;
        this.htmlContent = data.content;
        Storage.get("article/" + data.id + ".png")
          .then(result => {
            this.fileUrl = result;
            this.api.ListAreas().then(data => {
              console.log(data);
              this.AreaList = data.items;
              console.log(this.AreaList);
            });
            this.AreaPara = data.area.content;
          })
          .catch(err => console.log("1234"));
      });
    } else {
      this.api.ListAreas().then(data => {
        this.AreaList = data.items;
      });
      this.api.ListAreas().then(data => {
        console.log(data);
        this.AreaList = data.items;
        console.log(this.AreaList);
        this.AreaPara = data.items[0].content;
      });
    }
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.reader.onload = e => {
      this.fileUrl = e.target["result"];
    };
    this.reader.readAsDataURL(this.selectedFile);
  }
  async publish() {
    const now = Math.floor(new Date().getTime());
    var tempId = ulid();
    var filename = tempId + ".png";
    this.uploadImg(tempId);

    for (let i = 0; i < this.AreaList.length; i++) {
      if (
        this.AreaList[i].content == this.AreaPara ||
        this.AreaList[i].id == this.AreaPara
      ) {
        var areaId = this.AreaList[i].id;
      }
    }

    if (this.ArticleId == null || this.ArticleId == "") {
      var lastId;
      this.api
        .ListArticles(null, null, null, null, ModelSortDirection.DESC)
        .then(data => {
          var tmp = Array();
          lastId = data.items[0].id;
          for (let i = 0; i < data.items.length; i++) {
            if (parseInt(lastId, 10) < parseInt(data.items[i].id, 10)) {
              lastId = data.items[i].id;
            }
          }
          const article: CreateArticleInput = {
            id: (parseInt(lastId, 10) + 1).toString(10),
            title: this.title,
            thumbnail: filename,
            content: this.htmlContent,
            isOpen: ArticleStatus.open,
            articleCompanyId: this.user.id,
            articleAreaId: areaId,
            createdAt: now,
            updatedAt: now
          };
          console.log(article);
          const sent = this.api.CreateArticle(article);
        });
    } else {
      const updateArticle: UpdateArticleInput = {
        id: this.ArticleId,
        title: this.title,
        thumbnail: filename,
        content: this.htmlContent,
        isOpen: ArticleStatus.open,
        articleCompanyId: this.user.id,
        articleAreaId: areaId,
        createdAt: now,
        updatedAt: now
      };
      const update = await this.api.UpdateArticle(updateArticle);
    }
    //setTimeout("location.href='/companyAdmin/articlelist'", 1000);
  }

  async uploadImg(id) {
    const file = this.selectedFile;
    console.log(file);
    // console.log(id);
    var filename = id + ".png";
    //console.log(filename);
    Storage.put("article/" + filename, file, {
      level: "public",
      contentType: "image/png"
    })
      .then(result => console.log(result)) // {key: "test.txt"}
      .catch(err => console.log(err));
  }
}
