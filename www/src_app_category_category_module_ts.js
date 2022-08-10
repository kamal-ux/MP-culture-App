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

module.exports = ".icons {\n  font-size: 25px;\n  color: gray;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFDQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUVEOztBQUFBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBR0Q7O0FBREE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBSUQ7O0FBRkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBS0Q7O0FBSEE7RUFDQyxXQUFBO0FBTUQ7O0FBSkE7RUFDQyxjQUFBO0FBT0Q7O0FBTEE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFRRDs7QUFOQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBU0Q7O0FBUEE7RUFDQyx1QkFBQTtBQVVEOztBQVJBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVdEOztBQVRBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFZRDs7QUFWQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBYUQ7O0FBWEE7RUFDQyx1QkFBQTtBQWNEOztBQVpBO0VBQ0MsY0FBQTtBQWVEOztBQWJBO0VBQ0MsVUFBQTtFQUNBLDhCQUFBO0FBZ0JEOztBQWRBO0VBQ0MsVUFBQTtBQWlCRDs7QUFmQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBa0JEOztBQWhCQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQW1CRDs7QUFqQkE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBb0JEOztBQWxCQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQXFCRDs7QUFuQkE7RUFDQyxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFzQkQ7O0FBcEJBO0VBQ0MseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQXVCRDs7QUFyQkE7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXdCRDs7QUF0QkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBeUJEOztBQXZCQTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtBQTBCRCIsImZpbGUiOiJjYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbnMge1xuXHRmb250LXNpemU6IDI1cHg7XG5cdGNvbG9yOiBncmF5O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uc2xpZGUyX2ltZyB7XG5cdG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHRtYXgtaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnN3aXBlci1zbGlkZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDIwcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCBhLCAuc3dpcGVyLXNsaWRlIC5jb250ZW50IHNwYW4ge1xuXHRjb2xvcjogI2ZmZjtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQgaW9uLWljb24ge1xuXHRjb2xvcjogI2ZmYWYwMDtcbn1cbi5iYW5uZXJfc2xpZGUgaW9uLXNsaWRlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNhdGFnb3JpZXNfc2xpZGVyIHtcblx0cGFkZGluZzogMTVweDtcblx0YmFja2dyb3VuZDogI2ZmZmZjYztcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYyY2MsICNmZmZmY2MpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYyY2MsICNmZmZmY2MpO1xufVxuLmNhdGFnb3JpZXNfc2xpZGVyIC5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYmx1ZV9jYXJkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZWJmZDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0cGFkZGluZzogMTBweDtcbn1cbi5ibHVlX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdG1heC13aWR0aDogMTAwJTtcblx0bWF4LWhlaWdodDogODBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wcm9kdWN0X3NsaWRlIHtcblx0cGFkZGluZzogMTVweDtcblx0YmFja2dyb3VuZDogIzBDMTUzQjtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI2NDQsICMwQzE1M0IpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI2NDQsICMwQzE1M0IpO1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5wcm9kdWN0X3NsaWRlIHAgYSB7XG5cdGNvbG9yOiAjNzk3NDk0O1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuXHRvcGFjaXR5OiAxO1xuXHRiYWNrZ3JvdW5kOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24sIC5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sIC5wcm9kdWN0X3NsaWRlIC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuXHRsZWZ0OiAyNXB4O1xufVxuLmZvcnlvdV9jYXJkIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG59XG4uZm9yeW91X2NhcmQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xufVxuLmZvcnlvdV9jYXJkIC5ib29rbWFyayB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAxNXB4O1xuXHRyaWdodDogMTVweDtcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZm9yeW91X2NhcmQgLmNvbnRlbnQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMjBweDtcblx0bGVmdDogMTBweDtcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cbi5mb3J5b3VfY2FyZCBpbWcge1xuXHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHRtYXgtaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmJsdWVfdGFiX2NhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmZkO1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiAwO1xufVxuLmJsdWVfdGFiX2NhcmQgaW9uLXJvdyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0cGFkZGluZzogN3B4O1xufVxuLmJsdWVfdGFiX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5idG4tc2VnbWVudC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcblx0YmFja2dyb3VuZDogI2U0MmYwODtcblx0Y29sb3I6ICNmZmY7XG59XG4iXX0= */";

/***/ }),

/***/ 75966:
/*!********************************************************!*\
  !*** ./src/app/category/category.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>कलाकार श्रेणी / Artist Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\" class=\"catagories_slider\">\n      <h3 class=\"m-0\">Top Catagories</h3>\n      <ion-slides>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Sports</div>\n              </div>\n              <img src=\"../../../assets/images/slide1.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Fashion</div>\n              </div>\n              <img src=\"../../../assets/images/slide2.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Tech</div>\n              </div>\n              <img src=\"../../../assets/images/slide3.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Gadgets</div>\n              </div>\n              <img src=\"../../../assets/images/slide4.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Health</div>\n              </div>\n              <img src=\"../../../assets/images/slide5.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Politics</div>\n              </div>\n              <img src=\"../../../assets/images/slide6.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"12\">\n        <h3 class=\"m-0 p-0\">All Catagory</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a href=\"#!\" class=\"red_btn\">शास्त्रीय / classical</a>\n          </div>\n          <img src=\"../../../assets/images/cat1.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a href=\"#!\" class=\"red_btn\">उप शास्त्रीय / sub classical</a>\n          </div>\n          <img src=\"../../../assets/images/cat2.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a href=\"#!\" class=\"red_btn\">आधुनिक कला / modern Art</a>\n          </div>\n          <img src=\"../../../assets/images/cat3.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a href=\"#!\" class=\"red_btn\">लोक एवं आदिवासी / folk and tribal</a>\n          </div>\n          <img src=\"../../../assets/images/cat4.jpg\" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_category_category_module_ts.js.map