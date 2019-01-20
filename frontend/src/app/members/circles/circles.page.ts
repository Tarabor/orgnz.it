import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-circles",
  templateUrl: "./circles.page.html",
  styleUrls: ["./circles.page.scss"]
})
export class CirclesPage {
  constructor(public navCtrl: NavController) {}

  goToCircle() {
    this.navCtrl.navigateForward("/members/circle");
  }
}
