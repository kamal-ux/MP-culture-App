import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import { ApiServiceService } from "../service/api-service.service";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { StoreService } from "../service/store.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  clientReady: boolean;
  landingPageClientReady: boolean;
  upcomingPrograms: any[] = [];
  todaysPrograms: any[] = [];
  pastPrograms: any[] = [];
  monthlyPrograms: any[] = [];
  landingPageData: any;
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
  slideOptsOne = { initialSlide: 0, slidesPerView: 1, autoplay: true, loop: true };
  scrollAmount = 4;
  landingImages: any;
  mediaUrl: string = environment.mediaUrl;
  isReadMore = true;
  isReadMorePara = true;
  constructor(
    private apiService: ApiServiceService,
    private router: Router,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {}

  ionViewWillEnter(): void {
    this.getStoreData();
    this.apiService.landingPageClientState().subscribe((ready) => {
      if (ready) {
        this.landingPageClientReady = true;
        this.loadLandingData();
      }
    });
    this.apiService.programClientState().subscribe((ready) => {
      if (ready) {
        this.clientReady = true;
        this.subscription();
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
      this.pastPrograms = res;
    });
    this.apiService.loadTodaysProgram().subscribe((res: any) => {
      console.log("todays program", res);
      this.todaysPrograms = res;
    });
    // loadMonthlyProgram;
    this.apiService.loadMonthlyProgram().subscribe((res: any) => {
      console.log("monthly program", res);
      this.monthlyPrograms = res;
    });
  }

  public getStoreData() {
    const {
      upcomingProgramsData = [],
      pastProgramsData = [],
      todaysProgramsData = [],
      monthlyProgramsData = []
    } = this.storeService;
    this.upcomingPrograms = upcomingProgramsData;
    this.pastPrograms = pastProgramsData;
    this.todaysPrograms = todaysProgramsData;
    this.monthlyPrograms = monthlyProgramsData;
  }

  public loadLandingData(): void {
    this.apiService.loadLandingPageContent().subscribe((res: any) => {
      console.log("landing page content", res);
      this.landingPageData = res;
      this.landingImages = this.landingPageData[0].HomeSliderImage;
    });
  }

  viewAllUpcomingProgram() {
    this.router.navigate(["tabs/home/programs", { param: "upcoming programs" }]);
  }
  viewProgramDetails(programDetails: any) {
    this.router.navigate(["tabs/home/programDetails"], {
      state: programDetails
    });
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }
  showPara() {
    this.isReadMorePara = !this.isReadMorePara;
  }
}
