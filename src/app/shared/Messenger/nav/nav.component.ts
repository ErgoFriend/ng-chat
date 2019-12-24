import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../auth/auth.service";
import { tap } from "rxjs/operators";
import { Auth } from "aws-amplify";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.sass"]
})
export class NavComponent implements OnInit {
  isActive: boolean;
  isLogin: boolean = false;

  constructor(private auth: AuthService) {
    this.isActive = false;
    this.auth.isAuthenticated().pipe(
      tap(loggedIn => {
        console.log("loggedIn:", loggedIn);
        if (!loggedIn) {
          this.isLogin = false;
        } else {
          this.isLogin = true;
        }
      })
    );
  }

  async ngOnInit() {
    let cognitUser;
    try {
      cognitUser = await Auth.currentAuthenticatedUser();
    } catch {}
    if (cognitUser != null) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    console.log(this.isLogin);
  }

  disableMenu(): void {
    this.isActive = !this.isActive;
  }

  logout() {
    this.auth.signOut();
  }
}
