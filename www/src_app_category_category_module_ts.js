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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.page */ 30838);
/* harmony import */ var _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-category/sub-category.component */ 25245);





const routes = [
    {
        path: "",
        component: _category_page__WEBPACK_IMPORTED_MODULE_0__.CategoryPage
    },
    {
        path: "subCategory",
        component: _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_1__.SubCategoryComponent
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-routing.module */ 14826);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page */ 30838);
/* harmony import */ var _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sub-category/sub-category.component */ 25245);








let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryPageRoutingModule],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_1__.CategoryPage, _sub_category_sub_category_component__WEBPACK_IMPORTED_MODULE_2__.SubCategoryComponent]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.page.html?ngResource */ 75966);
/* harmony import */ var _category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page.scss?ngResource */ 45058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api-service.service */ 7149);







let CategoryPage = class CategoryPage {
    constructor(route, apiService) {
        this.route = route;
        this.apiService = apiService;
        this.mediaUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.mediaUrl + "/";
    }
    ngOnInit() {
        this.apiService.categoryClientState().subscribe((ready) => {
            if (ready) {
                this.categoryClientReady = true;
                this.loadAllCategory();
            }
        });
    }
    loadAllCategory() {
        this.apiService.loadCategoryData().subscribe((res) => {
            console.log("category data", res);
            this.categories = res;
        });
    }
    openSubCategory(category) {
        this.route.navigate(["/tabs/category/subCategory"], {
            state: category
        });
    }
    navigateToHome() {
        this.route.navigate([""]);
    }
};
CategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_3__.ApiServiceService }
];
CategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-category",
        template: _category_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_category_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoryPage);



/***/ }),

/***/ 25245:
/*!*****************************************************************!*\
  !*** ./src/app/category/sub-category/sub-category.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoryComponent": () => (/* binding */ SubCategoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sub_category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-category.component.html?ngResource */ 97922);
/* harmony import */ var _sub_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-category.component.scss?ngResource */ 57920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);






let SubCategoryComponent = class SubCategoryComponent {
    constructor(router) {
        this.router = router;
        this.mediaUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.mediaUrl + "/";
    }
    ngOnInit() {
        this.category = this.router.getCurrentNavigation().extras.state;
        console.log("rout state", this.category);
    }
};
SubCategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SubCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-sub-category",
        template: _sub_category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sub_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubCategoryComponent);



/***/ }),

/***/ 7149:
/*!************************************************!*\
  !*** ./src/app/service/api-service.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiServiceService": () => (/* binding */ ApiServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-soap */ 58335);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);






let ApiServiceService = class ApiServiceService {
    constructor(http, soap) {
        this.http = http;
        this.soap = soap;
        this.path = "../assets/test.xml";
        this.programWSDLPath = "../assets/program.xml";
        this.landingPageWSDLPath = "../assets/landingPage.xml";
        this.artistRegisterWSDLPath = "../assets/artistRegister.xml";
        this.categoryWSDLPath = "../assets/category.xml";
        this.settingsWSDLPath = "../assets/settings.xml";
        this.clientReady = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.programClientReady = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.landingPageClientReady = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.artistRegisterClientReady = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.categoryClientReady = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.settingsClientReady = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.soap.createClient(this.path).then((client) => {
            console.log("client", client);
            this.client = client;
            this.clientReady.next(true);
        });
        this.soap.createClient(this.programWSDLPath).then((client) => {
            console.log("program client", client);
            this.programClient = client;
            this.programClientReady.next(true);
        });
        this.soap.createClient(this.landingPageWSDLPath).then((client) => {
            console.log("landing page client", client);
            this.landingPageClient = client;
            this.landingPageClientReady.next(true);
        });
        this.soap.createClient(this.artistRegisterWSDLPath).then((client) => {
            console.log("artist register client", client);
            this.artistRegisterClient = client;
            this.artistRegisterClientReady.next(true);
        });
        this.soap.createClient(this.categoryWSDLPath).then((client) => {
            console.log("artist register client", client);
            this.categoryClient = client;
            this.categoryClientReady.next(true);
        });
        this.soap.createClient(this.settingsWSDLPath).then((client) => {
            console.log("artist register client", client);
            this.settingsClient = client;
            this.settingsClientReady.next(true);
        });
    }
    clientState() {
        return this.clientReady.asObservable();
    }
    programClientState() {
        return this.programClientReady.asObservable();
    }
    landingPageClientState() {
        return this.landingPageClientReady.asObservable();
    }
    artistRegisterClientState() {
        return this.artistRegisterClientReady.asObservable();
    }
    categoryClientState() {
        return this.categoryClientReady.asObservable();
    }
    settingsClientState() {
        return this.settingsClientReady.asObservable();
    }
    userLogin(obj) {
        this.client.addHttpHeader("Content-Type", "text/xml");
        return this.client.call("UserLogin", obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.UserLoginResult);
        }));
    }
    // AudienceLogin;
    audienceLogin(obj) {
        this.client.addHttpHeader("Content-Type", "text/xml");
        return this.client.call("AudienceLogin", obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.AudienceLoginResult);
        }));
    }
    artistLogin(obj) {
        this.client.addHttpHeader("Content-Type", "text/xml");
        return this.client.call("ArtistLogin", obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.ArtistLoginResult);
        }));
    }
    loadLiveProgram() {
        this.programClient.addHttpHeader("Content-Type", "text/xml");
        return this.programClient.call("LoadLiveProgram", { Count: 20 }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.LoadLiveProgramResult);
        }));
    }
    loadUpcomingProgram() {
        this.programClient.addHttpHeader("Content-Type", "text/xml");
        return this.programClient.call("LoadUpcomingProgram", { Count: 20 }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.LoadUpcomingProgramResult);
        }));
    }
    loadPastProgram() {
        this.programClient.addHttpHeader("Content-Type", "text/xml");
        return this.programClient.call("LoadPastProgram", { Count: 20 }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.LoadPastProgramResult);
        }));
    }
    loadTodaysProgram() {
        this.programClient.addHttpHeader("Content-Type", "text/xml");
        return this.programClient.call("LoadTodaysProgram", { Count: 20 }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.LoadTodaysProgramResult);
        }));
    }
    loadMonthlyProgram() {
        this.programClient.addHttpHeader("Content-Type", "text/xml");
        return this.programClient.call("PopularProgramOfMonth", { Count: 20 }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.PopularProgramOfMonthResult);
        }));
    }
    loadProgramRating() {
        this.programClient.addHttpHeader("Content-Type", "text/xml");
        return this.programClient.call("LoadProgramRatingReviewByProgramId", { Count: 20 }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.LoadProgramRatingReviewByProgramIdResult);
        }));
    }
    loadLandingPageContent() {
        this.landingPageClient.addHttpHeader("Content-Type", "text/xml");
        return this.landingPageClient.call("LoadLandingData", {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.LoadLandingDataResult);
        }));
    }
    doArtistRegister(obj) {
        this.artistRegisterClient.addHttpHeader("Content-Type", "text/xml");
        return this.artistRegisterClient.call("ArtistSignup", obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.ArtistSignupResult);
        }));
    }
    doAudienceRegister(obj) {
        this.artistRegisterClient.addHttpHeader("Content-Type", "text/xml");
        return this.artistRegisterClient.call("AudienceSignup", obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.AudienceSignupResult);
        }));
    }
    doAudienceProfileUpdate(obj) {
        this.artistRegisterClient.addHttpHeader("Content-Type", "text/xml");
        return this.artistRegisterClient.call("AudienceUpdate", obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.AudienceUpdateResult);
        }));
    }
    getArtistRegisterRequirement() {
        this.artistRegisterClient.addHttpHeader("Content-Type", "text/xml");
        return this.artistRegisterClient.call("ArtistRegistrationPageLoad", {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.ArtistRegistrationPageLoadResult);
        }));
    }
    loadCategoryData() {
        this.categoryClient.addHttpHeader("Content-Type", "text/xml");
        return this.categoryClient.call("LoadAllCategory", {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.LoadAllCategoryResult);
        }));
    }
    loadSettingsData(audienceData) {
        this.settingsClient.addHttpHeader("Content-Type", "text/xml");
        return this.settingsClient.call("LoadNotificationRequirementByAudienceId", audienceData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.LoadNotificationRequirementByAudienceIdResult);
        }));
    }
    changeSettings(audienceSettingsData) {
        this.settingsClient.addHttpHeader("Content-Type", "text/xml");
        return this.settingsClient.call("UpdateNotificationRequirement", audienceSettingsData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.UpdateNotificationRequirementResult);
        }));
    }
};
ApiServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: ngx_soap__WEBPACK_IMPORTED_MODULE_3__.NgxSoapService }
];
ApiServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root"
    })
], ApiServiceService);



/***/ }),

/***/ 45058:
/*!********************************************************!*\
  !*** ./src/app/category/category.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".icons {\n  font-size: 25px;\n  color: gray;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 500px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #fff;\n}\n\n.back-button {\n  padding-left: 10px;\n  font-size: 7vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFDQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUVEOztBQUFBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBR0Q7O0FBREE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBSUQ7O0FBRkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBS0Q7O0FBSEE7RUFDQyxXQUFBO0FBTUQ7O0FBSkE7RUFDQyxjQUFBO0FBT0Q7O0FBTEE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFRRDs7QUFOQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBU0Q7O0FBUEE7RUFDQyx1QkFBQTtBQVVEOztBQVJBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVdEOztBQVRBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFZRDs7QUFWQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBYUQ7O0FBWEE7RUFDQyx1QkFBQTtBQWNEOztBQVpBO0VBQ0MsY0FBQTtBQWVEOztBQWJBO0VBQ0MsVUFBQTtFQUNBLDhCQUFBO0FBZ0JEOztBQWRBO0VBQ0MsVUFBQTtBQWlCRDs7QUFmQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBa0JEOztBQWhCQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFtQkQ7O0FBakJBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQW9CRDs7QUFsQkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFxQkQ7O0FBbkJBO0VBQ0Msc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBc0JEOztBQXBCQTtFQUNDLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUF1QkQ7O0FBckJBO0VBQ0Msc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF3QkQ7O0FBdEJBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXlCRDs7QUF2QkE7RUFDQyxtQkFBQTtFQUNBLFdBQUE7QUEwQkQ7O0FBeEJBO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0FBMkJEIiwiZmlsZSI6ImNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ucyB7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Y29sb3I6IGdyYXk7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5zbGlkZTJfaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3dpcGVyLXNsaWRlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMjBweDtcblx0bGVmdDogMTBweDtcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGEsIC5zd2lwZXItc2xpZGUgLmNvbnRlbnQgc3BhbiB7XG5cdGNvbG9yOiAjZmZmO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCBpb24taWNvbiB7XG5cdGNvbG9yOiAjZmZhZjAwO1xufVxuLmJhbm5lcl9zbGlkZSBpb24tc2xpZGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2F0YWdvcmllc19zbGlkZXIge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmZmNjO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG59XG4uY2F0YWdvcmllc19zbGlkZXIgLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5ibHVlX2NhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmZkO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuLmJsdWVfY2FyZCAudHJlbmRpbmdfaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRtYXgtaGVpZ2h0OiA4MHB4O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnByb2R1Y3Rfc2xpZGUge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiAjMEMxNTNCO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0MjY0NCwgIzBDMTUzQik7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0MjY0NCwgIzBDMTUzQik7XG59XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXNsaWRlOmJlZm9yZSB7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnByb2R1Y3Rfc2xpZGUgcCBhIHtcblx0Y29sb3I6ICM3OTc0OTQ7XG59XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG5cdG9wYWNpdHk6IDE7XG5cdGJhY2tncm91bmQ6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbiwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG5cdGxlZnQ6IDI1cHg7XG59XG4uZm9yeW91X2NhcmQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcbn1cbi5mb3J5b3VfY2FyZDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xufVxuLmZvcnlvdV9jYXJkIC5ib29rbWFyayB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAxNXB4O1xuXHRyaWdodDogMTVweDtcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZm9yeW91X2NhcmQgLmNvbnRlbnQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMjBweDtcblx0bGVmdDogMTBweDtcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cbi5mb3J5b3VfY2FyZCBpbWcge1xuXHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHRtYXgtaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmJsdWVfdGFiX2NhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmZkO1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiAwO1xufVxuLmJsdWVfdGFiX2NhcmQgaW9uLXJvdyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0cGFkZGluZzogN3B4O1xufVxuLmJsdWVfdGFiX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5idG4tc2VnbWVudC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcblx0YmFja2dyb3VuZDogI2U0MmYwODtcblx0Y29sb3I6ICNmZmY7XG59XG4uYmFjay1idXR0b257XG5cdHBhZGRpbmctbGVmdDogMTBweDtcblx0Zm9udC1zaXplOiA3dnc7XG59Il19 */";

/***/ }),

/***/ 57920:
/*!******************************************************************************!*\
  !*** ./src/app/category/sub-category/sub-category.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".icons {\n  font-size: 25px;\n  color: gray;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 500px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFDQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUVEOztBQUFBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBR0Q7O0FBREE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBSUQ7O0FBRkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBS0Q7O0FBSEE7RUFDQyxXQUFBO0FBTUQ7O0FBSkE7RUFDQyxjQUFBO0FBT0Q7O0FBTEE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFRRDs7QUFOQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBU0Q7O0FBUEE7RUFDQyx1QkFBQTtBQVVEOztBQVJBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVdEOztBQVRBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFZRDs7QUFWQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBYUQ7O0FBWEE7RUFDQyx1QkFBQTtBQWNEOztBQVpBO0VBQ0MsY0FBQTtBQWVEOztBQWJBO0VBQ0MsVUFBQTtFQUNBLDhCQUFBO0FBZ0JEOztBQWRBO0VBQ0MsVUFBQTtBQWlCRDs7QUFmQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBa0JEOztBQWhCQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFtQkQ7O0FBakJBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQW9CRDs7QUFsQkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFxQkQ7O0FBbkJBO0VBQ0Msc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBc0JEOztBQXBCQTtFQUNDLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUF1QkQ7O0FBckJBO0VBQ0Msc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF3QkQ7O0FBdEJBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXlCRDs7QUF2QkE7RUFDQyxtQkFBQTtFQUNBLFdBQUE7QUEwQkQiLCJmaWxlIjoic3ViLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25zIHtcblx0Zm9udC1zaXplOiAyNXB4O1xuXHRjb2xvcjogZ3JheTtcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnNsaWRlMl9pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0bWF4LWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zd2lwZXItc2xpZGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3dpcGVyLXNsaWRlOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAyMHB4O1xuXHRsZWZ0OiAxMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQgYSwgLnN3aXBlci1zbGlkZSAuY29udGVudCBzcGFuIHtcblx0Y29sb3I6ICNmZmY7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGlvbi1pY29uIHtcblx0Y29sb3I6ICNmZmFmMDA7XG59XG4uYmFubmVyX3NsaWRlIGlvbi1zbGlkZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jYXRhZ29yaWVzX3NsaWRlciB7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICNmZmZmY2M7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmMmNjLCAjZmZmZmNjKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmMmNjLCAjZmZmZmNjKTtcbn1cbi5jYXRhZ29yaWVzX3NsaWRlciAuc3dpcGVyLXNsaWRlOmJlZm9yZSB7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmJsdWVfY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHBhZGRpbmc6IDEwcHg7XG59XG4uYmx1ZV9jYXJkIC50cmVuZGluZ19pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdG1heC1oZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZHVjdF9zbGlkZSB7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICMwQzE1M0I7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ucHJvZHVjdF9zbGlkZSBwIGEge1xuXHRjb2xvcjogIzc5NzQ5NDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcblx0b3BhY2l0eTogMTtcblx0YmFja2dyb3VuZDogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcblx0bGVmdDogMjVweDtcbn1cbi5mb3J5b3VfY2FyZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuLmZvcnlvdV9jYXJkOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG59XG4uZm9yeW91X2NhcmQgLmJvb2ttYXJrIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDE1cHg7XG5cdHJpZ2h0OiAxNXB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mb3J5b3VfY2FyZCAuY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAyMHB4O1xuXHRsZWZ0OiAxMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuLmZvcnlvdV9jYXJkIGltZyB7XG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYmx1ZV90YWJfY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYmx1ZV90YWJfY2FyZCBpb24tcm93IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRwYWRkaW5nOiA3cHg7XG59XG4uYmx1ZV90YWJfY2FyZCAudHJlbmRpbmdfaW1nIHtcblx0d2lkdGg6IDgwcHg7XG5cdGhlaWdodDogODBweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuLmJ0bi1zZWdtZW50LnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuXHRiYWNrZ3JvdW5kOiAjZTQyZjA4O1xuXHRjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 75966:
/*!********************************************************!*\
  !*** ./src/app/category/category.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon class=\"back-button\" name=\"arrow-back-outline\" (click)=\"navigateToHome()\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"text-center\">कला विधाये / Art Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let category of categories\">\n        <ion-card (click)=\"openSubCategory(category)\" class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">{{category.ArtCategoryName}}</a>\n          </div>\n          <img\n            src=\"{{category.PicturePath ? mediaUrl+ category.PicturePath :'https://jusmarktech.in/Culture/img/bg-img/category/cat1.jpeg'}}\"\n          />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 97922:
/*!******************************************************************************!*\
  !*** ./src/app/category/sub-category/sub-category.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"text-center\">{{ category.ArtCategoryName | titlecase }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let category of category?.SubCategory\">\n        <ion-card class=\"foryou_card\">\n          <div class=\"content\">\n            <a class=\"red_btn\">{{ category.ArtSubCategoryName }}</a>\n          </div>\n          <img\n            src=\"{{\n              category.PicturePath\n                ? mediaUrl + category.PicturePath\n                : 'https://jusmarktech.in/Culture/img/bg-img/category/cat1.jpeg'\n            }}\"\n          />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_category_category_module_ts.js.map