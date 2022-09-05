import { Component, Renderer2, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { LocalStorageService } from "./service/local-storage.service";
import { StatusBar, Style } from "@capacitor/status-bar";
import { StoreService } from "./service/store.service";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  public appMenu = [];
  public offAppMenu = [
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
      title: "लॉग आउट",
      value: "logout",

      icon: "log-out-outline"
    }
  ];

  public loginAppMenu = [
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
    private menuController: MenuController,
    private renderer: Renderer2,
    private storeService: StoreService
  ) {
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setStyle({ style: Style.Dark });
    StatusBar.setBackgroundColor({ color: "#e42f08" });
  }

  async ngOnInit() {
    await this.localStorageService.init();
    const mode = (await this.localStorageService.get("mode")) || false;
    if (mode) {
      this.renderer.setAttribute(document.body, "color-theme", "dark");
    } else {
      this.renderer.setAttribute(document.body, "color-theme", "light");
    }
    this.appMenu = this.loginAppMenu;
    this.storeService.getIsLoggedIn().subscribe((res: any) => {
      console.log("isLoggedIn", res);
      this.isLoggedIn = res;
      this.isLoggedIn ? (this.appMenu = this.offAppMenu) : (this.appMenu = this.loginAppMenu);
    });
  }

  async ionViewWillEnter() {
    this.isLoggedIn =
      (await !!this.localStorageService.get("audienceData")) ||
      (await !!this.localStorageService.get("audienceData"));

    this.storeService.getIsLoggedIn().subscribe((res: any) => {
      console.log("isLoggedIn", res);
      this.isLoggedIn = res;
      this.isLoggedIn ? (this.appMenu = this.offAppMenu) : (this.offAppMenu = this.appMenu);
    });
  }

  public menuToggle(menu: string): void {
    switch (menu) {
      case "logout":
        this.storeService.setIsLoggedIn(false);
        this.localStorageService.remove("audienceData");
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
