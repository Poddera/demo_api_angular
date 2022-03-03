import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.initForm();
  }

  ngOnInit(): void {}

  /**
   * Navigate to the user home page or display an error
   * @author cristian 20220303
   */
  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe({
        next: (username: string) => {
          this.router.navigate(['home', username]);
        },
        error: (error: HttpErrorResponse) => {
          console.error(error);
          this.showErrorMessage('The providen credentials are not correct');
        },
      });
    } else {
      this.showErrorMessage('Please ensure that all the fields are filled');
    }
  }

  /**
   * Displays a snackBar with a custom message
   * @author cristian 20220303
   * @param message The message to display
   */
  private showErrorMessage(message: string) {
    this.snackBar.open(message, 'Close');
  }

  /**
   * Initializes the form to login
   * @author cristian 20220303
   * @returns The login form initialized
   */
  private initForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
