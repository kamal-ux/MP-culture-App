import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import { ApiServiceService } from "../service/api-service.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  clientReady: boolean;
  @ViewChild("slider", { static: false }) slideWithNav: IonSlides;
  @ViewChild("registerSlider", { static: false })
  slideOpts = {
    initialSlide: 0,
    // speed: 400,
    slidesPerView: 1.6,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true
  };
  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.programClientState().subscribe((ready) => {
      if (ready) {
        this.clientReady = true;
        this.subscription();
      }
    });
  }

  subscription(): void {
    this.apiService.loadUpcomingProgram().subscribe((res: any) => {
      console.log("upcoming program", res);
    });
    this.apiService.loadPastProgram().subscribe((res: any) => {
      console.log("past program", res);
    });
    this.apiService.loadTodaysProgram().subscribe((res: any) => {
      console.log("todays program", res);
    });
  }
}
