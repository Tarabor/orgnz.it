import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CirclePage } from '../circle/circle';

@Component({
  selector: 'page-cerchie',
  templateUrl: 'cerchie.html'
})
export class CerchiePage {

  constructor(public navCtrl: NavController) {
  }
  goToCircle(params){
    if (!params) params = {};
    this.navCtrl.push(CirclePage);
  }
}
