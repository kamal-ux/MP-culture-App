import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "./service/local-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  public appMenu = [
    {
      title: "Live",
      icon: "play-outline"
    },
    { title: "My Profile", icon: "person-outline" },
    {
      title: "All Pages",
      icon: "documents-outline"
    },
    {
      title: "All Category",
      icon: "menu-outline"
    },
    {
      title: "Settings",
      icon: "settings-outline"
    },
    {
      title: "Logout",
      icon: "log-out"
    }
  ];
  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorageService.init();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  public menuToggle(menu: string): void {
    switch (menu) {
      case "Logout":
        // this.localStorage.clearAll();
        this.router.navigateByUrl("", { replaceUrl: true });
        break;
      case "T&Cs and Privacy":
        this.router.navigate(["/login/login/registration/termOfUse"], {
          state: { page: { privacyTerm: true } }
        });
        break;
      case "About Us":
        this.router.navigate(["/login/login/registration/termOfUse"], {
          state: { page: "About" }
        });
        break;
      case "Notifications":
        this.router.navigate(["tab/home/notification"]);
      default:
        break;
    }
  }
}
