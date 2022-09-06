import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiServiceService } from "src/app/service/api-service.service";
import { environment } from "src/environments/environment";
@Component({
  selector: "app-program-details",
  templateUrl: "./program-details.component.html",
  styleUrls: ["./program-details.component.scss"]
})
export class ProgramDetailsComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiServiceService) {}
  programDetails: any;
  mediaUrl = environment.mediaUrl;
  slideOptsOne = { initialSlide: 0, slidesPerView: 1, autoplay: true, loop: true };

  ngOnInit() {
    this.programDetails = this.router?.getCurrentNavigation()?.extras?.state;
    console.log("details", this.programDetails);
    const { ProgramId = "" } = this.programDetails;
    this.subscription(ProgramId);
  }
  public subscription(ProgramId): void {
    const obj = { ProgramId: ProgramId, Count: 10 };
    this.apiService.loadProgramRating(obj).subscribe((res: any) => {
      console.log("program review details", res);
    });
  }

  ionViewWillEnter() {}
}
