import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
@Component({
  selector: "app-program-details",
  templateUrl: "./program-details.component.html",
  styleUrls: ["./program-details.component.scss"]
})
export class ProgramDetailsComponent implements OnInit {
  constructor(private router: Router) {}
  programDetails: any;
  mediaUrl = environment.mediaUrl;
  slideOptsOne = { initialSlide: 0, slidesPerView: 1, autoplay: true, loop: true };

  ngOnInit() {
    this.programDetails = this.router?.getCurrentNavigation()?.extras?.state;
    console.log("details", this.programDetails);
  }

  ionViewWillEnter() {}
}
