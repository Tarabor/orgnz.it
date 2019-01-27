import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CirclesService } from 'src/app/services/circles.service';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.page.html',
  styleUrls: ['./circles.page.scss']
})
export class CirclesPage implements OnInit {

  public circles = [];

  constructor(public navCtrl: NavController,
              public circlesService: CirclesService) {}

  ngOnInit() {
    this.circlesService.getAllCircles().subscribe(resp => {
      this.circles = resp;
      console.log(this.circles);
    });
  }

  goToCircle(id: number) { // dobbiamo utilizzare un id per atterrare nella pagina di dettaglio della cerchia
    this.navCtrl.navigateForward('/members/circle');
  }

}
