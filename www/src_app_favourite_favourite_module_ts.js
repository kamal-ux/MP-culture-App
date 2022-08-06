"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_favourite_favourite_module_ts"],{

/***/ 36077:
/*!*******************************************************!*\
  !*** ./src/app/favourite/favourite-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritePageRoutingModule": () => (/* binding */ FavouritePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _favourite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourite.page */ 91471);




const routes = [
    {
        path: '',
        component: _favourite_page__WEBPACK_IMPORTED_MODULE_0__.FavouritePage
    }
];
let FavouritePageRoutingModule = class FavouritePageRoutingModule {
};
FavouritePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavouritePageRoutingModule);



/***/ }),

/***/ 41814:
/*!***********************************************!*\
  !*** ./src/app/favourite/favourite.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritePageModule": () => (/* binding */ FavouritePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _favourite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourite-routing.module */ 36077);
/* harmony import */ var _favourite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourite.page */ 91471);







let FavouritePageModule = class FavouritePageModule {
};
FavouritePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _favourite_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavouritePageRoutingModule
        ],
        declarations: [_favourite_page__WEBPACK_IMPORTED_MODULE_1__.FavouritePage]
    })
], FavouritePageModule);



/***/ }),

/***/ 91471:
/*!*********************************************!*\
  !*** ./src/app/favourite/favourite.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritePage": () => (/* binding */ FavouritePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _favourite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourite.page.html?ngResource */ 45609);
/* harmony import */ var _favourite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourite.page.scss?ngResource */ 90096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let FavouritePage = class FavouritePage {
    constructor() { }
    ngOnInit() {
    }
};
FavouritePage.ctorParameters = () => [];
FavouritePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-favourite',
        template: _favourite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_favourite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavouritePage);



/***/ }),

/***/ 90096:
/*!**********************************************************!*\
  !*** ./src/app/favourite/favourite.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".page-nav {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  padding: 0;\n}\n\nul li {\n  list-style: none;\n  text-decoration: none;\n  position: relative;\n}\n\n.page-nav li a {\n  color: #020b10;\n  display: block;\n  padding: 0.75rem 1.5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  border-radius: 5rem;\n  background-color: #dcebfd;\n  font-size: 14px;\n}\n\n.page-nav li a:hover, .page-nav li a:focus {\n  color: #ffffff;\n  background-color: #e42f08;\n}\n\n.page-nav li ion-icon {\n  position: absolute;\n  right: 10px;\n  transform: translateY(-50%);\n  top: 50%;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBR0EsYUFBQTtFQUdBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBS0oiLCJmaWxlIjoiZmF2b3VyaXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLW5hdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG51bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBhZ2UtbmF2IGxpIGEge1xuICAgIGNvbG9yOiAjMDIwYjEwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnBhZ2UtbmF2IGxpIGE6aG92ZXIsIC5wYWdlLW5hdiBsaSBhOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQyZjA4O1xufVxuLnBhZ2UtbmF2IGxpIGlvbi1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgcmlnaHQ6IDEwcHg7IFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgXG4gICAgdG9wOiA1MCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 45609:
/*!**********************************************************!*\
  !*** ./src/app/favourite/favourite.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Favourite</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ul class=\"page-nav\">\n    <li>\n      <a href=\"#!\">Home <ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Blog Details <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\">Live <ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Search <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Profile <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Profile for Viewer <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Catagory <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Single Catagory <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Trending Post <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Bookmark Post <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Change Password <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Forget Password <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Forget Password Success<i class=\"lni lni-chevron-right\"></i\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Login <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Register <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Settings <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Contact <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Error - 404 <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >About Us <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\">Privacy Policy<i class=\"lni lni-chevron-right\"> </i></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Alerts <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Badges <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Buttons <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Cards <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Carousel <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Collapse <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Forms <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Media object <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Modal <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Pagination <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Progress <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n    <li>\n      <a href=\"#!\"\n        >Tooltips <ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></a>\n    </li>\n  </ul>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_favourite_favourite_module_ts.js.map