import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Auth } from "aws-amplify";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateCompanyUserComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  code: string;
  message: string;
  check: boolean;
  phone: string;
  name: string;
  postnumber: string;
  duplicatecheck: boolean;
  

  constructor(private router: Router) {}

  ngOnInit() {
    this.check = false;
    this.message = "";
    this.duplicatecheck=false;
  }

  create() {
    this.message = "";
    if (this.check == false) {
      this.message = "利用規約に同意してください。";
      this.router.navigate(["/auth/company/create"]);
    } else {
      Auth.signUp({
        username: this.username,
        password: this.password,
        attributes: {
          email: this.email, // optional
          // other custom attributes
          "custom:user_role": "company",
          "custom:company_name": this.name,
          "custom:post_number": this.postnumber,
          "custom:phone_number": this.phone,
          "custom:duplicate_flag": this.duplicatecheck.toString()
        },
        validationData: [] //optional
      })
        .then(data => {
          this.router.navigate(["/auth/confirm_email/company"]);
        })
        .catch(err => {
          console.log(err);
          if (err.code == "UsernameExistsException") {
            if (this.message !== undefined) {
              this.message = this.message + "そのユーザ名は既に使われいます。";
            } else {
              this.message = "そのユーザ名は既に使われいます。";
            }
          } else {
            if (this.message !== undefined) {
              this.message = this.message + "ユーザ名に不備があります。";
            } else {
              this.message = "ユーザ名に不備があります。";
            }
          }
        });
    }
  }
}
