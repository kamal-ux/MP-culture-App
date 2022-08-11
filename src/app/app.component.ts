import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { LocalStorageService } from "./service/local-storage.service";

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
      value: "live-program",

      icon: "settings-outline"
    },
    {
      title: "लॉग इन",
      value: "login",

      icon: "power-outline"
    }
  ];
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private menuController: MenuController
  ) {}

  ngOnInit(): void {
    this.localStorageService.init();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  public menuToggle(menu: string): void {
    switch (menu) {
      case "Logout":
        this.localStorageService.clearAll();
        this.router.navigateByUrl("", { replaceUrl: true });
        break;
      case "live-program":
        this.router.navigate(["tabs/home"]);
        break;
      case "today-program":
        this.router.navigate(["tabs/home"]);
        break;
      case "upcoming-program":
        this.router.navigate(["tabs/home"]);
        break;
      case "archive-program":
        break;
      case "register":
        this.router.navigate(["../signup/signup"]);
        break;
      case "category":
        this.router.navigate(["tabs/category"]);
        break;
      case "setting":
        this.router.navigate(["tabs/"]);
        break;
      case "login":
        this.router.navigate(["../signup"]);
        break;
      default:
        break;
    }
  }
}
