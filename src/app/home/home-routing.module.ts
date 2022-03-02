import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitedHomeComponent } from './invited-home/invited-home.component';
import { LoggedHomeComponent } from './logged-home/logged-home.component';

const routes: Routes = [
  { path: '', component: InvitedHomeComponent },
  { path: 'home', component: LoggedHomeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
