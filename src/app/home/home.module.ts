import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitedHomeComponent } from './invited-home/invited-home.component';
import { LoggedHomeComponent } from './logged-home/logged-home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [InvitedHomeComponent, LoggedHomeComponent],
  exports: [InvitedHomeComponent, LoggedHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
  ],
})
export class HomeModule {}
