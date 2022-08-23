import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sub-category",
  templateUrl: "./sub-category.component.html",
  styleUrls: ["./sub-category.component.scss"],
})
export class SubCategoryComponent implements OnInit {
  routState: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.routState = this.router.getCurrentNavigation().extras.state;
    console.log("rout state", this.routState);
  }
}
