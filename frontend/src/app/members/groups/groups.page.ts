import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss']
})
export class GroupsPage implements OnInit {

  public groups = [];

  constructor(public navCtrl: NavController,
              public groupsService: GroupsService) {}

  ngOnInit() {
    this.groupsService.getAllGroups().subscribe(resp => {
      this.groups = resp;
      console.log(this.groups);
    });
  }

  goToGroup(id: number) { // dobbiamo utilizzare un id per atterrare nella pagina di dettaglio del gruppo
    this.navCtrl.navigateForward('/members/group');
  }

}
