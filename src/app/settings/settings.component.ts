import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "../service/local-storage.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  mode: boolean;
  language: string = "english";
  isDefaultLanguage: boolean = true;
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.mode = (await this.localStorageService.get("mode")) || false;
    console.log("mode", this.mode);
  }

  onToggleColorTheme(event): void {
    this.localStorageService.set("mode", event.target.checked);
    if (event.target.checked) {
      this.renderer.setAttribute(document.body, "color-theme", "dark");
    } else {
      this.renderer.setAttribute(document.body, "color-theme", "light");
    }
  }

  languageSwitcher(event): any {
    if (event.target.checked) {
      this.language = "english";
    } else {
      this.language = "hindi";
    }
  }

  navigateToHome() {
    this.router.navigate([""]);
  }
}
