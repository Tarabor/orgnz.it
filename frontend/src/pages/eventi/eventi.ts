import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventoPage } from '../evento/evento';

@Component({
  selector: 'page-eventi',
  templateUrl: 'eventi.html'
})
export class EventiPage {

  constructor(public navCtrl: NavController) {
  }
  goToEvento(params){
    if (!params) params = {};
    this.navCtrl.push(EventoPage);
  }
}
