import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular";

import { AppComponent } from "./app.component";
import { NavComponent } from "./shared/Messenger/nav/nav.component";
import { RoomListComponent } from "./room-list/room-list.component";
import { RoomDetailComponent } from "./room-detail/room-detail.component";
import { FooterComponent } from "./shared/Messenger/footer/footer.component";
import { LoginComponent } from "./login/login.component";

import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth.guard";
import { RoomCreateComponent } from "./room-create/room-create.component";
import { RoomInviteComponent } from "./room-invite/room-invite.component";
import { RoomJoinComponent } from "./room-join/room-join.component";
import { RoomHomeComponent } from "./room-home/room-home.component";
import { UsersComponent } from "./room/users/users.component";
import { RoomInviteListComponent } from "./room/invite/list/list.component";

import { StoreModule } from "@ngrx/store";
import { showRoomDetailReducer } from "./store/session/session.reducer";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { RoomMainComponent } from "./layouts/room-layout/room-layout.component";
import { DefaultComponent } from "./layouts/default-layout/default-layout.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { SidebarModule } from "./shared/Messenger/sidebar/sidebar.module";
import { FooterModule } from "./shared/Admin/footer/footer.module";
import { NavbarModule } from "./shared/Admin/navbar/navbar.module";
import { NavbarDefaultModule } from "./shared/default/navbar/navbar.module";
import { FooterDefaultModule } from "./shared/default/footer/footer.module";
import { FixedPluginModule } from "./shared/Admin/fixedplugin/fixedplugin.module";
import { HttpClientModule } from "@angular/common/http";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { UserComponent } from "./applicantAdmin/user/user.component";

import { CompanyComponent } from "./companyAdmin/user/user.component";
import { EditComponent } from "./companyAdmin/edit/edit.component";
import { UserlistComponent } from "./companyAdmin/userlist/userlist.component";

import { IndexComponent } from "./index/index/index.component";
import { DetailComponent } from "./index/detail/detail.component";
import { NavigationBarComponent } from './shared/default/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    RoomMainComponent,
    DefaultComponent,
    AppComponent,
    NavComponent,
    RoomListComponent,
    RoomDetailComponent,
    FooterComponent,
    LoginComponent,
    RoomCreateComponent,
    RoomInviteComponent,
    RoomJoinComponent,
    RoomHomeComponent,
    UsersComponent,
    RoomInviteListComponent,
    UserComponent,
    CompanyComponent,
    EditComponent,
    UserlistComponent,
    IndexComponent,
    DetailComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AmplifyAngularModule,
    StoreModule.forRoot({ showRoomDetail: showRoomDetailReducer }),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    SidebarModule,
    NavbarModule,
    NavbarDefaultModule,
    FooterDefaultModule,
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [AmplifyService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
