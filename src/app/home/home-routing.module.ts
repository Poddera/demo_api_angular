import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { InvitedHomeComponent } from './invited-home/invited-home.component';
import { LoggedHomeComponent } from './logged-home/logged-home.component';

const routes: Routes = [
  { path: '', component: InvitedHomeComponent },
  {
    path: 'home/:username',
    component: LoggedHomeComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
