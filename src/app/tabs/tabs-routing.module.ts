import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        loadChildren: () => import("../home/home.module").then((m) => m.HomePageModule)
      },
      {
        path: "category",
        loadChildren: () => import("../category/category.module").then((m) => m.CategoryPageModule)
      },
      {
        path: "trending",
        loadChildren: () => import("../trending/trending.module").then((m) => m.TrendingPageModule)
      },
      {
        path: "bookmark",
        loadChildren: () => import("../bookmark/bookmark.module").then((m) => m.BookmarkPageModule)
      },
      {
        path: "favourite",
        loadChildren: () =>
          import("../favourite/favourite.module").then((m) => m.FavouritePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
