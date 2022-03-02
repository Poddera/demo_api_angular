import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from 'src/environments/environment';
import { LoginDTO } from '../auth/login/dto';

@Injectable({ providedIn: 'root' })
export class LoginService {
  loggedIn: boolean;

  constructor(private httpClient: HttpClient) {
    this.loggedIn = false;
  }

  login(loginDTO: LoginDTO): Observable<any> {
    return this.httpClient
      .post(`${URLS.BASE_URL_JWT}/api/portal/v1`, loginDTO, {
        observe: 'response',
      })
      .pipe((res: any) => {
        if (res.status == 200) {
          localStorage.setItem('access_token', res.body.access_token);
          this.loggedIn = true;
        }
        return res;
      });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.loggedIn = false;
  }
}
