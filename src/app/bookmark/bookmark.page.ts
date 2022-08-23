import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-bookmark",
  templateUrl: "./bookmark.page.html",
  styleUrls: ["./bookmark.page.scss"]
})
export class BookmarkPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateToHome() {
    this.router.navigate([""]);
  }
}
