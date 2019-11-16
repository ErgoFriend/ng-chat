import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
// 追加
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth/auth.guard";
import {RoomDetailComponent} from "./room-detail/room-detail.component";
import {RoomInviteListComponent} from "./room/invite/list/list.component";
import {RoomHomeComponent} from "./room-home/room-home.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {AdminLayoutCompanyComponent} from "./layouts/admin-company-layout/admin-company-layout.component";
import {RoomMainComponent} from "./layouts/room-layout/room-layout.component";
import {DefaultComponent} from "./layouts/default-layout/default-layout.component";

import {UserComponent} from "./applicantAdmin/user/user.component";

import {CompanyComponent} from "./companyAdmin/user/user.component";
import {TableComponent} from "./companyAdmin/table/table.component";
import {EditComponent} from "./companyAdmin/edit/edit.component";
import {UserlistComponent} from "./companyAdmin/userlist/userlist.component";
import {BillsComponent} from "./companyAdmin/bills/bills.component";

import {IndexComponent} from "./index/index/index.component";
import {DetailComponent} from "./index/detail/detail.component";
import {LandingPageComponent} from "./index/landingpage/landingpage.component";

// Auth
import {AuthLayoutComponent} from "./auth/components/layout/layout.component";
import {CreateApplicantUserComponent} from "./auth/components/applicant/create/create.component";
import {LoginApplicantUserComponent} from "./auth/components/applicant/login/login.component";
import {CreateCompanyUserComponent} from "./auth/components/company/create/create.component";
import {LoginCompanyUserComponent} from "./auth/components/company/login/login.component";
import {ConfirmEmailComponent} from "./auth/confirm-email/confirm-email.component";

const routes: Routes = [
  //  { path: "", redirectTo: "home", pathMatch: "full", canActivate: [AuthGuard] },
  // {path: "home", component: RoomListComponent, canActivate: [AuthGuard]},
  {
    path: "messenger",
    component: RoomMainComponent,
    children: [
      {
        path: "rooms/:id",
        component: RoomDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "invitedrooms",
        component: RoomInviteListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "home",
        component: RoomHomeComponent,
        canActivate: [AuthGuard]
      }
    ]
  },

  {
    path: "applicantAdmin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "profile",
        component: UserComponent
      }
    ]
  },
  {
    path: "companyAdmin",
    component: AdminLayoutCompanyComponent,
    children: [
      {
        path: "profile",
        component: CompanyComponent
      },
      {
        path: "messenger",
        component: RoomMainComponent
      },
      {
        path: "articlelist",
        component: TableComponent
      },
      {
        path: "userlist",
        component: UserlistComponent
      },
      {
        path: "edit",
        component: EditComponent
      },
      {
        path: "bills",
        component: BillsComponent
      }
    ]
  },
  {
    path: "auth",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: AuthLayoutComponent,
        children: [
          {
            path: "",
            component: LoginApplicantUserComponent
          },
          {
            path: "create",
            component: CreateApplicantUserComponent
          },
          {
            path: "confirm_email/:role",
            component: ConfirmEmailComponent
          }
        ]
      },
      {
        path: "company",
        component: AuthLayoutComponent,
        children: [
          {
            path: "",
            component: LoginCompanyUserComponent
          },
          {
            path: "create",
            component: CreateCompanyUserComponent
          }
        ]
      }
    ]
  },
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: IndexComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "signup",
        component: LoginComponent
      },
      {
        path: "detail",
        component: DetailComponent
      },
      {
        path: "landingpage",
        component: LandingPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
