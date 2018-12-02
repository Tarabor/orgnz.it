import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CreaEventoPage } from '../pages/crea-evento/crea-evento';
import { SuccessPage } from '../pages/success/success';
import { CreaCechiaPage } from '../pages/crea-cechia/crea-cechia';
import { EventiPage } from '../pages/eventi/eventi';
import { EventoPage } from '../pages/evento/evento';
import { CerchiePage } from '../pages/cerchie/cerchie';
import { CirclePage } from '../pages/circle/circle';


import { LoginPage } from '../pages/login/login';

import { AuthService } from '../services/auth.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToCreaEvento(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CreaEventoPage);
  }goToSuccess(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SuccessPage);
  }goToCreaCechia(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CreaCechiaPage);
  }goToEventi(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EventiPage);
  }goToEvento(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EventoPage);
  }goToCerchie(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CerchiePage);
  }goToCircle(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CirclePage);
  }
}
