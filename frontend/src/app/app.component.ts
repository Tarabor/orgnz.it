import { Router } from "@angular/router";
import { AuthenticationService } from "./services/authentication.service";
import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public appPages = [
    {
      title: "Home",
      url: "/members/dashboard",
      icon: "home"
    },
    {
      title: "List",
      url: "/members/list",
      icon: "list"
    },
    {
      title: "Events",
      url: "/members/events",
      icon: "calendar"
    },
    {
      title: "Circles",
      url: "/members/circles",
      icon: "people"
    },
    {
      title: "Logout",
      url: "/members/logout",
      icon: "power"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(["members", "dashboard"]);
        } else {
          this.router.navigate(["login"]);
        }
      });
    });
  }
}
