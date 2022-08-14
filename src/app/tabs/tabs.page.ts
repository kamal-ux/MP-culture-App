import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IonTabs } from "@ionic/angular";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"]
})
export class TabsPage implements OnInit {
  @ViewChild("tab") tab: IonTabs;
  public tabs: Array<{
    index: number;
    name: string;
    value: string;
    icon: string;
  }> = [
    { index: 0, name: "", value: "home", icon: "home-outline" },
    { index: 0, name: "", value: "category", icon: "grid-outline" },
    // { index: 1, name: "", value: "trending", icon: "flash-outline" },
    { index: 2, name: "", value: "favourite", icon: "heart-outline" },
    { index: 4, name: "", value: "bookmark", icon: "bookmark-outline" }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  setRootTab(route: string, evt: MouseEvent): void {
    this.router.navigateByUrl("tabs/" + route);
  }
}
