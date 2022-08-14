"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_landing_landing_module_ts"],{

/***/ 96990:
/*!***************************************************!*\
  !*** ./src/app/landing/landing-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageRoutingModule": () => (/* binding */ LandingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.page */ 75970);




const routes = [
    {
        path: "",
        component: _landing_page__WEBPACK_IMPORTED_MODULE_0__.LandingPage
    }
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], LandingPageRoutingModule);



/***/ }),

/***/ 68721:
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageModule": () => (/* binding */ LandingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-routing.module */ 96990);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page */ 75970);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 341);








let LandingPageModule = class LandingPageModule {
};
LandingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPageRoutingModule, swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_1__.LandingPage]
    })
], LandingPageModule);



/***/ }),

/***/ 75970:
/*!*****************************************!*\
  !*** ./src/app/landing/landing.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPage": () => (/* binding */ LandingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.page.html?ngResource */ 5806);
/* harmony import */ var _landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page.scss?ngResource */ 52075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-service.service */ 7149);





let LandingPage = class LandingPage {
    constructor(apiService) {
        this.apiService = apiService;
        this.upcomingPrograms = [];
        this.todaysPrograms = [];
        this.pastPrograms = [];
        this.mediaUrl = "http://mpcd.solyn.in";
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
LandingPage.ctorParameters = () => [
    { type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__.ApiServiceService }
];
LandingPage.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ["slider", { static: false },] }],
    slideOpts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ["registerSlider", { static: false },] }]
};
LandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-landing",
        template: _landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LandingPage);



/***/ }),

/***/ 52075:
/*!******************************************************!*\
  !*** ./src/app/landing/landing.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  background: red;\n  height: 5vh;\n  text-align: center;\n}\n\n.detailTxt {\n  color: #373636;\n  font-size: 1.5rem;\n}\n\nhr {\n  background-color: gray;\n}\n\n.icons {\n  font-size: 25px;\n  color: gray;\n  padding-left: 10px;\n}\n\n.swiper-pagination-bullet-active {\n  --background: #eef0f2;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #fff;\n}\n\n.anchor {\n  color: white;\n  font-size: 0.8rem;\n}\n\n.text-small {\n  font-size: 0.7rem;\n  font-weight: 300;\n}\n\n.padding-5 {\n  padding: 5px;\n}\n\nmarquee ion-text {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtBQUdGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ00scUJBQUE7QUFHTjs7QUFEQTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxXQUFBO0FBUUY7O0FBTkE7RUFBZ0MsY0FBQTtBQVVoQzs7QUFSQTtFQUF3QixrQkFBQTtFQUN0QixnQkFBQTtFQUNBLG1CQUFBO0FBWUY7O0FBVkE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSx1REFBQTtBQWFBOztBQVhBO0VBQ0ksdUJBQUE7QUFjSjs7QUFYQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFjQTs7QUFaQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZUY7O0FBWEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSx1REFBQTtBQWNKOztBQVpBO0VBQ0ksdUJBQUE7QUFlSjs7QUFiRTtFQUNFLGNBQUE7QUFnQko7O0FBYkU7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7QUFnQko7O0FBZEE7RUFDRSxVQUFBO0FBaUJGOztBQWJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFnQkY7O0FBZEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFpQkY7O0FBZEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBaUJGOztBQWZBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBa0JGOztBQWRBO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBaUJKOztBQWRBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQWlCRjs7QUFmRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBa0JKOztBQWhCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFtQko7O0FBaEJJO0VBQW9DLG1CQUFBO0VBQ3BDLFdBQUE7QUFvQko7O0FBbEJBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBcUJGOztBQWxCSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFxQlI7O0FBbEJJO0VBQ0UsWUFBQTtBQXFCTjs7QUFuQkk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQXNCTiIsImZpbGUiOiJsYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gIGJhY2tncm91bmQ6cmVkO1xuICBoZWlnaHQ6NXZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGV0YWlsVHh0IHtcbiAgY29sb3I6ICMzNzM2MzY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG5cbi5pY29ucyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2VlZjBmMjtcbn1cbi5zbGlkZTJfaW1ne1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zd2lwZXItc2xpZGV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3dpcGVyLXNsaWRlOmJlZm9yZXtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGEsIC5zd2lwZXItc2xpZGUgLmNvbnRlbnQgc3BhbntcbiAgY29sb3I6ICNmZmY7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGlvbi1pY29ue2NvbG9yOiAjZmZhZjAwO31cblxuLmJhbm5lcl9zbGlkZSBpb24tc2xpZGV7cG9zaXRpb246IHJlbGF0aXZlOyBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jYXRhZ29yaWVzX3NsaWRlcntcbnBhZGRpbmc6IDE1cHg7XG5iYWNrZ3JvdW5kOiAjZmZmZmNjO1xuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYyY2MsICNmZmZmY2MpO1xuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmMmNjLCAjZmZmZmNjKTtcbn1cbi5jYXRhZ29yaWVzX3NsaWRlciAuc3dpcGVyLXNsaWRlOmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4uYmx1ZV9jYXJke1xuYmFja2dyb3VuZC1jb2xvcjogI2RjZWJmZDtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG5ib3gtc2hhZG93OiBub25lO1xucGFkZGluZzogMTBweDtcbn1cbi5ibHVlX2NhcmQgLnRyZW5kaW5nX2ltZ3tcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIFxuXG4gIC5wcm9kdWN0X3NsaWRle1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogIzBDMTUzQjtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0MjY0NCwgIzBDMTUzQik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcbiAgICB9XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXNsaWRlOmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAucHJvZHVjdF9zbGlkZSBwIGF7XG4gICAgY29sb3I6ICM3OTc0OTQ7XG4gIH1cbiAgXG4gIC5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQ6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbiwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIGxlZnQ6IDI1cHg7XG59XG5cblxuLmZvcnlvdV9jYXJke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5mb3J5b3VfY2FyZDpiZWZvcmV7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmZvcnlvdV9jYXJkIC5ib29rbWFya3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mb3J5b3VfY2FyZCAuY29udGVudHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG5cblxuLmZvcnlvdV9jYXJkIGltZyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5ibHVlX3RhYl9jYXJke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmZkO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIC5ibHVlX3RhYl9jYXJkIGlvbi1yb3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIH1cbiAgLmJsdWVfdGFiX2NhcmQgLnRyZW5kaW5nX2ltZ3tcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cblxuICAgIC5idG4tc2VnbWVudC5zZWdtZW50LWJ1dHRvbi1jaGVja2Vke2JhY2tncm91bmQ6ICNlNDJmMDg7XG4gICAgY29sb3I6ICNmZmY7fVxuXG4uYW5jaG9yIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuICAgIC50ZXh0LXNtYWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNmZmYyY2M7XG4gICAgfVxuICAgIC5wYWRkaW5nLTV7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuICAgIG1hcnF1ZWUgaW9uLXRleHQge1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiJdfQ== */";

/***/ }),

/***/ 5806:
/*!******************************************************!*\
  !*** ./src/app/landing/landing.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-row>\n    <ion-col size=\"8\">\n      <marquee\n        direction=\"left\"\n        behavior=\"loop\"\n        [scrollAmount]=\"scrollAmount\"\n        (mouseover)=\"scrollAmount = 0\"\n        (mouseout)=\"scrollAmount = 4\"\n      >\n        <ion-text class=\"text-small\">\n          वित्तीय वर्ष 2020-21 के लिए अशासकीय संस्थाओं को स्वीकृति आदेश</ion-text\n        >\n      </marquee>\n    </ion-col>\n    <ion-col size=\"4\">\n      <a [routerLink]=\"['../signup']\" class=\"anchor\">Login/Signup</a>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"padding-5\">\n  <ion-row>\n    <ion-col>\n      <ion-slides [options]=\"slideOptsOne\" *ngIf=\"landingImages\">\n        <ion-slide *ngFor=\"let landingData of landingImages; let index=index\">\n          <img src=\"{{mediaUrl + landingData?.PhotoPath}}\" class=\"banner_img\" />\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"mt10\">\n    <ion-col size=\"12\" *ngFor=\"let landingData of landingPageData\">\n      <ion-text class=\"text-small\"> {{landingData.AppLandingPageText}}</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-slides\n        #registerSlider\n        [options]=\"slideOpts\"\n        class=\"banner_slide\"\n        *ngIf=\"pastPrograms.length\"\n      >\n        <ion-slide *ngFor=\"let program of pastPrograms; let index=index;\">\n          <div class=\"content\">\n            <div class=\"red_btn\">\n              {{program.ProgramName | titlecase}} {{program.ProgramType | titlecase}}\n            </div>\n            <h4>{{program.AboutProgram ? program.AboutProgram : 'N/A'}}</h4>\n            <p>\n              <a class=\"mr-1\"><ion-icon name=\"person-outline\"></ion-icon>Nazrul</a>\n              <a class=\"mr-1\"\n                ><ion-icon name=\"calendar-outline\" class=\"mr-1\"></ion-icon>\n                {{program.ProgramDateTime | date : 'short'}}</a\n              >\n              <!-- <span><ion-icon name=\"bar-chart-outline\"></ion-icon>3 min read</span> -->\n            </p>\n          </div>\n          <img\n            *ngIf=\"program.ProgramMultiMedia[0].MediaType == 'PHOTO'\"\n            src=\"{{mediaUrl + program.ProgramMultiMedia[0].MediaPath}}\"\n            class=\"banner_img\"\n          />\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"mt20\">\n    <ion-col size=\"12\" class=\"catagories_slider\">\n      <h3 class=\"m-0\">Top Catagories</h3>\n      <ion-slides>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Sports</div>\n              </div>\n              <img src=\"../../../assets/images/slide1.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Fashion</div>\n              </div>\n              <img src=\"../../../assets/images/slide2.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Tech</div>\n              </div>\n              <img src=\"../../../assets/images/slide3.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Gadgets</div>\n              </div>\n              <img src=\"../../../assets/images/slide4.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Health</div>\n              </div>\n              <img src=\"../../../assets/images/slide5.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Politics</div>\n              </div>\n              <img src=\"../../../assets/images/slide6.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"mt20\">\n    <ion-col size=\"6\">\n      <h3 class=\"m-0 p-0\">Trending</h3>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-end\">\n      <a class=\"red_btn\">View All</a>\n    </ion-col>\n  </ion-row>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img src=\"../../../assets/images/trending_img1.jpg\" class=\"trending_img\" />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a>Swimming is a good exercise for the body</a>\n        </h6>\n        <a class=\"green_btn mr-1\">Sports</a>\n        <a>2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img src=\"../../../assets/images/trending_img2.jpg\" class=\"trending_img\" />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a>Swimming is a good exercise for the body</a>\n        </h6>\n        <a class=\"green_btn mr-1\">Tech</a>\n        <a>2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img src=\"../../../assets/images/trending_img3.jpg\" class=\"trending_img\" />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a>Swimming is a good exercise for the body</a>\n        </h6>\n        <a class=\"green_btn mr-1\">Fashion</a>\n        <a>2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-row class=\"mt20\">\n    <ion-col size=\"12\" class=\"product_slide\">\n      <h1 class=\"text-white ion-text-center text-yellow\">\n        <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\n      </h1>\n      <h4 class=\"text-white ion-text-center mb20\">Editorial Choice</h4>\n      <ion-slides pager=\"true\" #productSlider>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <img src=\"../../../assets/images/slide1.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-text-start\">\n              <div class=\"see_green_btn mb10\">Sports</div>\n              <h5>\n                <a class=\"text-white\">Basketball is becoming popular young people</a>\n              </h5>\n              <p class=\"mt20\">\n                <a class=\"mr-1 text-white\"><ion-icon name=\"person-outline\"></ion-icon>Nazrul</a>\n                <a class=\"text-white\"><ion-icon name=\"calendar-outline\"></ion-icon> 30 March</a>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <img src=\"../../../assets/images/slide3.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-text-start\">\n              <div class=\"see_green_btn mb10\">Sports</div>\n              <h5>\n                <a class=\"text-white\">Basketball is becoming popular young people</a>\n              </h5>\n              <p class=\"mt20\">\n                <a class=\"mr-1 text-white\"><ion-icon name=\"person-outline\"></ion-icon>Nazrul</a>\n                <a class=\"text-white\"><ion-icon name=\"calendar-outline\"></ion-icon> 30 March</a>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <img src=\"../../../assets/images/slide5.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-text-start\">\n              <div class=\"see_green_btn mb10\">Sports</div>\n              <h5>\n                <a class=\"text-white\">Basketball is becoming popular young people</a>\n              </h5>\n              <p class=\"mt20\">\n                <a class=\"mr-1 text-white\"><ion-icon name=\"person-outline\"></ion-icon>Nazrul</a>\n                <a class=\"text-white\"><ion-icon name=\"calendar-outline\"></ion-icon> 30 March</a>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"mt20\">\n    <ion-col size=\"6\">\n      <h3 class=\"m-0 p-0\">For You</h3>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-end\">\n      <a class=\"red_btn\">View All</a>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-card class=\"foryou_card\">\n        <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n        <div class=\"content\">\n          <p class=\"text-yellow\">Sports</p>\n          <p class=\"text-white mb0\">Lemon is useful to lose weight</p>\n        </div>\n        <img src=\"../../../assets/images/slide1.jpg\" />\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card class=\"foryou_card\">\n        <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n        <div class=\"content\">\n          <p class=\"text-yellow\">Fashion</p>\n          <p class=\"text-white mb0\">Lemon is useful to lose weight</p>\n        </div>\n        <img src=\"../../../assets/images/slide2.jpg\" />\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card class=\"foryou_card\">\n        <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n        <div class=\"content\">\n          <p class=\"text-yellow\">Tech</p>\n          <p class=\"text-white mb0\">Lemon is useful to lose weight</p>\n        </div>\n        <img src=\"../../../assets/images/slide3.jpg\" />\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card class=\"foryou_card\">\n        <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n        <div class=\"content\">\n          <p class=\"text-yellow\">Gadgets</p>\n          <p class=\"text-white mb0\">Lemon is useful to lose weight</p>\n        </div>\n        <img src=\"../../../assets/images/slide4.jpg\" />\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-segment class=\"btn-segment mt20\">\n    <ion-segment-button class=\"btn-segment\" value=\"Newest\">\n      <ion-label>Newest</ion-label>\n    </ion-segment-button>\n    <ion-segment-button class=\"btn-segment\" value=\"Popular\">\n      <ion-label>Popular</ion-label>\n    </ion-segment-button>\n    <ion-segment-button class=\"btn-segment\" value=\"Featured\">\n      <ion-label>Featured</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-card class=\"blue_tab_card\">\n    <ion-row class=\"mb10\">\n      <ion-col size=\"4\">\n        <img src=\"../../../assets/images/trending_img1.jpg\" class=\"trending_img\" />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a>Balcony gardening is a new trend of big cities</a>\n        </h6>\n        <a class=\"mr-1\">Mayaj</a> |\n        <a class=\"ml-1\">9 min read</a>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"mb10\">\n      <ion-col size=\"4\">\n        <img src=\"../../../assets/images/trending_img2.jpg\" class=\"trending_img\" />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a>The world is becoming polluted very fast and lives are being destroyed</a>\n        </h6>\n        <a class=\"mr-1\">Nazrul</a> |\n        <a class=\"ml-1\">27 min read</a>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n        <img src=\"../../../assets/images/trending_img3.jpg\" class=\"trending_img\" />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a>Sea is polluted in a terrible way by human garbage</a>\n        </h6>\n        <a class=\"mr-1\">Suha</a> |\n        <a class=\"ml-1\">95 min read</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-row class=\"mt20\">\n    <ion-col size=\"12\">\n      <h3 class=\"mb20\">Popular Tags</h3>\n      <p>\n        <a class=\"red_btn mr-1 mb10\" href=\"#\">#Politics</a\n        ><a class=\"green_btn mr-1 mb10\" href=\"#\">#Fashion</a\n        ><a class=\"orange_btn mr-1 mb10\" href=\"#\">#Tech</a\n        ><a class=\"danger_btn mr-1 mb10\" href=\"#\">#Lifestyle</a\n        ><a class=\"blue_btn mr-1 mb10\" href=\"#\">#Sports</a\n        ><a class=\"green_btn mr-1 mb10\" href=\"#\">#World</a\n        ><a class=\"orange_btn mr-1 mb10\" href=\"#\">#Environment</a\n        ><a class=\"danger_btn mr-1 mb10\" href=\"#\">#People</a\n        ><a class=\"blue_btn mr-1 mb10\" href=\"#\">#Gadgets</a\n        ><a class=\"green_btn mr-1 mb10\" href=\"#\">#Health</a\n        ><a class=\"red_btn mb10\" href=\"#\">#Wildlife</a>\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_landing_landing_module_ts.js.map