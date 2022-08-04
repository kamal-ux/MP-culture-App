import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "landing",
    pathMatch: "full"
  },
  {
    path: "signup",
    loadChildren: () => import("./signup/signup.module").then((m) => m.SignupPageModule)
  },
  {
    path: "tabs",
    loadChildren: () => import("./tabs/tabs.module").then((m) => m.TabsPageModule)
  },
  {
    path: "landing",
    loadChildren: () => import("./landing/landing.module").then((m) => m.LandingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
