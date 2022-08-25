import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {}

  onToggleColorTheme(event): void {
    console.log("event", event.target.checked);
    if (event.target.checked) {
      this.renderer.setAttribute(document.body, "color-theme", "dark");
    } else {
      this.renderer.setAttribute(document.body, "color-theme", "light");
    }
  }

  navigateToHome() {
    this.router.navigate([""]);
  }
}
