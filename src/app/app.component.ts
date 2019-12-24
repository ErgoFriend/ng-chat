import { Component, OnInit } from "@angular/core";
import { APIService } from "./API.service";
import { RoomService } from "./store/room/room.service";
import { AuthService } from "./auth/auth.service";
import { tap } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import Amplify, { Auth, Hub } from "aws-amplify";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit {
  static readonly Image_URL: string =
    "https://ng-chatdecf4be0115149d588afaa9be2fe4341-master.s3-ap-northeast-1.amazonaws.com/public";
  title = "Lotre";
  isLogin: boolean = false;
  roomSubscription: any;

  constructor(
    private api: APIService,
    private router: Router,
    private route: ActivatedRoute,
    private roomService: RoomService,
    private auth: AuthService
  ) {
    Auth.currentAuthenticatedUser().then(user => {
      console.log("currentAuthenticatedUser:", user);
      // 参加中のチャットルームを取得
      this.api
        .ListRoomUsers(null, { username: { eq: user.username } })
        .then(roomsGql => {
          console.log("参加中のチャットルーム:", roomsGql.items);
          roomsGql.items.forEach(item => this.roomService.addRoom(item.room));
        });
    });
    this.auth.isAuthenticated().pipe(
      tap(loggedIn => {
        if (!loggedIn) {
          this.isLogin = true;
        }
      })
    );
  }

  async ngOnInit() {
    // console.log(rooms);
    // console.log(this.router.url);
    // if (this.router.url === "/") {
    //   this.router.navigate(["/rooms/" + this.roomService.rooms$[0]]);
    // }
  }
  ngOnDestroy() {
    this.roomSubscription.unsubscribe();
  }
}
