"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"], {

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
        /* harmony export */
});
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _programs_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../programs/program-details/program-details.component */ 5343);
/* harmony import */ var _programs_programs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../programs/programs.component */ 73375);
/* harmony import */ var _programs_rating_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../programs/rating/rating.component */ 96706);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/settings.component */ 94586);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ 62267);








      const routes = [
        {
          path: "",
          component: _home_page__WEBPACK_IMPORTED_MODULE_4__.HomePage
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
          path: "programDetails/rating",
          component: _programs_rating_rating_component__WEBPACK_IMPORTED_MODULE_2__.RatingComponent
        },
        {
          path: "settings",
          component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__.SettingsComponent
        }
      ];
      let HomePageRoutingModule = class HomePageRoutingModule {
      };
      HomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
        })
      ], HomePageRoutingModule);



      /***/
}),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
        /* harmony export */
});
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _programs_programs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../programs/programs.component */ 73375);
/* harmony import */ var _programs_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../programs/program-details/program-details.component */ 5343);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/settings.component */ 94586);
/* harmony import */ var _programs_rating_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../programs/rating/rating.component */ 96706);












      let HomePageModule = class HomePageModule {
      };
      HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
          imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_11__.SwiperModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule
          ],
          declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
            _programs_programs_component__WEBPACK_IMPORTED_MODULE_2__.ProgramsComponent,
            _programs_program_details_program_details_component__WEBPACK_IMPORTED_MODULE_3__.ProgramDetailsComponent,
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__.SettingsComponent,
            _programs_rating_rating_component__WEBPACK_IMPORTED_MODULE_5__.RatingComponent
          ]
        })
      ], HomePageModule);



      /***/
}),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
        /* harmony export */
});
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 91670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-service.service */ 7149);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _service_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/store.service */ 87627);








      let HomePage = class HomePage {
        constructor(apiService, router, storeService) {
          this.apiService = apiService;
          this.router = router;
          this.storeService = storeService;
          this.upcomingPrograms = [];
          this.todaysPrograms = [];
          this.pastPrograms = [];
          this.monthlyPrograms = [];
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
          this.isReadMore = [false];
          this.isReadMorePara = true;
        }
        ngOnInit() { }
        ionViewWillEnter() {
          this.getStoreData();
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
          // loadMonthlyProgram;
          this.apiService.loadMonthlyProgram().subscribe((res) => {
            console.log("monthly program", res);
            this.monthlyPrograms = res;
          });
        }
        getStoreData() {
          const { upcomingProgramsData = [], pastProgramsData = [], todaysProgramsData = [], monthlyProgramsData = [] } = this.storeService;
          this.upcomingPrograms = upcomingProgramsData;
          this.pastPrograms = pastProgramsData;
          this.todaysPrograms = todaysProgramsData;
          this.monthlyPrograms = monthlyProgramsData;
        }
        loadLandingData() {
          this.apiService.loadLandingPageContent().subscribe((res) => {
            console.log("landing page content", res);
            this.landingPageData = res;
            this.landingImages = this.landingPageData[0].HomeSliderImage;
          });
        }
        viewAllUpcomingProgram() {
          this.router.navigate(["tabs/home/programs", { param: "upcoming programs" }]);
        }
        viewProgramDetails(programDetails) {
          this.router.navigate(["tabs/home/programDetails"], {
            state: programDetails
          });
        }
        showText(index) {
          // console.log("show more", !this.isReadMore[index]);
          this.isReadMore[index] = !this.isReadMore[index];
        }
        showPara() {
          this.isReadMorePara = !this.isReadMorePara;
        }
      };
      HomePage.ctorParameters = () => [
        { type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__.ApiServiceService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
        { type: _service_store_service__WEBPACK_IMPORTED_MODULE_4__.StoreService }
      ];
      HomePage.propDecorators = {
        slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["slider", { static: false },] }],
        slideOpts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["registerSlider", { static: false },] }]
      };
      HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
          selector: "app-home",
          template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
          styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
        })
      ], HomePage);



      /***/
}),

/***/ 5343:
/*!***********************************************************************!*\
  !*** ./src/app/programs/program-details/program-details.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramDetailsComponent": () => (/* binding */ ProgramDetailsComponent)
        /* harmony export */
});
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _program_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./program-details.component.html?ngResource */ 56914);
/* harmony import */ var _program_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program-details.component.scss?ngResource */ 56309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api-service.service */ 7149);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);







      let ProgramDetailsComponent = class ProgramDetailsComponent {
        constructor(router, apiService) {
          this.router = router;
          this.apiService = apiService;
          this.mediaUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.mediaUrl;
          this.slideOptsOne = { initialSlide: 0, slidesPerView: 1, autoplay: true, loop: true };
          this.allRatingData = [];
        }
        ngOnInit() {
          this.storeService.getIsLoggedIn().subscribe((res) => {
            this.isLoggedIn = res;
          });
          this.programDetails = this.router?.getCurrentNavigation()?.extras?.state;
          console.log("details", this.programDetails);
          const { ProgramId = "" } = this.programDetails;
          this.subscription(ProgramId);
        }
        subscription(ProgramId) {
          const obj = { ProgramId: ProgramId, Count: 10 };
          this.apiService.loadProgramRating(obj).subscribe((res) => {
            console.log("program review details", res);
          });
        }
        ionViewWillEnter() { }
      };
      ProgramDetailsComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
        { type: src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__.ApiServiceService }
      ];
      ProgramDetailsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
          selector: "app-program-details",
          template: _program_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
          styles: [_program_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
        })
      ], ProgramDetailsComponent);



      /***/
}),

/***/ 73375:
/*!************************************************!*\
  !*** ./src/app/programs/programs.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramsComponent": () => (/* binding */ ProgramsComponent)
        /* harmony export */
});
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
            state: { ...programDetails, isArchive: !!this.pastPrograms }
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
      ProgramsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
          selector: "app-programs",
          template: _programs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
          styles: [_programs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
        })
      ], ProgramsComponent);



      /***/
}),

/***/ 96706:
/*!*****************************************************!*\
  !*** ./src/app/programs/rating/rating.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingComponent": () => (/* binding */ RatingComponent)
        /* harmony export */
});
/* harmony import */ var _Users_kamalsharma_Desktop_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _rating_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.component.html?ngResource */ 52841);
/* harmony import */ var _rating_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rating.component.scss?ngResource */ 69812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api-service.service */ 7149);
/* harmony import */ var src_app_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/local-storage.service */ 42518);
/* harmony import */ var src_app_service_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/store.service */ 87627);
/* harmony import */ var src_app_service_util_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/util-service.service */ 29922);











      let RatingComponent = class RatingComponent {
        constructor(fb, localStorageService, utilService, router, apiService, storeService) {
          this.fb = fb;
          this.localStorageService = localStorageService;
          this.utilService = utilService;
          this.router = router;
          this.apiService = apiService;
          this.storeService = storeService;
          this.rate = 0;
          this.ratingObj = [{
            index: 1,
            active: false,
            text: "I just hate it"
          }, {
            index: 2,
            active: false,
            text: "I don't like it"
          }, {
            index: 3,
            active: false,
            text: "It is awesome"
          }, {
            index: 4,
            active: false,
            text: "I just like it"
          }, {
            index: 5,
            active: false,
            text: "I just love it"
          }];
        }

        ngOnInit() {
          var _this = this;

          return (0, _Users_kamalsharma_Desktop_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this.ratingForm = _this.fb.group({
              ProgramId: [""],
              rate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
              review: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
              AudienceId: [""]
            });
            const programDetails = _this.router?.getCurrentNavigation()?.extras?.state;
            const {
              ProgramId = ""
            } = programDetails;
            const {
              AudienceId = ""
            } = (yield _this.localStorageService.get("audienceData")) || {};
            console.log("program details", ProgramId);

            _this.ratingForm.patchValue({
              AudienceId,
              ProgramId
            });
          })();
        }

        ionViewWillEnter() {
          return (0, _Users_kamalsharma_Desktop_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () { })();
        }

        doRate(index) {
          console.log(index);

          if (index <= this.ratingObj.length) {
            for (let i = 0;i <= index;++i) {
              this.ratingObj[i].active = true;
            }

            for (let j = index + 1;j < this.ratingObj.length;++j) {
              this.ratingObj[j].active = false;
            }
          }

          this.rate = index;
          this.ratingForm.controls["rate"].setValue(index + 1);
          console.log(this.ratingObj[index].active);
        }

        submit(isValid, formValue) {
          if (!formValue.AudienceId) {
            this.utilService.presentToast("Please login first for rating.");
            return;
          }

          if (!isValid) return;
          const formObj = {
            ProgramId: formValue.ProgramId,
            AudienceId: formValue.AudienceId,
            Rating: formValue.rate,
            Review: formValue.review
          };
          console.log("form obj", formObj);
          this.utilService.presentLoading("Please wait...");
          this.apiService.InsertProgramRatingReviewByAudienceId(formObj).subscribe(res => {
            console.log("rating done", res);

            if (res.result == "success") {
              this.utilService.presentToast(res.message);
              this.storeService.setRatingData(true);
              this.router.navigate(["tabs/home/programDetails"], {
                state: formObj
              });
            } else {
              this.utilService.presentToast(res.message);
            }

            this.utilService.dismissLoading();
          });
        }

      };

      RatingComponent.ctorParameters = () => [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
      }, {
        type: src_app_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
      }, {
        type: src_app_service_util_service_service__WEBPACK_IMPORTED_MODULE_6__.UtilService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
      }, {
        type: src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__.ApiServiceService
      }, {
        type: src_app_service_store_service__WEBPACK_IMPORTED_MODULE_5__.StoreService
      }];

      RatingComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-rating",
        template: _rating_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
        styles: [_rating_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
      })], RatingComponent);


      /***/
}),

/***/ 94586:
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
        /* harmony export */
});
/* harmony import */ var _Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component.html?ngResource */ 49885);
/* harmony import */ var _settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component.scss?ngResource */ 75855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api-service.service */ 7149);
/* harmony import */ var _service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/local-storage.service */ 42518);
/* harmony import */ var _service_util_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/util-service.service */ 29922);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);










      let SettingsComponent = class SettingsComponent {
        constructor(router, renderer, localStorageService, apiService, utilService) {
          this.router = router;
          this.renderer = renderer;
          this.localStorageService = localStorageService;
          this.apiService = apiService;
          this.utilService = utilService;
          this.language = "hindi";
          this.isDefaultLanguage = false;
          this.settingsClientReady = false;
          this.isNotificationChange = true;
        }

        ngOnInit() {// this.mode = (await this.localStorageService.get("mode")) || false;
          // console.log("mode", this.mode);
          // this.apiService.settingsClientState().subscribe(async (ready) => {
          //   if (ready) {
          //     this.settingsClientReady = true;
          //     const { AudienceId = "" } = (await this.localStorageService.get("audienceData")) || "";
          //     this.audienceId = AudienceId;
          //     !_.isEmpty(this.audienceId) && this.loadRequirementForSettings(AudienceId);
          //   }
          // });

          return (0, _Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () { })();
        }

        ionViewWillEnter() {
          var _this = this;

          return (0, _Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this.EmailNotificationRequired = (yield _this.localStorageService.get("EmailNotificationRequired")) || false;
            _this.MobileNotificationRequired = (yield _this.localStorageService.get("MobileNotificationRequired")) || false;
            _this.mode = (yield _this.localStorageService.get("mode")) || false;
            _this.isLanguage = (yield _this.localStorageService.get("isEnglish")) || false;
            console.log("mode", _this.mode);

            _this.apiService.settingsClientState().subscribe( /*#__PURE__*/function () {
              var _ref = (0, _Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ready) {
                if (ready) {
                  _this.settingsClientReady = true;
                  const {
                    AudienceId = ""
                  } = (yield _this.localStorageService.get("audienceData")) || "";
                  _this.audienceId = AudienceId;
                  !lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty(_this.audienceId) && _this.loadRequirementForSettings(AudienceId);
                }
              });

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          })();
        }

        loadRequirementForSettings(AudienceId) {
          const audienceData = {
            AudienceId
          };
          console.log("audience data", audienceData);
          this.apiService.loadSettingsData(audienceData).subscribe(notification => {
            console.log("settings requirement", notification);
            const {
              EmailNotificationRequired = false,
              MobileNotificationRequired = false
            } = notification[0] || {};
            this.isNotificationChange = false;
            this.EmailNotificationRequired = EmailNotificationRequired;
            this.MobileNotificationRequired = MobileNotificationRequired;
          });
        }

        onToggleColorTheme(event) {
          this.localStorageService.set("mode", event.target.checked);

          if (event.target.checked) {
            this.renderer.setAttribute(document.body, "color-theme", "dark");
          } else {
            this.renderer.setAttribute(document.body, "color-theme", "light");
          }
        }

        notificationChange() {
          if (!this.isNotificationChange) {
            this.isNotificationChange = true;
            return;
          }

          const settings = {
            AudienceId: this.audienceId,
            EmailNotificationRequired: this.EmailNotificationRequired,
            SMSNotificationRequired: this.MobileNotificationRequired
          };

          if (!this.audienceId) {
            this.utilService.presentToast("Please login first to change notification settings.");
            return;
          }

          if (!this.EmailNotificationRequired && !this.MobileNotificationRequired) {
            this.utilService.presentToast("Please select atleast one mode of notification.");
            return;
          }

          this.apiService.changeSettings(settings).subscribe(res => {
            console.log(res);
            this.localStorageService.set("EmailNotificationRequired", this.EmailNotificationRequired);
            this.localStorageService.set("MobileNotificationRequired", this.MobileNotificationRequired);

            if (res.result == "success" && res.message) {
              this.utilService.presentToast(res.message);
            } else {
              this.utilService.presentToast(res.message);
            }
          });
        }

        languageSwitcher(event) {
          if (event.target.checked) {
            this.language = "english";
            this.localStorageService.set("isEnglish", true);
          } else {
            this.language = "hindi";
            this.localStorageService.set("isEnglish", false);
          }
        }

        navigateToHome() {
          this.router.navigate([""]);
        }

      };

      SettingsComponent.ctorParameters = () => [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2
      }, {
        type: _service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
      }, {
        type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_3__.ApiServiceService
      }, {
        type: _service_util_service_service__WEBPACK_IMPORTED_MODULE_5__.UtilService
      }];

      SettingsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-settings",
        template: _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
        styles: [_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
      })], SettingsComponent);


      /***/
}),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

      module.exports = "::ng-deep.header-md::after {\n  height: 0px !important;\n}\n\n.toolbar-content {\n  text-align: center;\n  font-weight: 600;\n}\n\n.swiper-pagination-bullet-active {\n  background: white;\n}\n\nion-header {\n  --background: white;\n}\n\n.text-justify {\n  text-align: justify;\n  color: #797494;\n}\n\n.mt30 {\n  margin-top: 35px;\n}\n\n.header-area {\n  background-color: #fff !important;\n  height: 100px !important;\n  background-position: 0% 63%;\n}\n\n.mt21 {\n  margin-top: 20px;\n}\n\n#icons {\n  font-size: 25px;\n  color: #67696c !important;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(233, 229, 229, 0.08);\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n  margin: 0 0 10px 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #e42f08;\n}\n\na {\n  color: black;\n}\n\n.limitTextHeight {\n  height: 60px;\n  overflow: hidden;\n}\n\n.text-small {\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0JBQUE7QUFDRDs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNDLGlCQUFBO0FBR0Q7O0FBREE7RUFDQyxtQkFBQTtBQUlEOztBQUZBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBS0Q7O0FBSEE7RUFDQyxnQkFBQTtBQU1EOztBQUpBO0VBRUksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBTUo7O0FBSkE7RUFDQyxnQkFBQTtBQU9EOztBQUxBO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFRRDs7QUFOQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQVNEOztBQVBBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQVVEOztBQVJBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQVdEOztBQVRBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBWUQ7O0FBVkE7RUFDQyxXQUFBO0FBYUQ7O0FBWEE7RUFDQyxjQUFBO0FBY0Q7O0FBWkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFlRDs7QUFiQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBZ0JEOztBQWRBO0VBQ0MsdUJBQUE7QUFpQkQ7O0FBZkE7RUFDQyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Msa0JBQUE7QUFrQkY7O0FBaEJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFtQkQ7O0FBakJBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBRUEsdURBQUE7QUFvQkQ7O0FBbEJBO0VBQ0MsdUJBQUE7QUFxQkQ7O0FBbkJBO0VBQ0MsY0FBQTtBQXNCRDs7QUFwQkE7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7QUF1QkQ7O0FBckJBO0VBQ0MsVUFBQTtBQXdCRDs7QUF0QkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXlCRDs7QUF2QkE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBMEJEOztBQXhCQTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUEyQkQ7O0FBekJBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBNEJEOztBQTFCQTtFQUNDLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQTZCRDs7QUEzQkE7RUFDQyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Msa0JBQUE7QUE4QkY7O0FBNUJBO0VBQ0Msc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUErQkQ7O0FBN0JBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWdDRDs7QUE5QkE7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFpQ0Q7O0FBL0JBO0VBQ0MsWUFBQTtBQWtDRDs7QUEvQkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFrQ0o7O0FBaENBO0VBQ0MsaUJBQUE7QUFtQ0QiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAuaGVhZGVyLW1kOjphZnRlcntcblx0aGVpZ2h0OiAwcHghaW1wb3J0YW50O1xufVxuLnRvb2xiYXItY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG5cdGJhY2tncm91bmQ6d2hpdGU7XG59XG5pb24taGVhZGVye1xuXHQtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnRleHQtanVzdGlmeSB7XG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XG5cdGNvbG9yOiM3OTc0OTQ7XG59XG4ubXQzMHtcblx0bWFyZ2luLXRvcDogMzVweDtcbn1cbi5oZWFkZXItYXJlYSB7XG5cdCAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9qdXNtYXJrdGVjaC5pbi9DdWx0dXJlL2ltZy9iZy1pbWcvTk9URVMxLnBuZykgcmVwZWF0LXggI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDYzJTtcbn1cbi5tdDIxe1xuXHRtYXJnaW4tdG9wOjIwcHhcbn1cbiNpY29ucyB7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Y29sb3I6ICM2NzY5NmMhaW1wb3J0YW50O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uc2xpZGUyX2ltZyB7XG5cdG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHRtYXgtaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnN3aXBlci1zbGlkZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOnJnYigyMzMgMjI5IDIyOSAvIDglKTtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMjBweDtcblx0bGVmdDogMTBweDtcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQgYSwgLnN3aXBlci1zbGlkZSAuY29udGVudCBzcGFuIHtcblx0Y29sb3I6ICNmZmY7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGlvbi1pY29uIHtcblx0Y29sb3I6ICNmZmFmMDA7XG59XG4uYmFubmVyX3NsaWRlIGlvbi1zbGlkZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jYXRhZ29yaWVzX3NsaWRlciB7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICNmZmZmY2M7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmMmNjLCAjZmZmZmNjKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmMmNjLCAjZmZmZmNjKTtcbn1cbi5jYXRhZ29yaWVzX3NsaWRlciAuc3dpcGVyLXNsaWRlOmJlZm9yZSB7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmJsdWVfY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cbi5ibHVlX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdG1heC13aWR0aDogMTAwJTtcblx0bWF4LWhlaWdodDogODBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wcm9kdWN0X3NsaWRlIHtcblx0cGFkZGluZzogMTVweDtcblx0YmFja2dyb3VuZDogIzBDMTUzQjtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI2NDQsICMwQzE1M0IpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI2NDQsICMwQzE1M0IpO1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5wcm9kdWN0X3NsaWRlIHAgYSB7XG5cdGNvbG9yOiAjNzk3NDk0O1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuXHRvcGFjaXR5OiAxO1xuXHRiYWNrZ3JvdW5kOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24sIC5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sIC5wcm9kdWN0X3NsaWRlIC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuXHRsZWZ0OiAyNXB4O1xufVxuLmZvcnlvdV9jYXJkIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG59XG4uZm9yeW91X2NhcmQ6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcbn1cbi5mb3J5b3VfY2FyZCAuYm9va21hcmsge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMTVweDtcblx0cmlnaHQ6IDE1cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmZvcnlvdV9jYXJkIC5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDIwcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG4uZm9yeW91X2NhcmQgaW1nIHtcblx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0bWF4LWhlaWdodDogNDAwcHggIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ibHVlX3RhYl9jYXJkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZWJmZDtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLmJsdWVfdGFiX2NhcmQgaW9uLXJvdyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0cGFkZGluZzogN3B4O1xufVxuLmJsdWVfdGFiX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5idG4tc2VnbWVudC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcblx0YmFja2dyb3VuZDogI2U0MmYwODtcblx0Y29sb3I6ICNlNDJmMDg7XG59XG5hIHtcblx0Y29sb3I6YmxhY2s7XG59XG5cbi5saW1pdFRleHRIZWlnaHQge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRleHQtc21hbGwge1xuXHRmb250LXNpemU6IDAuN3JlbTtcbn0iXX0= */";

      /***/
}),

/***/ 56309:
/*!************************************************************************************!*\
  !*** ./src/app/programs/program-details/program-details.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

      module.exports = ".toolbar-content {\n  text-align: center;\n  font-weight: 600;\n}\n\n.swiper-pagination-bullet-active {\n  background: white;\n}\n\nion-header {\n  --background: white;\n}\n\n.text-justify {\n  text-align: justify;\n  color: #797494;\n}\n\n.header-area {\n  background-color: #fff !important;\n  height: 100px !important;\n  background-position: 0% 63%;\n}\n\n.mt21 {\n  margin-top: 20px;\n}\n\n#icons {\n  font-size: 25px;\n  color: #67696c !important;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n  border-radius: 10px;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\nion-text {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n  margin: 0 0 10px 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #e42f08;\n}\n\na {\n  color: black;\n}\n\n.pad-5 {\n  padding: 5px;\n}\n\n.blink-me {\n  animation: blinker 1.5s linear infinite;\n}\n\n.review_thum {\n  width: 80px;\n  height: 80px;\n}\n\n.rating {\n  color: #FDC91B;\n  font-size: 16px !important;\n}\n\n.font18 {\n  font-size: 18px !important;\n}\n\ntable {\n  width: 100%;\n}\n\ntable tr td {\n  vertical-align: middle;\n  font-size: 11px;\n  padding: 5px;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n\ntable tr td:nth-child(1) {\n  width: 10%;\n}\n\ntable tr td:nth-child(2) {\n  width: 80%;\n}\n\ntable tr td:nth-child(3) {\n  width: 10%;\n}\n\n.progress {\n  border: 0;\n  width: 100%;\n  border-radius: 100px;\n  height: 6px;\n  background: #f5f5f5;\n}\n\n.bar {\n  background: #337ab7;\n}\n\nbutton {\n  font-size: 10.5px;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyYW0tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNDLGlCQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxtQkFBQTtBQUVEOztBQUFBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBR0Q7O0FBREE7RUFFSSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFHSjs7QUFEQTtFQUNDLGdCQUFBO0FBSUQ7O0FBRkE7RUFDQyxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUtEOztBQUhBO0VBQ0MsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBTUQ7O0FBSkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FBT0Q7O0FBTEE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVFEOztBQUxBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBUUQ7O0FBTkE7RUFDQyxXQUFBO0FBU0Q7O0FBUEE7RUFDQyxjQUFBO0FBVUQ7O0FBUkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFXRDs7QUFUQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0FBWUQ7O0FBVkE7RUFDQyx1QkFBQTtBQWFEOztBQVhBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNDLGtCQUFBO0FBY0Y7O0FBWkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWVEOztBQWJBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBRUEsdURBQUE7QUFnQkQ7O0FBZEE7RUFDQyx1QkFBQTtBQWlCRDs7QUFmQTtFQUNDLGNBQUE7QUFrQkQ7O0FBaEJBO0VBQ0ksY0FBQTtBQW1CSjs7QUFqQkE7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7QUFvQkQ7O0FBbEJBO0VBQ0MsVUFBQTtBQXFCRDs7QUFuQkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXNCRDs7QUFwQkE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUF1QkQ7O0FBckJBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXdCRDs7QUF0QkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUF5QkQ7O0FBdkJBO0VBQ0Msc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBMEJEOztBQXhCQTtFQUNDLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQyxrQkFBQTtBQTJCRjs7QUF6QkE7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQTRCRDs7QUExQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBNkJEOztBQTNCQTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQThCRDs7QUE1QkE7RUFDQyxZQUFBO0FBK0JEOztBQTdCQTtFQUNJLFlBQUE7QUFnQ0o7O0FBN0JBO0VBQ0UsdUNBQUE7QUFnQ0Y7O0FBOUJBO0VBQWEsV0FBQTtFQUFhLFlBQUE7QUFtQzFCOztBQWxDQTtFQUFRLGNBQUE7RUFBZSwwQkFBQTtBQXVDdkI7O0FBdENBO0VBQVEsMEJBQUE7QUEwQ1I7O0FBekNBO0VBQU0sV0FBQTtBQTZDTjs7QUE1Q0E7RUFBWSxzQkFBQTtFQUF1QixlQUFBO0VBQWlCLFlBQUE7RUFBYyxzQkFBQTtFQUF3QixtQkFBQTtBQW9EMUY7O0FBbkRBO0VBQXlCLFVBQUE7QUF1RHpCOztBQXREQTtFQUF5QixVQUFBO0FBMER6Qjs7QUF6REE7RUFBeUIsVUFBQTtBQTZEekI7O0FBNURBO0VBQ0MsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQStERDs7QUE3REU7RUFDRCxtQkFBQTtBQWdFRDs7QUE5REE7RUFDQyxpQkFBQTtBQWlFRDs7QUEvREE7RUFDRTtJQUNFLFVBQUE7RUFrRUY7QUFDRiIsImZpbGUiOiJwcm9ncmFtLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50b29sYmFyLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuXHRiYWNrZ3JvdW5kOndoaXRlO1xufVxuaW9uLWhlYWRlcntcblx0LS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi50ZXh0LWp1c3RpZnkge1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXHRjb2xvcjojNzk3NDk0O1xufVxuLmhlYWRlci1hcmVhIHtcblx0ICAgIC8vIGJhY2tncm91bmQ6IHVybChodHRwczovL2p1c21hcmt0ZWNoLmluL0N1bHR1cmUvaW1nL2JnLWltZy9OT1RFUzEucG5nKSByZXBlYXQteCAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNjMlO1xufVxuLm10MjF7XG5cdG1hcmdpbi10b3A6MjBweFxufVxuI2ljb25zIHtcblx0Zm9udC1zaXplOiAyNXB4O1xuXHRjb2xvcjogIzY3Njk2YyFpbXBvcnRhbnQ7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5zbGlkZTJfaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3dpcGVyLXNsaWRlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMjBweDtcblx0bGVmdDogMTBweDtcblx0Y29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cbi5zd2lwZXItc2xpZGUgLmNvbnRlbnQgYSwgLnN3aXBlci1zbGlkZSAuY29udGVudCBzcGFuIHtcblx0Y29sb3I6ICNmZmY7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGlvbi1pY29uIHtcblx0Y29sb3I6ICNmZmFmMDA7XG59XG4uYmFubmVyX3NsaWRlIGlvbi1zbGlkZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jYXRhZ29yaWVzX3NsaWRlciB7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICNmZmZmY2M7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmMmNjLCAjZmZmZmNjKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmMmNjLCAjZmZmZmNjKTtcbn1cbi5jYXRhZ29yaWVzX3NsaWRlciAuc3dpcGVyLXNsaWRlOmJlZm9yZSB7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmJsdWVfY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cbi5ibHVlX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdG1heC13aWR0aDogMTAwJTtcblx0bWF4LWhlaWdodDogODBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wcm9kdWN0X3NsaWRlIHtcblx0cGFkZGluZzogMTVweDtcblx0YmFja2dyb3VuZDogIzBDMTUzQjtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI2NDQsICMwQzE1M0IpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNDI2NDQsICMwQzE1M0IpO1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5wcm9kdWN0X3NsaWRlIHAgYSB7XG5cdGNvbG9yOiAjNzk3NDk0O1xufVxuaW9uLXRleHR7XG4gICAgY29sb3I6Izc5NzQ5NDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcblx0b3BhY2l0eTogMTtcblx0YmFja2dyb3VuZDogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcblx0bGVmdDogMjVweDtcbn1cbi5mb3J5b3VfY2FyZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuLmZvcnlvdV9jYXJkOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcbn1cbi5mb3J5b3VfY2FyZCAuYm9va21hcmsge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMTVweDtcblx0cmlnaHQ6IDE1cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmZvcnlvdV9jYXJkIC5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDIwcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG4uZm9yeW91X2NhcmQgaW1nIHtcblx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0bWF4LWhlaWdodDogNDAwcHggIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ibHVlX3RhYl9jYXJkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZWJmZDtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLmJsdWVfdGFiX2NhcmQgaW9uLXJvdyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0cGFkZGluZzogN3B4O1xufVxuLmJsdWVfdGFiX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5idG4tc2VnbWVudC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcblx0YmFja2dyb3VuZDogI2U0MmYwODtcblx0Y29sb3I6ICNlNDJmMDg7XG59XG5hIHtcblx0Y29sb3I6YmxhY2s7XG59XG4ucGFkLTV7XG4gICAgcGFkZGluZzo1cHg7XG59XG5cbi5ibGluay1tZSB7XG4gIGFuaW1hdGlvbjogYmxpbmtlciAxLjVzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5yZXZpZXdfdGh1bXt3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4O31cbi5yYXRpbmd7Y29sb3I6ICNGREM5MUI7Zm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7fVxuLmZvbnQxOHtmb250LXNpemU6IDE4cHggIWltcG9ydGFudDt9XG50YWJsZXt3aWR0aDogMTAwJTt9XG50YWJsZSB0ciB0ZHt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO2ZvbnQtc2l6ZTogMTFweDsgcGFkZGluZzogNXB4OyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB3aGl0ZS1zcGFjZTogbm93cmFwO31cbnRhYmxlIHRyIHRkOm50aC1jaGlsZCgxKXt3aWR0aDogMTAlO31cbnRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKXt3aWR0aDogODAlO31cbnRhYmxlIHRyIHRkOm50aC1jaGlsZCgzKXt3aWR0aDogMTAlO31cbi5wcm9ncmVzcyB7XG5cdGJvcmRlcjogMDtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuXHRoZWlnaHQ6IDZweDtcblx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cbiAgLmJhcntcblx0YmFja2dyb3VuZDogIzMzN2FiNztcbiB9XG5idXR0b257XG5cdGZvbnQtc2l6ZTogMTAuNXB4O1xufVxuQGtleWZyYW1lcyBibGlua2VyIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4iXX0= */";

      /***/
}),

/***/ 21310:
/*!*************************************************************!*\
  !*** ./src/app/programs/programs.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

      module.exports = ".toolbar-content {\n  text-align: center;\n  font-weight: 600;\n}\n\nion-header {\n  --background: white;\n}\n\n.text-justify {\n  text-align: justify;\n  color: #797494;\n}\n\n.header-area {\n  background-color: #fff !important;\n  height: 100px !important;\n  background-position: 0% 63%;\n}\n\n.mt21 {\n  margin-top: 20px;\n}\n\n#icons {\n  font-size: 25px;\n  color: #67696c !important;\n  padding-left: 10px;\n}\n\n.slide2_img {\n  max-width: 100% !important;\n  max-height: 300px !important;\n}\n\n.swiper-slide {\n  position: relative;\n  overflow: hidden;\n}\n\n.swiper-slide:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.swiper-slide .content a, .swiper-slide .content span {\n  color: #fff;\n}\n\n.swiper-slide .content ion-icon {\n  color: #ffaf00;\n}\n\n.banner_slide ion-slide {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.catagories_slider {\n  padding: 15px;\n  background: #ffffcc;\n  background: linear-gradient(to right, #fff2cc, #ffffcc);\n}\n\n.catagories_slider .swiper-slide:before {\n  background: transparent;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n  margin: 0 0 10px 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #e42f08;\n}\n\np {\n  color: #797494;\n}\n\n.limitTextHeight {\n  height: 80px;\n  overflow: hidden;\n}\n\n.py-50 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  background-color: #fffbcc;\n}\n\n.pb-20 {\n  padding-bottom: 20px;\n  background-color: #fffbcc;\n}\n\n.blink_me {\n  animation: blinker 1.5s linear infinite;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\nion-text {\n  color: #797494;\n}\n\n.text-small {\n  font-size: 0.8rem;\n}\n\n#h3 {\n  font-size: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyYW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlBO0VBQ0MsbUJBQUE7QUFERDs7QUFHQTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQUFEOztBQUVBO0VBRUksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBRUE7RUFDQyxnQkFBQTtBQUNEOztBQUNBO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFFRDs7QUFBQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7QUFHRDs7QUFEQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUFJRDs7QUFGQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBS0Q7O0FBSEE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFNRDs7QUFKQTtFQUNDLFdBQUE7QUFPRDs7QUFMQTtFQUNDLGNBQUE7QUFRRDs7QUFOQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVNEOztBQVBBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBRUEsdURBQUE7QUFVRDs7QUFSQTtFQUNDLHVCQUFBO0FBV0Q7O0FBVEE7RUFDQyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Msa0JBQUE7QUFZRjs7QUFWQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBYUQ7O0FBWEE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFFQSx1REFBQTtBQWNEOztBQVpBO0VBQ0MsdUJBQUE7QUFlRDs7QUFiQTtFQUNDLGNBQUE7QUFnQkQ7O0FBZEE7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7QUFpQkQ7O0FBZkE7RUFDQyxVQUFBO0FBa0JEOztBQWhCQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBbUJEOztBQWpCQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQW9CRDs7QUFsQkE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBcUJEOztBQW5CQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQXNCRDs7QUFwQkE7RUFDQyxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUF1QkQ7O0FBckJBO0VBQ0MseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNDLGtCQUFBO0FBd0JGOztBQXRCQTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBeUJEOztBQXZCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUEwQkQ7O0FBeEJBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBMkJEOztBQXpCQTtFQUNDLGNBQUE7QUE0QkQ7O0FBMUJBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBNkJKOztBQTNCQTtFQUNDLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQThCRDs7QUEzQkE7RUFDQyxvQkFBQTtFQUNBLHlCQUFBO0FBOEJEOztBQTVCQTtFQUNFLHVDQUFBO0FBK0JGOztBQTVCQTtFQUNFO0lBQ0UsVUFBQTtFQStCRjtBQUNGOztBQTVCQTtFQUNDLGNBQUE7QUE4QkQ7O0FBM0JBO0VBQ0MsaUJBQUE7QUE4QkQ7O0FBNUJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBK0JEIiwiZmlsZSI6InByb2dyYW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLXRvb2xiYXIge1xuLy8gXHRoZWlnaHQ6IDMzJTtcbi8vIH1cbi50b29sYmFyLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuaW9uLWhlYWRlcntcblx0LS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi50ZXh0LWp1c3RpZnkge1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXHRjb2xvcjojNzk3NDk0O1xufVxuLmhlYWRlci1hcmVhIHtcblx0ICAgIC8vIGJhY2tncm91bmQ6IHVybChodHRwczovL2p1c21hcmt0ZWNoLmluL0N1bHR1cmUvaW1nL2JnLWltZy9OT1RFUzEucG5nKSByZXBlYXQteCAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNjMlO1xufVxuLm10MjF7XG5cdG1hcmdpbi10b3A6MjBweFxufVxuI2ljb25zIHtcblx0Zm9udC1zaXplOiAyNXB4O1xuXHRjb2xvcjogIzY3Njk2YyFpbXBvcnRhbnQ7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5zbGlkZTJfaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG4uc3dpcGVyLXNsaWRlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDIwcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG4uc3dpcGVyLXNsaWRlIC5jb250ZW50IGEsIC5zd2lwZXItc2xpZGUgLmNvbnRlbnQgc3BhbiB7XG5cdGNvbG9yOiAjZmZmO1xufVxuLnN3aXBlci1zbGlkZSAuY29udGVudCBpb24taWNvbiB7XG5cdGNvbG9yOiAjZmZhZjAwO1xufVxuLmJhbm5lcl9zbGlkZSBpb24tc2xpZGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2F0YWdvcmllc19zbGlkZXIge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmZmNjO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZjJjYywgI2ZmZmZjYyk7XG59XG4uY2F0YWdvcmllc19zbGlkZXIgLnN3aXBlci1zbGlkZTpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5ibHVlX2NhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmZkO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG4uYmx1ZV9jYXJkIC50cmVuZGluZ19pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdG1heC1oZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZHVjdF9zbGlkZSB7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICMwQzE1M0I7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ucHJvZHVjdF9zbGlkZSBwIGEge1xuXHRjb2xvcjogIzc5NzQ5NDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcblx0b3BhY2l0eTogMTtcblx0YmFja2dyb3VuZDogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLCAucHJvZHVjdF9zbGlkZSAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcblx0bGVmdDogMjVweDtcbn1cbi5mb3J5b3VfY2FyZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuLmZvcnlvdV9jYXJkOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcbn1cbi5mb3J5b3VfY2FyZCAuYm9va21hcmsge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMTVweDtcblx0cmlnaHQ6IDE1cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmZvcnlvdV9jYXJkIC5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDIwcHg7XG5cdGxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG4uZm9yeW91X2NhcmQgaW1nIHtcblx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0bWF4LWhlaWdodDogNDAwcHggIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ibHVlX3RhYl9jYXJkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZWJmZDtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLmJsdWVfdGFiX2NhcmQgaW9uLXJvdyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0cGFkZGluZzogN3B4O1xufVxuLmJsdWVfdGFiX2NhcmQgLnRyZW5kaW5nX2ltZyB7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5idG4tc2VnbWVudC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcblx0YmFja2dyb3VuZDogI2U0MmYwODtcblx0Y29sb3I6ICNlNDJmMDg7XG59XG5we1xuXHRjb2xvcjojNzk3NDk0O1xufVxuLmxpbWl0VGV4dEhlaWdodCB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHktNTAge1xuXHRwYWRkaW5nLXRvcDogMjBweDtcblx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZiY2M7XG59XG5cbi5wYi0yMCB7XG5cdHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmNjO1xufVxuLmJsaW5rX21lIHtcbiAgYW5pbWF0aW9uOiBibGlua2VyIDEuNXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuaW9uLXRleHR7XG5cdGNvbG9yOiAjNzk3NDk0O1xuXG59XG4udGV4dC1zbWFsbHtcblx0Zm9udC1zaXplOiAwLjhyZW07XG59XG4jaDN7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */";

      /***/
}),

/***/ 69812:
/*!******************************************************************!*\
  !*** ./src/app/programs/rating/rating.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

      module.exports = ".toolbar-content {\n  text-align: center;\n  font-weight: 600;\n}\n\n.swiper-pagination-bullet-active {\n  background: white;\n}\n\nion-header {\n  --background: white;\n}\n\n.text-justify {\n  text-align: justify;\n  color: #797494;\n}\n\n.header-area {\n  background-color: #fff !important;\n  height: 100px !important;\n  background-position: 0% 63%;\n}\n\n.mt21 {\n  margin-top: 20px;\n}\n\n#icons {\n  font-size: 25px;\n  color: #67696c !important;\n  padding-left: 10px;\n}\n\n.blue_card {\n  background-color: #dcebfd;\n  border-radius: 10px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n}\n\n.blue_card .trending_img {\n  max-width: 100%;\n  max-height: 80px;\n  border-radius: 10px;\n}\n\n.product_slide {\n  padding: 15px;\n  background: #0C153B;\n  background: linear-gradient(to right, #242644, #0C153B);\n}\n\n.product_slide .swiper-slide:before {\n  background: transparent;\n}\n\n.product_slide p a {\n  color: #797494;\n}\n\nion-text {\n  color: #797494;\n}\n\n.product_slide .swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #ffc107 !important;\n}\n\n.product_slide .swiper-pagination-fraction, .product_slide .swiper-pagination-custom, .product_slide .swiper-container-horizontal > .swiper-pagination-bullets {\n  left: 25px;\n}\n\n.foryou_card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.foryou_card:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  left: 0;\n  right: 0;\n}\n\n.foryou_card .bookmark {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #fff;\n  text-align: left;\n}\n\n.foryou_card .content {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n  color: #fff;\n  text-align: left;\n  width: calc(100% - 20px);\n}\n\n.foryou_card img {\n  width: 100% !important;\n  max-height: 400px !important;\n  border-radius: 10px;\n}\n\n.blue_tab_card {\n  background-color: #dcebfd;\n  box-shadow: none;\n  padding: 10px;\n  border-radius: 0;\n  margin: 0 0 10px 0;\n}\n\n.blue_tab_card ion-row {\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 7px;\n}\n\n.blue_tab_card .trending_img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.btn-segment.segment-button-checked {\n  background: #e42f08;\n  color: #e42f08;\n}\n\na {\n  color: black;\n}\n\n.pad-5 {\n  padding: 5px;\n}\n\n.blink-me {\n  animation: blinker 1.5s linear infinite;\n}\n\n.review_thum {\n  width: 80px;\n  height: 80px;\n}\n\n.rating ion-icon {\n  margin: 0 5px 5px 0;\n  color: #999;\n  font-size: 35px !important;\n}\n\n.rating ion-icon:hover, .rating ion-icon.active {\n  color: #e42f08;\n}\n\n.font18 {\n  font-size: 18px !important;\n}\n\nion-textarea {\n  border: solid 1px #ccc;\n  padding: 5px;\n  font-size: 14px;\n  border-radius: 6px;\n  height: 80px;\n}\n\n.h30 {\n  height: 30px;\n}\n\nform {\n  border: 1px solid #ccc;\n  padding: 20px 30px;\n  border-radius: 5px;\n  margin-top: 70px;\n}\n\n.orange-btn {\n  background: #ffaf00;\n  font-size: 16px;\n  text-align: center;\n  display: inline-block;\n  padding: 3px 6px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNDLGlCQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxtQkFBQTtBQUVEOztBQUFBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBR0Q7O0FBREE7RUFFSSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFHSjs7QUFEQTtFQUNDLGdCQUFBO0FBSUQ7O0FBRkE7RUFDQyxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUtEOztBQUZBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNDLGtCQUFBO0FBS0Y7O0FBSEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU1EOztBQUpBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBRUEsdURBQUE7QUFPRDs7QUFMQTtFQUNDLHVCQUFBO0FBUUQ7O0FBTkE7RUFDQyxjQUFBO0FBU0Q7O0FBUEE7RUFDSSxjQUFBO0FBVUo7O0FBUkE7RUFDQyxVQUFBO0VBQ0EsOEJBQUE7QUFXRDs7QUFUQTtFQUNDLFVBQUE7QUFZRDs7QUFWQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBYUQ7O0FBWEE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFjRDs7QUFaQTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFlRDs7QUFiQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQWdCRDs7QUFkQTtFQUNDLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQWlCRDs7QUFmQTtFQUNDLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQyxrQkFBQTtBQWtCRjs7QUFoQkE7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQW1CRDs7QUFqQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBb0JEOztBQWxCQTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQXFCRDs7QUFuQkE7RUFDQyxZQUFBO0FBc0JEOztBQXBCQTtFQUNJLFlBQUE7QUF1Qko7O0FBcEJBO0VBQ0UsdUNBQUE7QUF1QkY7O0FBckJBO0VBQWEsV0FBQTtFQUFhLFlBQUE7QUEwQjFCOztBQXpCQTtFQUFpQixtQkFBQTtFQUFxQixXQUFBO0VBQVksMEJBQUE7QUErQmxEOztBQTlCQTtFQUFnRCxjQUFBO0FBa0NoRDs7QUFqQ0E7RUFBUSwwQkFBQTtBQXFDUjs7QUFuQ0E7RUFBYSxzQkFBQTtFQUF3QixZQUFBO0VBQWMsZUFBQTtFQUFpQixrQkFBQTtFQUFvQixZQUFBO0FBMkN4Rjs7QUExQ0E7RUFDQyxZQUFBO0FBNkNEOztBQTNDQTtFQUNLLHNCQUFBO0VBQ0Qsa0JBQUE7RUFDQSxrQkFBQTtFQUNILGdCQUFBO0FBOENEOztBQTVDQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUErQ0oiLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udG9vbGJhci1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcblx0YmFja2dyb3VuZDp3aGl0ZTtcbn1cbmlvbi1oZWFkZXJ7XG5cdC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG4udGV4dC1qdXN0aWZ5IHtcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0Y29sb3I6Izc5NzQ5NDtcbn1cbi5oZWFkZXItYXJlYSB7XG5cdCAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9qdXNtYXJrdGVjaC5pbi9DdWx0dXJlL2ltZy9iZy1pbWcvTk9URVMxLnBuZykgcmVwZWF0LXggI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDYzJTtcbn1cbi5tdDIxe1xuXHRtYXJnaW4tdG9wOjIwcHhcbn1cbiNpY29ucyB7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Y29sb3I6ICM2NzY5NmMhaW1wb3J0YW50O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5ibHVlX2NhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlYmZkO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG4uYmx1ZV9jYXJkIC50cmVuZGluZ19pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdG1heC1oZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZHVjdF9zbGlkZSB7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICMwQzE1M0I7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQyNjQ0LCAjMEMxNTNCKTtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItc2xpZGU6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ucHJvZHVjdF9zbGlkZSBwIGEge1xuXHRjb2xvcjogIzc5NzQ5NDtcbn1cbmlvbi10ZXh0e1xuICAgIGNvbG9yOiM3OTc0OTQ7XG59XG4ucHJvZHVjdF9zbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG5cdG9wYWNpdHk6IDE7XG5cdGJhY2tncm91bmQ6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0X3NsaWRlIC5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbiwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSwgLnByb2R1Y3Rfc2xpZGUgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG5cdGxlZnQ6IDI1cHg7XG59XG4uZm9yeW91X2NhcmQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcbn1cbi5mb3J5b3VfY2FyZDpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG59XG4uZm9yeW91X2NhcmQgLmJvb2ttYXJrIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDE1cHg7XG5cdHJpZ2h0OiAxNXB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mb3J5b3VfY2FyZCAuY29udGVudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAyMHB4O1xuXHRsZWZ0OiAxMHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuLmZvcnlvdV9jYXJkIGltZyB7XG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdG1heC1oZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYmx1ZV90YWJfY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cbi5ibHVlX3RhYl9jYXJkIGlvbi1yb3cge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHBhZGRpbmc6IDdweDtcbn1cbi5ibHVlX3RhYl9jYXJkIC50cmVuZGluZ19pbWcge1xuXHR3aWR0aDogODBweDtcblx0aGVpZ2h0OiA4MHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYnRuLXNlZ21lbnQuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG5cdGJhY2tncm91bmQ6ICNlNDJmMDg7XG5cdGNvbG9yOiAjZTQyZjA4O1xufVxuYSB7XG5cdGNvbG9yOmJsYWNrO1xufVxuLnBhZC01e1xuICAgIHBhZGRpbmc6NXB4O1xufVxuXG4uYmxpbmstbWUge1xuICBhbmltYXRpb246IGJsaW5rZXIgMS41cyBsaW5lYXIgaW5maW5pdGU7XG59XG4ucmV2aWV3X3RodW17d2lkdGg6IDgwcHg7IGhlaWdodDogODBweDt9XG4ucmF0aW5nIGlvbi1pY29ue21hcmdpbjogMCA1cHggNXB4IDA7IGNvbG9yOiAjOTk5O2ZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O31cbi5yYXRpbmcgaW9uLWljb246aG92ZXIsIC5yYXRpbmcgaW9uLWljb24uYWN0aXZle2NvbG9yOiAjZTQyZjA4O31cbi5mb250MTh7Zm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7fVxuXG5pb24tdGV4dGFyZWF7Ym9yZGVyOiBzb2xpZCAxcHggI2NjYzsgcGFkZGluZzogNXB4OyBmb250LXNpemU6IDE0cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgaGVpZ2h0OiA4MHB4O31cbi5oMzB7XG5cdGhlaWdodDogMzBweDtcbn1cbmZvcm0ge1xuXHQgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXHRtYXJnaW4tdG9wOjcwcHg7XG59XG4ub3JhbmdlLWJ0biB7XG4gICAgYmFja2dyb3VuZDogI2ZmYWYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAzcHggNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xufSJdfQ== */";

      /***/
}),

/***/ 75855:
/*!*************************************************************!*\
  !*** ./src/app/settings/settings.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

      module.exports = "ul.menu_list {\n  margin: 0;\n  padding: 0;\n}\n\nul.menu_list li {\n  background-color: #dcebfd;\n  border-radius: 100px;\n  box-shadow: none;\n  padding: 10px;\n  margin: 0 0 10px 0;\n  list-style: none;\n  font-size: 14px;\n  color: #606060;\n  font-weight: 400;\n  display: block;\n  width: 100%;\n}\n\nul.menu_list li a {\n  font-size: 12px;\n  color: #000;\n  text-decoration: none;\n}\n\nul.menu_list li span {\n  font-size: 10px;\n}\n\nul.menu_list li ion-icon {\n  font-size: 16px;\n  vertical-align: middle;\n}\n\n.text_blue {\n  color: #100DD1;\n}\n\nion-toggle {\n  padding: 4px;\n}\n\n.back-button {\n  padding-left: 10px;\n  font-size: 7vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBR0o7O0FBREE7RUFBcUIsZUFBQTtBQUtyQjs7QUFKQTtFQUF5QixlQUFBO0VBQWUsc0JBQUE7QUFTeEM7O0FBUkE7RUFBVyxjQUFBO0FBWVg7O0FBWEE7RUFBVyxZQUFBO0FBZVg7O0FBZEE7RUFDQyxrQkFBQTtFQUNBLGNBQUE7QUFpQkQiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bC5tZW51X2xpc3R7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG51bC5tZW51X2xpc3QgbGl7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2ViZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzYwNjA2MDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxudWwubWVudV9saXN0IGxpIGF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTs7XG59XG51bC5tZW51X2xpc3QgbGkgc3Bhbntmb250LXNpemU6IDEwcHg7fVxudWwubWVudV9saXN0IGxpIGlvbi1pY29ue2ZvbnQtc2l6ZToxNnB4O3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxuLnRleHRfYmx1ZXtjb2xvcjogIzEwMEREMTt9XG5pb24tdG9nZ2xle3BhZGRpbmc6IDRweDt9XG4uYmFjay1idXR0b257XG5cdHBhZGRpbmctbGVmdDogMTBweDtcblx0Zm9udC1zaXplOiA3dnc7XG59Il19 */";

      /***/
}),

/***/ 91670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

      module.exports = "<ion-header translucent=\"false\">\n  <ion-toolbar class=\"toolbar-content\">\n    <ion-text> एम पी कल्चर ऐप, मध्य प्रदेश, संस्कृति विभाग</ion-text>\n  </ion-toolbar>\n  <ion-row class=\"header-area\">\n    <ion-col size=\"1.5\">\n      <ion-buttons name=\"main\" class=\"mt21\">\n        <ion-menu-button>\n          <ion-icon name=\"grid-outline\" id=\"icons\"></ion-icon>\n        </ion-menu-button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col size=\"2.5\" class=\"mt10\">\n      <div class=\"login_img\">\n        <img src=\"../../../assets/images/15aug.jpeg\" width=\"100px\" height=\"85px\" />\n      </div>\n    </ion-col>\n    <ion-col size=\"4.5\" class=\"\">\n      <div class=\"login_img\">\n        <img src=\"../../../assets/images/mp-logo.png\" width=\"100px\" />\n      </div>\n    </ion-col>\n    <ion-col size=\"3.5\" class=\"ion-text-end mt30\">\n      <img src=\"../../../assets/images/about.png\" class=\"about_img\" />\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-row>\n    <!-- <ion-col> -->\n    <ion-slides pager=\"true\" [options]=\"slideOptsOne\" *ngIf=\"landingImages\">\n      <ion-slide *ngFor=\"let landingData of landingImages; let index=index\">\n        <img src=\"{{mediaUrl + landingData?.PhotoPath}}\" class=\"banner_img\" />\n      </ion-slide>\n    </ion-slides>\n    <!-- </ion-col> -->\n  </ion-row>\n  <ion-row class=\"mt10 ion-padding\" *ngIf=\"landingPageData\">\n    <ion-col size=\"8\">\n      <span class=\"border_bottom_red\">हमारे बारे में / About Us</span>\n    </ion-col>\n    <ion-col class=\"mt10\" size=\"12\" *ngFor=\"let landingData of landingPageData\">\n      <p class=\"text-justify\" style=\"white-space: pre-wrap\">{{landingData.AppLandingPageText}}</p>\n    </ion-col>\n  </ion-row>\n\n  <!-- Today's programs [OPEN]-->\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"12\">\n        <span class=\"border_bottom_red\">आज के कार्यक्रम</span>\n        <span class=\"mt10 d-block\">Today's Program</span>\n      </ion-col>\n    </ion-row>\n    <ion-card class=\"blue_card\" *ngFor=\"let program of todaysPrograms\">\n      <ion-row *ngIf=\"todaysPrograms.length\">\n        <ion-col size=\"4\" (click)=\"viewProgramDetails(program)\">\n          <img\n            src=\"{{program?.DisplayPicturePath ? (mediaUrl+ program.DisplayPicturePath) :'../../../assets/images/b3.jpg'}}\"\n            width=\"100px\"\n            height=\"85px\"\n            class=\"trending_img\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\" (click)=\"viewProgramDetails(program)\">\n            <h6 class=\"mb10\">\n              <a>{{program.ProgramName}} </a>\n            </h6>\n          </h6>\n          <a class=\"see_green_btn mr-1\"\n            >स्थान: {{program.Venue ? program.Venue : program.CityName}}</a\n          >\n          <p class=\"mt5\">\n            {{program.ProgramStartDate }} | {{program.ProgramEndDate }} <br />\n            {{program.StartTime}} To {{program.EndTime }}\n          </p>\n          <a>{{program.ProgramDateTime | date:'short':'IST'}}</a>\n          <p\n            class=\"mt10\"\n            style=\"white-space: pre-wrap\"\n            [ngClass]=\"{'limitTextHeight': isReadMorePara}\"\n          >\n            {{program.AboutProgram}}\n          </p>\n          <u>\n            <a *ngIf=\"program.AboutProgram\" (click)=\"showPara()\">\n              {{ isReadMorePara ? 'Show More': 'Show Less' }}\n            </a></u\n          >\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Today's programs [CLOSE]-->\n\n  <!-- Upcoming programs [OPEN]-->\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"6\">\n        <span class=\"border_bottom_red\">आगामी कार्यक्रम</span\n        ><span class=\"mt10 d-block\">Upcoming Program</span>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <a class=\"view_all\" (click)=\"viewAllUpcomingProgram()\">View All</a>\n      </ion-col>\n    </ion-row>\n    <ion-card class=\"blue_card\" *ngFor=\"let program of upcomingPrograms; let index=index;\">\n      <ion-row>\n        <ion-col size=\"4\" (click)=\"viewProgramDetails(program)\">\n          <img\n            src=\"{{program.DisplayPicturePath ? mediaUrl+ program.DisplayPicturePath :'../../../assets/images/b3.jpg'}}\"\n            width=\"100px\"\n            height=\"85px\"\n            class=\"trending_img\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\" (click)=\"viewProgramDetails(program)\">\n            <h6 class=\"mb10\">\n              <a>{{program.ProgramName}} </a>\n            </h6>\n          </h6>\n          <a class=\"see_green_btn mr-1\"\n            >स्थान: {{program.Venue ? program.Venue : program.CityName}}</a\n          >\n          <a>{{program.ProgramDateTime | date:'short':'IST'}}</a>\n          <p\n            class=\"mt10\"\n            style=\"white-space: pre-wrap\"\n            [ngClass]=\"{'limitTextHeight': !isReadMore[index] && program.AboutProgram.length > 54}\"\n          >\n            {{program.AboutProgram}}\n          </p>\n          <u>\n            <a\n              *ngIf=\"program.AboutProgram && program.AboutProgram.length > 54\"\n              (click)=\"showText(index)\"\n            >\n              {{ !isReadMore[index] ? 'Show More': 'Show Less' }}\n            </a></u\n          >\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Upcoming programs [CLOSE]-->\n\n  <!-- Monthly programs [OPEN]-->\n  <div class=\"ion-padding\">\n    <ion-row class=\"mt20\">\n      <ion-col size=\"8\">\n        <span class=\"border_bottom_red\">मासिक लोकप्रिय कार्यक्रम</span\n        ><span class=\"mt10 d-block\"> Monthly Popular Program's </span>\n      </ion-col>\n      <!-- <ion-col size=\"4\" class=\"ion-text-end\">\n        <a class=\"red_btn\">View All</a>\n      </ion-col> -->\n    </ion-row>\n    <ion-row *ngIf=\"monthlyPrograms.length\">\n      <ion-col size=\"6\" *ngFor=\"let program of monthlyPrograms\">\n        <ion-card class=\"foryou_card\">\n          <ion-icon name=\"bookmark-outline\" class=\"bookmark\"></ion-icon>\n          <div class=\"content\">\n            <a class=\"red_btn\">{{program.ProgramName}}</a>\n          </div>\n          <img\n            width=\"100px\"\n            height=\"150px\"\n            src=\"{{program.DisplayPicturePath ? mediaUrl + program.DisplayPicturePath : 'https://jusmarktech.in/Culture/img/bg-img/program/program3.jpeg' }}\"\n          />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!monthlyPrograms.length\">\n      <ion-col class=\"ion-text-center\">\n        <ion-text class=\"text-small\"\n          >Currently we do not have any program in this category</ion-text\n        >\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- Monthly programs [CLOSE]-->\n</ion-content>\n";

      /***/
}),

/***/ 56914:
/*!************************************************************************************!*\
  !*** ./src/app/programs/program-details/program-details.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

      module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button>\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Program Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <ion-row>\n    <ion-slides pager=\"true\" [options]=\"slideOptsOne\">\n      <ion-slide *ngIf=\"programDetails?.BannerImagePath1\">\n        <img src=\"{{ mediaUrl + programDetails?.BannerImagePath1 }}\" class=\"banner_img\" />\n      </ion-slide>\n      <ion-slide *ngIf=\"programDetails?.BannerImagePath2\">\n        <img src=\"{{ mediaUrl + programDetails?.BannerImagePath2 }}\" class=\"banner_img\" />\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item>\n        <a\n          *ngIf=\"programDetails.LiveStreamingLink\"\n          href=\"https://jusmarktech.in/Culture/live.html\"\n          target=\"_blank\"\n        >\n          <h3 class=\"text-danger blink-me\">Program Live Streaming Link</h3></a\n        >\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"mt10\" *ngIf=\"programDetails\">\n    <ion-col size=\"12\">\n      <span class=\"border_bottom_red\">Program Details</span>\n    </ion-col>\n    <ion-col class=\"mt10\" size=\"12\">\n      <ion-text><b> Name : </b>{{ programDetails.ProgramName }}</ion-text\n      ><br />\n      <ion-text\n        ><b> Date : </b>\n        {{\n          programDetails.ProgramStartDate == programDetails.ProgramEndDate\n            ? programDetails.ProgramStartDate\n            : programDetails.ProgramStartDate + \" To \" + programDetails.ProgramEndDate\n        }}</ion-text\n      ><br />\n      <ion-text\n        ><b>Time : </b>\n        {{\n          programDetails.StartTime == programDetails.EndTime\n            ? programDetails.StartTime\n            : programDetails.StartTime + \"To\" + programDetails.EndTime\n        }}</ion-text\n      ><br />\n      <ion-text><b>Address : </b>{{ programDetails.Venue }}</ion-text>\n    </ion-col>\n\n    <ion-col size=\"12\" class=\"mt10\">\n      <span class=\"border_bottom_red\">About Program</span>\n    </ion-col>\n    <ion-col class=\"mt10\" size=\"12\">\n      <h4>\n        <ion-text>{{ programDetails.ProgramName }}</ion-text>\n      </h4>\n      <p class=\"text-justify mt10\" style=\"white-space: pre-wrap\">\n        {{ programDetails.AboutProgram }}\n      </p>\n    </ion-col>\n  </ion-row>\n  <!-- add review and rating UI -->\n  <!-- Reviews Open -->\n  <ng-container *ngIf=\"programDetails.isArchive\">\n    <ion-row class=\"mt10\">\n      <ion-col size=\"12\">\n        <span class=\"border_bottom_red\">Rating & Reviews</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"mt10\">\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        <h2>2.5 <ion-icon name=\"star\" class=\"font18\"></ion-icon></h2>\n        <p>103 Ratings &amp; <br />19 Reviews</p>\n      </ion-col>\n      <ion-col size=\"8\">\n        <table>\n          <tbody>\n            <tr>\n              <td>5 <ion-icon name=\"star\"></ion-icon></td>\n              <td>\n                <div class=\"progress\">\n                  <div class=\"bar\" style=\"width: 80%\"></div>\n                </div>\n              </td>\n              <td>80%</td>\n            </tr>\n            <tr>\n              <td>4 <ion-icon name=\"star\"></ion-icon></td>\n              <td>\n                <div class=\"progress\">\n                  <div class=\"bar\" style=\"width: 60%\"></div>\n                </div>\n              </td>\n              <td>60%</td>\n            </tr>\n            <tr>\n              <td>3 <ion-icon name=\"star\"></ion-icon></td>\n              <td>\n                <div class=\"progress\">\n                  <div class=\"bar\" style=\"width: 40%\"></div>\n                </div>\n              </td>\n              <td>40%</td>\n            </tr>\n            <tr>\n              <td>2 <ion-icon name=\"star\"></ion-icon></td>\n              <td>\n                <div class=\"progress\">\n                  <div class=\"bar\" style=\"width: 20%\"></div>\n                </div>\n              </td>\n              <td>20%</td>\n            </tr>\n            <tr>\n              <td>1 <ion-icon name=\"star\"></ion-icon></td>\n              <td>\n                <div class=\"progress\">\n                  <div class=\"bar\" style=\"width: 10%\"></div>\n                </div>\n              </td>\n              <td>10%</td>\n            </tr>\n          </tbody>\n        </table>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"mt10\">\n      <ion-col size=\"8\">\n        <h4>Rating & Reviews</h4>\n      </ion-col>\n      <ion-col size=\"4\">\n        <button *ngIf=\"isLoggedIn\" (click)=\"goToRateProgram()\">Rate Program</button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"mt10\" *ngFor=\"let data of allRatingData\">\n      <ion-col size=\"3\"> <img src=\"assets/images/b1.jpg\" class=\"review_thum\" /></ion-col>\n      <ion-col size=\"9\">\n        <p>\n          {{\n            data.diffDays\n              ? data.diffDays + \" day ago\"\n              : data.diffTime\n              ? data.diffTime + \" hours ago\"\n              : \"\"\n          }}\n        </p>\n        <p class=\"bold\">{{ data.FullName }}</p>\n      </ion-col>\n      <ion-col size=\"12\">\n        <p class=\"rating\">\n          <ion-icon name=\"{{ data.Rating >= 1 ? 'star' : 'star-outline' }}\"></ion-icon>\n          <ion-icon name=\"{{ data.Rating >= 2 ? 'star' : 'star-outline' }}\"></ion-icon>\n          <ion-icon name=\"{{ data.Rating >= 3 ? 'star' : 'star-outline' }}\"></ion-icon>\n          <ion-icon name=\"{{ data.Rating >= 4 ? 'star' : 'star-outline' }}\"></ion-icon>\n          <ion-icon name=\"{{ data.Rating >= 5 ? 'star' : 'star-outline' }}\"></ion-icon>\n        </p>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt\n          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n          ullamco.\n        </p>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  <!-- Reviews End -->\n</ion-content>\n";

      /***/
}),

/***/ 44119:
/*!*************************************************************!*\
  !*** ./src/app/programs/programs.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

      module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button>\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\"\n      >{{ activeRoute.snapshot.paramMap.get(\"param\") | titlecase }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <!-- Live programs [OPEN]-->\n  <div\n    class=\"mb10\"\n    *ngIf=\"activeRoute.snapshot.paramMap.get('param') == 'live now'\"\n  >\n    <ion-row *ngFor=\"let programDetails of livePrograms; let index = index\">\n      <ion-slides pager=\"true\" [options]=\"slideOptsOne\">\n        <ion-slide>\n          <img\n            src=\"{{ mediaUrl + programDetails?.BannerImagePath1 }}\"\n            class=\"banner_img\"\n          />\n        </ion-slide>\n        <ion-slide>\n          <img\n            src=\"{{ mediaUrl + programDetails?.BannerImagePath2 }}\"\n            class=\"banner_img\"\n          />\n        </ion-slide>\n      </ion-slides>\n      <ion-col size=\".5\" class=\"py-50\"></ion-col>\n      <ion-col size=\"11.5\" class=\"py-50\">\n        <span id=\"h3\">{{ programDetails.ProgramName }}</span>\n      </ion-col>\n      <ion-col size=\".4\" class=\"pb-20\"></ion-col>\n\n      <ion-col size=\"8\" class=\"pb-20\">\n        <a\n          href=\"{{\n            programDetails.LiveStreamingLink\n              ? programDetails.LiveStreamingLink\n              : ''\n          }}\"\n          target=\"_blank\"\n        >\n          <ion-text>\n            <ion-icon\n              class=\"text-danger blink_me\"\n              name=\"radio-button-on\"\n            ></ion-icon>\n            &nbsp; <b>Live Now</b></ion-text\n          ></a\n        >\n      </ion-col>\n      <ion-col size=\"3.6\" class=\"pb-20\">\n        <!-- <ion-text class=\"text-small\">1200 viewing</ion-text> -->\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- Live programs [CLOSE]-->\n\n  <!-- Today's programs [OPEN]-->\n  <div\n    class=\"ion-padding\"\n    *ngIf=\"activeRoute.snapshot.paramMap.get('param') == paramString\"\n  >\n    <ion-row class=\"mt20\">\n      <ion-col size=\"12\">\n        <h5 class=\"m-0 p-0\">\n          <span class=\"border_bottom_red\">आज के कार्यक्रम</span\n          ><span class=\"mt10 d-block\">Today's Program</span>\n        </h5>\n      </ion-col>\n    </ion-row>\n    <ion-card class=\"blue_card\" *ngFor=\"let program of todayPrograms\">\n      <ion-row>\n        <ion-col size=\"4\" (click)=\"viewProgramDetails(program, true)\">\n          <img\n            src=\"{{\n              program.DisplayPicturePath\n                ? mediaUrl + program.DisplayPicturePath\n                : '../../../assets/images/b3.jpg'\n            }}\"\n            class=\"trending_img\"\n            width=\"100px\"\n            height=\"85px\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\">\n            <h6 class=\"mb10\" (click)=\"viewProgramDetails(program, true)\">\n              <a>{{ program.ProgramName }} </a>\n            </h6>\n          </h6>\n          <p class=\"mt5\">\n            {{ program.ProgramStartDate }} | {{ program.ProgramEndDate }} <br />\n            {{ program.StartTime }} To {{ program.EndTime }}\n          </p>\n          <a class=\"see_green_btn mr-1\"\n            >स्थान: {{ program.Venue ? program.Venue : program.CityName }}</a\n          >\n          <a>{{ program.ProgramDateTime | date: \"short\":\"IST\" }}</a>\n          <p\n            class=\"mt10\"\n            style=\"white-space: pre-wrap\"\n            [ngClass]=\"{ limitTextHeight: isReadMorePara }\"\n          >\n            {{ program.AboutProgram }}\n          </p>\n          <u>\n            <a *ngIf=\"program.AboutProgram\" (click)=\"showPara()\">\n              {{ isReadMorePara ? \"Read More\" : \"Read Less\" }}\n            </a></u\n          >\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Today's programs [CLOSE]-->\n\n  <!-- Upcoming programs [OPEN]-->\n  <div\n    class=\"ion-padding\"\n    *ngIf=\"activeRoute.snapshot.paramMap.get('param') == 'upcoming programs'\"\n  >\n    <ion-card\n      class=\"blue_card\"\n      *ngFor=\"let program of upcomingPrograms; let index = index\"\n    >\n      <ion-row>\n        <ion-col size=\"4\" (click)=\"viewProgramDetails(program)\">\n          <img\n            src=\"{{\n              program.DisplayPicturePath\n                ? mediaUrl + program.DisplayPicturePath\n                : '../../../assets/images/b3.jpg'\n            }}\"\n            class=\"trending_img\"\n            width=\"100px\"\n            height=\"85px\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\" (click)=\"viewProgramDetails(program)\">\n            <ion-text color=\"dark\">{{ program.ProgramName }}</ion-text>\n          </h6>\n          <a\n            class=\"mr-1\"\n            class=\"{{ index % 2 !== 0 ? 'orange_btn' : 'see_green_btn' }}\"\n            >स्थान: {{ program.Venue }}</a\n          >\n          <p class=\"mt5\">\n            {{ program.ProgramStartDate }} | {{ program.ProgramEndDate }} <br />\n            {{ program.StartTime }} To {{ program.EndTime }}\n          </p>\n          <!-- <p class=\"mt10\">देशभक्ति आधारित स्वराज संस्थान संचालनालय</p> -->\n          <p\n            class=\"mt10\"\n            style=\"white-space: pre-wrap\"\n            [ngClass]=\"{ limitTextHeight: isReadMore }\"\n          >\n            {{ program.AboutProgram }}\n          </p>\n          <u>\n            <a *ngIf=\"program.AboutProgram\" (click)=\"showText()\">\n              {{ isReadMore ? \"Read More\" : \"Read Less\" }}\n            </a></u\n          >\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Upcoming programs [CLOSE]-->\n\n  <!-- Archive programs [OPEN]-->\n  <div\n    class=\"ion-padding\"\n    *ngIf=\"activeRoute.snapshot.paramMap.get('param') == 'archive programs'\"\n  >\n    <ion-card\n      class=\"blue_card\"\n      *ngFor=\"let program of pastPrograms; let index = index\"\n    >\n      <ion-row>\n        <ion-col size=\"4\" (click)=\"viewProgramDetails(program)\">\n          <img\n            src=\"{{\n              program.DisplayPicturePath\n                ? mediaUrl + program.DisplayPicturePath\n                : '../../../assets/images/b3.jpg'\n            }}\"\n            class=\"trending_img\"\n            width=\"100px\"\n            height=\"85px\"\n          />\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6 class=\"mb10\" (click)=\"viewProgramDetails(program)\">\n            <ion-text color=\"dark\">{{ program.ProgramName }}</ion-text>\n          </h6>\n          <a\n            class=\"mr-1\"\n            class=\"{{ index % 2 !== 0 ? 'orange_btn' : 'see_green_btn' }}\"\n            >स्थान: {{ program.Venue ? program.Venue : program.CityName }}</a\n          ><br />\n          <p class=\"mt5\">\n            {{\n              program.ProgramStartDate == program.ProgramEndDate\n                ? program.ProgramStartDate\n                : program.ProgramStartDate + \" | \" + program.ProgramEndDate\n            }}\n            <br />\n            {{\n              program.StartTime == program.EndTime\n                ? program.StartTime\n                : program.StartTime + \" To \" + program.EndTime\n            }}\n          </p>\n          <p\n            class=\"mt10\"\n            style=\"white-space: pre-wrap\"\n            *ngIf=\"program.AboutProgram\"\n            [ngClass]=\"{ limitTextHeight: isMorePara }\"\n          >\n            {{ program.AboutProgram }}\n          </p>\n          <u>\n            <a *ngIf=\"program.AboutProgram\" (click)=\"showMorePara()\">\n              {{ isMorePara ? \"Read More\" : \"Read Less\" }}\n            </a></u\n          >\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <!-- Archive programs [CLOSE]-->\n</ion-content>\n";

      /***/
}),

/***/ 52841:
/*!******************************************************************!*\
  !*** ./src/app/programs/rating/rating.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

      module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button>\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\"\n      >ललित पर्व <span class=\"orange-btn font16\">2.5 <ion-icon name=\"star\"></ion-icon></span\n    ></ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"ratingForm\" (ngSubmit)=\"submit(ratingForm.valid, ratingForm.value)\">\n    <h2 class=\"rating mt20 text-center\">\n      <ng-container>\n        <ion-icon\n          name=\"star\"\n          [ngStyle]=\"{\n            color: rate.active ? 'yellow' : 'gray'\n          }\"\n          (click)=\"doRate(index)\"\n          *ngFor=\"let rate of ratingObj; let index = index\"\n        ></ion-icon>\n      </ng-container>\n    </h2>\n    <h2 class=\"text-center h30\">\n      <ion-text color=\"success\" class=\"text-success\">{{\n        rate || ratingObj[rate].active ? ratingObj[rate].text : \"\"\n      }}</ion-text>\n    </h2>\n    <p>\n      <ion-textarea plasceholder=\"Describe your experience..\" formControlName=\"review\">\n      </ion-textarea>\n    </p>\n    <p><button type=\"submit\">Post</button></p>\n  </form>\n</ion-content>\n";

      /***/
}),

/***/ 49885:
/*!*************************************************************!*\
  !*** ./src/app/settings/settings.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

      module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon class=\"back-button\" name=\"arrow-back-outline\" (click)=\"navigateToHome()\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ul class=\"menu_list\">\n    <li *ngIf=\"audienceId\">\n      <ion-row>\n        <ion-col size=\"7\"\n          ><ion-icon name=\"notifications-outline\" class=\"text_blue\"></ion-icon> Email\n          Notifications</ion-col\n        >\n        <ion-col size=\"5\" class=\"ion-text-end\"\n          ><ion-toggle\n            color=\"danger\"\n            checked=\"false\"\n            [(ngModel)]=\"EmailNotificationRequired\"\n            (ionChange)=\"notificationChange()\"\n            mode=\"md\"\n          ></ion-toggle\n        ></ion-col>\n      </ion-row>\n    </li>\n    <li *ngIf=\"audienceId\">\n      <ion-row>\n        <ion-col size=\"7\"\n          ><ion-icon name=\"notifications-outline\" class=\"text_blue\"></ion-icon> SMS\n          Notifications</ion-col\n        >\n        <ion-col size=\"5\" class=\"ion-text-end\"\n          ><ion-toggle\n            color=\"danger\"\n            checked=\"false\"\n            [(ngModel)]=\"MobileNotificationRequired\"\n            (ionChange)=\"notificationChange()\"\n            mode=\"md\"\n          ></ion-toggle\n        ></ion-col>\n      </ion-row>\n    </li>\n    <li>\n      <ion-row>\n        <ion-col size=\"7\"\n          ><ion-icon name=\"moon-outline\" class=\"text_blue\"></ion-icon> Night Mode</ion-col\n        >\n        <ion-col size=\"5\" class=\"ion-text-end\"\n          ><ion-toggle\n            color=\"danger\"\n            checked=\"false\"\n            [(ngModel)]=\"mode\"\n            (ionChange)=\"onToggleColorTheme($event)\"\n            mode=\"md\"\n          ></ion-toggle>\n        </ion-col>\n      </ion-row>\n    </li>\n    <li>\n      <ion-row>\n        <ion-col size=\"7\"\n          ><ion-icon name=\"help-circle-outline\" class=\"text_blue\"></ion-icon> Support</ion-col\n        >\n        <ion-col size=\"5\" class=\"ion-text-end\"\n          ><ion-icon name=\"chevron-forward-outline\"></ion-icon\n        ></ion-col>\n      </ion-row>\n    </li>\n    <li>\n      <ion-row>\n        <ion-col size=\"7\"\n          ><ion-icon name=\"shield-checkmark-outline\" class=\"text_blue\"></ion-icon> Privacy</ion-col\n        >\n        <ion-col size=\"5\" class=\"ion-text-end\"\n          ><ion-icon name=\"chevron-forward-outline\"></ion-icon\n        ></ion-col>\n      </ion-row>\n    </li>\n    <li *ngIf=\"audienceId\">\n      <ion-row>\n        <ion-col size=\"9\"\n          ><ion-icon name=\"notifications-outline\" class=\"text_blue\"></ion-icon> Password\n          <span>Updated 15 days ago</span></ion-col\n        >\n        <ion-col size=\"3\" class=\"ion-text-end\">\n          <a href=\"#!\"> Change <ion-icon name=\"chevron-forward-outline\"></ion-icon></a\n        ></ion-col>\n      </ion-row>\n    </li>\n    <li>\n      <ion-row>\n        <ion-col size=\"7\"\n          ><ion-icon name=\"language-outline\" class=\"text_blue\"></ion-icon>\n          {{ language | titlecase }}</ion-col\n        >\n        <ion-col size=\"5\" class=\"ion-text-end\"\n          ><ion-toggle\n            color=\"danger\"\n            [(ngModel)]=\"isLanguage\"\n            (ionChange)=\"languageSwitcher($event)\"\n            mode=\"md\"\n          ></ion-toggle>\n        </ion-col>\n      </ion-row>\n    </li>\n  </ul>\n</ion-content>\n";

      /***/
})

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map