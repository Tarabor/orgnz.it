import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreaEventoPage } from '../crea-evento/crea-evento';
import { SuccessPage } from '../success/success';
import { CreaCechiaPage } from '../crea-cechia/crea-cechia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToCreaEvento(params){
    if (!params) params = {};
    this.navCtrl.push(CreaEventoPage);
  }goToSuccess(params){
    if (!params) params = {};
    this.navCtrl.push(SuccessPage);
  }goToCreaCechia(params){
    if (!params) params = {};
    this.navCtrl.push(CreaCechiaPage);
  }
}
