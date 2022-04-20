import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routes/app-routing.module";
import { AuthModule } from "./components/auth/auth.module";
import { HomeModule } from "./components/home/home.module";
import { ApiServicesModule } from "./components/api-services/api-services.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    HomeModule,
    ApiServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
