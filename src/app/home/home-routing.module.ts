import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProgramDetailsComponent } from "../programs/program-details/program-details.component";
import { ProgramsComponent } from "../programs/programs.component";
import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "",
    component: HomePage
  },
  {
    path: "programs",
    component: ProgramsComponent
  },
  {
    path: "programDetails",
    component: ProgramDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
