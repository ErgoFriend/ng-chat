import { Component, OnInit, QueryList } from "@angular/core";
import Amplify, { Auth, Hub, graphqlOperation, Storage } from "aws-amplify";
import { MyAPIService } from "../../API.my";

import { } from "../../API.service";

@Component({
  selector: "landingpage-cmp",
  moduleId: module.id,
  templateUrl: "landingpage.component.html",
  styleUrls: ['css/bootstrap.min.css',
    'css/jquery.fancybox.min.css', 'css/bootstrap-datepicker.css',
    'css/aos.css', 'css/style.css', 'fonts/icomoon/style.css', 'fonts/flaticon/font/flaticon.css',
    'css/jquery-ui.css', 'css/owl.theme.default.min.css', 'css/owl.carousel.min.css'],
})
export class LandingPageComponent implements OnInit {
  async ngOnInit() { }

  redirect(id) {
    location.href = "/detail?id=" + id;
  }
}
