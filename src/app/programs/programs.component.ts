import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiServiceService } from "../service/api-service.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-programs",
  templateUrl: "./programs.component.html",
  styleUrls: ["./programs.component.scss"]
})
export class ProgramsComponent implements OnInit {
  public clientReady: boolean;
  public livePrograms: any;
  public upcomingPrograms: any;
  public pastPrograms: any;
  public todayPrograms: any;
  public paramString: any = "today's programs";
  public mediaUrl = environment.mediaUrl;
  public isReadMorePara = true;
  public isReadMore = true;
  public isMorePara = true;
  slideOptsOne = { initialSlide: 0, slidesPerView: 1, autoplay: true, loop: true };

  constructor(
    public activeRoute: ActivatedRoute,
    private apiService: ApiServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    const params = this.activeRoute.snapshot.paramMap.get("param");
    this.apiService.programClientState().subscribe((ready) => {
      if (ready) {
        this.clientReady = true;
        this.subscription(params);
      }
    });
  }
  ionViewWillEnter() {
    // const params = this.activeRoute.snapshot.paramMap.get("param");
    // this.apiService.programClientState().subscribe((ready) => {
    //   if (ready) {
    //     this.clientReady = true;
    //     this.subscription(params);
    //   }
    // });
  }

  subscription(params?: string): void {
    params == "live now" &&
      this.apiService.loadLiveProgram().subscribe((res: any) => {
        this.livePrograms = res;
        console.log("live program", this.livePrograms);
      });
    params == "upcoming programs" &&
      this.apiService.loadUpcomingProgram().subscribe((res: any) => {
        this.upcomingPrograms = res;
        console.log("upcoming program", this.upcomingPrograms);
      });
    params == "archive programs" &&
      this.apiService.loadPastProgram().subscribe((res: any) => {
        console.log("past program", res);
        this.pastPrograms = res;
      });
    params == "today's programs" &&
      this.apiService.loadTodaysProgram().subscribe((res: any) => {
        this.todayPrograms = res;
        console.log("todays program", res);
      });
  }

  viewAllUpcomingProgram() {
    this.router.navigate(["tabs/home/programs", { param: "upcoming" }]);
  }
  viewProgramDetails(programDetails: any, today?: any) {
    programDetails.today = today ? today : false;
    this.router.navigate(["tabs/home/programDetails"], {
      state: { ...programDetails, isArchive: !!this.pastPrograms }
    });
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }
  showPara() {
    this.isReadMorePara = !this.isReadMorePara;
  }
  showMorePara() {
    this.isMorePara = !this.isMorePara;
  }
}
