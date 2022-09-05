import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-sub-category",
  templateUrl: "./sub-category.component.html",
  styleUrls: ["./sub-category.component.scss"]
})
export class SubCategoryComponent implements OnInit {
  category: any;
  mediaUrl = environment.mediaUrl + "/";
  constructor(private router: Router) {}

  ngOnInit() {
    this.category = this.router.getCurrentNavigation().extras.state;
    console.log("rout state", this.category);
  }
}
