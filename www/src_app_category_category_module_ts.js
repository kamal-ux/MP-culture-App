"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_category_category_module_ts"],{

/***/ 14826:
/*!*****************************************************!*\
  !*** ./src/app/category/category-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPageRoutingModule": () => (/* binding */ CategoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.page */ 30838);




const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_0__.CategoryPage
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ 26914:
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPageModule": () => (/* binding */ CategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-routing.module */ 14826);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page */ 30838);







let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryPageRoutingModule
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_1__.CategoryPage]
    })
], CategoryPageModule);



/***/ }),

/***/ 30838:
/*!*******************************************!*\
  !*** ./src/app/category/category.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPage": () => (/* binding */ CategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.page.html?ngResource */ 75966);
/* harmony import */ var _category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page.scss?ngResource */ 45058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let CategoryPage = class CategoryPage {
    constructor() { }
    ngOnInit() {
    }
};
CategoryPage.ctorParameters = () => [];
CategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-category',
        template: _category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoryPage);



/***/ }),

/***/ 45058:
/*!********************************************************!*\
  !*** ./src/app/category/category.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".icons {\n  font-size: 25px;\n  color: gray;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 500px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFDQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUVEOztBQUFBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBR0Q7O0FBREE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBSUQ7O0FBRkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBS0Q7O0FBSEE7RUFDQyxXQUFBO0FBTUQ7O0FBSkE7RUFDQyxjQUFBO0FBT0Q7O0FBTEE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFRRDs7QUFOQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBU0Q7O0FBUEE7RUFDQyx1QkFBQTtBQVVEOztBQVJBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVdEOztBQVRBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFZRDs7QUFWQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBYUQ7O0FBWEE7RUFDQyx1QkFBQTtBQWNEOztBQVpBO0VBQ0MsY0FBQTtBQWVEOztBQWJBO0VBQ0MsVUFBQTtFQUNBLDhCQUFBO0FBZ0JEOztBQWRBO0VBQ0MsVUFBQTtBQWlCRDs7QUFmQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBa0JEOztBQWhCQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFtQkQ7O0FBakJBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQW9CRDs7QUFsQkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFxQkQ7O0FBbkJBO0VBQ0Msc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBc0JEOztBQXBCQTtFQUNDLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUF1QkQ7O0FBckJBO0VBQ0Msc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF3QkQ7O0FBdEJBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXlCRDs7QUF2QkE7RUFDQyxtQkFBQTtFQUNBLFdBQUE7QUEwQkQiLCJmaWxlIjoiY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25zIHtcblx0Zm9udC1zaXplOiAyNXB4O1xuXHRjb2xvcjogZ3JheTtcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnNsaWRlMl9pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0bWF4LWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zd2lwZXItc2xpZGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3dpcGVyLXNsaWRlOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAyMHB4O1xuXHRsZWZ0OiAxMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQgYSwgLnN3aXBlci1zbGlkZSAuY29udGVudCBzcGFuIHtcblx0Y29sb3I6ICNmZmY7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGlvbi1pY29uIHtcblx0Y29sb3I6ICNmZmFmMDA7XG59XG4uYmFubmVyX3NsaWRlIGlvbi1zbGlkZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jYXRhZ29yaWVzX3NsaWRlciB7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICNmZmZmY2M7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmMmNjLCAjZmZmZmNjKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmMmNjLCAjZmZmZmNjKTtcbn1cbi5jYXRhZ29yaWVzX3NsaWRlciAuc3dpcGVyLXNsaWRlOmJlZm9yZSB7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmJsdWVfY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHBhZGRpbmc6IDEwcHg7XG59XG4uYmx1ZV9jYXJkIC50cmVuZGluZ19pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdG1heC1oZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZHVjdF9zbGlkZSB7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICMwQzE1M0I7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ucHJvZHVjdF9zbGlkZSBwIGEge1xuXHRjb2xvcjogIzc5NzQ5NDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcblx0b3BhY2l0eTogMTtcblx0YmFja2dyb3VuZDogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcblx0bGVmdDogMjVweDtcbn1cbi5mb3J5b3VfY2FyZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuLmZvcnlvdV9jYXJkOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG59XG4uZm9yeW91X2NhcmQgLmJvb2ttYXJrIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDE1cHg7XG5cdHJpZ2h0OiAxNXB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mb3J5b3VfY2FyZCAuY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAyMHB4O1xuXHRsZWZ0OiAxMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuLmZvcnlvdV9jYXJkIGltZyB7XG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYmx1ZV90YWJfY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYmx1ZV90YWJfY2FyZCBpb24tcm93IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRwYWRkaW5nOiA3cHg7XG59XG4uYmx1ZV90YWJfY2FyZCAudHJlbmRpbmdfaW1nIHtcblx0d2lkdGg6IDgwcHg7XG5cdGhlaWdodDogODBweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuLmJ0bi1zZWdtZW50LnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuXHRiYWNrZ3JvdW5kOiAjZTQyZjA4O1xuXHRjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 75966:
/*!********************************************************!*\
  !*** ./src/app/category/category.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"text-center\">कलाकार श्रेणी / Artist Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">शास्त्रीय / classical</a>\n          </div>\n          <img src=\"{{'https://jusmarktech.in/Culture/img/bg-img/category/cat1.jpeg'}}\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">उप शास्त्रीय / sub classical</a>\n          </div>\n          <img src=\"../../../assets/images/cat2.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">आधुनिक कला / modern Art</a>\n          </div>\n          <img src=\"../../../assets/images/cat3.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">लोक एवं आदिवासी / folk and tribal</a>\n          </div>\n          <img src=\"../../../assets/images/cat4.jpg\" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_category_category_module_ts.js.map