import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { ApiServiceService } from "../service/api-service.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.page.html",
  styleUrls: ["./category.page.scss"]
})
export class CategoryPage implements OnInit {
  categoryClientReady: boolean;
  categories!: any;
  mediaUrl: string = environment.mediaUrl + "/";

  constructor(private route: Router, private apiService: ApiServiceService) {}

  ngOnInit() {
    this.apiService.categoryClientState().subscribe((ready) => {
      if (ready) {
        this.categoryClientReady = true;
        this.loadAllCategory();
      }
    });
  }

  loadAllCategory(): void {
    this.apiService.loadCategoryData().subscribe((res: any) => {
      console.log("category data", res.Categories);
      this.categories = res.Categories;
    });
  }

  openSubCategory(subCategory) {
    this.route.navigate(["/tabs/category/subCategory"], {
      state: { subCategory }
    });
  }

  navigateToHome() {
    this.route.navigate([""]);
  }
}
