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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _programs_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../programs/program-details/program-details.component */ 5343);
/* harmony import */ var _programs_programs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../programs/programs.component */ 73375);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/settings.component */ 94586);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ 62267);







const routes = [
    {
        path: "",
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__.HomePage
    },
    {
        path: "programs",
        component: _programs_programs_component__WEBPACK_IMPORTED_MODULE_1__.ProgramsComponent
    },
    {
        path: "programDetails",
        component: _programs_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_0__.ProgramDetailsComponent
    },
    {
        path: "settings",
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _programs_programs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../programs/programs.component */ 73375);
/* harmony import */ var _programs_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../programs/program-details/program-details.component */ 5343);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/settings.component */ 94586);











let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule, swiper_angular__WEBPACK_IMPORTED_MODULE_10__.SwiperModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _programs_programs_component__WEBPACK_IMPORTED_MODULE_2__.ProgramsComponent, _programs_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_3__.ProgramDetailsComponent, _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__.SettingsComponent]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 91670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-service.service */ 7149);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);







let HomePage = class HomePage {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
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
        this.isReadMore = true;
        this.isReadMorePara = true;
    }
    ngOnInit() { }
    ionViewWillEnter() {
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
            this.todaysPrograms = res;
        });
    }
    loadLandingData() {
        this.apiService.loadLandingPageContent().subscribe((res) => {
            console.log("landing page content", res);
            this.landingPageData = res;
            this.landingImages = this.landingPageData[0].HomeSliderImage;
        });
    }
    viewAllUpcomingProgram() {
        this.router.navigate(["tabs/home/programs", { param: "upcoming" }]);
    }
    viewProgramDetails(programDetails) {
        this.router.navigate(["tabs/home/programDetails"], {
            state: programDetails
        });
    }
    showText() {
        this.isReadMore = !this.isReadMore;
    }
    showPara() {
        this.isReadMorePara = !this.isReadMorePara;
    }
};
HomePage.ctorParameters = () => [
    { type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__.ApiServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
HomePage.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ["slider", { static: false },] }],
    slideOpts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ["registerSlider", { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-home",
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewEncapsulation.None,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 5343:
/*!***********************************************************************!*\
  !*** ./src/app/programs/program-details/program-details.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramDetailsComponent": () => (/* binding */ ProgramDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _program_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./program-details.component.html?ngResource */ 56914);
/* harmony import */ var _program_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program-details.component.scss?ngResource */ 56309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);






let ProgramDetailsComponent = class ProgramDetailsComponent {
    constructor(router) {
        this.router = router;
        this.mediaUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.mediaUrl;
        this.slideOptsOne = { initialSlide: 0, slidesPerView: 1, autoplay: true, loop: true };
    }
    ngOnInit() {
        this.programDetails = this.router?.getCurrentNavigation()?.extras?.state;
        console.log("details", this.programDetails);
    }
    ionViewWillEnter() { }
};
ProgramDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ProgramDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-program-details",
        template: _program_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_program_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProgramDetailsComponent);



/***/ }),

/***/ 73375:
/*!************************************************!*\
  !*** ./src/app/programs/programs.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramsComponent": () => (/* binding */ ProgramsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _programs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programs.component.html?ngResource */ 44119);
/* harmony import */ var _programs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programs.component.scss?ngResource */ 21310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-service.service */ 7149);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);







let ProgramsComponent = class ProgramsComponent {
    constructor(activeRoute, apiService, router) {
        this.activeRoute = activeRoute;
        this.apiService = apiService;
        this.router = router;
        this.paramString = "today's programs";
        this.mediaUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.mediaUrl;
        this.isReadMorePara = true;
        this.isReadMore = true;
        this.isMorePara = true;
        this.slideOptsOne = { initialSlide: 0, slidesPerView: 1, autoplay: true, loop: true };
    }
    ngOnInit() {
        const params = this.activeRoute.snapshot.paramMap.get("param");
        this.apiService.programClientState().subscribe((ready) => {
            if (ready) {
                this.clientReady = true;
                this.subscription(params);
            }
        });
    }
    ionViewWillEnter() {
        // const params = this.activeRoute.snapshot.paramMap.get("param");
        // this.apiService.programClientState().subscribe((ready) => {
        //   if (ready) {
        //     this.clientReady = true;
        //     this.subscription(params);
        //   }
        // });
    }
    subscription(params) {
        params == "live now" &&
            this.apiService.loadLiveProgram().subscribe((res) => {
                this.livePrograms = res;
                console.log("live program", this.livePrograms);
            });
        params == "upcoming programs" &&
            this.apiService.loadUpcomingProgram().subscribe((res) => {
                this.upcomingPrograms = res;
                console.log("upcoming program", this.upcomingPrograms);
            });
        params == "archive programs" &&
            this.apiService.loadPastProgram().subscribe((res) => {
                console.log("past program", res);
                this.pastPrograms = res;
            });
        params == "today's programs" &&
            this.apiService.loadTodaysProgram().subscribe((res) => {
                this.todayPrograms = res;
                console.log("todays program", res);
            });
    }
    viewAllUpcomingProgram() {
        this.router.navigate(["tabs/home/programs", { param: "upcoming" }]);
    }
    viewProgramDetails(programDetails, today) {
        programDetails.today = today ? today : false;
        this.router.navigate(["tabs/home/programDetails"], {
            state: programDetails
        });
    }
    showText() {
        this.isReadMore = !this.isReadMore;
    }
    showPara() {
        this.isReadMorePara = !this.isReadMorePara;
    }
    showMorePara() {
        this.isMorePara = !this.isMorePara;
    }
};
ProgramsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__.ApiServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ProgramsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-programs",
        template: _programs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_programs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProgramsComponent);



/***/ }),

/***/ 94586:
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component.html?ngResource */ 49885);
/* harmony import */ var _settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component.scss?ngResource */ 75855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() { }
};
SettingsComponent.ctorParameters = () => [];
SettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-settings',
        template: _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsComponent);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "::ng-deep.header-md::after {\n  height: 0px !important;\n}\n\n.toolbar-content {\n  text-align: center;\n  font-weight: 600;\n}\n\n.swiper-pagination-bullet-active {\n  background: white;\n}\n\nion-header {\n  --background: white;\n}\n\n.text-justify {\n  text-align: justify;\n  color: #797494;\n}\n\n.mt30 {\n  margin-top: 35px;\n}\n\n.header-area {\n  background-color: #fff !important;\n  height: 100px !important;\n  background-position: 0% 63%;\n}\n\n.mt21 {\n  margin-top: 20px;\n}\n\n#icons {\n  font-size: 25px;\n  color: #67696c !important;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(233, 229, 229, 0.08);\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n  margin: 0 0 10px 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #e42f08;\n}\n\na {\n  color: black;\n}\n\n.limitTextHeight {\n  height: 80px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0JBQUE7QUFDRDs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNDLGlCQUFBO0FBR0Q7O0FBREE7RUFDQyxtQkFBQTtBQUlEOztBQUZBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBS0Q7O0FBSEE7RUFDQyxnQkFBQTtBQU1EOztBQUpBO0VBRUksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBTUo7O0FBSkE7RUFDQyxnQkFBQTtBQU9EOztBQUxBO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFRRDs7QUFOQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQVNEOztBQVBBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQVVEOztBQVJBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQVdEOztBQVRBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBWUQ7O0FBVkE7RUFDQyxXQUFBO0FBYUQ7O0FBWEE7RUFDQyxjQUFBO0FBY0Q7O0FBWkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFlRDs7QUFiQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBZ0JEOztBQWRBO0VBQ0MsdUJBQUE7QUFpQkQ7O0FBZkE7RUFDQyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Msa0JBQUE7QUFrQkY7O0FBaEJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFtQkQ7O0FBakJBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBRUEsdURBQUE7QUFvQkQ7O0FBbEJBO0VBQ0MsdUJBQUE7QUFxQkQ7O0FBbkJBO0VBQ0MsY0FBQTtBQXNCRDs7QUFwQkE7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7QUF1QkQ7O0FBckJBO0VBQ0MsVUFBQTtBQXdCRDs7QUF0QkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXlCRDs7QUF2QkE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUEwQkQ7O0FBeEJBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQTJCRDs7QUF6QkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUE0QkQ7O0FBMUJBO0VBQ0Msc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBNkJEOztBQTNCQTtFQUNDLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQyxrQkFBQTtBQThCRjs7QUE1QkE7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQStCRDs7QUE3QkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBZ0NEOztBQTlCQTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQWlDRDs7QUEvQkE7RUFDQyxZQUFBO0FBa0NEOztBQS9CQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQWtDSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcC5oZWFkZXItbWQ6OmFmdGVye1xuXHRoZWlnaHQ6IDBweCFpbXBvcnRhbnQ7XG59XG4udG9vbGJhci1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcblx0YmFja2dyb3VuZDp3aGl0ZTtcbn1cbmlvbi1oZWFkZXJ7XG5cdC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG4udGV4dC1qdXN0aWZ5IHtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0Y29sb3I6Izc5NzQ5NDtcbn1cbi5tdDMwe1xuXHRtYXJnaW4tdG9wOiAzNXB4O1xufVxuLmhlYWRlci1hcmVhIHtcblx0ICAgIC8vIGJhY2tncm91bmQ6IHVybChodHRwczovL2p1c21hcmt0ZWNoLmluL0N1bHR1cmUvaW1nL2JnLWltZy9OT1RFUzEucG5nKSByZXBlYXQteCAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNjMlO1xufVxuLm10MjF7XG5cdG1hcmdpbi10b3A6MjBweFxufVxuI2ljb25zIHtcblx0Zm9udC1zaXplOiAyNXB4O1xuXHRjb2xvcjogIzY3Njk2YyFpbXBvcnRhbnQ7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5zbGlkZTJfaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3dpcGVyLXNsaWRlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQ6cmdiKDIzMyAyMjkgMjI5IC8gOCUpO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAyMHB4O1xuXHRsZWZ0OiAxMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCBhLCAuc3dpcGVyLXNsaWRlIC5jb250ZW50IHNwYW4ge1xuXHRjb2xvcjogI2ZmZjtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQgaW9uLWljb24ge1xuXHRjb2xvcjogI2ZmYWYwMDtcbn1cbi5iYW5uZXJfc2xpZGUgaW9uLXNsaWRlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNhdGFnb3JpZXNfc2xpZGVyIHtcblx0cGFkZGluZzogMTVweDtcblx0YmFja2dyb3VuZDogI2ZmZmZjYztcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYyY2MsICNmZmZmY2MpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYyY2MsICNmZmZmY2MpO1xufVxuLmNhdGFnb3JpZXNfc2xpZGVyIC5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYmx1ZV9jYXJkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZWJmZDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0cGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLmJsdWVfY2FyZCAudHJlbmRpbmdfaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRtYXgtaGVpZ2h0OiA4MHB4O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnByb2R1Y3Rfc2xpZGUge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiAjMEMxNTNCO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0MjY0NCwgIzBDMTUzQik7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0MjY0NCwgIzBDMTUzQik7XG59XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXNsaWRlOmJlZm9yZSB7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnByb2R1Y3Rfc2xpZGUgcCBhIHtcblx0Y29sb3I6ICM3OTc0OTQ7XG59XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG5cdG9wYWNpdHk6IDE7XG5cdGJhY2tncm91bmQ6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbiwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG5cdGxlZnQ6IDI1cHg7XG59XG4uZm9yeW91X2NhcmQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcbn1cbi5mb3J5b3VfY2FyZDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG59XG4uZm9yeW91X2NhcmQgLmJvb2ttYXJrIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDE1cHg7XG5cdHJpZ2h0OiAxNXB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mb3J5b3VfY2FyZCAuY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAyMHB4O1xuXHRsZWZ0OiAxMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuLmZvcnlvdV9jYXJkIGltZyB7XG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYmx1ZV90YWJfY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cbi5ibHVlX3RhYl9jYXJkIGlvbi1yb3cge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHBhZGRpbmc6IDdweDtcbn1cbi5ibHVlX3RhYl9jYXJkIC50cmVuZGluZ19pbWcge1xuXHR3aWR0aDogODBweDtcblx0aGVpZ2h0OiA4MHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYnRuLXNlZ21lbnQuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG5cdGJhY2tncm91bmQ6ICNlNDJmMDg7XG5cdGNvbG9yOiAjZTQyZjA4O1xufVxuYSB7XG5cdGNvbG9yOmJsYWNrO1xufVxuXG4ubGltaXRUZXh0SGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 56309:
/*!************************************************************************************!*\
  !*** ./src/app/programs/program-details/program-details.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".toolbar-content {\n  text-align: center;\n  font-weight: 600;\n}\n\n.swiper-pagination-bullet-active {\n  background: white;\n}\n\nion-header {\n  --background: white;\n}\n\n.text-justify {\n  text-align: justify;\n  color: #797494;\n}\n\n.header-area {\n  background-color: #fff !important;\n  height: 100px !important;\n  background-position: 0% 63%;\n}\n\n.mt21 {\n  margin-top: 20px;\n}\n\n#icons {\n  font-size: 25px;\n  color: #67696c !important;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\nion-text {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n  margin: 0 0 10px 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #e42f08;\n}\n\na {\n  color: black;\n}\n\n.pad-5 {\n  padding: 5px;\n}\n\n.blink-me {\n  animation: blinker 1.5s linear infinite;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyYW0tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNDLGlCQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxtQkFBQTtBQUVEOztBQUFBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBR0Q7O0FBREE7RUFFSSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFHSjs7QUFEQTtFQUNDLGdCQUFBO0FBSUQ7O0FBRkE7RUFDQyxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUtEOztBQUhBO0VBQ0MsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBTUQ7O0FBSkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FBT0Q7O0FBTEE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVFEOztBQUxBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBUUQ7O0FBTkE7RUFDQyxXQUFBO0FBU0Q7O0FBUEE7RUFDQyxjQUFBO0FBVUQ7O0FBUkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFXRDs7QUFUQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBWUQ7O0FBVkE7RUFDQyx1QkFBQTtBQWFEOztBQVhBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNDLGtCQUFBO0FBY0Y7O0FBWkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWVEOztBQWJBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBRUEsdURBQUE7QUFnQkQ7O0FBZEE7RUFDQyx1QkFBQTtBQWlCRDs7QUFmQTtFQUNDLGNBQUE7QUFrQkQ7O0FBaEJBO0VBQ0ksY0FBQTtBQW1CSjs7QUFqQkE7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7QUFvQkQ7O0FBbEJBO0VBQ0MsVUFBQTtBQXFCRDs7QUFuQkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXNCRDs7QUFwQkE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUF1QkQ7O0FBckJBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXdCRDs7QUF0QkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUF5QkQ7O0FBdkJBO0VBQ0Msc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBMEJEOztBQXhCQTtFQUNDLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQyxrQkFBQTtBQTJCRjs7QUF6QkE7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQTRCRDs7QUExQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBNkJEOztBQTNCQTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQThCRDs7QUE1QkE7RUFDQyxZQUFBO0FBK0JEOztBQTdCQTtFQUNJLFlBQUE7QUFnQ0o7O0FBN0JBO0VBQ0UsdUNBQUE7QUFnQ0Y7O0FBN0JBO0VBQ0U7SUFDRSxVQUFBO0VBZ0NGO0FBQ0YiLCJmaWxlIjoicHJvZ3JhbS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udG9vbGJhci1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcblx0YmFja2dyb3VuZDp3aGl0ZTtcbn1cbmlvbi1oZWFkZXJ7XG5cdC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG4udGV4dC1qdXN0aWZ5IHtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0Y29sb3I6Izc5NzQ5NDtcbn1cbi5oZWFkZXItYXJlYSB7XG5cdCAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9qdXNtYXJrdGVjaC5pbi9DdWx0dXJlL2ltZy9iZy1pbWcvTk9URVMxLnBuZykgcmVwZWF0LXggI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDYzJTtcbn1cbi5tdDIxe1xuXHRtYXJnaW4tdG9wOjIwcHhcbn1cbiNpY29ucyB7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Y29sb3I6ICM2NzY5NmMhaW1wb3J0YW50O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uc2xpZGUyX2ltZyB7XG5cdG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHRtYXgtaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnN3aXBlci1zbGlkZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDIwcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGEsIC5zd2lwZXItc2xpZGUgLmNvbnRlbnQgc3BhbiB7XG5cdGNvbG9yOiAjZmZmO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCBpb24taWNvbiB7XG5cdGNvbG9yOiAjZmZhZjAwO1xufVxuLmJhbm5lcl9zbGlkZSBpb24tc2xpZGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2F0YWdvcmllc19zbGlkZXIge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmZmNjO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG59XG4uY2F0YWdvcmllc19zbGlkZXIgLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5ibHVlX2NhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmZkO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG4uYmx1ZV9jYXJkIC50cmVuZGluZ19pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdG1heC1oZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZHVjdF9zbGlkZSB7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICMwQzE1M0I7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ucHJvZHVjdF9zbGlkZSBwIGEge1xuXHRjb2xvcjogIzc5NzQ5NDtcbn1cbmlvbi10ZXh0e1xuICAgIGNvbG9yOiM3OTc0OTQ7XG59XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG5cdG9wYWNpdHk6IDE7XG5cdGJhY2tncm91bmQ6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbiwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG5cdGxlZnQ6IDI1cHg7XG59XG4uZm9yeW91X2NhcmQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcbn1cbi5mb3J5b3VfY2FyZDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG59XG4uZm9yeW91X2NhcmQgLmJvb2ttYXJrIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDE1cHg7XG5cdHJpZ2h0OiAxNXB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mb3J5b3VfY2FyZCAuY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAyMHB4O1xuXHRsZWZ0OiAxMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuLmZvcnlvdV9jYXJkIGltZyB7XG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYmx1ZV90YWJfY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cbi5ibHVlX3RhYl9jYXJkIGlvbi1yb3cge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHBhZGRpbmc6IDdweDtcbn1cbi5ibHVlX3RhYl9jYXJkIC50cmVuZGluZ19pbWcge1xuXHR3aWR0aDogODBweDtcblx0aGVpZ2h0OiA4MHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYnRuLXNlZ21lbnQuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG5cdGJhY2tncm91bmQ6ICNlNDJmMDg7XG5cdGNvbG9yOiAjZTQyZjA4O1xufVxuYSB7XG5cdGNvbG9yOmJsYWNrO1xufVxuLnBhZC01e1xuICAgIHBhZGRpbmc6NXB4O1xufVxuXG4uYmxpbmstbWUge1xuICBhbmltYXRpb246IGJsaW5rZXIgMS41cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmtlciB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 21310:
/*!*************************************************************!*\
  !*** ./src/app/programs/programs.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".toolbar-content {\n  text-align: center;\n  font-weight: 600;\n}\n\nion-header {\n  --background: white;\n}\n\n.text-justify {\n  text-align: justify;\n  color: #797494;\n}\n\n.header-area {\n  background-color: #fff !important;\n  height: 100px !important;\n  background-position: 0% 63%;\n}\n\n.mt21 {\n  margin-top: 20px;\n}\n\n#icons {\n  font-size: 25px;\n  color: #67696c !important;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n  margin: 0 0 10px 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #e42f08;\n}\n\np {\n  color: #797494;\n}\n\n.limitTextHeight {\n  height: 80px;\n  overflow: hidden;\n}\n\n.py-50 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  background-color: #fffbcc;\n}\n\n.pb-20 {\n  padding-bottom: 20px;\n  background-color: #fffbcc;\n}\n\n.blink_me {\n  animation: blinker 1.5s linear infinite;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\nion-text {\n  color: #797494;\n}\n\n.text-small {\n  font-size: 0.8rem;\n}\n\n#h3 {\n  font-size: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyYW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlBO0VBQ0MsbUJBQUE7QUFERDs7QUFHQTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQUFEOztBQUVBO0VBRUksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBRUE7RUFDQyxnQkFBQTtBQUNEOztBQUNBO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFFRDs7QUFBQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7QUFHRDs7QUFEQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUFJRDs7QUFGQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBS0Q7O0FBSEE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFNRDs7QUFKQTtFQUNDLFdBQUE7QUFPRDs7QUFMQTtFQUNDLGNBQUE7QUFRRDs7QUFOQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVNEOztBQVBBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBRUEsdURBQUE7QUFVRDs7QUFSQTtFQUNDLHVCQUFBO0FBV0Q7O0FBVEE7RUFDQyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Msa0JBQUE7QUFZRjs7QUFWQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBYUQ7O0FBWEE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFFQSx1REFBQTtBQWNEOztBQVpBO0VBQ0MsdUJBQUE7QUFlRDs7QUFiQTtFQUNDLGNBQUE7QUFnQkQ7O0FBZEE7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7QUFpQkQ7O0FBZkE7RUFDQyxVQUFBO0FBa0JEOztBQWhCQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBbUJEOztBQWpCQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQW9CRDs7QUFsQkE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBcUJEOztBQW5CQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQXNCRDs7QUFwQkE7RUFDQyxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUF1QkQ7O0FBckJBO0VBQ0MseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNDLGtCQUFBO0FBd0JGOztBQXRCQTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBeUJEOztBQXZCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUEwQkQ7O0FBeEJBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBMkJEOztBQXpCQTtFQUNDLGNBQUE7QUE0QkQ7O0FBMUJBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBNkJKOztBQTNCQTtFQUNDLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQThCRDs7QUEzQkE7RUFDQyxvQkFBQTtFQUNBLHlCQUFBO0FBOEJEOztBQTVCQTtFQUNFLHVDQUFBO0FBK0JGOztBQTVCQTtFQUNFO0lBQ0UsVUFBQTtFQStCRjtBQUNGOztBQTVCQTtFQUNDLGNBQUE7QUE4QkQ7O0FBM0JBO0VBQ0MsaUJBQUE7QUE4QkQ7O0FBNUJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBK0JEIiwiZmlsZSI6InByb2dyYW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLXRvb2xiYXIge1xuLy8gXHRoZWlnaHQ6IDMzJTtcbi8vIH1cbi50b29sYmFyLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuaW9uLWhlYWRlcntcblx0LS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi50ZXh0LWp1c3RpZnkge1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXHRjb2xvcjojNzk3NDk0O1xufVxuLmhlYWRlci1hcmVhIHtcblx0ICAgIC8vIGJhY2tncm91bmQ6IHVybChodHRwczovL2p1c21hcmt0ZWNoLmluL0N1bHR1cmUvaW1nL2JnLWltZy9OT1RFUzEucG5nKSByZXBlYXQteCAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNjMlO1xufVxuLm10MjF7XG5cdG1hcmdpbi10b3A6MjBweFxufVxuI2ljb25zIHtcblx0Zm9udC1zaXplOiAyNXB4O1xuXHRjb2xvcjogIzY3Njk2YyFpbXBvcnRhbnQ7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5zbGlkZTJfaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG4uc3dpcGVyLXNsaWRlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDIwcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGEsIC5zd2lwZXItc2xpZGUgLmNvbnRlbnQgc3BhbiB7XG5cdGNvbG9yOiAjZmZmO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCBpb24taWNvbiB7XG5cdGNvbG9yOiAjZmZhZjAwO1xufVxuLmJhbm5lcl9zbGlkZSBpb24tc2xpZGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2F0YWdvcmllc19zbGlkZXIge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmZmNjO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG59XG4uY2F0YWdvcmllc19zbGlkZXIgLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5ibHVlX2NhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmZkO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG4uYmx1ZV9jYXJkIC50cmVuZGluZ19pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdG1heC1oZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZHVjdF9zbGlkZSB7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICMwQzE1M0I7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ucHJvZHVjdF9zbGlkZSBwIGEge1xuXHRjb2xvcjogIzc5NzQ5NDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcblx0b3BhY2l0eTogMTtcblx0YmFja2dyb3VuZDogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcblx0bGVmdDogMjVweDtcbn1cbi5mb3J5b3VfY2FyZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuLmZvcnlvdV9jYXJkOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcbn1cbi5mb3J5b3VfY2FyZCAuYm9va21hcmsge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMTVweDtcblx0cmlnaHQ6IDE1cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmZvcnlvdV9jYXJkIC5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDIwcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG4uZm9yeW91X2NhcmQgaW1nIHtcblx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0bWF4LWhlaWdodDogNDAwcHggIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ibHVlX3RhYl9jYXJkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZWJmZDtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLmJsdWVfdGFiX2NhcmQgaW9uLXJvdyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0cGFkZGluZzogN3B4O1xufVxuLmJsdWVfdGFiX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5idG4tc2VnbWVudC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcblx0YmFja2dyb3VuZDogI2U0MmYwODtcblx0Y29sb3I6ICNlNDJmMDg7XG59XG5we1xuXHRjb2xvcjojNzk3NDk0O1xufVxuLmxpbWl0VGV4dEhlaWdodCB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHktNTAge1xuXHRwYWRkaW5nLXRvcDogMjBweDtcblx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZiY2M7XG59XG5cbi5wYi0yMCB7XG5cdHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmNjO1xufVxuLmJsaW5rX21lIHtcbiAgYW5pbWF0aW9uOiBibGlua2VyIDEuNXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuaW9uLXRleHR7XG5cdGNvbG9yOiAjNzk3NDk0O1xuXG59XG4udGV4dC1zbWFsbHtcblx0Zm9udC1zaXplOiAwLjhyZW07XG59XG4jaDN7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */";

/***/ }),

/***/ 75855:
/*!*************************************************************!*\
  !*** ./src/app/settings/settings.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 91670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header translucent=\"false\">\n  <ion-toolbar class=\"toolbar-content\">\n    <ion-text> एम पी कल्चर ऐप, मध्य प्रदेश, संस्कृति विभाग</ion-text>\n  </ion-toolbar>\n  <ion-row class=\"header-area\">\n    <ion-col size=\"1.5\">\n      <ion-buttons name=\"main\" class=\"mt21\">\n        <ion-menu-button>\n          <ion-icon name=\"grid-outline\" id=\"icons\"></ion-icon>\n        </ion-menu-button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col size=\"2.5\" class=\"mt10\">\n      <div class=\"login_img\">\n        <img src=\"../../../assets/images/15aug.jpeg\" width=\"100px\" height=\"85px\" />\n      </div>\n    </ion-col>\n    <ion-col size=\"4.5\" class=\"\">\n      <div class=\"login_img\">\n        <img src=\"../../../assets/images/mp-logo.png\" width=\"100px\" />\n      </div>\n    </ion-col>\n    <ion-col size=\"3.5\" class=\"ion-text-end mt30\">\n      <img src=\"../../../assets/images/about.png\" class=\"about_img\" />\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-row>\n    <!-- <ion-col> -->\n    <ion-slides pager=\"true\" [options]=\"slideOptsOne\" *ngIf=\"landingImages\">\n      <ion-slide *ngFor=\"let landingData of landingImages; let index=index\">\n        <img src=\"{{mediaUrl + landingData?.PhotoPath}}\" class=\"banner_img\" />\n      </ion-slide>\n    </ion-slides>\n    <!-- </ion-col> -->\n  </ion-row>\n  <ion-row class=\"mt10 ion-padding\" *ngIf=\"landingPageData\">\n    <ion-col size=\"8\">\n      <span class=\"border_bottom_red\">हमारे बारे में / About Us</span>\n    </ion-col>\n    <ion-col class=\"mt10\" size=\"12\" *ngFor=\"let landingData of landingPageData\">\n      <p class=\"text-justify\" style=\"white-space: pre-wrap\">{{landingData.AppLandingPageText}}</p>\n    </ion-col>\n  </ion-row>\n\n  <!-- <ion-row class=\"mt20\">\n    <ion-col size=\"12\" class=\"catagories_slider\">\n      <h3 class=\"m-0\">Top Catagories</h3>\n      <ion-slides>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Sports</div>\n              </div>\n              <img src=\"../../../assets/images/slide1.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Fashion</div>\n              </div>\n              <img src=\"../../../assets/images/slide2.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Tech</div>\n              </div>\n              <img src=\"../../../assets/images/slide3.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Gadgets</div>\n              </div>\n              <img src=\"../../../assets/images/slide4.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Health</div>\n              </div>\n              <img src=\"../../../assets/images/slide5.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Politics</div>\n              </div>\n              <img src=\"../../../assets/images/slide6.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row> -->\n\n  <!-- Today's programs [OPEN]-->\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"12\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">आज के कार्यक्रम</span\n          ><span class=\"mt10 d-block\">Today's Program</span>\n        </h5>\n      </ion-col>\n      <!-- <ion-col size=\"6\" class=\"ion-text-end\">\n        <a class=\"red_btn\" (click)=\"viewAllUpcomingProgram()\">View All</a>\n      </ion-col> -->\n    </ion-row>\n    <ion-card class=\"blue_card\" *ngFor=\"let program of todaysPrograms\">\n      <ion-row>\n        <ion-col size=\"4\" (click)=\"viewProgramDetails(program)\">\n          <img\n            src=\"{{program.ProgramMultiMedia.length ? (mediaUrl+ program.ProgramMultiMedia[0].MediaPath) :'../../../assets/images/b3.jpg'}}\"\n            class=\"trending_img\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <h6 class=\"mb10\" (click)=\"viewProgramDetails(program)\">\n              <a>{{program.ProgramName}} </a>\n            </h6>\n          </h6>\n          <a class=\"see_green_btn mr-1\"\n            >स्थान: {{program.Venue ? program.Venue : program.CityName}}</a\n          >\n          <p class=\"mt5\">\n            {{program.ProgramStartDate }} | {{program.ProgramEndDate }} <br />\n            {{program.StartTime}} To {{program.EndTime }}\n          </p>\n          <a>{{program.ProgramDateTime | date:'short':'IST'}}</a>\n          <p\n            class=\"mt10\"\n            style=\"white-space: pre-wrap\"\n            [ngClass]=\"{'limitTextHeight': isReadMorePara}\"\n          >\n            {{program.AboutProgram}}\n          </p>\n          <u>\n            <a *ngIf=\"program.AboutProgram\" (click)=\"showPara()\">\n              {{ isReadMorePara ? 'Read More': 'Read Less' }}\n            </a></u\n          >\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Today's programs [CLOSE]-->\n\n  <!-- Upcoming programs [OPEN]-->\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">आगामी कार्यक्रम</span\n          ><span class=\"mt10 d-block\">Upcoming Program</span>\n        </h5>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <a class=\"red_btn\" (click)=\"viewAllUpcomingProgram()\">View All</a>\n      </ion-col>\n    </ion-row>\n    <ion-card class=\"blue_card\" *ngFor=\"let program of upcomingPrograms\">\n      <ion-row>\n        <ion-col size=\"4\" (click)=\"viewProgramDetails(program)\">\n          <img\n            src=\"{{program.ProgramMultiMedia.length ? mediaUrl+ program.ProgramMultiMedia[0].MediaPath :'../../../assets/images/b3.jpg'}}\"\n            class=\"trending_img\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <h6 class=\"mb10\" (click)=\"viewProgramDetails(program)\">\n              <a>{{program.ProgramName}} </a>\n            </h6>\n          </h6>\n          <a class=\"see_green_btn mr-1\"\n            >स्थान: {{program.Venue ? program.Venue : program.CityName}}</a\n          >\n          <a>{{program.ProgramDateTime | date:'short':'IST'}}</a>\n          <p class=\"mt10\" style=\"white-space: pre-wrap\" [ngClass]=\"{'limitTextHeight': isReadMore}\">\n            {{program.AboutProgram}}\n          </p>\n          <u>\n            <a *ngIf=\"program.AboutProgram\" (click)=\"showText()\">\n              {{ isReadMore ? 'Read More': 'Read Less' }}\n            </a></u\n          >\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Upcoming programs [CLOSE]-->\n\n  <!-- Artist Category [OPEN]-->\n  <div class=\"ion-padding\">\n    <!-- <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">कलाकार श्रेणी</span\n          ><span class=\"mt10 d-block\">Artist Category</span>\n        </h5>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <a class=\"red_btn\">View All</a>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">शास्त्रीय / classical</a>\n          </div>\n          <img src=\"../../../assets/images/cat1.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">उप शास्त्रीय / sub classical</a>\n          </div>\n          <img src=\"../../../assets/images/cat2.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">आधुनिक कला / modern Art</a>\n          </div>\n          <img src=\"../../../assets/images/cat3.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">लोक एवं आदिवासी / folk and tribal</a>\n          </div>\n          <img src=\"../../../assets/images/cat4.jpg\" />\n        </ion-card>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row class=\"mt20\">\n      <ion-col size=\"8\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">मासिक लोकप्रिय कार्यक्रम</span\n          ><span class=\"mt10 d-block\"> Monthly Popular Program's </span>\n        </h5>\n      </ion-col>\n      <!-- <ion-col size=\"4\" class=\"ion-text-end\">\n        <a class=\"red_btn\">View All</a>\n      </ion-col> -->\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a class=\"gray_btn\">Mrinalini<br />नृत्य/Dancer</a>\n          </div>\n          <img src=\"../../../assets/images/b5.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a class=\"gray_btn\"> Bhuri Bai<br />चित्रकारी / painting</a>\n          </div>\n          <img src=\"../../../assets/images/b6.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a class=\"gray_btn\">Sreetoma<br />गायन/Singer</a>\n          </div>\n          <img src=\"../../../assets/images/b7.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a class=\"gray_btn\">Rishav Ishu<br />Actor</a>\n          </div>\n          <img src=\"../../../assets/images/b8.jpg\" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- Artist Category [CLOSE]-->\n</ion-content>\n";

/***/ }),

/***/ 56914:
/*!************************************************************************************!*\
  !*** ./src/app/programs/program-details/program-details.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button>\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Program Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-row>\n    <ion-slides\n      pager=\"true\"\n      [options]=\"slideOptsOne\"\n      *ngIf=\"programDetails.ProgramMultiMedia.length\"\n    >\n      <ion-slide *ngFor=\"let details of programDetails.ProgramMultiMedia; let index = index\">\n        <img src=\"{{ mediaUrl + details?.MediaPath }}\" class=\"banner_img\" />\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item>\n        <a\n          *ngIf=\"programDetails.LiveStreamingLink\"\n          href=\"https://jusmarktech.in/Culture/live.html\"\n          target=\"_blank\"\n        >\n          <h3 class=\"text-danger blink-me\">Program Live Streaming Link</h3></a\n        >\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"mt10 pad-5\" *ngIf=\"programDetails\">\n    <ion-col size=\"12\">\n      <span class=\"border_bottom_red\">Program Details</span>\n    </ion-col>\n    <ion-col class=\"mt10\" size=\"12\">\n      <ion-text><b>Program Name : </b>{{ programDetails.ProgramName }}</ion-text\n      ><br />\n      <ion-text\n        ><b>Program Date : </b>\n        {{\n          programDetails.ProgramStartDate == programDetails.ProgramEndDate\n            ? programDetails.ProgramStartDate\n            : programDetails.ProgramStartDate + \" To \" + programDetails.ProgramEndDate\n        }}</ion-text\n      ><br />\n      <ion-text\n        ><b>Time : </b>\n        {{\n          programDetails.StartTime == programDetails.EndTime\n            ? programDetails.StartTime\n            : programDetails.StartTime + \"To\" + programDetails.EndTime\n        }}</ion-text\n      ><br />\n      <ion-text><b>Address : </b>{{ programDetails.Venue }}</ion-text>\n    </ion-col>\n\n    <ion-col size=\"12\" class=\"mt10\">\n      <span class=\"border_bottom_red\">About Program</span>\n    </ion-col>\n    <ion-col class=\"mt10\" size=\"12\">\n      <h4>\n        <ion-text>{{ programDetails.ProgramName }}</ion-text>\n      </h4>\n      <p class=\"text-justify mt10\" style=\"white-space: pre-wrap\">\n        {{ programDetails.AboutProgram }}\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ }),

/***/ 44119:
/*!*************************************************************!*\
  !*** ./src/app/programs/programs.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button>\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\"\n      >{{ activeRoute.snapshot.paramMap.get(\"param\") | titlecase }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <!-- Live programs [OPEN]-->\n  <div class=\"mb10\" *ngIf=\"activeRoute.snapshot.paramMap.get('param') == 'live now'\">\n    <ion-row *ngFor=\"let programDetails of livePrograms; let index = index\">\n      <ion-slides\n        pager=\"true\"\n        [options]=\"slideOptsOne\"\n        *ngIf=\"programDetails.ProgramMultiMedia.length\"\n      >\n        <ion-slide *ngFor=\"let details of programDetails.ProgramMultiMedia; let index = index\">\n          <img src=\"{{ mediaUrl + details?.MediaPath }}\" class=\"banner_img\" />\n        </ion-slide>\n      </ion-slides>\n      <ion-col size=\".5\" class=\"py-50\"></ion-col>\n      <ion-col size=\"11.5\" class=\"py-50\">\n        <span id=\"h3\">{{ programDetails.ProgramName }}</span>\n      </ion-col>\n      <ion-col size=\".4\" class=\"pb-20\"></ion-col>\n\n      <ion-col size=\"8\" class=\"pb-20\">\n        <a href=\"{{ programDetails.LiveStreamingLink }}\" target=\"_blank\">\n          <ion-text>\n            <ion-icon class=\"text-danger blink_me\" name=\"radio-button-on\"></ion-icon>\n            &nbsp; <b>Live Now</b></ion-text\n          ></a\n        >\n      </ion-col>\n      <ion-col size=\"3.6\" class=\"pb-20\">\n        <ion-text class=\"text-small\">1200 viewing</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- Live programs [CLOSE]-->\n\n  <!-- Today's programs [OPEN]-->\n  <div class=\"ion-padding\" *ngIf=\"activeRoute.snapshot.paramMap.get('param') == paramString\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"12\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">आज के कार्यक्रम</span\n          ><span class=\"mt10 d-block\">Today's Program</span>\n        </h5>\n      </ion-col>\n    </ion-row>\n    <ion-card class=\"blue_card\" *ngFor=\"let program of todayPrograms\">\n      <ion-row>\n        <ion-col size=\"4\" (click)=\"viewProgramDetails(program, true)\">\n          <img\n            src=\"{{\n              program.ProgramMultiMedia.length\n                ? mediaUrl + program.ProgramMultiMedia[0].MediaPath\n                : '../../../assets/images/b3.jpg'\n            }}\"\n            class=\"trending_img\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <h6 class=\"mb10\" (click)=\"viewProgramDetails(program, true)\">\n              <a>{{ program.ProgramName }} </a>\n            </h6>\n          </h6>\n          <p class=\"mt5\">\n            {{ program.ProgramStartDate }} | {{ program.ProgramEndDate }} <br />\n            {{ program.StartTime }} To {{ program.EndTime }}\n          </p>\n          <a class=\"see_green_btn mr-1\"\n            >स्थान: {{ program.Venue ? program.Venue : program.CityName }}</a\n          >\n          <a>{{ program.ProgramDateTime | date: \"short\":\"IST\" }}</a>\n          <p\n            class=\"mt10\"\n            style=\"white-space: pre-wrap\"\n            [ngClass]=\"{ limitTextHeight: isReadMorePara }\"\n          >\n            {{ program.AboutProgram }}\n          </p>\n          <u>\n            <a *ngIf=\"program.AboutProgram\" (click)=\"showPara()\">\n              {{ isReadMorePara ? \"Read More\" : \"Read Less\" }}\n            </a></u\n          >\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Today's programs [CLOSE]-->\n\n  <!-- Upcoming programs [OPEN]-->\n  <div\n    class=\"ion-padding\"\n    *ngIf=\"activeRoute.snapshot.paramMap.get('param') == 'upcoming programs'\"\n  >\n    <ion-card class=\"blue_card\" *ngFor=\"let program of upcomingPrograms; let index = index\">\n      <ion-row>\n        <ion-col size=\"4\" (click)=\"viewProgramDetails(program)\">\n          <img\n            src=\"{{\n              program.ProgramMultiMedia.length\n                ? mediaUrl + program.ProgramMultiMedia[0].MediaPath\n                : '../../../assets/images/b3.jpg'\n            }}\"\n            class=\"trending_img\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\" (click)=\"viewProgramDetails(program)\">\n            <ion-text color=\"dark\">{{ program.ProgramName }}</ion-text>\n          </h6>\n          <a class=\"mr-1\" class=\"{{ index % 2 !== 0 ? 'orange_btn' : 'see_green_btn' }}\"\n            >स्थान: {{ program.Venue }}</a\n          >\n          <p class=\"mt5\">\n            {{ program.ProgramStartDate }} | {{ program.ProgramEndDate }} <br />\n            {{ program.StartTime }} To {{ program.EndTime }}\n          </p>\n          <!-- <p class=\"mt10\">देशभक्ति आधारित स्वराज संस्थान संचालनालय</p> -->\n          <p class=\"mt10\" style=\"white-space: pre-wrap\" [ngClass]=\"{ limitTextHeight: isReadMore }\">\n            {{ program.AboutProgram }}\n          </p>\n          <u>\n            <a *ngIf=\"program.AboutProgram\" (click)=\"showText()\">\n              {{ isReadMore ? \"Read More\" : \"Read Less\" }}\n            </a></u\n          >\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Upcoming programs [CLOSE]-->\n\n  <!-- Archive programs [OPEN]-->\n  <div class=\"ion-padding\" *ngIf=\"activeRoute.snapshot.paramMap.get('param') == 'archive programs'\">\n    <ion-card class=\"blue_card\" *ngFor=\"let program of pastPrograms; let index = index\">\n      <ion-row>\n        <ion-col size=\"4\" (click)=\"viewProgramDetails(program)\">\n          <img\n            src=\"{{\n              program.ProgramMultiMedia.length\n                ? mediaUrl + program.ProgramMultiMedia[0].MediaPath\n                : '../../../assets/images/b3.jpg'\n            }}\"\n            class=\"trending_img\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\" (click)=\"viewProgramDetails(program)\">\n            <ion-text color=\"dark\">{{ program.ProgramName }}</ion-text>\n          </h6>\n          <a class=\"mr-1\" class=\"{{ index % 2 !== 0 ? 'orange_btn' : 'see_green_btn' }}\"\n            >स्थान: {{ program.Venue ? program.Venue : program.CityName }}</a\n          ><br />\n          <p class=\"mt5\">\n            {{\n              program.ProgramStartDate == program.ProgramEndDate\n                ? program.ProgramStartDate\n                : program.ProgramStartDate + \" | \" + program.ProgramEndDate\n            }}\n            <br />\n            {{\n              program.StartTime == program.EndTime\n                ? program.StartTime\n                : program.StartTime + \" To \" + program.EndTime\n            }}\n          </p>\n          <p class=\"mt10\" style=\"white-space: pre-wrap\" [ngClass]=\"{ limitTextHeight: isMorePara }\">\n            {{ program.AboutProgram }}\n          </p>\n          <u>\n            <a *ngIf=\"program.AboutProgram\" (click)=\"showMorePara()\">\n              {{ isMorePara ? \"Read More\" : \"Read Less\" }}\n            </a></u\n          >\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Archive programs [CLOSE]-->\n</ion-content>\n";

/***/ }),

/***/ 49885:
/*!*************************************************************!*\
  !*** ./src/app/settings/settings.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<p>\n  settings works!\n</p>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map