import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { ListRoomsQuery, CreateRoomInput } from "../API.service";
import { MyAPIService } from "../API.my";

import Amplify, { Auth, Hub } from "aws-amplify";

import { RoomService } from "../store/room/room.service";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { showRoomDetail } from "../store/session/session.action";

import { ulid } from "ulid";

@Component({
  selector: "app-room-list",
  templateUrl: "./room-list.component.html",
  styleUrls: ["./room-list.component.sass"]
})
export class RoomListComponent implements OnInit {
  roomid: string;
  newRoom: CreateRoomInput;
  invitedRooms: Array<object>;
  // invitedRoomSubscription: any;
  addedRoomUserSubscription: any;
  showRoomDetail$: Observable<boolean>;

  constructor(
    private api: MyAPIService,
    private router: Router,
    private route: ActivatedRoute,
    public roomService: RoomService,
    private store: Store<{ showRoomDetail: boolean }>
  ) {
    this.roomid = "";
    this.showRoomDetail$ = store.pipe(select("showRoomDetail"));
  }

  async ngOnInit() {
    console.log("list ngOnInit");

    Auth.currentAuthenticatedUser().then(user => {
      // 参加中のチャットルームを取得
      // this.api
      //   .ListRoomUsers(null, {username: {eq: user.username}})
      //   .then(roomsGql => {
      //     console.log("参加中のチャットルーム:", roomsGql.items);
      //     roomsGql.items.forEach(item => this.roomService.addRoom(item.room));
      //   });

      // 新規参加チャットルームを待機する
      this.addedRoomUserSubscription = this.api
        .MyOnCreateRoomUserListener(user.username)
        .subscribe({
          next: newRoomUser => {
            console.log("newRoomUser:", newRoomUser);
            this.roomService.addRoom(
              newRoomUser.value.data.onCreateRoomUser.room
            );
          }
        });
    });
  }

  ngOnDestroy() {
    // this.invitedRoomSubscription.unsubscribe();
    this.addedRoomUserSubscription.unsubscribe();
  }

  async createRoom() {
    const now = Math.floor(new Date().getTime() / 1000);
    const cognitUser = await Auth.currentAuthenticatedUser();
    const loginedUser = await this.api.GetUser(cognitUser.username);

    console.log("cognitUser:", cognitUser);
    console.log("loginedUser:", loginedUser);
    this.newRoom = {
      id: ulid(),
      name: this.roomid,
      owner: cognitUser.username,
      roomUserId: loginedUser.id,
      image: "https://loremflickr.com/320/240?random=" + now,
      createdAt: now,
      updatedAt: now
    };
    this.roomid = "";

    const newRoom = await this.api.CreateRoom(this.newRoom);

    this.api.CreateRoomUser({
      id: ulid(),
      username: loginedUser.username,
      roomUserRoomId: newRoom.id,
      roomUserUserId: loginedUser.id,
      createdAt: now,
      updatedAt: now
    });
  }

  showRoomDetail(): void {
    this.store.dispatch(showRoomDetail());
  }
}
