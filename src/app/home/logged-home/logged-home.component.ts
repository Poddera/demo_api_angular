import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-logged-home',
  templateUrl: './logged-home.component.html',
  styleUrls: ['./logged-home.component.css'],
})
export class LoggedHomeComponent implements OnInit {
  username: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {
    this.username = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params['username'];
      console.log(params['username']);
    });
  }

  logout() {
    this.loginService.logout();
  }
}
