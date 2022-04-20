import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ApiServicesService } from "../../services/api-services.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private apiServicesService: ApiServicesService,
  ) {
    this.contactForm = this.initForm();
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.apiServicesService.getToken().subscribe({
        next: (token) => {
          this.apiServicesService
            .sendContactForm(this.contactForm.value, token)
            .subscribe({
              next: () => this.showErrorMessage("The form has been sent"),
              error: () => this.showErrorMessage("The form cannot be sent"),
            });
        },
        error: () => this.showErrorMessage("Cannot get token"),
      });
    } else {
      this.showErrorMessage("The contact form is invalid");
    }
  }

  /**
   * Displays a snackBar with a custom message
   * @author cristian 20220420
   * @param message The message to display
   */
  private showErrorMessage(message: string) {
    this.snackBar.open(message, "Close");
  }

  /**
   * Initializes the contact form
   * @author cristian 20220420
   * @returns The login form initialized
   */
  private initForm(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
    });
  }
}
