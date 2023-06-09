import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomePage } from "./home.page";
import { SwiperModule } from "swiper/angular";
import { HomePageRoutingModule } from "./home-routing.module";
import { ProgramsComponent } from "../programs/programs.component";
import { ProgramDetailsComponent } from "../programs/program-details/program-details.component";
import { SettingsComponent } from "../settings/settings.component";
import { RatingComponent } from "../programs/rating/rating.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePage,
    ProgramsComponent,
    ProgramDetailsComponent,
    SettingsComponent,
    RatingComponent
  ]
})
export class HomePageModule {}
