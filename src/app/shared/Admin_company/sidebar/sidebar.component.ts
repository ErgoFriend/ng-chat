import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
         {
           path: "/companyAdmin/profile",
           title: "Company Profile",
           icon: "nc-single-02",
           class: ""
         },
         {
           path: "/companyAdmin/articlelist",
           title: "Article List",
           icon: "nc-bullet-list-67",
           class: ""
         },

         {
           path: "/companyAdmin/userlist",
           title: "UserList",
           icon: "nc-check-2",
           class: ""
         },
         // { path: "/table", title: "Table List", icon: "nc-tile-56", class: "" },
         {
           path: "/messenger",
           title: "Messages",
           icon: "nc-single-copy-04",
           class: ""
         },

         {
           path: "/companyAdmin/bills",
           title: "お支払い",
           icon: "nc-check-2",
           class: ""
         }
       ];

@Component({
  moduleId: module.id,
  selector: "sidebar-company-cmp",
  templateUrl: "sidebar.component.html"
})
export class SidebarCompanyComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
