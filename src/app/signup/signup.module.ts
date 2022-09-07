import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonDatetimeButton, IonicModule } from "@ionic/angular";

import { SignupPageRoutingModule } from "./signup-routing.module";

import { SignupPage } from "./signup.page";
import { LoginComponent } from "./login/login.component";
import { AudienceRegistrationComponent } from "./audience-registration/audience-registration.component";
import { SignupStep2Component } from "./signup-step2/signup-step2.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ArtistSignupComponent } from "./artist-signup/artist-signup.component";
import { AudienceRegistration2Component } from "./audience-registration2/audience-registration2.component";
import { OtpComponent } from "./otp/otp.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    SignupPage,
    LoginComponent,
    AudienceRegistrationComponent,
    SignupStep2Component,
    ArtistSignupComponent,
    AudienceRegistration2Component,
    OtpComponent
  ],
  providers: [AudienceRegistrationComponent]
})
export class SignupPageModule {}
