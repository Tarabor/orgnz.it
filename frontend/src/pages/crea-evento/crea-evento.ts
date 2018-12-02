import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuccessPage } from '../success/success';

@Component({
  selector: 'page-crea-evento',
  templateUrl: 'crea-evento.html'
})
export class CreaEventoPage {

  constructor(public navCtrl: NavController) {
  }
  goToSuccess(params){
    if (!params) params = {};
    this.navCtrl.push(SuccessPage);
  }
}
