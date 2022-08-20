import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CategoryPageRoutingModule } from "./category-routing.module";

import { CategoryPage } from "./category.page";
import { SubCategoryComponent } from "./sub-category/sub-category.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CategoryPageRoutingModule],
  declarations: [CategoryPage, SubCategoryComponent],
})
export class CategoryPageModule {}
