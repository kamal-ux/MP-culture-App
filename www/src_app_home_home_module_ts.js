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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 91670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-service.service */ 7149);





let HomePage = class HomePage {
    constructor(apiService) {
        this.apiService = apiService;
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
    }
    subscription() {
        this.apiService.loadUpcomingProgram().subscribe((res) => {
            console.log("upcoming program", res);
        });
        this.apiService.loadPastProgram().subscribe((res) => {
            console.log("past program", res);
        });
        this.apiService.loadTodaysProgram().subscribe((res) => {
            console.log("todays program", res);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__.ApiServiceService }
];
HomePage.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ["slider", { static: false },] }],
    slideOpts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ["registerSlider", { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-home",
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".icons {\n  font-size: 25px;\n  color: gray;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n  margin: 0 0 10px 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #e42f08;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNEOztBQUNBO0VBQ0MsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBRUQ7O0FBQUE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFHRDs7QUFEQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFJRDs7QUFGQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUtEOztBQUhBO0VBQ0MsV0FBQTtBQU1EOztBQUpBO0VBQ0MsY0FBQTtBQU9EOztBQUxBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUUQ7O0FBTkE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFFQSx1REFBQTtBQVNEOztBQVBBO0VBQ0MsdUJBQUE7QUFVRDs7QUFSQTtFQUNDLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQyxrQkFBQTtBQVdGOztBQVRBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFZRDs7QUFWQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBYUQ7O0FBWEE7RUFDQyx1QkFBQTtBQWNEOztBQVpBO0VBQ0MsY0FBQTtBQWVEOztBQWJBO0VBQ0MsVUFBQTtFQUNBLDhCQUFBO0FBZ0JEOztBQWRBO0VBQ0MsVUFBQTtBQWlCRDs7QUFmQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBa0JEOztBQWhCQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQW1CRDs7QUFqQkE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBb0JEOztBQWxCQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQXFCRDs7QUFuQkE7RUFDQyxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFzQkQ7O0FBcEJBO0VBQ0MseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNDLGtCQUFBO0FBdUJGOztBQXJCQTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBd0JEOztBQXRCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF5QkQ7O0FBdkJBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBMEJEIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25zIHtcblx0Zm9udC1zaXplOiAyNXB4O1xuXHRjb2xvcjogZ3JheTtcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnNsaWRlMl9pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0bWF4LWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zd2lwZXItc2xpZGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3dpcGVyLXNsaWRlOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAyMHB4O1xuXHRsZWZ0OiAxMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCBhLCAuc3dpcGVyLXNsaWRlIC5jb250ZW50IHNwYW4ge1xuXHRjb2xvcjogI2ZmZjtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQgaW9uLWljb24ge1xuXHRjb2xvcjogI2ZmYWYwMDtcbn1cbi5iYW5uZXJfc2xpZGUgaW9uLXNsaWRlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNhdGFnb3JpZXNfc2xpZGVyIHtcblx0cGFkZGluZzogMTVweDtcblx0YmFja2dyb3VuZDogI2ZmZmZjYztcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYyY2MsICNmZmZmY2MpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYyY2MsICNmZmZmY2MpO1xufVxuLmNhdGFnb3JpZXNfc2xpZGVyIC5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYmx1ZV9jYXJkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZWJmZDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0cGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLmJsdWVfY2FyZCAudHJlbmRpbmdfaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRtYXgtaGVpZ2h0OiA4MHB4O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnByb2R1Y3Rfc2xpZGUge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiAjMEMxNTNCO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0MjY0NCwgIzBDMTUzQik7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0MjY0NCwgIzBDMTUzQik7XG59XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXNsaWRlOmJlZm9yZSB7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnByb2R1Y3Rfc2xpZGUgcCBhIHtcblx0Y29sb3I6ICM3OTc0OTQ7XG59XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG5cdG9wYWNpdHk6IDE7XG5cdGJhY2tncm91bmQ6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbiwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG5cdGxlZnQ6IDI1cHg7XG59XG4uZm9yeW91X2NhcmQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcbn1cbi5mb3J5b3VfY2FyZDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG59XG4uZm9yeW91X2NhcmQgLmJvb2ttYXJrIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDE1cHg7XG5cdHJpZ2h0OiAxNXB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mb3J5b3VfY2FyZCAuY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAyMHB4O1xuXHRsZWZ0OiAxMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuLmZvcnlvdV9jYXJkIGltZyB7XG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYmx1ZV90YWJfY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cbi5ibHVlX3RhYl9jYXJkIGlvbi1yb3cge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHBhZGRpbmc6IDdweDtcbn1cbi5ibHVlX3RhYl9jYXJkIC50cmVuZGluZ19pbWcge1xuXHR3aWR0aDogODBweDtcblx0aGVpZ2h0OiA4MHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYnRuLXNlZ21lbnQuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG5cdGJhY2tncm91bmQ6ICNlNDJmMDg7XG5cdGNvbG9yOiAjZTQyZjA4O1xufVxuIl19 */";

/***/ }),

/***/ 91670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title> Home </ion-title>\n    <ion-buttons slot=\"start\" name=\"main\">\n      <ion-menu-button>\n        <ion-icon name=\"grid-outline\" class=\"icons\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt10\">\n      <ion-col size=\"6\">\n        <h3 class=\"m-0 p-0\">News Today</h3>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <p>Tuesday, 2 August</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-slides #registerSlider [options]=\"slideOpts\" class=\"banner_slide\">\n          <ion-slide>\n            <div class=\"content\">\n              <div class=\"red_btn\">Health</div>\n              <h4>Loses over 30kg on keto diet and one meal a day</h4>\n              <p>\n                <a href=\"#!\" class=\"mr-1\">\n                  <ion-icon name=\"person-outline\"></ion-icon>\n                  Nazrul</a\n                >\n                <a href=\"#!\" class=\"mr-1\">\n                  <ion-icon name=\"calendar-outline\" class=\"mr-1\"></ion-icon>\n                  21 March</a\n                ><span>\n                  <ion-icon name=\"bar-chart-outline\"></ion-icon>\n                  3 min read</span\n                >\n              </p>\n            </div>\n            <img src=\"../../../assets/images/banner1.jpg\" class=\"banner_img\" />\n          </ion-slide>\n          <ion-slide>\n            <div class=\"content\">\n              <div class=\"red_btn\">Health</div>\n              <h4>Loses over 30kg on keto diet and one meal a day</h4>\n              <p>\n                <a href=\"#!\" class=\"mr-1\">\n                  <ion-icon name=\"person-outline\"></ion-icon>\n                  Nazrul</a\n                >\n                <a href=\"#!\" class=\"mr-1\">\n                  <ion-icon name=\"calendar-outline\" class=\"mr-1\"></ion-icon>\n                  21 March</a\n                ><span>\n                  <ion-icon name=\"bar-chart-outline\"></ion-icon>\n                  3 min read</span\n                >\n              </p>\n            </div>\n            <img src=\"../../../assets/images/banner2.jpg\" class=\"banner_img\" />\n          </ion-slide>\n          <ion-slide>\n            <div class=\"content\">\n              <div class=\"red_btn\">Health</div>\n              <h4>Loses over 30kg on keto diet and one meal a day</h4>\n              <p>\n                <a href=\"#!\" class=\"mr-1\">\n                  <ion-icon name=\"person-outline\"></ion-icon>\n                  Nazrul</a\n                >\n                <a href=\"#!\" class=\"mr-1\">\n                  <ion-icon name=\"calendar-outline\" class=\"mr-1\"></ion-icon>\n                  21 March</a\n                ><span>\n                  <ion-icon name=\"bar-chart-outline\"></ion-icon>\n                  3 min read</span\n                >\n              </p>\n            </div>\n            <img src=\"../../../assets/images/banner3.jpg\" class=\"banner_img\" />\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h3 class=\"m-0 p-0\">हमारे बारे में / About Us</h3>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <img src=\"../../../assets/images/about.png\" class=\"about_img\" />\n      </ion-col>\n      <ion-col size=\"12\">\n        <p>\n          मध्येप्रदेश की कला, साहित्य और संस्कृति को हर सम्भव उपयों द्वारा\n          प्रोन्नत करना, सांस्कृतिक धरोहर, पुरातात्विक सम्पदा एवं ऐतिहासिक महत्व\n          का यथास्थिति संरक्षण एवं विरूपण, विनाश, अपक्षरण, व्ययन या निर्यात से\n          संरक्षण, जनजातीय और लोक कला, साहित्य एवं संस्कृति का अनुरक्षण,\n          संरक्षण, प्रोत्साहन, प्रदर्शन, प्रशिक्षण एवं विकास करना संस्कृति विभाग\n          का मुख्य उद्देश्य हैं। मध्यप्रदेश की कला, संस्कृति, साहित्य, राजभाषा,\n          स्वाधीनता संग्राम से संबंधित एवं पुरासम्पदा के संरक्षण, संवर्धन तथा\n          उनके उत्तरोत्तर विकास, कलाकारों, साहित्यकारों, विद्वानों,\n          पुरातत्वविदों एवं संगठनों का सम्मांन, नाट्य विद्यालय, रंगकर्म प्रदर्शन\n          तथा अध्ययन, अभिनय, प्रशिक्षण, प्रचार और विकास, अशासकीय सांस्कृतिक\n          संगठनों को प्रोत्साहन एवं वित्तीय सहायता उपलब्ध कराना, संगीत एवं ललित\n          कला को प्रोन्नत, सुदृढ़, विस्तार आदि के लिये उद्देश्य अनुरूप सक्रिय\n          है।\n        </p>\n        <p>\n          विभाग संस्कृति के विभिन्न क्षेत्रों में प्रतिभा को बढ़ावा देने और\n          मध्यप्रदेश की समृद्ध संस्कृति/विरासत के बारे में देश-दुनिया को जानकारी\n          देने के लिए राज्य भर में कई सांस्कृतिक गतिविधियों का आयोजन,\n          प्रचार-प्रसार एवं दस्तावेजीकरण करता है।\n        </p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- <ion-row class=\"mt20\">\n    <ion-col size=\"12\" class=\"catagories_slider\">\n      <h3 class=\"m-0\">Top Catagories</h3>\n      <ion-slides>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Sports</div>\n              </div>\n              <img src=\"../../../assets/images/slide1.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Fashion</div>\n              </div>\n              <img src=\"../../../assets/images/slide2.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Tech</div>\n              </div>\n              <img src=\"../../../assets/images/slide3.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Gadgets</div>\n              </div>\n              <img src=\"../../../assets/images/slide4.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Health</div>\n              </div>\n              <img src=\"../../../assets/images/slide5.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Politics</div>\n              </div>\n              <img src=\"../../../assets/images/slide6.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row> -->\n\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">आज के कार्यक्रम</span\n          ><span class=\"mt10 d-block\">Today's Program</span>\n        </h5>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\"> </ion-col>\n    </ion-row>\n    <ion-card class=\"blue_card\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"../../../assets/images/b3.jpg\" class=\"trending_img\" />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <a href=\"#!\">राष्ट्रीय चेतना जा सुर </a>\n          </h6>\n          <a href=\"#!\" class=\"red_btn mr-1\">भोपाल</a>\n          <a href=\"#!\">08 अगस्त 2022</a>\n          <p class=\"mt10\">\n            राष्ट्रीय गीतों की प्रस्तुति <br />सिंधी साहित्य अकादमी\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">आगामी कार्यक्रम</span\n          ><span class=\"mt10 d-block\">Upcoming Program</span>\n        </h5>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <a href=\"#!\" class=\"red_btn\">View All</a>\n      </ion-col>\n    </ion-row>\n    <ion-card class=\"blue_card\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"../../../assets/images/b1.jpg\" class=\"trending_img\" />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <a href=\"#!\">स्वाधीनता पर्व</a>\n          </h6>\n          <a href=\"#!\" class=\"see_green_btn mr-1\">भोपाल</a>\n          <a href=\"#!\">15 अगस्त 2022</a>\n          <p class=\"mt10\">देशभक्ति आधारित स्वराज संस्थान संचालनालय</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"blue_card\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"../../../assets/images/b3.jpg\" class=\"trending_img\" />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <a href=\"#!\">स्मृति समारोह </a>\n            <p>सुभद्रा कुमारी चौहान</p>\n          </h6>\n          <a href=\"#!\" class=\"red_btn mr-1\">सिवनी</a>\n          <a href=\"#!\">17 अगस्त 2022</a>\n          <p class=\"mt10\">विमर्श एवं रचनापाठ साहित्य अकादमी</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"blue_card\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"../../../assets/images/b.jpg\" class=\"trending_img\" />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <a href=\"#!\">व्याख्यान</a>\n          </h6>\n          <a href=\"#!\" class=\"orange_btn mr-1\">उज्जैन</a>\n          <a href=\"#!\">17 अगस्त 2022</a>\n          <p class=\"mt10\">\n            बलरामः कृषि संस्कृति के प्रणेता जनजातीय लोककला एवं बोली विकास अका.\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-card class=\"blue_card\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img src=\"../../../assets/images/b2.jpg\" class=\"trending_img\" />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <a href=\"#!\">ललित पर्व</a>\n          </h6>\n          <a href=\"#!\" class=\"see_green_btn mr-1\">उज्जैन</a>\n          <a href=\"#!\">18-20 अगस्त 2022</a>\n          <p class=\"mt10\">\n            श्रीकृष्ण के आख्यान की कला अभिव्यक्तियाँ जनजातीय लोककला एवं बोली\n            विकास अका.\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">कलाकार श्रेणी</span\n          ><span class=\"mt10 d-block\">Artist Category</span>\n        </h5>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <a href=\"#!\" class=\"red_btn\">View All</a>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a href=\"#!\" class=\"red_btn\">शास्त्रीय / classical</a>\n          </div>\n          <img src=\"../../../assets/images/cat1.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a href=\"#!\" class=\"red_btn\">उप शास्त्रीय / sub classical</a>\n          </div>\n          <img src=\"../../../assets/images/cat2.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a href=\"#!\" class=\"red_btn\">आधुनिक कला / modern Art</a>\n          </div>\n          <img src=\"../../../assets/images/cat3.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a href=\"#!\" class=\"red_btn\">लोक एवं आदिवासी / folk and tribal</a>\n          </div>\n          <img src=\"../../../assets/images/cat4.jpg\" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">मासिक लोकप्रिय कलाकार</span\n          ><span class=\"mt10 d-block\"> Popular Artist of the Month </span>\n        </h5>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <a href=\"#!\" class=\"red_btn\">View All</a>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a href=\"#!\" class=\"gray_btn\">Mrinalini<br />नृत्य/Dancer</a>\n          </div>\n          <img src=\"../../../assets/images/b5.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a href=\"#!\" class=\"gray_btn\">\n              Bhuri Bai<br />चित्रकारी / painting</a\n            >\n          </div>\n          <img src=\"../../../assets/images/b6.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a href=\"#!\" class=\"gray_btn\">Sreetoma<br />गायन/Singer</a>\n          </div>\n          <img src=\"../../../assets/images/b7.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a href=\"#!\" class=\"gray_btn\">Rishav Ishu<br />Actor</a>\n          </div>\n          <img src=\"../../../assets/images/b8.jpg\" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map