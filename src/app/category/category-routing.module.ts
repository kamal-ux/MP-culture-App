import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CategoryPage } from "./category.page";
import { SubCategoryComponent } from "./sub-category/sub-category.component";

const routes: Routes = [
  {
    path: "",
    component: CategoryPage,
  },
  {
    path: "subCategory",
    component: SubCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryPageRoutingModule {}
