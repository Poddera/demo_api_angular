import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, tap, Observable, throwError } from "rxjs";
import { URLS } from "src/environments/environment";
import { ContactFormDTO } from "../components/contact-form/dto";

@Injectable({ providedIn: "root" })
export class ApiServicesService {
  constructor(private httpClient: HttpClient) {}

  getToken(): Observable<string> {
    return this.httpClient
      .post(
        `${URLS.BASE_URL_JWT}/api/portal/v1/extapp`,
        {
          given: "xxx",
          username: "ndubikin@gmail.com",
          password: "demo123",
        },
        {
          observe: "response",
        },
      )
      .pipe(
        map((res: any) => res.body.access_token),
        catchError(this.handleError),
      );
  }

  sendContactForm(
    contactFormDTO: ContactFormDTO,
    token: string,
  ): Observable<Object> {
    return this.httpClient
      .post(`${URLS.BASE_URL_JWT}/rest/contact`, contactFormDTO, {
        headers: new HttpHeaders().set("Authorization", "Bearer " + token),
        observe: "response",
        responseType: "text",
      })
      .pipe(
        tap(() => {
          console.log("done");
        }),
        catchError(this.handleError),
      );
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
