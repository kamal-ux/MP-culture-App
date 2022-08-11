"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule, swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 91670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-service.service */ 7149);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);






let HomePage = class HomePage {
    constructor(apiService) {
        this.apiService = apiService;
        this.upcomingPrograms = [];
        this.todaysPrograms = [];
        this.pastPrograms = [];
        this.slideOpts = {
            initialSlide: 0,
            // speed: 400,
            slidesPerView: 1.6,
            centeredSlides: true,
            loop: true,
            spaceBetween: 10,
            autoplay: true
        };
        this.slideOptsOne = { initialSlide: 0, slidesPerView: 1, autoplay: true, loop: true };
        this.scrollAmount = 4;
        this.mediaUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.mediaUrl;
    }
    ngOnInit() {
        this.apiService.landingPageClientState().subscribe((ready) => {
            if (ready) {
                this.landingPageClientReady = true;
                this.loadLandingData();
            }
        });
        this.apiService.programClientState().subscribe((ready) => {
            if (ready) {
                this.clientReady = true;
                this.subscription();
            }
        });
    }
    subscription() {
        this.apiService.loadUpcomingProgram().subscribe((res) => {
            this.upcomingPrograms = res;
            console.log("upcoming program", this.upcomingPrograms);
        });
        this.apiService.loadPastProgram().subscribe((res) => {
            console.log("past program", res);
            this.pastPrograms = res;
        });
        this.apiService.loadTodaysProgram().subscribe((res) => {
            console.log("todays program", res);
        });
    }
    loadLandingData() {
        this.apiService.loadLandingPageContent().subscribe((res) => {
            console.log("landing page content", res);
            this.landingPageData = res;
            this.landingImages = this.landingPageData[0].HomeSliderImage;
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__.ApiServiceService }
];
HomePage.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ["slider", { static: false },] }],
    slideOpts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ["registerSlider", { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-home",
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  height: 5vh;\n}\n\n.toolbar-content {\n  text-align: center;\n  font-weight: 600;\n}\n\nion-header {\n  --background: white;\n}\n\n.text-justify {\n  text-align: justify;\n  color: #797494;\n}\n\n.header-area {\n  background-color: #fff !important;\n  height: 100px !important;\n  background-position: 0% 63%;\n}\n\n.mt21 {\n  margin-top: 20px;\n}\n\n#icons {\n  font-size: 25px;\n  color: #67696c !important;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n  margin: 0 0 10px 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #e42f08;\n}\n\na {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtBQUNEOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0MsbUJBQUE7QUFHRDs7QUFEQTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQUlEOztBQUZBO0VBRUksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBSUo7O0FBRkE7RUFDQyxnQkFBQTtBQUtEOztBQUhBO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFNRDs7QUFKQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQU9EOztBQUxBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUUQ7O0FBTkE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBU0Q7O0FBUEE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFVRDs7QUFSQTtFQUNDLFdBQUE7QUFXRDs7QUFUQTtFQUNDLGNBQUE7QUFZRDs7QUFWQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWFEOztBQVhBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBRUEsdURBQUE7QUFjRDs7QUFaQTtFQUNDLHVCQUFBO0FBZUQ7O0FBYkE7RUFDQyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Msa0JBQUE7QUFnQkY7O0FBZEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWlCRDs7QUFmQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBa0JEOztBQWhCQTtFQUNDLHVCQUFBO0FBbUJEOztBQWpCQTtFQUNDLGNBQUE7QUFvQkQ7O0FBbEJBO0VBQ0MsVUFBQTtFQUNBLDhCQUFBO0FBcUJEOztBQW5CQTtFQUNDLFVBQUE7QUFzQkQ7O0FBcEJBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUF1QkQ7O0FBckJBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBd0JEOztBQXRCQTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUF5QkQ7O0FBdkJBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBMEJEOztBQXhCQTtFQUNDLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQTJCRDs7QUF6QkE7RUFDQyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Msa0JBQUE7QUE0QkY7O0FBMUJBO0VBQ0Msc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUE2QkQ7O0FBM0JBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQThCRDs7QUE1QkE7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUErQkQ7O0FBN0JBO0VBQ0MsWUFBQTtBQWdDRCIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcblx0aGVpZ2h0OiA1dmg7XG59XG4udG9vbGJhci1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1oZWFkZXJ7XG5cdC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG4udGV4dC1qdXN0aWZ5IHtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0Y29sb3I6Izc5NzQ5NDtcbn1cbi5oZWFkZXItYXJlYSB7XG5cdCAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9qdXNtYXJrdGVjaC5pbi9DdWx0dXJlL2ltZy9iZy1pbWcvTk9URVMxLnBuZykgcmVwZWF0LXggI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDYzJTtcbn1cbi5tdDIxe1xuXHRtYXJnaW4tdG9wOjIwcHhcbn1cbiNpY29ucyB7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Y29sb3I6ICM2NzY5NmMhaW1wb3J0YW50O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uc2xpZGUyX2ltZyB7XG5cdG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHRtYXgtaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnN3aXBlci1zbGlkZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDIwcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGEsIC5zd2lwZXItc2xpZGUgLmNvbnRlbnQgc3BhbiB7XG5cdGNvbG9yOiAjZmZmO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCBpb24taWNvbiB7XG5cdGNvbG9yOiAjZmZhZjAwO1xufVxuLmJhbm5lcl9zbGlkZSBpb24tc2xpZGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2F0YWdvcmllc19zbGlkZXIge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmZmNjO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG59XG4uY2F0YWdvcmllc19zbGlkZXIgLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5ibHVlX2NhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmZkO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG4uYmx1ZV9jYXJkIC50cmVuZGluZ19pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdG1heC1oZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZHVjdF9zbGlkZSB7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICMwQzE1M0I7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ucHJvZHVjdF9zbGlkZSBwIGEge1xuXHRjb2xvcjogIzc5NzQ5NDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcblx0b3BhY2l0eTogMTtcblx0YmFja2dyb3VuZDogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcblx0bGVmdDogMjVweDtcbn1cbi5mb3J5b3VfY2FyZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuLmZvcnlvdV9jYXJkOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcbn1cbi5mb3J5b3VfY2FyZCAuYm9va21hcmsge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMTVweDtcblx0cmlnaHQ6IDE1cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmZvcnlvdV9jYXJkIC5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDIwcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG4uZm9yeW91X2NhcmQgaW1nIHtcblx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0bWF4LWhlaWdodDogNDAwcHggIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ibHVlX3RhYl9jYXJkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZWJmZDtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLmJsdWVfdGFiX2NhcmQgaW9uLXJvdyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0cGFkZGluZzogN3B4O1xufVxuLmJsdWVfdGFiX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5idG4tc2VnbWVudC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcblx0YmFja2dyb3VuZDogI2U0MmYwODtcblx0Y29sb3I6ICNlNDJmMDg7XG59XG5hIHtcblx0Y29sb3I6YmxhY2s7XG59Il19 */";

/***/ }),

/***/ 91670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header translucent=\"false\">\n  <ion-toolbar class=\"toolbar-content\">\n    <!-- <ion-buttons name=\"main\"> -->\n    <ion-text> एम पी कल्चर ऐप, मध्य प्रदेश, सस्कृति विभाग</ion-text>\n    <!-- </ion-buttons> -->\n  </ion-toolbar>\n  <ion-row class=\"header-area\">\n    <ion-col size=\"2\">\n      <ion-buttons name=\"main\" class=\"mt21\">\n        <ion-menu-button>\n          <ion-icon name=\"grid-outline\" id=\"icons\"></ion-icon>\n        </ion-menu-button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"4\" class=\"\">\n      <div class=\"login_img\">\n        <img src=\"../../../assets/images/mp-logo.png\" width=\"65px\" />\n      </div>\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-end mt21\">\n      <img src=\"../../../assets/images/about.png\" class=\"about_img\" />\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <div class=\"\">\n    <ion-row>\n      <ion-col>\n        <ion-slides pager=\"true\" [options]=\"slideOptsOne\" *ngIf=\"landingImages\">\n          <ion-slide *ngFor=\"let landingData of landingImages; let index=index\">\n            <img src=\"{{mediaUrl + landingData?.PhotoPath}}\" class=\"banner_img\" />\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"mt10 ion-padding\">\n      <ion-col size=\"8\">\n        <span class=\"border_bottom_red\">हमारे बारे में / About Us</span>\n      </ion-col>\n      <ion-col size=\"12\" *ngFor=\"let landingData of landingPageData\">\n        <p class=\"text-justify\">{{landingData.AppLandingPageText}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h3 class=\"m-0 p-0\">हमारे बारे में / About Us</h3>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <img src=\"../../../assets/images/about.png\" class=\"about_img\" />\n      </ion-col>\n      <ion-col size=\"12\">\n        <p>\n          मध्येप्रदेश की कला, साहित्य और संस्कृति को हर सम्भव उपयों द्वारा प्रोन्नत करना, सांस्कृतिक\n          धरोहर, पुरातात्विक सम्पदा एवं ऐतिहासिक महत्व का यथास्थिति संरक्षण एवं विरूपण, विनाश,\n          अपक्षरण, व्ययन या निर्यात से संरक्षण, जनजातीय और लोक कला, साहित्य एवं संस्कृति का\n          अनुरक्षण, संरक्षण, प्रोत्साहन, प्रदर्शन, प्रशिक्षण एवं विकास करना संस्कृति विभाग का मुख्य\n          उद्देश्य हैं। मध्यप्रदेश की कला, संस्कृति, साहित्य, राजभाषा, स्वाधीनता संग्राम से संबंधित\n          एवं पुरासम्पदा के संरक्षण, संवर्धन तथा उनके उत्तरोत्तर विकास, कलाकारों, साहित्यकारों,\n          विद्वानों, पुरातत्वविदों एवं संगठनों का सम्मांन, नाट्य विद्यालय, रंगकर्म प्रदर्शन तथा\n          अध्ययन, अभिनय, प्रशिक्षण, प्रचार और विकास, अशासकीय सांस्कृतिक संगठनों को प्रोत्साहन एवं\n          वित्तीय सहायता उपलब्ध कराना, संगीत एवं ललित कला को प्रोन्नत, सुदृढ़, विस्तार आदि के लिये\n          उद्देश्य अनुरूप सक्रिय है।\n        </p>\n        <p>\n          विभाग संस्कृति के विभिन्न क्षेत्रों में प्रतिभा को बढ़ावा देने और मध्यप्रदेश की समृद्ध\n          संस्कृति/विरासत के बारे में देश-दुनिया को जानकारी देने के लिए राज्य भर में कई सांस्कृतिक\n          गतिविधियों का आयोजन, प्रचार-प्रसार एवं दस्तावेजीकरण करता है।\n        </p>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- <ion-row class=\"mt20\">\n    <ion-col size=\"12\" class=\"catagories_slider\">\n      <h3 class=\"m-0\">Top Catagories</h3>\n      <ion-slides>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Sports</div>\n              </div>\n              <img src=\"../../../assets/images/slide1.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Fashion</div>\n              </div>\n              <img src=\"../../../assets/images/slide2.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Tech</div>\n              </div>\n              <img src=\"../../../assets/images/slide3.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Gadgets</div>\n              </div>\n              <img src=\"../../../assets/images/slide4.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Health</div>\n              </div>\n              <img src=\"../../../assets/images/slide5.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Politics</div>\n              </div>\n              <img src=\"../../../assets/images/slide6.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row> -->\n\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">आज के कार्यक्रम</span\n          ><span class=\"mt10 d-block\">Today's Program</span>\n        </h5>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\"> </ion-col>\n    </ion-row>\n    <ion-card class=\"blue_card\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"../../../assets/images/b3.jpg\" class=\"trending_img\" />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <a>राष्ट्रीय चेतना जा सुर </a>\n          </h6>\n          <a class=\"red_btn mr-1\">भोपाल</a>\n          <a>08 अगस्त 2022</a>\n          <p class=\"mt10\">राष्ट्रीय गीतों की प्रस्तुति <br />सिंधी साहित्य अकादमी</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Upcoming programs [OPEN]-->\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">आगामी कार्यक्रम</span\n          ><span class=\"mt10 d-block\">Upcoming Program</span>\n        </h5>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <a class=\"red_btn\">View All</a>\n      </ion-col>\n    </ion-row>\n    <ion-card class=\"blue_card\" *ngFor=\"let program of upcomingPrograms\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img\n            src=\"{{program.ProgramMultiMedia.length ? mediaUrl+ program.ProgramMultiMedia.MediaPath :'../../../assets/images/b3.jpg'}}\"\n            class=\"trending_img\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <ion-text color=\"dark\">{{program.ProgramName}}</ion-text>\n          </h6>\n          <a class=\"see_green_btn mr-1\"> {{program.CityName}}</a>\n          <a>{{program.ProgramDateTime | date:'short':'IST'}}</a>\n          <!-- <p class=\"mt10\">देशभक्ति आधारित स्वराज संस्थान संचालनालय</p> -->\n          <p class=\"mt10\">{{program.AboutProgram}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <!-- <ion-card class=\"blue_card\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"../../../assets/images/b3.jpg\" class=\"trending_img\" />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <a>स्मृति समारोह </a>\n            <p>सुभद्रा कुमारी चौहान</p>\n          </h6>\n          <a class=\"red_btn mr-1\">सिवनी</a>\n          <a>17 अगस्त 2022</a>\n          <p class=\"mt10\">विमर्श एवं रचनापाठ साहित्य अकादमी</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"blue_card\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"../../../assets/images/b.jpg\" class=\"trending_img\" />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <a>व्याख्यान</a>\n          </h6>\n          <a class=\"orange_btn mr-1\">उज्जैन</a>\n          <a>17 अगस्त 2022</a>\n          <p class=\"mt10\">बलरामः कृषि संस्कृति के प्रणेता जनजातीय लोककला एवं बोली विकास अका.</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"blue_card\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"../../../assets/images/b2.jpg\" class=\"trending_img\" />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <a>ललित पर्व</a>\n          </h6>\n          <a class=\"see_green_btn mr-1\">उज्जैन</a>\n          <a>18-20 अगस्त 2022</a>\n          <p class=\"mt10\">\n            श्रीकृष्ण के आख्यान की कला अभिव्यक्तियाँ जनजातीय लोककला एवं बोली विकास अका.\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-card> -->\n  </div>\n  <!-- Upcoming programs [CLOSE]-->\n\n  <!-- Artist Category [OPEN]-->\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">कलाकार श्रेणी</span\n          ><span class=\"mt10 d-block\">Artist Category</span>\n        </h5>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <a class=\"red_btn\">View All</a>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">शास्त्रीय / classical</a>\n          </div>\n          <img src=\"../../../assets/images/cat1.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">उप शास्त्रीय / sub classical</a>\n          </div>\n          <img src=\"../../../assets/images/cat2.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">आधुनिक कला / modern Art</a>\n          </div>\n          <img src=\"../../../assets/images/cat3.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">लोक एवं आदिवासी / folk and tribal</a>\n          </div>\n          <img src=\"../../../assets/images/cat4.jpg\" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">मासिक लोकप्रिय कलाकार</span\n          ><span class=\"mt10 d-block\"> Popular Artist of the Month </span>\n        </h5>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <a class=\"red_btn\">View All</a>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a class=\"gray_btn\">Mrinalini<br />नृत्य/Dancer</a>\n          </div>\n          <img src=\"../../../assets/images/b5.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a class=\"gray_btn\"> Bhuri Bai<br />चित्रकारी / painting</a>\n          </div>\n          <img src=\"../../../assets/images/b6.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a class=\"gray_btn\">Sreetoma<br />गायन/Singer</a>\n          </div>\n          <img src=\"../../../assets/images/b7.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a class=\"gray_btn\">Rishav Ishu<br />Actor</a>\n          </div>\n          <img src=\"../../../assets/images/b8.jpg\" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- Artist Category [CLOSE]-->\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map