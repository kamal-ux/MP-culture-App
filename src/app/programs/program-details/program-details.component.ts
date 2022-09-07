import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiServiceService } from "src/app/service/api-service.service";
import { StoreService } from "src/app/service/store.service";
import { environment } from "src/environments/environment";
@Component({
  selector: "app-program-details",
  templateUrl: "./program-details.component.html",
  styleUrls: ["./program-details.component.scss"]
})
export class ProgramDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private apiService: ApiServiceService,
    private storeService: StoreService
  ) {}
  programDetails: any;
  ProgramId = "";
  mediaUrl = environment.mediaUrl;
  isLoggedIn: boolean = true;
  slideOptsOne = { initialSlide: 0, slidesPerView: 1, autoplay: true, loop: true };
  allRatingData: any[] = [];
  ngOnInit() {
    this.storeService.getIsLoggedIn().subscribe((res: any) => {
      this.isLoggedIn = res;
    });
    this.programDetails = this.router?.getCurrentNavigation()?.extras?.state;
    console.log("details", this.programDetails);
    const { ProgramId = "" } = this.programDetails;
    this.ProgramId = ProgramId;
    this.subscription();
  }
  public subscription(): void {
    this.getAllRating(this.ProgramId);
    this.storeService.getRatingData().subscribe((res: any) => {
      if (res) {
        console.log("rating data", res);
        this.getAllRating(this.ProgramId);
        this.storeService.setRatingData(false);
      }
    });
  }

  public getAllRating(ProgramId) {
    const obj = { ProgramId: ProgramId, Count: 10 };
    this.apiService.loadProgramRating(obj).subscribe((res: any) => {
      console.log("program review details", res);
      this.allRatingData = res;
      if (this.allRatingData && this.allRatingData.length) {
        this.allRatingData.map((ratingData) => {
          const date1: any = new Date(ratingData.CreatedOn);
          const date2: any = new Date();
          const diffTime = Math.abs(date2 - date1);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          console.log(diffDays + " days");
          ratingData.diffDays = diffDays;
          ratingData.diffTime = diffTime;
        });
      }
    });
  }

  goToRateProgram(): void {
    this.router.navigate(["tabs/home/programDetails/rating"], {
      state: this.programDetails
    });
  }

  ionViewWillEnter() {}
}
