import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Auth } from "aws-amplify";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateApplicantUserComponent implements OnInit {
  username: string;
  password: string;
  check: boolean;
  message: string;
  email: string;
  code: string;
  phone: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.check = false;
  }

  create() {
    this.message = "";
    if (this.check == false) {
      this.message = "利用規約に同意してください。";
      this.router.navigate(["/auth/create"]);
    } else {
      console.log("12345");
      Auth.signUp({
        username: this.username,
        password: this.password,
        attributes: {
          email: this.email, // optional
          //phone_number: this.phone_number, // optional - E.164 number convention
          // other custom attributes
          "custom:user_role": "applicant",
          "custom:phone_number": this.phone,
          "custom:company_name": "applicant",
          "custom:post_number": "1234567",
          "custom:duplicate_flag": "false"
        },
        validationData: [] //optional
      })
        .then(data => this.router.navigate(["/auth/confirm_email/applicant"]))
        .catch(err => {
          if (err.code == "UsernameExistsException") {
            if (this.message !== undefined) {
              this.message = this.message + "そのユーザ名は既に使われいます。";
            } else {
              this.message = "そのユーザ名は既に使われいます。";
            }
          } else {
            if (this.message !== undefined) {
              this.message = this.message + err.code;
            } else {
              this.message = err.code;
            }
          }
        });
    }
  }
}
