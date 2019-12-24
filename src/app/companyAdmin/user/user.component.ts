import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import {
  UpdateCompanyInput,
  CreateCompanyWorkTypeInput,
  CreateCompanyStyleTypeInput,
  ModelSortDirection
} from "../../API.service";
import API, { graphqlOperation } from "@aws-amplify/api";

import { Auth, Storage } from "aws-amplify";
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
import { MyAPIService } from "../../API.my";
import { ulid } from "ulid";
import { unescapeIdentifier } from "@angular/compiler";
import { stringify } from "querystring";

@Component({
  selector: "user-cmp",
  moduleId: module.id,
  templateUrl: "user.component.html"
})
export class CompanyComponent implements OnInit {
  user: any;
  filename: string;
  reader = new FileReader();
  fileNameBackground = "";
  fileNameProfile = "";
  fileUrlBackground: any;
  fileUrlProfile: any;
  fileUrlBackgroundTmp: string | ArrayBuffer;
  fileUrlProfileTmp: string | ArrayBuffer;
  selectedFileBackground: File;
  selectedFileProfile: File;
  companyName: any;
  companyId: any;
  companyAbout: any;
  companyEmail: any;

  workTypeList: Array<any>;
  workTypeMasterList: Array<any>;
  workTypeListForView: Array<any>;

  styleTypeList: Array<any>;
  styleTypeMasterList: Array<any>;
  styleTypeListForView: Array<any>;

  constructor(private api: MyAPIService) {}

  async ngOnInit() {
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);
    this.user = loginedUser;
    this.filename = this.user.id + ".png";
    this.fileNameBackground = "company/background/" + this.filename;
    this.fileNameProfile = "company/profile/" + this.filename;

    //idをキーに企業情報を取得
    //const company: ModelCompanyFilterInput = {};
    // await this.api.ListCompanys().then(data => {
    //   console.log(data);
    // });

    let companyData = await this.api.MyGetCompany(loginedUser.id);
    if (companyData !== null) {
      console.log(companyData);
      this.companyName = companyData.name;
      this.companyId = companyData.id;
      this.companyAbout = companyData.about;
      this.companyEmail = companyData.email;
      this.workTypeList = companyData.workTypes.items;
      this.styleTypeList = companyData.styleTypes.items;

      Storage.get(this.fileNameBackground, { level: "public" })
        .then(result => {
          console.log(result);
          this.fileUrlBackground = result;
        })
        .catch(err => console.log(err));
      Storage.get(this.fileNameProfile, { level: "public" })
        .then(result => {
          console.log(result);
          this.fileUrlProfile = result;
        })
        .catch(err => console.log(err));
    } else {
      const now = Math.floor(new Date().getTime());
      companyData = await this.api.CreateCompany({
        id: loginedUser.id,
        companyOwnerId: loginedUser.id,
        name: loginedUser.id,
        about: " ",
        email: cognitUser.attributes.email,
        createdAt: now,
        updatedAt: now
      });

      this.companyName = companyData.name;
      this.companyId = companyData.id;
      this.companyAbout = companyData.about;
      this.companyEmail = companyData.email;
      this.workTypeList = companyData.workTypes.items;
      this.styleTypeList = companyData.styleTypes.items;

      const response = await fetch("/assets/img/top/2.jpg");
      const blob = await response.blob();

      Storage.put("company/background/" + loginedUser.id + ".png", blob, {
        contentType: "image/png"
      })
      .then(result => 
        {
        Storage.put("company/profile/" + loginedUser.id + ".png", blob, {
        contentType: "image/png"
        })
        .then(result => 
          {
        Storage.get(this.fileNameBackground, { level: "public" })
        .then(result => {
          console.log(result);
          this.fileUrlBackground = result;
        })
        .catch(err => console.log(err));
        Storage.get(this.fileNameProfile, { level: "public" })
        .then(result => {
          console.log(result);
          this.fileUrlProfile = result;  
        })
        .catch(err => console.log(err));
      }
      );}
      )       
    }


            //workTypeのロジック
        await this.api.ListWorkTypes().then(data => {
          var tmp = Array();
          var tmpOnlyId = Array();
          this.workTypeMasterList = data.items;
          //idだけの配列を準備
          console.log(this.workTypeList);
          if(this.workTypeList!=undefined){
            for (let ii = 0; ii < this.workTypeList.length; ii++) {
              console.log(this.workTypeList[ii]);
              tmpOnlyId.push(this.workTypeList[ii].workType.id);
            }
          }
          //存在性のチェック
          for (let i = 0; i < data.items.length; i++) {
            if (tmpOnlyId.indexOf(data.items[i].id) == -1) {
              tmp.push({
                id: data.items[i].id,
                content: data.items[i].content,
                flag: false
              });
            } else {
              tmp.push({
                id: data.items[i].id,
                content: data.items[i].content,
                flag: true
              });
            }
          }
          console.log(tmp);
          this.workTypeListForView = tmp;
        });

        //styleTypeのロジック
        await this.api.ListStyleTypes().then(data => {
          var tmp = Array();
          var tmpOnlyId = Array();
          this.styleTypeMasterList = data.items;
          //idだけの配列を準備
          if(this.workTypeList!=undefined){
            for (let ii = 0; ii < this.styleTypeList.length; ii++) {
              console.log(this.styleTypeList[ii]);
              tmpOnlyId.push(this.styleTypeList[ii].styleType.id);
            }
          }
          //存在性のチェック
          for (let i = 0; i < data.items.length; i++) {
            if (tmpOnlyId.indexOf(data.items[i].id) == -1) {
              tmp.push({
                id: data.items[i].id,
                content: data.items[i].content,
                flag: false
              });
            } else {
              tmp.push({
                id: data.items[i].id,
                content: data.items[i].content,
                flag: true
              });
            }
          }
          console.log(tmp);
          this.styleTypeListForView = tmp;      
      }); 

  }

  onFileChangedBackground(event) {
    this.selectedFileBackground = event.target.files[0];
    this.reader.onload = e => {
      this.fileUrlBackgroundTmp = e.target["result"];
    };
    this.reader.readAsDataURL(this.selectedFileBackground);
  }
  onFileChangedProfile(event) {
    this.selectedFileProfile = event.target.files[0];
    this.reader.onload = e => {
      this.fileUrlProfileTmp = e.target["result"];
    };
    this.reader.readAsDataURL(this.selectedFileProfile);
  }

  async publish() {
    const now = Math.floor(new Date().getTime());
    this.uploadBackgroundImg(this.filename);
    this.uploadProfileImg(this.filename);
    const company: UpdateCompanyInput = {
      id: this.user.id,
      name: this.companyName,
      email: this.companyEmail,
      about: this.companyAbout,
      updatedAt: now
    };

    this.api.UpdateCompany(company).then(data => {});
    setTimeout("location.reload()", 1000);
  }
  async uploadBackgroundImg(id) {
    const file = this.selectedFileBackground;
    Storage.put("company/background/" + id, file, {
      level: "public",
      contentType: "image/png"
    })
      .then(result => console.log(result)) // {key: "test.txt"}
      .catch(err => console.log(err));
  }
  async uploadProfileImg(id) {
    const file = this.selectedFileProfile;
    Storage.put("company/profile/" + id, file, {
      level: "public",
      contentType: "image/png"
    })
      .then(result => console.log(result)) // {key: "test.txt"}
      .catch(err => console.log(err));
  }

  async workTypeToggle(flag, workTypeId) {
    //flagはDBに存在するか
    //あればDelete
    const now = Math.floor(new Date().getTime());
    var lastId = "0";
    var relationId;
    this.api
      .ListCompanyWorkTypes(null, null, null, null, ModelSortDirection.ASC)
      .then(data => {
        for (let ii = 0; ii < data.items.length; ii++) {
          if (parseInt(lastId, 10) < parseInt(data.items[ii].id, 10)) {
            lastId = data.items[ii].id;
          }
          if (
            data.items[ii].company.id == this.user.id &&
            data.items[ii].workType.id == workTypeId
          ) {
            relationId = data.items[ii].id;
          }
        }
      })
      .then(data => {
        if (flag == true) {
          this.api.DeleteCompanyWorkType({ id: relationId });
        } else {
          //なければCreate
          if (isNaN(parseInt(lastId, 10))) {
            lastId = "0";
          }
          const createCompanyWorkType: CreateCompanyWorkTypeInput = {
            id: (parseInt(lastId, 10) + 1).toString(10),
            companyWorkTypeWorkTypeId: workTypeId,
            companyWorkTypeCompanyId: this.user.id,
            createdAt: now,
            updatedAt: now
          };
          let create = this.api.CreateCompanyWorkType(createCompanyWorkType);
        }
      });
    setTimeout("location.reload()", 1000);
  }
  async styleTypeToggle(flag, styleTypeId) {
    const now = Math.floor(new Date().getTime());
    var lastId = "0";
    var relationId;
    this.api
      .ListCompanyStyleTypes(null, null, null, null, ModelSortDirection.ASC)
      .then(data => {
        for (let ii = 0; ii < data.items.length; ii++) {
          if (parseInt(lastId, 10) < parseInt(data.items[ii].id, 10)) {
            lastId = data.items[ii].id;
          }
          if (
            data.items[ii].company.id == this.user.id &&
            data.items[ii].styleType.id == styleTypeId
          ) {
            relationId = data.items[ii].id;
          }
        }
      })
      .then(data => {
        if (flag == true) {
          this.api.DeleteCompanyStyleType({ id: relationId });
        } else {
          //なければCreate
          if (isNaN(parseInt(lastId, 10))) {
            lastId = "0";
          }
          const createCompanyStyleType: CreateCompanyStyleTypeInput = {
            id: (parseInt(lastId, 10) + 1).toString(10),
            companyStyleTypeStyleTypeId: styleTypeId,
            companyStyleTypeCompanyId: this.user.id,
            createdAt: now,
            updatedAt: now
          };
          let create = this.api.CreateCompanyStyleType(createCompanyStyleType);
        }
      });
    // setTimeout("location.reload()", 1000);
  }
}
