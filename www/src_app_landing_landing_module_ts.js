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







let LandingPageModule = class LandingPageModule {
};
LandingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPageRoutingModule
        ],
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
        this.landingPageData = [];
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
    }
    ngOnInit() {
        this.apiService.programClientState().subscribe((ready) => {
            if (ready) {
                this.clientReady = true;
                this.subscription();
            }
        });
        this.apiService.landingPageClientState().subscribe((ready) => {
            if (ready) {
                this.landingPageClientReady = true;
                this.loadLandingData();
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
        });
        this.apiService.loadTodaysProgram().subscribe((res) => {
            console.log("todays program", res);
        });
    }
    loadLandingData() {
        this.apiService.loadLandingPageContent().subscribe((res) => {
            console.log("landing page content", res);
            this.landingPageData = res;
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

module.exports = ".detailTxt {\n  color: #373636;\n  font-size: 1.5rem;\n}\n\nhr {\n  background-color: gray;\n}\n\n.icons {\n  font-size: 25px;\n  color: gray;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #fff;\n}\n\n.text-small {\n  font-size: 0.7rem;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtBQUVGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7QUFLRjs7QUFIQTtFQUFnQyxjQUFBO0FBT2hDOztBQUxBO0VBQXdCLGtCQUFBO0VBQ3RCLGdCQUFBO0VBQ0EsbUJBQUE7QUFTRjs7QUFQQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBVUE7O0FBUkE7RUFDSSx1QkFBQTtBQVdKOztBQVJBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVdBOztBQVRBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFZRjs7QUFSRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBV0o7O0FBVEE7RUFDSSx1QkFBQTtBQVlKOztBQVZFO0VBQ0UsY0FBQTtBQWFKOztBQVZFO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FBYUo7O0FBWEE7RUFDRSxVQUFBO0FBY0Y7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQWFGOztBQVhBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBY0Y7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBY0Y7O0FBWkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFlRjs7QUFYQTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQWNKOztBQVhBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQWNGOztBQVpFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFlSjs7QUFiRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFnQko7O0FBYkk7RUFBb0MsbUJBQUE7RUFDcEMsV0FBQTtBQWlCSjs7QUFkSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFpQlIiLCJmaWxlIjoibGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsVHh0IHtcbiAgY29sb3I6ICMzNzM2MzY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG5cbi5pY29ucyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnNsaWRlMl9pbWd7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnN3aXBlci1zbGlkZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zd2lwZXItc2xpZGU6YmVmb3Jle1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQgYSwgLnN3aXBlci1zbGlkZSAuY29udGVudCBzcGFue1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQgaW9uLWljb257Y29sb3I6ICNmZmFmMDA7fVxuXG4uYmFubmVyX3NsaWRlIGlvbi1zbGlkZXtwb3NpdGlvbjogcmVsYXRpdmU7IFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNhdGFnb3JpZXNfc2xpZGVye1xucGFkZGluZzogMTVweDtcbmJhY2tncm91bmQ6ICNmZmZmY2M7XG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYyY2MsICNmZmZmY2MpO1xufVxuLmNhdGFnb3JpZXNfc2xpZGVyIC5zd2lwZXItc2xpZGU6YmVmb3Jle1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG5cbi5ibHVlX2NhcmR7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmZkO1xuYm9yZGVyLXJhZGl1czogMTBweDtcbmJveC1zaGFkb3c6IG5vbmU7XG5wYWRkaW5nOiAxMHB4O1xufVxuLmJsdWVfY2FyZCAudHJlbmRpbmdfaW1ne1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG5cbiAgLnByb2R1Y3Rfc2xpZGV7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMEMxNTNCO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI2NDQsICMwQzE1M0IpO1xuICAgIH1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItc2xpZGU6YmVmb3Jle1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIC5wcm9kdWN0X3NsaWRlIHAgYXtcbiAgICBjb2xvcjogIzc5NzQ5NDtcbiAgfVxuICBcbiAgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZDogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgbGVmdDogMjVweDtcbn1cblxuXG4uZm9yeW91X2NhcmR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmZvcnlvdV9jYXJkOmJlZm9yZXtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uZm9yeW91X2NhcmQgLmJvb2ttYXJre1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmZvcnlvdV9jYXJkIC5jb250ZW50e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cblxuXG4uZm9yeW91X2NhcmQgaW1nIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJsdWVfdGFiX2NhcmR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLmJsdWVfdGFiX2NhcmQgaW9uLXJvd3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgfVxuICAuYmx1ZV90YWJfY2FyZCAudHJlbmRpbmdfaW1ne1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLmJ0bi1zZWdtZW50LnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7YmFja2dyb3VuZDogI2U0MmYwODtcbiAgICBjb2xvcjogI2ZmZjt9XG5cblxuICAgIC50ZXh0LXNtYWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNmZmYyY2M7XG4gICAgfSJdfQ== */";

/***/ }),

/***/ 5806:
/*!******************************************************!*\
  !*** ./src/app/landing/landing.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-row class=\"mt10\">\n    <ion-col size=\"12\" *ngFor=\"let landingData of landingPageData\">\n      <ion-text class=\"text-small\"> {{landingData.AppLandingPageText}}</ion-text>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-slides\n        #registerSlider\n        [options]=\"slideOpts\"\n        class=\"banner_slide\"\n        *ngIf=\"upcomingPrograms.length\"\n      >\n        <ion-slide *ngFor=\"let program of upcomingPrograms; let index=index;\">\n          <div class=\"content\">\n            <div class=\"red_btn\">\n              {{program.ProgramName | titlecase}} {{program.ProgramType | titlecase}}\n            </div>\n            <h4>{{program.AboutProgram ? program.AboutProgram : 'N/A'}}</h4>\n            <p>\n              <a href=\"#!\" class=\"mr-1\"><ion-icon name=\"person-outline\"></ion-icon>Nazrul</a>\n              <a href=\"#!\" class=\"mr-1\"\n                ><ion-icon name=\"calendar-outline\" class=\"mr-1\"></ion-icon>\n                {{program.ProgramDateTime | date : 'short'}}</a\n              >\n              <!-- <span><ion-icon name=\"bar-chart-outline\"></ion-icon>3 min read</span> -->\n            </p>\n          </div>\n          <img\n            src=\"{{'https://mpcd.solyn.in' + program.HomeSliderImage[index].PhotoPath}}\"\n            class=\"banner_img\"\n          />\n        </ion-slide>\n        <ion-slide>\n          <div class=\"content\">\n            <div class=\"red_btn\">Health</div>\n            <h4>Loses over 30kg on keto diet and one meal a day</h4>\n            <p>\n              <a href=\"#!\" class=\"mr-1\"><ion-icon name=\"person-outline\"></ion-icon>Nazrul</a>\n              <a href=\"#!\" class=\"mr-1\"\n                ><ion-icon name=\"calendar-outline\" class=\"mr-1\"></ion-icon> 21 March</a\n              ><span><ion-icon name=\"bar-chart-outline\"></ion-icon>3 min read</span>\n            </p>\n          </div>\n          <img src=\"../../../assets/images/banner2.jpg\" class=\"banner_img\" />\n        </ion-slide>\n        <ion-slide>\n          <div class=\"content\">\n            <div class=\"red_btn\">Health</div>\n            <h4>Loses over 30kg on keto diet and one meal a day</h4>\n            <p>\n              <a href=\"#!\" class=\"mr-1\"><ion-icon name=\"person-outline\"></ion-icon>Nazrul</a>\n              <a href=\"#!\" class=\"mr-1\"\n                ><ion-icon name=\"calendar-outline\" class=\"mr-1\"></ion-icon> 21 March</a\n              ><span><ion-icon name=\"bar-chart-outline\"></ion-icon>3 min read</span>\n            </p>\n          </div>\n          <img src=\"../../../assets/images/banner3.jpg\" class=\"banner_img\" />\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"mt20\">\n    <ion-col size=\"12\" class=\"catagories_slider\">\n      <h3 class=\"m-0\">Top Catagories</h3>\n      <ion-slides>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Sports</div>\n              </div>\n              <img src=\"../../../assets/images/slide1.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Fashion</div>\n              </div>\n              <img src=\"../../../assets/images/slide2.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Tech</div>\n              </div>\n              <img src=\"../../../assets/images/slide3.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Gadgets</div>\n              </div>\n              <img src=\"../../../assets/images/slide4.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Health</div>\n              </div>\n              <img src=\"../../../assets/images/slide5.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Politics</div>\n              </div>\n              <img src=\"../../../assets/images/slide6.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"mt20\">\n    <ion-col size=\"6\">\n      <h3 class=\"m-0 p-0\">Trending</h3>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-end\">\n      <a href=\"#!\" class=\"red_btn\">View All</a>\n    </ion-col>\n  </ion-row>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img src=\"../../../assets/images/trending_img1.jpg\" class=\"trending_img\" />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Swimming is a good exercise for the body</a>\n        </h6>\n        <a href=\"#!\" class=\"green_btn mr-1\">Sports</a>\n        <a href=\"#!\">2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img src=\"../../../assets/images/trending_img2.jpg\" class=\"trending_img\" />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Swimming is a good exercise for the body</a>\n        </h6>\n        <a href=\"#!\" class=\"green_btn mr-1\">Tech</a>\n        <a href=\"#!\">2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"blue_card\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img src=\"../../../assets/images/trending_img3.jpg\" class=\"trending_img\" />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Swimming is a good exercise for the body</a>\n        </h6>\n        <a href=\"#!\" class=\"green_btn mr-1\">Fashion</a>\n        <a href=\"#!\">2 Aug 2022</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-row class=\"mt20\">\n    <ion-col size=\"12\" class=\"product_slide\">\n      <h1 class=\"text-white ion-text-center text-yellow\">\n        <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\n      </h1>\n      <h4 class=\"text-white ion-text-center mb20\">Editorial Choice</h4>\n      <ion-slides pager=\"true\" #productSlider>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <img src=\"../../../assets/images/slide1.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-text-start\">\n              <div class=\"see_green_btn mb10\">Sports</div>\n              <h5>\n                <a href=\"#!\" class=\"text-white\">Basketball is becoming popular young people</a>\n              </h5>\n              <p class=\"mt20\">\n                <a href=\"#!\" class=\"mr-1 text-white\"\n                  ><ion-icon name=\"person-outline\"></ion-icon>Nazrul</a\n                >\n                <a href=\"#!\" class=\"text-white\"\n                  ><ion-icon name=\"calendar-outline\"></ion-icon> 30 March</a\n                >\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <img src=\"../../../assets/images/slide3.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-text-start\">\n              <div class=\"see_green_btn mb10\">Sports</div>\n              <h5>\n                <a href=\"#!\" class=\"text-white\">Basketball is becoming popular young people</a>\n              </h5>\n              <p class=\"mt20\">\n                <a href=\"#!\" class=\"mr-1 text-white\"\n                  ><ion-icon name=\"person-outline\"></ion-icon>Nazrul</a\n                >\n                <a href=\"#!\" class=\"text-white\"\n                  ><ion-icon name=\"calendar-outline\"></ion-icon> 30 March</a\n                >\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <img src=\"../../../assets/images/slide5.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-text-start\">\n              <div class=\"see_green_btn mb10\">Sports</div>\n              <h5>\n                <a href=\"#!\" class=\"text-white\">Basketball is becoming popular young people</a>\n              </h5>\n              <p class=\"mt20\">\n                <a href=\"#!\" class=\"mr-1 text-white\"\n                  ><ion-icon name=\"person-outline\"></ion-icon>Nazrul</a\n                >\n                <a href=\"#!\" class=\"text-white\"\n                  ><ion-icon name=\"calendar-outline\"></ion-icon> 30 March</a\n                >\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"mt20\">\n    <ion-col size=\"6\">\n      <h3 class=\"m-0 p-0\">For You</h3>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-end\">\n      <a href=\"#!\" class=\"red_btn\">View All</a>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-card class=\"foryou_card\">\n        <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n        <div class=\"content\">\n          <p class=\"text-yellow\">Sports</p>\n          <p class=\"text-white mb0\">Lemon is useful to lose weight</p>\n        </div>\n        <img src=\"../../../assets/images/slide1.jpg\" />\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card class=\"foryou_card\">\n        <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n        <div class=\"content\">\n          <p class=\"text-yellow\">Fashion</p>\n          <p class=\"text-white mb0\">Lemon is useful to lose weight</p>\n        </div>\n        <img src=\"../../../assets/images/slide2.jpg\" />\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card class=\"foryou_card\">\n        <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n        <div class=\"content\">\n          <p class=\"text-yellow\">Tech</p>\n          <p class=\"text-white mb0\">Lemon is useful to lose weight</p>\n        </div>\n        <img src=\"../../../assets/images/slide3.jpg\" />\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card class=\"foryou_card\">\n        <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n        <div class=\"content\">\n          <p class=\"text-yellow\">Gadgets</p>\n          <p class=\"text-white mb0\">Lemon is useful to lose weight</p>\n        </div>\n        <img src=\"../../../assets/images/slide4.jpg\" />\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-segment class=\"btn-segment mt20\">\n    <ion-segment-button class=\"btn-segment\" value=\"Newest\">\n      <ion-label>Newest</ion-label>\n    </ion-segment-button>\n    <ion-segment-button class=\"btn-segment\" value=\"Popular\">\n      <ion-label>Popular</ion-label>\n    </ion-segment-button>\n    <ion-segment-button class=\"btn-segment\" value=\"Featured\">\n      <ion-label>Featured</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-card class=\"blue_tab_card\">\n    <ion-row class=\"mb10\">\n      <ion-col size=\"4\">\n        <img src=\"../../../assets/images/trending_img1.jpg\" class=\"trending_img\" />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Balcony gardening is a new trend of big cities</a>\n        </h6>\n        <a href=\"#!\" class=\"mr-1\">Mayaj</a> |\n        <a href=\"#!\" class=\"ml-1\">9 min read</a>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"mb10\">\n      <ion-col size=\"4\">\n        <img src=\"../../../assets/images/trending_img2.jpg\" class=\"trending_img\" />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">The world is becoming polluted very fast and lives are being destroyed</a>\n        </h6>\n        <a href=\"#!\" class=\"mr-1\">Nazrul</a> |\n        <a href=\"#!\" class=\"ml-1\">27 min read</a>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n        <img src=\"../../../assets/images/trending_img3.jpg\" class=\"trending_img\" />\n      </ion-col>\n      <ion-col size=\"8\">\n        <h6 class=\"mb10\">\n          <a href=\"#!\">Sea is polluted in a terrible way by human garbage</a>\n        </h6>\n        <a href=\"#!\" class=\"mr-1\">Suha</a> |\n        <a href=\"#!\" class=\"ml-1\">95 min read</a>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-row class=\"mt20\">\n    <ion-col size=\"12\">\n      <h3 class=\"mb20\">Popular Tags</h3>\n      <p>\n        <a class=\"red_btn mr-1 mb10\" href=\"#\">#Politics</a\n        ><a class=\"green_btn mr-1 mb10\" href=\"#\">#Fashion</a\n        ><a class=\"orange_btn mr-1 mb10\" href=\"#\">#Tech</a\n        ><a class=\"danger_btn mr-1 mb10\" href=\"#\">#Lifestyle</a\n        ><a class=\"blue_btn mr-1 mb10\" href=\"#\">#Sports</a\n        ><a class=\"green_btn mr-1 mb10\" href=\"#\">#World</a\n        ><a class=\"orange_btn mr-1 mb10\" href=\"#\">#Environment</a\n        ><a class=\"danger_btn mr-1 mb10\" href=\"#\">#People</a\n        ><a class=\"blue_btn mr-1 mb10\" href=\"#\">#Gadgets</a\n        ><a class=\"green_btn mr-1 mb10\" href=\"#\">#Health</a\n        ><a class=\"red_btn mb10\" href=\"#\">#Wildlife</a>\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_landing_landing_module_ts.js.map