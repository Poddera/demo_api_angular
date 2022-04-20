import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApiServicesComponent } from "./components/api-services.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { ApiServicesRoutingModule } from "./routes/api-services-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [ApiServicesComponent, ContactFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ApiServicesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
})
export class ApiServicesModule {}
