import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { iFrameLayoutRoutes } from "./iframe-layout.routing";

import { AngularEditorModule } from "@kolkov/angular-editor";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(iFrameLayoutRoutes),
    FormsModule,
    NgbModule,
    AngularEditorModule
  ],
  declarations: []
})
export class iFrameLayoutModule {}
