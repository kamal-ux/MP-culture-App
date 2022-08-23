import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-category",
  templateUrl: "./category.page.html",
  styleUrls: ["./category.page.scss"]
})
export class CategoryPage implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}
  openSubCategory(subCategory) {
    this.route.navigate(["/tabs/category/subCategory"], {
      state: { subCategory }
    });
  }

  navigateToHome() {
    this.route.navigate([""]);
  }
}
