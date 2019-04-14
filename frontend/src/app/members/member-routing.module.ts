import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardPageModule'
  },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'addEvent', loadChildren: './addEvent/addEvent.module#AddEventPageModule' },
  { path: 'addGroup', loadChildren: './addGroup/addGroup.module#AddGroupPageModule' },
  { path: 'success', loadChildren: './success/success.module#SuccessPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'event', loadChildren: './event/event.module#EventPageModule' },
  { path: 'groups', loadChildren: './groups/groups.module#GroupsPageModule' },
  { path: 'group', loadChildren: './group/group.module#GroupPageModule' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {}
