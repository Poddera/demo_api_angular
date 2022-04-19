import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthRoutingModule } from './routes/auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './components/auth.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [LoginComponent, AuthComponent],
    exports: [AuthComponent],
    providers: [],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatSnackBarModule,
    ],
})
export class AuthModule {}
