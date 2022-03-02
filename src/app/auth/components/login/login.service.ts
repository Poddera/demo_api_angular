import {
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable, tap } from 'rxjs';
import { URLS } from 'src/environments/environment';
import { LoginDTO } from './dto';

@Injectable()
export class LoginService {
  loggedIn: boolean;

  constructor(private httpClient: HttpClient) {
    this.loggedIn = localStorage.getItem('access_token') !== '' ? true : false;
  }

  login(loginDTO: LoginDTO): any {
    return this.httpClient
      .post(`${URLS.BASE_URL_JWT}/api/portal/v1`, loginDTO)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.access_token);
        this.loggedIn = true;
      });
  }

  logout() {
    return this.httpClient
      .post(`${URLS.BASE_URL_JWT}/api/portal/v1/logout`, {})
      .subscribe((res: any) => {
        localStorage.removeItem('access_token');
        this.loggedIn = false;
      });
  }
}
