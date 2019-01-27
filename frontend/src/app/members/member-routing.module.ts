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
  { path: 'addCircle', loadChildren: './addCircle/addCircle.module#AddCirclePageModule' },
  { path: 'success', loadChildren: './success/success.module#SuccessPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'event', loadChildren: './event/event.module#EventPageModule' },
  { path: 'circles', loadChildren: './circles/circles.module#CirclesPageModule' },
  { path: 'circle', loadChildren: './circle/circle.module#CirclePageModule' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {}
