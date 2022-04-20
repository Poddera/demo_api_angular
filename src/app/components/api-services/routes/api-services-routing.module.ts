import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../../auth/guards/auth.guard";
import { ApiServicesComponent } from "../components/api-services.component";
import { ContactFormComponent } from "../components/contact-form/contact-form.component";

const routes: Routes = [
  {
    path: "service",
    component: ApiServicesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "service/contact-form",
    component: ContactFormComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ApiServicesRoutingModule {}
