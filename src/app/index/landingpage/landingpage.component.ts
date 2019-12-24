import { Component, OnInit, QueryList } from "@angular/core";
import Amplify, { Auth, Hub, graphqlOperation, Storage } from "aws-amplify";
import { MyAPIService } from "../../API.my";
import { Router } from "@angular/router";

import {} from "../../API.service";

@Component({
  selector: "landingpage-cmp",
  moduleId: module.id,
  templateUrl: "landingpage.component.html",
  styleUrls: [
    "css/bootstrap.min.css",
    "css/jquery.fancybox.min.css",
    "css/bootstrap-datepicker.css",
    "css/aos.css",
    "css/style.css",
    "fonts/icomoon/style.css",
    "fonts/flaticon/font/flaticon.css",
    "css/jquery-ui.css",
    "css/owl.theme.default.min.css",
    "css/owl.carousel.min.css"
  ]
})
export class LandingPageComponent implements OnInit {
  usernameApplicant: string;
  passwordApplicant: string;
  emailApplicant: string;
  messageApplicant: string;
  checkApplicant: boolean;

  usernameCompany: string;
  passwordCompany: string;
  emailCompany: string;
  messageCompany: string;
  checkCompany: boolean;

  email: string;
  code: string;
  phone: string;
  duplicatecheck:boolean;
  name: string;
  postnumber: string;
  

  constructor(private router: Router) {}
  async ngOnInit() {this.duplicatecheck=false;}

  redirect(id) {
    location.href = "/detail?id=" + id;
  }

  /* createApplicant() {
    this.messageApplicant = "";
    if (this.checkApplicant == false) {
      this.messageApplicant = "利用規約に同意してください。";
      this.router.navigate(["/auth/create"]);
    } else {
      Auth.signUp({
        username: this.usernameApplicant,
        password: this.passwordApplicant,
        attributes: {
          email: this.emailApplicant, // optional
          //phone_number: this.phone_number, // optional - E.164 number convention
          // other custom attributes
          "custom:user_role": "applicant"
        },
        validationData: [] //optional
      })
        .then(data => this.router.navigate(["/auth/confirm_email/applicant"]))
        .catch(err => {
          if (err.code == "UsernameExistsException") {
            if (this.messageApplicant !== undefined) {
              this.messageApplicant =
                this.messageApplicant + "そのユーザ名は既に使われいます。";
            } else {
              this.messageApplicant = "そのユーザ名は既に使われいます。";
            }
          } else {
            if (this.messageApplicant !== undefined) {
              this.messageApplicant =
                this.messageApplicant + "ユーザ名に不備があります。";
            } else {
              this.messageApplicant = "ユーザ名に不備があります。";
            }
          }
        });
    }
  } */

  createCompany() {
    this.messageCompany = "";
    if (this.checkCompany == false) {
      this.messageCompany = "利用規約に同意してください。";
      this.router.navigate(["/auth/create"]);
    } else {
      Auth.signUp({
        username: this.usernameCompany,
        password: this.passwordCompany,
        attributes: {
          email: this.emailCompany, // optional
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
            if (this.messageCompany !== undefined) {
              this.messageCompany =
                this.messageCompany + "そのユーザ名は既に使われいます。";
            } else {
              this.messageCompany = "そのユーザ名は既に使われいます。";
            }
          } else {
            if (this.messageCompany !== undefined) {
              this.messageCompany =
                this.messageCompany + "ユーザ名に不備があります。";
            } else {
              this.messageCompany = "ユーザ名に不備があります。";
            }
          }
        });
    }
  }
}
