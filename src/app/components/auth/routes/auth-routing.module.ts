import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../components/auth.component';

const routes: Routes = [{ path: 'login', component: AuthComponent }];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
