import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonDatetimeButton, IonicModule } from "@ionic/angular";

import { SignupPageRoutingModule } from "./signup-routing.module";

import { SignupPage } from "./signup.page";
import { LoginComponent } from "./login/login.component";
import { AudienceRegistrationComponent } from "./audience-registration/audience-registration.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SignupPageRoutingModule, ReactiveFormsModule],
  declarations: [SignupPage, LoginComponent, AudienceRegistrationComponent]
})
export class SignupPageModule {}
