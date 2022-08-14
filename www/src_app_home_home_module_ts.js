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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _programs_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../programs/program-details/program-details.component */ 5343);
/* harmony import */ var _programs_programs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../programs/programs.component */ 73375);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ 62267);






const routes = [
    {
        path: "",
        component: _home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage
    },
    {
        path: "programs",
        component: _programs_programs_component__WEBPACK_IMPORTED_MODULE_1__.ProgramsComponent
    },
    {
        path: "programDetails",
        component: _programs_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_0__.ProgramDetailsComponent
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _programs_programs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../programs/programs.component */ 73375);
/* harmony import */ var _programs_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../programs/program-details/program-details.component */ 5343);










let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule, swiper_angular__WEBPACK_IMPORTED_MODULE_9__.SwiperModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _programs_programs_component__WEBPACK_IMPORTED_MODULE_2__.ProgramsComponent, _programs_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_3__.ProgramDetailsComponent]
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
    viewProgramDetails(programDetails, today) {
        programDetails.today = today ? today : false;
        this.router.navigate(["tabs/home/programDetails"], {
            state: programDetails
        });
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
        this.paramString = "today's";
        this.mediaUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.mediaUrl;
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
        params == "upcoming" &&
            this.apiService.loadUpcomingProgram().subscribe((res) => {
                this.upcomingPrograms = res;
                console.log("upcoming program", this.upcomingPrograms);
            });
        params == "archive" &&
            this.apiService.loadPastProgram().subscribe((res) => {
                console.log("past program", res);
                this.pastPrograms = res;
            });
        params == "today's" &&
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

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "::ng-deep.header-md::after {\n  height: 0px !important;\n}\n\n.toolbar-content {\n  text-align: center;\n  font-weight: 600;\n}\n\n.swiper-pagination-bullet-active {\n  background: white;\n}\n\nion-header {\n  --background: white;\n}\n\n.text-justify {\n  text-align: justify;\n  color: #797494;\n}\n\n.mt30 {\n  margin-top: 35px;\n}\n\n.header-area {\n  background-color: #fff !important;\n  height: 100px !important;\n  background-position: 0% 63%;\n}\n\n.mt21 {\n  margin-top: 20px;\n}\n\n#icons {\n  font-size: 25px;\n  color: #67696c !important;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(233, 229, 229, 0.08);\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n  margin: 0 0 10px 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #e42f08;\n}\n\na {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0JBQUE7QUFDRDs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNDLGlCQUFBO0FBR0Q7O0FBREE7RUFDQyxtQkFBQTtBQUlEOztBQUZBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBS0Q7O0FBSEE7RUFDQyxnQkFBQTtBQU1EOztBQUpBO0VBRUksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBTUo7O0FBSkE7RUFDQyxnQkFBQTtBQU9EOztBQUxBO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFRRDs7QUFOQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQVNEOztBQVBBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQVVEOztBQVJBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQVdEOztBQVRBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBWUQ7O0FBVkE7RUFDQyxXQUFBO0FBYUQ7O0FBWEE7RUFDQyxjQUFBO0FBY0Q7O0FBWkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFlRDs7QUFiQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBZ0JEOztBQWRBO0VBQ0MsdUJBQUE7QUFpQkQ7O0FBZkE7RUFDQyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Msa0JBQUE7QUFrQkY7O0FBaEJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFtQkQ7O0FBakJBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBRUEsdURBQUE7QUFvQkQ7O0FBbEJBO0VBQ0MsdUJBQUE7QUFxQkQ7O0FBbkJBO0VBQ0MsY0FBQTtBQXNCRDs7QUFwQkE7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7QUF1QkQ7O0FBckJBO0VBQ0MsVUFBQTtBQXdCRDs7QUF0QkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXlCRDs7QUF2QkE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUEwQkQ7O0FBeEJBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQTJCRDs7QUF6QkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUE0QkQ7O0FBMUJBO0VBQ0Msc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBNkJEOztBQTNCQTtFQUNDLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQyxrQkFBQTtBQThCRjs7QUE1QkE7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQStCRDs7QUE3QkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBZ0NEOztBQTlCQTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQWlDRDs7QUEvQkE7RUFDQyxZQUFBO0FBa0NEIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwLmhlYWRlci1tZDo6YWZ0ZXJ7XG5cdGhlaWdodDogMHB4IWltcG9ydGFudDtcbn1cbi50b29sYmFyLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuXHRiYWNrZ3JvdW5kOndoaXRlO1xufVxuaW9uLWhlYWRlcntcblx0LS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi50ZXh0LWp1c3RpZnkge1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXHRjb2xvcjojNzk3NDk0O1xufVxuLm10MzB7XG5cdG1hcmdpbi10b3A6IDM1cHg7XG59XG4uaGVhZGVyLWFyZWEge1xuXHQgICAgLy8gYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vanVzbWFya3RlY2guaW4vQ3VsdHVyZS9pbWcvYmctaW1nL05PVEVTMS5wbmcpIHJlcGVhdC14ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA2MyU7XG59XG4ubXQyMXtcblx0bWFyZ2luLXRvcDoyMHB4XG59XG4jaWNvbnMge1xuXHRmb250LXNpemU6IDI1cHg7XG5cdGNvbG9yOiAjNjc2OTZjIWltcG9ydGFudDtcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnNsaWRlMl9pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0bWF4LWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zd2lwZXItc2xpZGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG4uc3dpcGVyLXNsaWRlOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDpyZ2IoMjMzIDIyOSAyMjkgLyA4JSk7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDIwcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGEsIC5zd2lwZXItc2xpZGUgLmNvbnRlbnQgc3BhbiB7XG5cdGNvbG9yOiAjZmZmO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCBpb24taWNvbiB7XG5cdGNvbG9yOiAjZmZhZjAwO1xufVxuLmJhbm5lcl9zbGlkZSBpb24tc2xpZGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2F0YWdvcmllc19zbGlkZXIge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmZmNjO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG59XG4uY2F0YWdvcmllc19zbGlkZXIgLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5ibHVlX2NhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmZkO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG4uYmx1ZV9jYXJkIC50cmVuZGluZ19pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdG1heC1oZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZHVjdF9zbGlkZSB7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICMwQzE1M0I7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ucHJvZHVjdF9zbGlkZSBwIGEge1xuXHRjb2xvcjogIzc5NzQ5NDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcblx0b3BhY2l0eTogMTtcblx0YmFja2dyb3VuZDogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcblx0bGVmdDogMjVweDtcbn1cbi5mb3J5b3VfY2FyZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuLmZvcnlvdV9jYXJkOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcbn1cbi5mb3J5b3VfY2FyZCAuYm9va21hcmsge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMTVweDtcblx0cmlnaHQ6IDE1cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmZvcnlvdV9jYXJkIC5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDIwcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG4uZm9yeW91X2NhcmQgaW1nIHtcblx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0bWF4LWhlaWdodDogNDAwcHggIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ibHVlX3RhYl9jYXJkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZWJmZDtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLmJsdWVfdGFiX2NhcmQgaW9uLXJvdyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0cGFkZGluZzogN3B4O1xufVxuLmJsdWVfdGFiX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5idG4tc2VnbWVudC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcblx0YmFja2dyb3VuZDogI2U0MmYwODtcblx0Y29sb3I6ICNlNDJmMDg7XG59XG5hIHtcblx0Y29sb3I6YmxhY2s7XG59XG4iXX0= */";

/***/ }),

/***/ 56309:
/*!************************************************************************************!*\
  !*** ./src/app/programs/program-details/program-details.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "::ng-deep.header-md::after {\n  height: 0px !important;\n}\n\n.toolbar-content {\n  text-align: center;\n  font-weight: 600;\n}\n\n.swiper-pagination-bullet-active {\n  background: white;\n}\n\nion-header {\n  --background: white;\n}\n\n.text-justify {\n  text-align: justify;\n  color: #797494;\n}\n\n.header-area {\n  background-color: #fff !important;\n  height: 100px !important;\n  background-position: 0% 63%;\n}\n\n.mt21 {\n  margin-top: 20px;\n}\n\n#icons {\n  font-size: 25px;\n  color: #67696c !important;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\nion-text {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n  margin: 0 0 10px 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #e42f08;\n}\n\na {\n  color: black;\n}\n\n.pad-5 {\n  padding: 5px;\n}\n\n.blink-me {\n  animation: blinker 1.5s linear infinite;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyYW0tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNDLHNCQUFBO0FBRkQ7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0E7RUFDQyxpQkFBQTtBQUFEOztBQUVBO0VBQ0MsbUJBQUE7QUFDRDs7QUFDQTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQUVEOztBQUFBO0VBRUksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBRUo7O0FBQUE7RUFDQyxnQkFBQTtBQUdEOztBQURBO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFJRDs7QUFGQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUtEOztBQUhBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQU1EOztBQUpBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFPRDs7QUFKQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQU9EOztBQUxBO0VBQ0MsV0FBQTtBQVFEOztBQU5BO0VBQ0MsY0FBQTtBQVNEOztBQVBBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVUQ7O0FBUkE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFFQSx1REFBQTtBQVdEOztBQVRBO0VBQ0MsdUJBQUE7QUFZRDs7QUFWQTtFQUNDLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQyxrQkFBQTtBQWFGOztBQVhBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFjRDs7QUFaQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBZUQ7O0FBYkE7RUFDQyx1QkFBQTtBQWdCRDs7QUFkQTtFQUNDLGNBQUE7QUFpQkQ7O0FBZkE7RUFDSSxjQUFBO0FBa0JKOztBQWhCQTtFQUNDLFVBQUE7RUFDQSw4QkFBQTtBQW1CRDs7QUFqQkE7RUFDQyxVQUFBO0FBb0JEOztBQWxCQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBcUJEOztBQW5CQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQXNCRDs7QUFwQkE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBdUJEOztBQXJCQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQXdCRDs7QUF0QkE7RUFDQyxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUF5QkQ7O0FBdkJBO0VBQ0MseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNDLGtCQUFBO0FBMEJGOztBQXhCQTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBMkJEOztBQXpCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUE0QkQ7O0FBMUJBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBNkJEOztBQTNCQTtFQUNDLFlBQUE7QUE4QkQ7O0FBNUJBO0VBQ0ksWUFBQTtBQStCSjs7QUE1QkE7RUFDRSx1Q0FBQTtBQStCRjs7QUE1QkE7RUFDRTtJQUNFLFVBQUE7RUErQkY7QUFDRiIsImZpbGUiOiJwcm9ncmFtLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tdG9vbGJhciB7XG4vLyBcdGhlaWdodDogMzMlO1xuLy8gfVxuOjpuZy1kZWVwLmhlYWRlci1tZDo6YWZ0ZXJ7XG5cdGhlaWdodDogMHB4IWltcG9ydGFudDtcbn1cbi50b29sYmFyLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuXHRiYWNrZ3JvdW5kOndoaXRlO1xufVxuaW9uLWhlYWRlcntcblx0LS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi50ZXh0LWp1c3RpZnkge1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXHRjb2xvcjojNzk3NDk0O1xufVxuLmhlYWRlci1hcmVhIHtcblx0ICAgIC8vIGJhY2tncm91bmQ6IHVybChodHRwczovL2p1c21hcmt0ZWNoLmluL0N1bHR1cmUvaW1nL2JnLWltZy9OT1RFUzEucG5nKSByZXBlYXQteCAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNjMlO1xufVxuLm10MjF7XG5cdG1hcmdpbi10b3A6MjBweFxufVxuI2ljb25zIHtcblx0Zm9udC1zaXplOiAyNXB4O1xuXHRjb2xvcjogIzY3Njk2YyFpbXBvcnRhbnQ7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5zbGlkZTJfaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3dpcGVyLXNsaWRlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMjBweDtcblx0bGVmdDogMTBweDtcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQgYSwgLnN3aXBlci1zbGlkZSAuY29udGVudCBzcGFuIHtcblx0Y29sb3I6ICNmZmY7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGlvbi1pY29uIHtcblx0Y29sb3I6ICNmZmFmMDA7XG59XG4uYmFubmVyX3NsaWRlIGlvbi1zbGlkZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jYXRhZ29yaWVzX3NsaWRlciB7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICNmZmZmY2M7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmMmNjLCAjZmZmZmNjKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmMmNjLCAjZmZmZmNjKTtcbn1cbi5jYXRhZ29yaWVzX3NsaWRlciAuc3dpcGVyLXNsaWRlOmJlZm9yZSB7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmJsdWVfY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cbi5ibHVlX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdG1heC13aWR0aDogMTAwJTtcblx0bWF4LWhlaWdodDogODBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wcm9kdWN0X3NsaWRlIHtcblx0cGFkZGluZzogMTVweDtcblx0YmFja2dyb3VuZDogIzBDMTUzQjtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI2NDQsICMwQzE1M0IpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI2NDQsICMwQzE1M0IpO1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5wcm9kdWN0X3NsaWRlIHAgYSB7XG5cdGNvbG9yOiAjNzk3NDk0O1xufVxuaW9uLXRleHR7XG4gICAgY29sb3I6Izc5NzQ5NDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcblx0b3BhY2l0eTogMTtcblx0YmFja2dyb3VuZDogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcblx0bGVmdDogMjVweDtcbn1cbi5mb3J5b3VfY2FyZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuLmZvcnlvdV9jYXJkOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcbn1cbi5mb3J5b3VfY2FyZCAuYm9va21hcmsge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMTVweDtcblx0cmlnaHQ6IDE1cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmZvcnlvdV9jYXJkIC5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDIwcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG4uZm9yeW91X2NhcmQgaW1nIHtcblx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0bWF4LWhlaWdodDogNDAwcHggIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ibHVlX3RhYl9jYXJkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZWJmZDtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLmJsdWVfdGFiX2NhcmQgaW9uLXJvdyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0cGFkZGluZzogN3B4O1xufVxuLmJsdWVfdGFiX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5idG4tc2VnbWVudC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcblx0YmFja2dyb3VuZDogI2U0MmYwODtcblx0Y29sb3I6ICNlNDJmMDg7XG59XG5hIHtcblx0Y29sb3I6YmxhY2s7XG59XG4ucGFkLTV7XG4gICAgcGFkZGluZzo1cHg7XG59XG5cbi5ibGluay1tZSB7XG4gIGFuaW1hdGlvbjogYmxpbmtlciAxLjVzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGlua2VyIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */";

/***/ }),

/***/ 21310:
/*!*************************************************************!*\
  !*** ./src/app/programs/programs.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".toolbar-content {\n  text-align: center;\n  font-weight: 600;\n}\n\nion-header {\n  --background: white;\n}\n\n.text-justify {\n  text-align: justify;\n  color: #797494;\n}\n\n.header-area {\n  background-color: #fff !important;\n  height: 100px !important;\n  background-position: 0% 63%;\n}\n\n.mt21 {\n  margin-top: 20px;\n}\n\n#icons {\n  font-size: 25px;\n  color: #67696c !important;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n  margin: 0 0 10px 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #e42f08;\n}\n\np {\n  color: #797494;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyYW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlBO0VBQ0MsbUJBQUE7QUFERDs7QUFHQTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQUFEOztBQUVBO0VBRUksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBRUE7RUFDQyxnQkFBQTtBQUNEOztBQUNBO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFFRDs7QUFBQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUdEOztBQURBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQUlEOztBQUZBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFLRDs7QUFIQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQU1EOztBQUpBO0VBQ0MsV0FBQTtBQU9EOztBQUxBO0VBQ0MsY0FBQTtBQVFEOztBQU5BO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBU0Q7O0FBUEE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFFQSx1REFBQTtBQVVEOztBQVJBO0VBQ0MsdUJBQUE7QUFXRDs7QUFUQTtFQUNDLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQyxrQkFBQTtBQVlGOztBQVZBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFhRDs7QUFYQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBY0Q7O0FBWkE7RUFDQyx1QkFBQTtBQWVEOztBQWJBO0VBQ0MsY0FBQTtBQWdCRDs7QUFkQTtFQUNDLFVBQUE7RUFDQSw4QkFBQTtBQWlCRDs7QUFmQTtFQUNDLFVBQUE7QUFrQkQ7O0FBaEJBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFtQkQ7O0FBakJBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBb0JEOztBQWxCQTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFxQkQ7O0FBbkJBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBc0JEOztBQXBCQTtFQUNDLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQXVCRDs7QUFyQkE7RUFDQyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Msa0JBQUE7QUF3QkY7O0FBdEJBO0VBQ0Msc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF5QkQ7O0FBdkJBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTBCRDs7QUF4QkE7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUEyQkQ7O0FBekJBO0VBQ0MsY0FBQTtBQTRCRCIsImZpbGUiOiJwcm9ncmFtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10b29sYmFyIHtcbi8vIFx0aGVpZ2h0OiAzMyU7XG4vLyB9XG4udG9vbGJhci1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1oZWFkZXJ7XG5cdC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG4udGV4dC1qdXN0aWZ5IHtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0Y29sb3I6Izc5NzQ5NDtcbn1cbi5oZWFkZXItYXJlYSB7XG5cdCAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9qdXNtYXJrdGVjaC5pbi9DdWx0dXJlL2ltZy9iZy1pbWcvTk9URVMxLnBuZykgcmVwZWF0LXggI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDYzJTtcbn1cbi5tdDIxe1xuXHRtYXJnaW4tdG9wOjIwcHhcbn1cbiNpY29ucyB7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Y29sb3I6ICM2NzY5NmMhaW1wb3J0YW50O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uc2xpZGUyX2ltZyB7XG5cdG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHRtYXgtaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnN3aXBlci1zbGlkZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAyMHB4O1xuXHRsZWZ0OiAxMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCBhLCAuc3dpcGVyLXNsaWRlIC5jb250ZW50IHNwYW4ge1xuXHRjb2xvcjogI2ZmZjtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQgaW9uLWljb24ge1xuXHRjb2xvcjogI2ZmYWYwMDtcbn1cbi5iYW5uZXJfc2xpZGUgaW9uLXNsaWRlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNhdGFnb3JpZXNfc2xpZGVyIHtcblx0cGFkZGluZzogMTVweDtcblx0YmFja2dyb3VuZDogI2ZmZmZjYztcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYyY2MsICNmZmZmY2MpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYyY2MsICNmZmZmY2MpO1xufVxuLmNhdGFnb3JpZXNfc2xpZGVyIC5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYmx1ZV9jYXJkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZWJmZDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0cGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLmJsdWVfY2FyZCAudHJlbmRpbmdfaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRtYXgtaGVpZ2h0OiA4MHB4O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnByb2R1Y3Rfc2xpZGUge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiAjMEMxNTNCO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0MjY0NCwgIzBDMTUzQik7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0MjY0NCwgIzBDMTUzQik7XG59XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXNsaWRlOmJlZm9yZSB7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnByb2R1Y3Rfc2xpZGUgcCBhIHtcblx0Y29sb3I6ICM3OTc0OTQ7XG59XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG5cdG9wYWNpdHk6IDE7XG5cdGJhY2tncm91bmQ6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbiwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG5cdGxlZnQ6IDI1cHg7XG59XG4uZm9yeW91X2NhcmQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcbn1cbi5mb3J5b3VfY2FyZDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG59XG4uZm9yeW91X2NhcmQgLmJvb2ttYXJrIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDE1cHg7XG5cdHJpZ2h0OiAxNXB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mb3J5b3VfY2FyZCAuY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAyMHB4O1xuXHRsZWZ0OiAxMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuLmZvcnlvdV9jYXJkIGltZyB7XG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYmx1ZV90YWJfY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cbi5ibHVlX3RhYl9jYXJkIGlvbi1yb3cge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHBhZGRpbmc6IDdweDtcbn1cbi5ibHVlX3RhYl9jYXJkIC50cmVuZGluZ19pbWcge1xuXHR3aWR0aDogODBweDtcblx0aGVpZ2h0OiA4MHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYnRuLXNlZ21lbnQuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG5cdGJhY2tncm91bmQ6ICNlNDJmMDg7XG5cdGNvbG9yOiAjZTQyZjA4O1xufVxucHtcblx0Y29sb3I6Izc5NzQ5NDtcbn0iXX0= */";

/***/ }),

/***/ 91670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header translucent=\"false\">\n  <ion-toolbar class=\"toolbar-content\">\n    <!-- <ion-buttons name=\"main\"> -->\n    <ion-text> एम पी कल्चर ऐप, मध्य प्रदेश, संस्कृति विभाग</ion-text>\n    <!-- </ion-buttons> -->\n  </ion-toolbar>\n  <ion-row class=\"header-area\">\n    <ion-col size=\"1.5\">\n      <ion-buttons name=\"main\" class=\"mt21\">\n        <ion-menu-button>\n          <ion-icon name=\"grid-outline\" id=\"icons\"></ion-icon>\n        </ion-menu-button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col size=\"3.5\" class=\"mt10\">\n      <div class=\"login_img\">\n        <img src=\"../../../assets/images/15aug.jpeg\" width=\"100px\" height=\"85px\" />\n      </div>\n    </ion-col>\n    <ion-col size=\"4\" class=\"\">\n      <div class=\"login_img\">\n        <img src=\"../../../assets/images/mp-logo.png\" width=\"100px\" />\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-end mt30\">\n      <img src=\"../../../assets/images/about.png\" class=\"about_img\" />\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-row>\n    <!-- <ion-col> -->\n    <ion-slides pager=\"true\" [options]=\"slideOptsOne\" *ngIf=\"landingImages\">\n      <ion-slide *ngFor=\"let landingData of landingImages; let index=index\">\n        <img src=\"{{mediaUrl + landingData?.PhotoPath}}\" class=\"banner_img\" />\n      </ion-slide>\n    </ion-slides>\n    <!-- </ion-col> -->\n  </ion-row>\n  <ion-row class=\"mt10 ion-padding\" *ngIf=\"landingPageData\">\n    <ion-col size=\"8\">\n      <span class=\"border_bottom_red\">हमारे बारे में / About Us</span>\n    </ion-col>\n    <ion-col class=\"mt10\" size=\"12\" *ngFor=\"let landingData of landingPageData\">\n      <p class=\"text-justify\" style=\"white-space: pre-wrap\">{{landingData.AppLandingPageText}}</p>\n    </ion-col>\n  </ion-row>\n\n  <!-- <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h3 class=\"m-0 p-0\">हमारे बारे में / About Us</h3>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <img src=\"../../../assets/images/about.png\" class=\"about_img\" />\n      </ion-col>\n      <ion-col size=\"12\">\n        <p>\n          मध्येप्रदेश की कला, साहित्य और संस्कृति को हर सम्भव उपयों द्वारा प्रोन्नत करना, सांस्कृतिक\n          धरोहर, पुरातात्विक सम्पदा एवं ऐतिहासिक महत्व का यथास्थिति संरक्षण एवं विरूपण, विनाश,\n          अपक्षरण, व्ययन या निर्यात से संरक्षण, जनजातीय और लोक कला, साहित्य एवं संस्कृति का\n          अनुरक्षण, संरक्षण, प्रोत्साहन, प्रदर्शन, प्रशिक्षण एवं विकास करना संस्कृति विभाग का मुख्य\n          उद्देश्य हैं। मध्यप्रदेश की कला, संस्कृति, साहित्य, राजभाषा, स्वाधीनता संग्राम से संबंधित\n          एवं पुरासम्पदा के संरक्षण, संवर्धन तथा उनके उत्तरोत्तर विकास, कलाकारों, साहित्यकारों,\n          विद्वानों, पुरातत्वविदों एवं संगठनों का सम्मांन, नाट्य विद्यालय, रंगकर्म प्रदर्शन तथा\n          अध्ययन, अभिनय, प्रशिक्षण, प्रचार और विकास, अशासकीय सांस्कृतिक संगठनों को प्रोत्साहन एवं\n          वित्तीय सहायता उपलब्ध कराना, संगीत एवं ललित कला को प्रोन्नत, सुदृढ़, विस्तार आदि के लिये\n          उद्देश्य अनुरूप सक्रिय है।\n        </p>\n        <p>\n          विभाग संस्कृति के विभिन्न क्षेत्रों में प्रतिभा को बढ़ावा देने और मध्यप्रदेश की समृद्ध\n          संस्कृति/विरासत के बारे में देश-दुनिया को जानकारी देने के लिए राज्य भर में कई सांस्कृतिक\n          गतिविधियों का आयोजन, प्रचार-प्रसार एवं दस्तावेजीकरण करता है।\n        </p>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- <ion-row class=\"mt20\">\n    <ion-col size=\"12\" class=\"catagories_slider\">\n      <h3 class=\"m-0\">Top Catagories</h3>\n      <ion-slides>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Sports</div>\n              </div>\n              <img src=\"../../../assets/images/slide1.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Fashion</div>\n              </div>\n              <img src=\"../../../assets/images/slide2.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Tech</div>\n              </div>\n              <img src=\"../../../assets/images/slide3.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Gadgets</div>\n              </div>\n              <img src=\"../../../assets/images/slide4.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Health</div>\n              </div>\n              <img src=\"../../../assets/images/slide5.jpg\" class=\"slide2_img\" />\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"content\">\n                <div class=\"red_btn\">Politics</div>\n              </div>\n              <img src=\"../../../assets/images/slide6.jpg\" class=\"slide2_img\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row> -->\n\n  <!-- Today's programs [OPEN]-->\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"12\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">आज के कार्यक्रम</span\n          ><span class=\"mt10 d-block\">Today's Program</span>\n        </h5>\n      </ion-col>\n      <!-- <ion-col size=\"6\" class=\"ion-text-end\">\n        <a class=\"red_btn\" (click)=\"viewAllUpcomingProgram()\">View All</a>\n      </ion-col> -->\n    </ion-row>\n    <ion-card\n      class=\"blue_card\"\n      (click)=\"viewProgramDetails(program, true)\"\n      *ngFor=\"let program of todaysPrograms\"\n    >\n      <ion-row>\n        <ion-col size=\"4\">\n          <img\n            src=\"{{program.ProgramMultiMedia.length ? (mediaUrl+ program.ProgramMultiMedia[0].MediaPath) :'../../../assets/images/b3.jpg'}}\"\n            class=\"trending_img\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <h6 class=\"mb10\">\n              <a>{{program.ProgramName}} </a>\n            </h6>\n          </h6>\n          <a class=\"see_green_btn mr-1\"\n            >स्थान: {{program.Venue ? program.Venue : program.CityName}}</a\n          >\n          <p class=\"mt5\">\n            {{program.ProgramStartDate }} | {{program.ProgramEndDate }} <br />\n            {{program.StartTime}} To {{program.EndTime }}\n          </p>\n          <a>{{program.ProgramDateTime | date:'short':'IST'}}</a>\n          <p class=\"mt10\" style=\"white-space: pre-wrap\">{{program.AboutProgram}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Today's programs [CLOSE]-->\n\n  <!-- Upcoming programs [OPEN]-->\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">आगामी कार्यक्रम</span\n          ><span class=\"mt10 d-block\">Upcoming Program</span>\n        </h5>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <a class=\"red_btn\" (click)=\"viewAllUpcomingProgram()\">View All</a>\n      </ion-col>\n    </ion-row>\n    <ion-card\n      class=\"blue_card\"\n      (click)=\"viewProgramDetails(program)\"\n      *ngFor=\"let program of upcomingPrograms\"\n    >\n      <ion-row>\n        <ion-col size=\"4\">\n          <img\n            src=\"{{program.ProgramMultiMedia.length ? mediaUrl+ program.ProgramMultiMedia[0].MediaPath :'../../../assets/images/b3.jpg'}}\"\n            class=\"trending_img\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <h6 class=\"mb10\">\n              <a>{{program.ProgramName}} </a>\n            </h6>\n          </h6>\n          <a class=\"see_green_btn mr-1\"\n            >स्थान: {{program.Venue ? program.Venue : program.CityName}}</a\n          >\n          <a>{{program.ProgramDateTime | date:'short':'IST'}}</a>\n          <p class=\"mt10\" style=\"white-space: pre-wrap\">{{program.AboutProgram}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Upcoming programs [CLOSE]-->\n\n  <!-- Artist Category [OPEN]-->\n  <div class=\"ion-padding\">\n    <!-- <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">कलाकार श्रेणी</span\n          ><span class=\"mt10 d-block\">Artist Category</span>\n        </h5>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <a class=\"red_btn\">View All</a>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">शास्त्रीय / classical</a>\n          </div>\n          <img src=\"../../../assets/images/cat1.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">उप शास्त्रीय / sub classical</a>\n          </div>\n          <img src=\"../../../assets/images/cat2.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">आधुनिक कला / modern Art</a>\n          </div>\n          <img src=\"../../../assets/images/cat3.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">लोक एवं आदिवासी / folk and tribal</a>\n          </div>\n          <img src=\"../../../assets/images/cat4.jpg\" />\n        </ion-card>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row class=\"mt20\">\n      <ion-col size=\"8\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">मासिक लोकप्रिय कार्यक्रम</span\n          ><span class=\"mt10 d-block\"> Monthly Popular Program's </span>\n        </h5>\n      </ion-col>\n      <!-- <ion-col size=\"4\" class=\"ion-text-end\">\n        <a class=\"red_btn\">View All</a>\n      </ion-col> -->\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a class=\"gray_btn\">Mrinalini<br />नृत्य/Dancer</a>\n          </div>\n          <img src=\"../../../assets/images/b5.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a class=\"gray_btn\"> Bhuri Bai<br />चित्रकारी / painting</a>\n          </div>\n          <img src=\"../../../assets/images/b6.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a class=\"gray_btn\">Sreetoma<br />गायन/Singer</a>\n          </div>\n          <img src=\"../../../assets/images/b7.jpg\" />\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a class=\"gray_btn\">Rishav Ishu<br />Actor</a>\n          </div>\n          <img src=\"../../../assets/images/b8.jpg\" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- Artist Category [CLOSE]-->\n</ion-content>\n";

/***/ }),

/***/ 56914:
/*!************************************************************************************!*\
  !*** ./src/app/programs/program-details/program-details.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button>\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Program Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-row>\n    <ion-slides\n      pager=\"true\"\n      [options]=\"slideOptsOne\"\n      *ngIf=\"programDetails.ProgramMultiMedia.length\"\n    >\n      <ion-slide *ngFor=\"let details of programDetails.ProgramMultiMedia; let index = index\">\n        <img src=\"{{ mediaUrl + details?.MediaPath }}\" class=\"banner_img\" />\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item>\n        <a\n          *ngIf=\"programDetails.today\"\n          href=\"https://jusmarktech.in/Culture/live.html\"\n          target=\"_blank\"\n        >\n          <h3 class=\"text-danger blink-me\">Program Live Streaming Link</h3></a\n        >\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"mt10 pad-5\" *ngIf=\"programDetails\">\n    <ion-col size=\"12\">\n      <span class=\"border_bottom_red\">Program Details</span>\n    </ion-col>\n    <ion-col class=\"mt10\" size=\"12\">\n      <ion-text><b>Program Name : </b>{{ programDetails.ProgramName }}</ion-text\n      ><br />\n      <ion-text\n        ><b>Program Date & Time : </b> {{ programDetails.ProgramStartDate }} |\n        {{ programDetails.ProgramEndDate }} <br />\n        {{ programDetails.StartTime }} To {{ programDetails.EndTime }} </ion-text\n      ><br />\n      <ion-text><b>Address : </b>{{ programDetails.Venue }}</ion-text>\n    </ion-col>\n\n    <ion-col size=\"12\" class=\"mt10\">\n      <span class=\"border_bottom_red\">About Program</span>\n    </ion-col>\n    <ion-col class=\"mt10\" size=\"12\">\n      <h4>\n        <ion-text>{{ programDetails.ProgramName }}</ion-text>\n      </h4>\n      <p class=\"text-justify mt10\" style=\"white-space: pre-wrap\">\n        {{ programDetails.AboutProgram }}\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ }),

/***/ 44119:
/*!*************************************************************!*\
  !*** ./src/app/programs/programs.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button>\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\"\n      >{{ activeRoute.snapshot.paramMap.get(\"param\") | titlecase }} Programs</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <!-- Today's programs [OPEN]-->\n  <div class=\"ion-padding\" *ngIf=\"activeRoute.snapshot.paramMap.get('param') == paramString\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"12\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">आज के कार्यक्रम</span\n          ><span class=\"mt10 d-block\">Today's Program</span>\n        </h5>\n      </ion-col>\n    </ion-row>\n    <ion-card\n      class=\"blue_card\"\n      (click)=\"viewProgramDetails(program, true)\"\n      *ngFor=\"let program of todayPrograms\"\n    >\n      <ion-row>\n        <ion-col size=\"4\">\n          <img\n            src=\"{{\n              program.ProgramMultiMedia.length\n                ? mediaUrl + program.ProgramMultiMedia[0].MediaPath\n                : '../../../assets/images/b3.jpg'\n            }}\"\n            class=\"trending_img\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <h6 class=\"mb10\">\n              <a>{{ program.ProgramName }} </a>\n            </h6>\n          </h6>\n          <p class=\"mt5\">\n            {{ program.ProgramStartDate }} | {{ program.ProgramEndDate }} <br />\n            {{ program.StartTime }} To {{ program.EndTime }}\n          </p>\n          <a class=\"see_green_btn mr-1\"\n            >स्थान: {{ program.Venue ? program.Venue : program.CityName }}</a\n          >\n          <a>{{ program.ProgramDateTime | date: \"short\":\"IST\" }}</a>\n          <p class=\"mt10\" style=\"white-space: pre-wrap\">{{ program.AboutProgram }}</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Today's programs [CLOSE]-->\n\n  <!-- Upcoming programs [OPEN]-->\n  <div class=\"ion-padding\" *ngIf=\"activeRoute.snapshot.paramMap.get('param') == 'upcoming'\">\n    <ion-card class=\"blue_card\" *ngFor=\"let program of upcomingPrograms; let index = index\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img\n            src=\"{{\n              program.ProgramMultiMedia.length\n                ? mediaUrl + program.ProgramMultiMedia[0].MediaPath\n                : '../../../assets/images/b3.jpg'\n            }}\"\n            class=\"trending_img\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <ion-text color=\"dark\">{{ program.ProgramName }}</ion-text>\n          </h6>\n          <a class=\"mr-1\" class=\"{{ index % 2 !== 0 ? 'orange_btn' : 'see_green_btn' }}\"\n            >स्थान: {{ program.Venue }}</a\n          >\n          <p class=\"mt5\">\n            {{ program.ProgramStartDate }} | {{ program.ProgramEndDate }} <br />\n            {{ program.StartTime }} To {{ program.EndTime }}\n          </p>\n          <!-- <p class=\"mt10\">देशभक्ति आधारित स्वराज संस्थान संचालनालय</p> -->\n          <p class=\"mt10\" style=\"white-space: pre-wrap\">{{ program.AboutProgram }}</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Upcoming programs [CLOSE]-->\n\n  <!-- Archive programs [OPEN]-->\n  <div class=\"ion-padding\" *ngIf=\"activeRoute.snapshot.paramMap.get('param') == 'archive'\">\n    <ion-card class=\"blue_card\" *ngFor=\"let program of pastPrograms; let index = index\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <img\n            src=\"{{\n              program.ProgramMultiMedia.length\n                ? mediaUrl + program.ProgramMultiMedia[0].MediaPath\n                : '../../../assets/images/b3.jpg'\n            }}\"\n            class=\"trending_img\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <ion-text color=\"dark\">{{ program.ProgramName }}</ion-text>\n          </h6>\n          <a class=\"mr-1\" class=\"{{ index % 2 !== 0 ? 'orange_btn' : 'see_green_btn' }}\"\n            >स्थान: {{ program.Venue ? program.Vanue : program.CityName }}</a\n          ><br />\n          <p class=\"mt5\">\n            {{ program.ProgramStartDate }} | {{ program.ProgramEndDate }} <br />\n            {{ program.StartTime }} To {{ program.EndTime }}\n          </p>\n          <p class=\"mt20\">{{ program.AboutProgram }}</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Archive programs [CLOSE]-->\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map