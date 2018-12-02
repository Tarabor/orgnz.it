import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventiPage } from '../pages/eventi/eventi';
import { CerchiePage } from '../pages/cerchie/cerchie';
import { LoginPage } from '../pages/login/login';
import { CreaEventoPage } from '../pages/crea-evento/crea-evento';
import { CreaCechiaPage } from '../pages/crea-cechia/crea-cechia';
import { SuccessPage } from '../pages/success/success';
import { EventoPage } from '../pages/evento/evento';
import { CirclePage } from '../pages/circle/circle';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';

import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventiPage,
    CerchiePage,
    LoginPage,
    CreaEventoPage,
    CreaCechiaPage,
    SuccessPage,
    EventoPage,
    CirclePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventiPage,
    CerchiePage,
    LoginPage,
    CreaEventoPage,
    CreaCechiaPage,
    SuccessPage,
    EventoPage,
    CirclePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireAuth
  ]
})
export class AppModule {}