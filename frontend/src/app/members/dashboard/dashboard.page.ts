import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Nav, NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private authService: AuthenticationService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToAddEvent() {
    this.navCtrl.navigateForward('/members/addEvent');
  }

  goToAddCircle() {
    this.navCtrl.navigateForward('/members/addCircle');
  }
  
  logout() {
    this.authService.logout();
  }

}
