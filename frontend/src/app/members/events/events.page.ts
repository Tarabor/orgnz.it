import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-events',
    templateUrl: './events.page.html',
    styleUrls: ['./events.page.scss'],
  })
export class EventsPage {

  constructor(public navCtrl: NavController) {
  }

  goToEvent() {
    this.navCtrl.navigateForward('/members/event');
  }

}
