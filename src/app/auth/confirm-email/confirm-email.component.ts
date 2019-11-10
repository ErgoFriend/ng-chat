import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

import { Auth } from "aws-amplify";

@Component({
  selector: "app-confirm-email",
  templateUrl: "./confirm-email.component.html",
  styleUrls: ["./confirm-email.component.css"]
})
export class ConfirmEmailComponent implements OnInit {
  username: string;
  code: string;
  message: string;
  role: string;
  constructor(private router: Router, route: ActivatedRoute) {
    this.role = route.snapshot.params.role;
  }

  ngOnInit() {
    console.log(this.role);
    console.log(this.username);
    const cognitUser = Auth.currentAuthenticatedUser();
    console.log(cognitUser);
  }
  confirm() {
    console.log();
    // After retrieving the confirmation code from the user
    Auth.confirmSignUp(this.username, this.code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
    })
      .then(data => {
        const cognitUser = Auth.currentAuthenticatedUser();
        console.log(cognitUser);
        console.log(data);
        console.log(this.role);
        if (this.role == "company") {
          this.router.navigate(["/auth/company"]);
        } else {
          this.router.navigate(["/auth"]);
        }
      })
      .catch(err => {
        this.message = "ユーザ名とコードが異なります。";
        console.log(err);
      });
  }

  resend() {
    if (this.username == null) {
      this.message = "ユーザ名を入れてください。";
    } else {
      Auth.resendSignUp(this.username)
        .then(() => {
          console.log("code resent successfully");
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
}
