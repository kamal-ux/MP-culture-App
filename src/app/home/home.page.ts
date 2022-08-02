import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {
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
  constructor() {}
}
