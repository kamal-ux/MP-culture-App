import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArtistSignupComponent } from "./artist-signup/artist-signup.component";
import { AudienceRegistrationComponent } from "./audience-registration/audience-registration.component";
import { AudienceRegistration2Component } from "./audience-registration2/audience-registration2.component";
import { LoginComponent } from "./login/login.component";
import { OtpComponent } from "./otp/otp.component";
import { SignupStep2Component } from "./signup-step2/signup-step2.component";

import { SignupPage } from "./signup.page";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupPage
  },
  {
    path: "signup/artistSignup",
    component: ArtistSignupComponent
  },
  {
    path: "audience",
    component: AudienceRegistrationComponent
  },
  {
    path: "audience/otp",
    component: OtpComponent
  },
  {
    path: "signup/audienceSignup2",
    component: AudienceRegistration2Component
  },
  {
    path: "signup2",
    component: SignupStep2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupPageRoutingModule {}
