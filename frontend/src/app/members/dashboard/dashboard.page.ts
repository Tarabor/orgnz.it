import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  language: string = this.translate.currentLang;

  constructor(private authService: AuthenticationService,
    private navCtrl: NavController, private translate: TranslateService) {
      this.translate.use('ita');
    }

  ngOnInit() {
  }

  goToAddEvent() {
    this.navCtrl.navigateForward('/members/addEvent');
  }

  goToAddCircle() {
    this.navCtrl.navigateForward('/members/addCircle');
  }


  languageChange() {  // add this
    this.translate.use(this.language);  // add this
  }

  logout() {
    this.authService.logout();
  }

}
