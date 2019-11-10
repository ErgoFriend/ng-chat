import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import {
  CreateCommentInput,
  ArticleStatus,
  ModelCompanyFilterInput
} from "../../API.service";
import API, { graphqlOperation } from "@aws-amplify/api";
import { CreateInvitedRoomInput, invitedStatus } from "../../API.service";

import { Auth, Storage } from "aws-amplify";
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
import { MyAPIService } from "../../API.my";
import { ulid } from "ulid";
import { unescapeIdentifier } from "@angular/compiler";
import { stringify } from "querystring";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: "table-cmp",
  moduleId: module.id,
  templateUrl: "userlist.component.html"
})
export class UserlistComponent implements OnInit {
  userList: Array<any>;
  user: any;

  CharacterList: Array<any>;
  SkillList: Array<any>;

  Character: string;
  Skill: string;

  constructor(private api: MyAPIService) {}

  async ngOnInit() {
    //characterのロジック
    await this.api.ListCharacters().then(data => {
      this.CharacterList = data.items;
    });
    //skillのロジック
    await this.api.ListSkills().then(data => {
      this.SkillList = data.items;
    });
  }

  search() {
    console.log(this.Character);
    console.log(this.Skill);
    var check = Array();

    this.api.MyListApplicants().then(data => {
      var tmpOnlyId = Array();
      // console.log(data);
      for (let ii = 0; ii < data.items.length; ii++) {
        // console.log(this.Skill);
        // console.log(this.Character);

        var user = this.api.MyGetApplicant(data.items[ii].id).then(user => {
          console.log(user);
          if (parseInt(this.Character, 10) >= 1) {
            // console.log("両方");
            for (let j = 0; j < user.characters.items.length; j++) {
              if (parseInt(this.Skill, 10) >= 1) {
                //両方あり
                //console.log("両方あり");
                for (let k = 0; k < user.skills.items.length; k++) {
                  if (
                    user.skills.items[k].id == this.Skill &&
                    user.characters.items[j].id == this.Character
                  ) {
                    if (check.indexOf(data.items[ii]) == -1) {
                      check.push(data.items[ii]);
                    }
                  }
                }
              } else {
                if (user.characters.items[j].id == this.Character) {
                  //性格だけ
                  //  console.log("性格だけ");
                  if (check.indexOf(data.items[ii]) == -1) {
                    check.push(data.items[ii]);
                  }
                }
              }
            }
          } else {
            //   console.log("両方dake");

            if (parseInt(this.Skill, 10) >= 1) {
              //   console.log("スキルだけ");
              //スキルだけ
              for (let k = 0; k < user.skills.items.length; k++) {
                if (user.skills.items[k].id == this.Skill) {
                  if (check.indexOf(data.items[ii]) == -1) {
                    check.push(data.items[ii]);
                  }
                }
              }
            } else {
              // console.log("両方なし");
              //両方なし
              // if (check.indexOf(data.items[ii]) == -1) {
              check.push(data.items[ii]);
              //}
            }
          }
        });
        // console.log("1");
      }
    });
    this.userList = check;
    console.log(this.userList);
  }

  async newRoom(applicantID: string) {
    // 応募&問い合わせする
    const now = Math.floor(new Date().getTime() / 1000);
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);

    const newRoomInput = {
      id: ulid(),
      name: applicantID,
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
      invitedRoomToUserId: applicantID,
      toUsername: applicantID,
      invitedRoomFromUserId: cognitUser.username,
      status: invitedStatus.hold,
      createdAt: now,
      updatedAt: now
    };
    this.api.CreateInvitedRoom(input);

    this.api.CreateRoomUser({
      id: ulid(),
      username: loginedUser.username,
      roomUserRoomId: newRoom.id,
      roomUserUserId: loginedUser.id,
      createdAt: now,
      updatedAt: now
    });
  }
}
