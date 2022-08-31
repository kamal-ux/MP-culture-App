import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { LocalStorageService } from "./service/local-storage.service";
import { StatusBar, Style } from "@capacitor/status-bar";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  public appMenu = [
    {
      title: "कार्यक्रमों का सजीव प्रसारण",
      value: "live-program",
      icon: "play-outline"
    },
    {
      title: "आज के कार्यक्रम",
      value: "today-program",
      icon: "flash-outline"
    },
    {
      title: "आगामी कार्यक्रम",
      value: "upcoming-program",

      icon: "flash-outline"
    },
    {
      title: "संगृहीत कार्यक्रम",
      value: "archive-program",

      icon: "documents-outline"
    },
    {
      title: "प्रवेशिका",
      value: "register",

      icon: "person-outline"
    },
    {
      title: "कला विधाये",
      value: "category",

      icon: "grid-outline"
    },
    {
      title: "सेटिंग",
      value: "setting",

      icon: "settings-outline"
    },
    {
      title: "लॉग इन",
      value: "login",

      icon: "power-outline"
    }
  ];
  isLoggedIn: boolean;
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private menuController: MenuController
  ) {
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setStyle({ style: Style.Dark });
    StatusBar.setBackgroundColor({ color: "#e42f08" });
  }

  ngOnInit(): void {
    this.localStorageService.init();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  async ionViewWillEnter() {
    this.isLoggedIn =
      (await !!this.localStorageService.get("audienceData")) ||
      (await !!this.localStorageService.get("audienceData"));
  }

  public menuToggle(menu: string): void {
    switch (menu) {
      case "Logout":
        this.localStorageService.clearAll();
        this.router.navigateByUrl("", { replaceUrl: true });
        break;
      case "live-program":
        this.router.navigate(["tabs/home/programs", { param: "live now" }]);
        break;
      case "today-program":
        this.router.navigate(["tabs/home/programs", { param: "today's programs" }]);
        break;
      case "upcoming-program":
        this.router.navigate(["tabs/home/programs", { param: "upcoming programs" }]);
        break;
      case "archive-program":
        this.router.navigate(["tabs/home/programs", { param: "archive programs" }]);
        break;
      case "register":
        this.router.navigate(["../signup/signup"]);
        break;
      case "category":
        this.router.navigate(["tabs/category"]);
        break;
      case "setting":
        this.router.navigate(["tabs/home/settings"]);
        break;
      case "login":
        this.router.navigate(["../signup"]);
        break;
      default:
        break;
    }
  }
}
