(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const routes = [
    {
        path: "",
        redirectTo: "tabs",
        pathMatch: "full"
    },
    {
        path: "signup",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 77648)).then((m) => m.SignupPageModule)
    },
    {
        path: "tabs",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then((m) => m.TabsPageModule)
    },
    {
        path: "landing",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_service_api-service_service_ts-node_modules_swiper_angular_fesm2015_swiper_an-506306"), __webpack_require__.e("src_app_landing_landing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./landing/landing.module */ 68721)).then((m) => m.LandingPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/local-storage.service */ 42518);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/status-bar */ 19326);
/* harmony import */ var _service_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/store.service */ 87627);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/splash-screen */ 82239);











let AppComponent = class AppComponent {
  constructor(router, localStorageService, menuController, renderer, storeService) {
    this.router = router;
    this.localStorageService = localStorageService;
    this.menuController = menuController;
    this.renderer = renderer;
    this.storeService = storeService;
    this.appMenu = [];
    this.offAppMenu = [{
      title: "कार्यक्रमों का सजीव प्रसारण",
      value: "live-program",
      icon: "play-outline"
    }, {
      title: "आज के कार्यक्रम",
      value: "today-program",
      icon: "flash-outline"
    }, {
      title: "आगामी कार्यक्रम",
      value: "upcoming-program",
      icon: "flash-outline"
    }, {
      title: "संगृहीत कार्यक्रम",
      value: "archive-program",
      icon: "documents-outline"
    }, {
      title: "कला विधाये",
      value: "category",
      icon: "grid-outline"
    }, {
      title: "सेटिंग",
      value: "setting",
      icon: "settings-outline"
    }, {
      title: "लॉग आउट",
      value: "logout",
      icon: "log-out-outline"
    }];
    this.loginAppMenu = [{
      title: "कार्यक्रमों का सजीव प्रसारण",
      value: "live-program",
      icon: "play-outline"
    }, {
      title: "आज के कार्यक्रम",
      value: "today-program",
      icon: "flash-outline"
    }, {
      title: "आगामी कार्यक्रम",
      value: "upcoming-program",
      icon: "flash-outline"
    }, {
      title: "संगृहीत कार्यक्रम",
      value: "archive-program",
      icon: "documents-outline"
    }, {
      title: "प्रवेशिका",
      value: "register",
      icon: "person-outline"
    }, {
      title: "कला विधाये",
      value: "category",
      icon: "grid-outline"
    }, {
      title: "सेटिंग",
      value: "setting",
      icon: "settings-outline"
    }, {
      title: "लॉग इन",
      value: "login",
      icon: "power-outline"
    }];
    _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setOverlaysWebView({
      overlay: false
    });
    _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setStyle({
      style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.Style.Dark
    });
    _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setBackgroundColor({
      color: "#e42f08"
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      setTimeout(() => {
        _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_6__.SplashScreen.hide({
          fadeOutDuration: 300
        });
      }, 2000);
      yield _this.localStorageService.init();
      const mode = (yield _this.localStorageService.get("mode")) || false;

      if (mode) {
        _this.renderer.setAttribute(document.body, "color-theme", "dark");
      } else {
        _this.renderer.setAttribute(document.body, "color-theme", "light");
      }

      _this.appMenu = _this.loginAppMenu;
      const {
        AudienceId = ""
      } = (yield _this.localStorageService.get("audienceData")) || {};

      if (AudienceId) {
        _this.appMenu = _this.offAppMenu;
      }

      _this.storeService.getIsLoggedIn().subscribe(res => {
        console.log("isLoggedIn", res);
        _this.isLoggedIn = res;
        _this.isLoggedIn ? _this.appMenu = _this.offAppMenu : _this.appMenu = _this.loginAppMenu;
      });
    })();
  }

  ionViewWillEnter() {
    var _this2 = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isLoggedIn = (yield !!_this2.localStorageService.get("audienceData")) || (yield !!_this2.localStorageService.get("audienceData"));

      _this2.storeService.getIsLoggedIn().subscribe(res => {
        console.log("isLoggedIn", res);
        _this2.isLoggedIn = res;
        _this2.isLoggedIn ? _this2.appMenu = _this2.offAppMenu : _this2.offAppMenu = _this2.appMenu;
      });
    })();
  }

  menuToggle(menu) {
    switch (menu) {
      case "logout":
        this.storeService.setIsLoggedIn(false);
        this.localStorageService.remove("audienceData");
        this.router.navigateByUrl("", {
          replaceUrl: true
        });
        break;

      case "live-program":
        this.router.navigate(["tabs/home/programs", {
          param: "live now"
        }]);
        break;

      case "today-program":
        this.router.navigate(["tabs/home/programs", {
          param: "today's programs"
        }]);
        break;

      case "upcoming-program":
        this.router.navigate(["tabs/home/programs", {
          param: "upcoming programs"
        }]);
        break;

      case "archive-program":
        this.router.navigate(["tabs/home/programs", {
          param: "archive programs"
        }]);
        break;

      case "register":
        this.router.navigate(["../signup/signup"]);
        break;

      case "category":
        this.router.navigate(["tabs/category"]);
        break;

      case "setting":
        this.router.navigate(["tabs/home/settings"]);
        break;

      case "login":
        this.router.navigate(["../signup"]);
        break;

      default:
        break;
    }
  }

};

AppComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _service_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2
}, {
  type: _service_store_service__WEBPACK_IMPORTED_MODULE_5__.StoreService
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: "app-root",
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 47566);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-soap */ 58335);
/* harmony import */ var _interceptors_httpConfig_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/httpConfig.interceptor */ 45743);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.IonicStorageModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            ngx_soap__WEBPACK_IMPORTED_MODULE_9__.NgxSoapModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
                useClass: _interceptors_httpConfig_interceptor__WEBPACK_IMPORTED_MODULE_2__.HttpConfigInterceptor,
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 45743:
/*!********************************************************!*\
  !*** ./src/app/interceptors/httpConfig.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpConfigInterceptor": () => (/* binding */ HttpConfigInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_util_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/util-service.service */ 29922);






// import { UtilServiceService } from "../service/util-service.service";
let HttpConfigInterceptor = class HttpConfigInterceptor {
    constructor(utilService) {
        this.utilService = utilService;
        this.urslsNotToShowLoading = [
            "assets/test.xml",
            "assets/program.xml",
            "assets/category.xml",
            "assets/settings.xml",
            "/ProgramService.asmx",
            "/landingPage.xml",
            "/LandingPageService.asmx",
            "/artistRegister.xml",
            "/SignupService.asmx",
            "/categoryservice.asmx",
            "/SettingService.asmx"
        ];
    }
    intercept(request, next) {
        if (this.isValidRequestForInterceptor(request.url) && !this.utilService.isLoading) {
            this.utilService.presentLoading("Please wait...");
        }
        // if (!request.headers.has("Content-Type")) {
        //   request = request.clone({
        //     setHeaders: {
        //       "content-type": "text/xml"
        //     }
        //   });
        // }
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
                console.log("event--->>>", event);
                this.utilService.dismissLoading();
            }
            return event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            console.log(error);
            this.utilService.dismissLoading();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
        }));
    }
    isValidRequestForInterceptor(requestUrl) {
        let positionIndicator = "/";
        let position = requestUrl.indexOf(positionIndicator);
        console.log(position);
        if (position > 0) {
            let destination = requestUrl.substr(position + positionIndicator.length);
            console.log("destination", destination);
            for (let address of this.urslsNotToShowLoading) {
                if (new RegExp(address).test(destination)) {
                    console.log("false");
                    return false;
                }
                // if(destination.includes(address)){
                //   return false
                // }
            }
        }
        return true;
    }
};
HttpConfigInterceptor.ctorParameters = () => [
    { type: _service_util_service_service__WEBPACK_IMPORTED_MODULE_0__.UtilService }
];
HttpConfigInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], HttpConfigInterceptor);



/***/ }),

/***/ 42518:
/*!**************************************************!*\
  !*** ./src/app/service/local-storage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);




let LocalStorageService = class LocalStorageService {
  constructor(storage) {
    this.storage = storage;
    this._storage = null; //this.init();
  }

  init() {
    var _this = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // If using, define drivers here: await this.storage.defineDriver(/*...*/);
      const storage = yield _this.storage.create();
      _this._storage = storage;
    })();
  } // Create and expose methods that users of this service can
  // call, for example:


  set(key, value) {
    var _this2 = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log('key and value', key, value);
      yield _this2._storage?.set(key, value);
    })();
  }

  get(key) {
    var _this3 = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this3._storage?.get(key);
    })();
  }

  remove(key) {
    var _this4 = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4._storage.remove(key);
    })();
  }

  clearAll() {
    var _this5 = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5._storage.clear();
    })();
  }

};

LocalStorageService.ctorParameters = () => [{
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage
}];

LocalStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: "root"
})], LocalStorageService);


/***/ }),

/***/ 87627:
/*!******************************************!*\
  !*** ./src/app/service/store.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreService": () => (/* binding */ StoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 92218);



let StoreService = class StoreService {
    constructor() {
        this.isLoggedInSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    setIsLoggedIn(isLoggedIn) {
        this.isLoggedInSubject.next(isLoggedIn);
    }
    getIsLoggedIn() {
        return this.isLoggedInSubject.asObservable();
    }
    get todaysProgramsData() {
        return this.todaysPrograms;
    }
    set todaysProgramsData(val) {
        this.todaysPrograms = val;
    }
    get upcomingProgramsData() {
        return this.upcomingPrograms;
    }
    set upcomingProgramsData(val) {
        this.upcomingPrograms = val;
    }
    get pastProgramsData() {
        return this.pastPrograms;
    }
    set pastProgramsData(val) {
        this.pastPrograms = val;
    }
    get monthlyProgramsData() {
        return this.monthlyPrograms;
    }
    set monthlyProgramsData(val) {
        this.monthlyPrograms = val;
    }
};
StoreService.ctorParameters = () => [];
StoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: "root"
    })
], StoreService);



/***/ }),

/***/ 29922:
/*!*************************************************!*\
  !*** ./src/app/service/util-service.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var _Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);




let UtilService = class UtilService {
  constructor(alertCtrl, toastCtrl, loadingCtrl) {
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.loadingCtrl = loadingCtrl;
    this.header = {
      "Content-Type": "application/json"
    };
    this.isLoading = false;
  }

  basicAlert(header, message, buttons) {
    var _this = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.alert = yield _this.alertCtrl.create({
        backdropDismiss: false,
        header,
        message,
        buttons
      });

      _this.alert.present();
    })();
  }

  presentToast(message, duration = 1500) {
    var _this2 = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.toast ? _this2.toast.dismiss() : false;
      _this2.toast = yield _this2.toastCtrl.create({
        message,
        duration,
        position: "top"
      });

      _this2.toast.present();
    })();
  }

  dismissToast() {
    var _this3 = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3.toast.dismiss();
    })();
  }

  presentLoading(message) {
    var _this4 = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.loading) {
        _this4.loading = _this4.loading ? yield _this4.loading.dismiss() : false;
        _this4.loading = yield _this4.loadingCtrl.create({
          message
        });
        yield _this4.loading.present();
        _this4.loading = true;
      }
    })();
  }

  dismissLoading() {
    var _this5 = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.loading) {
        yield _this5.loading && _this5.loadingCtrl.dismiss();
        _this5.loading = false;
      }
    })();
  }

};

UtilService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
}];

UtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: "root"
})], UtilService);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    mediaUrl: "https://mpcd.solyn.in"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_parse-d395420d_js-node_modules_ionic_core_dist_esm_t-5c7f8f",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_parse-d395420d_js-node_modules_ionic_core_dist_esm_t-5c7f8f",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "::ng-deep.item-inner {\n  border: none !important;\n}\n\n.menu-bg {\n  --background: #dcebfd;\n}\n\n.menu-bg ion-item {\n  --background: #dcebfd;\n}\n\nion-item {\n  --border-color: transparent !important;\n  font-size: 14px;\n  color: #000 !important;\n  padding: 5px 0;\n}\n\nion-list ion-item:last-child {\n  --border-color: transparent !important;\n}\n\nion-item {\n  border: none !important;\n}\n\n.pt50 {\n  padding-top: 50px;\n}\n\n.text-bold, ion-icon {\n  font-weight: 800;\n}\n\nion-icon {\n  color: #67696c;\n  margin-inline-end: 10px;\n}\n\n.flashing-effect {\n  animation: flashingeffect 2s linear 1s infinite;\n}\n\n.red-circle {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #e42f08;\n}\n\nion-menu {\n  --width:230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFBUyxxQkFBQTtBQUVUOztBQUFBO0VBQWtCLHFCQUFBO0FBSWxCOztBQUhBO0VBQVMsc0NBQUE7RUFBd0MsZUFBQTtFQUFpQixzQkFBQTtFQUF1QixjQUFBO0FBVXpGOztBQVRBO0VBQTZCLHNDQUFBO0FBYTdCOztBQVpBO0VBQVUsdUJBQUE7QUFnQlY7O0FBZkE7RUFBTSxpQkFBQTtBQW1CTjs7QUFsQkE7RUFBc0IsZ0JBQUE7QUFzQnRCOztBQXJCQTtFQUFTLGNBQUE7RUFBZSx1QkFBQTtBQTBCeEI7O0FBekJBO0VBQ0ksK0NBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBNkJKOztBQTNCQTtFQUNJLGFBQUE7QUE4QkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwLml0ZW0taW5uZXIge1xuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7O1xufVxuXG4ubWVudS1iZ3stLWJhY2tncm91bmQ6ICNkY2ViZmQ7fVxuLy8gLm1lbnUtYmd7Ym9yZGVyLXJhZGl1czogMDtvdmVyZmxvdzogaGlkZGVuOy0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL3NpZGVfbWVudV9iZy5qcGcpIDAgMC9jb3ZlciBuby1yZXBlYXQgI2ZmZjsgcGFkZGluZy10b3A6IDEwMHB4O31cbi5tZW51LWJnIGlvbi1pdGVtey0tYmFja2dyb3VuZDogI2RjZWJmZDt9XG5pb24taXRlbXstLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzAwMCAhaW1wb3J0YW50O3BhZGRpbmc6IDVweCAwO31cbmlvbi1saXN0IGlvbi1pdGVtOmxhc3QtY2hpbGR7LS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7fVxuaW9uLWl0ZW0ge2JvcmRlcjogbm9uZSAhaW1wb3J0YW50O31cbi5wdDUwe3BhZGRpbmctdG9wOiA1MHB4O31cbi50ZXh0LWJvbGQsIGlvbi1pY29uIHtmb250LXdlaWdodDogODAwO31cbmlvbi1pY29ue2NvbG9yOiM2NzY5NmM7IG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O31cbi5mbGFzaGluZy1lZmZlY3R7XG4gICAgYW5pbWF0aW9uOiBmbGFzaGluZ2VmZmVjdCAycyBsaW5lYXIgMXMgaW5maW5pdGU7XG59XG4ucmVkLWNpcmNsZSB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQyZjA4O1xufVxuaW9uLW1lbnV7XG4gICAgLS13aWR0aDoyMzBweDtcbn0iXX0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane when=\"false\" contentId=\"main\">\n    <ion-menu side=\"start\" contentId=\"main\" swipeGesture=\"false\">\n      <ion-content class=\"menu-bg\">\n        <ion-menu-toggle>\n          <p>&nbsp;</p>\n          <p>&nbsp;</p>\n          <ion-row>\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <div class=\"login_img\">\n                <img src=\"../../../assets/images/mp-logo.png\" width=\"100px\" />\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-item class=\"menu-list\" *ngFor=\"let p of appMenu\" (click)=\"menuToggle(p.value)\">\n            <ion-icon\n              name=\"{{ p.icon }}\"\n              slot=\"start\"\n              [ngClass]=\"{\n                'animate__animated animate__infinite animate__swing':\n                  p.icon == 'notifications-circle'\n              }\"\n            >\n            </ion-icon>\n            <ion-label class=\"text-bold\"\n              >{{ p.title }}<span class=\"red-circle flashing-effect\"></span\n            ></ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";

/***/ }),

/***/ 80950:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46601:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8623:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 7748:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 85568:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 56619:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 77108:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 52361:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 94616:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map