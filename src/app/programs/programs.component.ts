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
  clientReady: boolean;
  upcomingPrograms: any;
  pastPrograms: any;
  todayPrograms: any;
  paramString: any = "today's";
  mediaUrl = environment.mediaUrl;
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
    params == "upcoming" &&
      this.apiService.loadUpcomingProgram().subscribe((res: any) => {
        this.upcomingPrograms = res;
        console.log("upcoming program", this.upcomingPrograms);
      });
    params == "archive" &&
      this.apiService.loadPastProgram().subscribe((res: any) => {
        console.log("past program", res);
        this.pastPrograms = res;
      });
    params == "today's" &&
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
    alert("hey");
    this.router.navigate(["tabs/home/programDetails"], {
      state: programDetails
    });
  }
}
