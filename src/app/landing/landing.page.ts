import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import { ApiServiceService } from "../service/api-service.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.page.html",
  styleUrls: ["./landing.page.scss"],
})
export class LandingPage implements OnInit {
  clientReady: boolean;
  landingPageClientReady: boolean;
  upcomingPrograms: any[] = [];
  todaysPrograms: any[] = [];
  pastPrograms: any[] = [];
  landingPageData: any[] = [];
  mediaUrl: string = "http://mpcd.solyn.in";
  @ViewChild("slider", { static: false }) slideWithNav: IonSlides;
  @ViewChild("registerSlider", { static: false })
  slideOpts = {
    initialSlide: 0,
    // speed: 400,
    slidesPerView: 1.6,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,
  };
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };
  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.programClientState().subscribe((ready) => {
      if (ready) {
        this.clientReady = true;
        this.subscription();
      }
    });

    this.apiService.landingPageClientState().subscribe((ready) => {
      if (ready) {
        this.landingPageClientReady = true;
        this.loadLandingData();
      }
    });
  }

  subscription(): void {
    this.apiService.loadUpcomingProgram().subscribe((res: any) => {
      this.upcomingPrograms = res;
      console.log("upcoming program", this.upcomingPrograms);
    });
    this.apiService.loadPastProgram().subscribe((res: any) => {
      console.log("past program", res);
    });
    this.apiService.loadTodaysProgram().subscribe((res: any) => {
      console.log("todays program", res);
    });
  }

  public loadLandingData(): void {
    this.apiService.loadLandingPageContent().subscribe((res: any) => {
      console.log("landing page content", res);
      this.landingPageData = res;
    });
  }
}
