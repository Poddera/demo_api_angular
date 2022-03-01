import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule],
})
export class AppRouterModule {}
