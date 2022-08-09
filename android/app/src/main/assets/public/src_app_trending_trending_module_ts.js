"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_trending_trending_module_ts"],{

/***/ 68903:
/*!*****************************************************!*\
  !*** ./src/app/trending/trending-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendingPageRoutingModule": () => (/* binding */ TrendingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _trending_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trending.page */ 39307);




const routes = [
    {
        path: '',
        component: _trending_page__WEBPACK_IMPORTED_MODULE_0__.TrendingPage
    }
];
let TrendingPageRoutingModule = class TrendingPageRoutingModule {
};
TrendingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrendingPageRoutingModule);



/***/ }),

/***/ 62270:
/*!*********************************************!*\
  !*** ./src/app/trending/trending.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendingPageModule": () => (/* binding */ TrendingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _trending_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trending-routing.module */ 68903);
/* harmony import */ var _trending_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trending.page */ 39307);







let TrendingPageModule = class TrendingPageModule {
};
TrendingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _trending_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrendingPageRoutingModule
        ],
        declarations: [_trending_page__WEBPACK_IMPORTED_MODULE_1__.TrendingPage]
    })
], TrendingPageModule);



/***/ }),

/***/ 39307:
/*!*******************************************!*\
  !*** ./src/app/trending/trending.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendingPage": () => (/* binding */ TrendingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _trending_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trending.page.html?ngResource */ 5457);
/* harmony import */ var _trending_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trending.page.scss?ngResource */ 5598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let TrendingPage = class TrendingPage {
    constructor() { }
    ngOnInit() {
    }
};
TrendingPage.ctorParameters = () => [];
TrendingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-trending',
        template: _trending_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_trending_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrendingPage);



/***/ }),

/***/ 5598:
/*!********************************************************!*\
  !*** ./src/app/trending/trending.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".icons {\n  font-size: 25px;\n  color: gray;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFDQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUVEOztBQUFBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBR0Q7O0FBREE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBSUQ7O0FBRkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBS0Q7O0FBSEE7RUFDQyxXQUFBO0FBTUQ7O0FBSkE7RUFDQyxjQUFBO0FBT0Q7O0FBTEE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFRRDs7QUFOQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBU0Q7O0FBUEE7RUFDQyx1QkFBQTtBQVVEOztBQVJBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNHLGtCQUFBO0FBV0o7O0FBVEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVlEOztBQVZBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBRUEsdURBQUE7QUFhRDs7QUFYQTtFQUNDLHVCQUFBO0FBY0Q7O0FBWkE7RUFDQyxjQUFBO0FBZUQ7O0FBYkE7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7QUFnQkQ7O0FBZEE7RUFDQyxVQUFBO0FBaUJEOztBQWZBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFrQkQ7O0FBaEJBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBbUJEOztBQWpCQTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFvQkQ7O0FBbEJBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBcUJEOztBQW5CQTtFQUNDLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQXNCRDs7QUFwQkE7RUFDQyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBdUJEOztBQXJCQTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBd0JEOztBQXRCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF5QkQ7O0FBdkJBO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0FBMEJEIiwiZmlsZSI6InRyZW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ucyB7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Y29sb3I6IGdyYXk7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5zbGlkZTJfaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3dpcGVyLXNsaWRlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMjBweDtcblx0bGVmdDogMTBweDtcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGEsIC5zd2lwZXItc2xpZGUgLmNvbnRlbnQgc3BhbiB7XG5cdGNvbG9yOiAjZmZmO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCBpb24taWNvbiB7XG5cdGNvbG9yOiAjZmZhZjAwO1xufVxuLmJhbm5lcl9zbGlkZSBpb24tc2xpZGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2F0YWdvcmllc19zbGlkZXIge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmZmNjO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG59XG4uY2F0YWdvcmllc19zbGlkZXIgLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5ibHVlX2NhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmZkO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cbi5ibHVlX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdG1heC13aWR0aDogMTAwJTtcblx0bWF4LWhlaWdodDogODBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wcm9kdWN0X3NsaWRlIHtcblx0cGFkZGluZzogMTVweDtcblx0YmFja2dyb3VuZDogIzBDMTUzQjtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI2NDQsICMwQzE1M0IpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI2NDQsICMwQzE1M0IpO1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5wcm9kdWN0X3NsaWRlIHAgYSB7XG5cdGNvbG9yOiAjNzk3NDk0O1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuXHRvcGFjaXR5OiAxO1xuXHRiYWNrZ3JvdW5kOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24sIC5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sIC5wcm9kdWN0X3NsaWRlIC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuXHRsZWZ0OiAyNXB4O1xufVxuLmZvcnlvdV9jYXJkIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG59XG4uZm9yeW91X2NhcmQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xufVxuLmZvcnlvdV9jYXJkIC5ib29rbWFyayB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAxNXB4O1xuXHRyaWdodDogMTVweDtcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZm9yeW91X2NhcmQgLmNvbnRlbnQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMjBweDtcblx0bGVmdDogMTBweDtcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cbi5mb3J5b3VfY2FyZCBpbWcge1xuXHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHRtYXgtaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmJsdWVfdGFiX2NhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmZkO1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiAwO1xufVxuLmJsdWVfdGFiX2NhcmQgaW9uLXJvdyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0cGFkZGluZzogN3B4O1xufVxuLmJsdWVfdGFiX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5idG4tc2VnbWVudC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcblx0YmFja2dyb3VuZDogI2U0MmYwODtcblx0Y29sb3I6ICNmZmY7XG59XG4iXX0= */";

/***/ }),

/***/ 5457:
/*!********************************************************!*\
  !*** ./src/app/trending/trending.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Trending</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col size=\"6\">\n      <h3 class=\"m-0 p-0\">Trending</h3>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-end\">\n      <p>9 Posts</p>\n    </ion-col>\n  </ion-row>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img\n          src=\"../../../assets/images/trending_img1.jpg\"\n          class=\"trending_img\"\n        />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Swimming is a good exercise for the body</a>\n        </h6>\n        <a href=\"#!\" class=\"green_btn mr-1\">Sports</a>\n        <a href=\"#!\">2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img\n          src=\"../../../assets/images/trending_img2.jpg\"\n          class=\"trending_img\"\n        />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Swimming is a good exercise for the body</a>\n        </h6>\n        <a href=\"#!\" class=\"red_btn mr-1\">Tech</a> <a href=\"#!\">2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img\n          src=\"../../../assets/images/trending_img3.jpg\"\n          class=\"trending_img\"\n        />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Swimming is a good exercise for the body</a>\n        </h6>\n        <a href=\"#!\" class=\"orange_btn mr-1\">Fashion</a>\n        <a href=\"#!\">2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img\n          src=\"../../../assets/images/trending_img1.jpg\"\n          class=\"trending_img\"\n        />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Swimming is a good exercise for the body</a>\n        </h6>\n        <a href=\"#!\" class=\"green_btn mr-1\">Sports</a>\n        <a href=\"#!\">2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img\n          src=\"../../../assets/images/trending_img2.jpg\"\n          class=\"trending_img\"\n        />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Swimming is a good exercise for the body</a>\n        </h6>\n        <a href=\"#!\" class=\"red_btn mr-1\">Tech</a> <a href=\"#!\">2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img\n          src=\"../../../assets/images/trending_img3.jpg\"\n          class=\"trending_img\"\n        />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Swimming is a good exercise for the body</a>\n        </h6>\n        <a href=\"#!\" class=\"orange_btn mr-1\">Fashion</a>\n        <a href=\"#!\">2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img\n          src=\"../../../assets/images/trending_img1.jpg\"\n          class=\"trending_img\"\n        />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Swimming is a good exercise for the body</a>\n        </h6>\n        <a href=\"#!\" class=\"green_btn mr-1\">Sports</a>\n        <a href=\"#!\">2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img\n          src=\"../../../assets/images/trending_img2.jpg\"\n          class=\"trending_img\"\n        />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Swimming is a good exercise for the body</a>\n        </h6>\n        <a href=\"#!\" class=\"red_btn mr-1\">Tech</a> <a href=\"#!\">2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img\n          src=\"../../../assets/images/trending_img3.jpg\"\n          class=\"trending_img\"\n        />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Swimming is a good exercise for the body</a>\n        </h6>\n        <a href=\"#!\" class=\"orange_btn mr-1\">Fashion</a>\n        <a href=\"#!\">2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <a href=\"#!\" class=\"load_more_btn mr-1\">Load More</a>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_trending_trending_module_ts.js.map