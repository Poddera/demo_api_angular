import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, tap, Observable, throwError } from "rxjs";
import { URLS } from "src/environments/environment";
import { LoginDTO } from "../components/auth/components/login/dto";

@Injectable({ providedIn: "root" })
export class LoginService {
  loggedIn: boolean;

  constructor(private httpClient: HttpClient) {
    this.loggedIn = false;
  }

  login(loginDTO: LoginDTO): Observable<Object> {
    return this.httpClient
      .post(`${URLS.BASE_URL_JWT}/rest/login`, loginDTO, {
        observe: "response",
        responseType: "text",
      })
      .pipe(
        tap(() => {
          this.loggedIn = true;
        }),
        catchError(this.handleError),
      );
  }

  logout() {
    localStorage.removeItem("access_token");
    this.loggedIn = false;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0)
      return throwError(() => new Error(`An error occurred: ${error.error}`));

    if (error.status === 401)
      return throwError(() => new Error(`Unauthorized: ${error.error}`));

    return throwError(
      () =>
        new Error(
          `Backend returned code ${error.status}, body was: ${error.error} `,
        ),
    );
  }
}
