import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from "@angular/router";
import { AuthenticationService } from "./../../services/authentication.service";

import { IonicModule } from "@ionic/angular";

import { DashboardPage } from "./dashboard.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    RouterModule.forChild([
      {
        path: "",
        component: DashboardPage
      }
    ])
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {
  content: any;

  constructor(private authService: AuthenticationService) {}

  logout() {
    this.authService.logout().then(() => console.log("Logged-out"));
  }
}
