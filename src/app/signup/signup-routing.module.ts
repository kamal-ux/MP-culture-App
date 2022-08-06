import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AudienceRegistrationComponent } from "./audience-registration/audience-registration.component";
import { LoginComponent } from "./login/login.component";
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
    path: "audience",
    component: AudienceRegistrationComponent
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
