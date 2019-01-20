import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-add-event',
    templateUrl: './addEvent.page.html',
    styleUrls: ['./addEvent.page.scss'],
  })
export class AddEventPage {

  constructor(private navCtrl: NavController) {
  }

  goToSuccess() {
    this.navCtrl.navigateForward('/members/success');
  }
}
