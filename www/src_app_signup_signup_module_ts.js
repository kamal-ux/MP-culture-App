"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_signup_signup_module_ts"],{

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
    loadProgramRating(obj) {
        this.programClient.addHttpHeader("Content-Type", "text/xml");
        return this.programClient.call("LoadProgramRatingReviewByProgramId", obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.LoadProgramRatingReviewByProgramIdResult);
        }));
    }
    InsertProgramRatingReviewByAudienceId(obj) {
        this.programClient.addHttpHeader("Content-Type", "text/xml");
        return this.programClient.call("InsertProgramRatingReviewByAudienceId", obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.InsertProgramRatingReviewByAudienceIdResult);
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

/***/ 9700:
/*!*****************************************************************!*\
  !*** ./src/app/signup/artist-signup/artist-signup.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistSignupComponent": () => (/* binding */ ArtistSignupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _artist_signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artist-signup.component.html?ngResource */ 22923);
/* harmony import */ var _artist_signup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist-signup.component.scss?ngResource */ 63870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api-service.service */ 7149);






let ArtistSignupComponent = class ArtistSignupComponent {
    constructor(fb, apiService) {
        this.fb = fb;
        this.apiService = apiService;
    }
    ngOnInit() {
        this.apiService.artistRegisterClientState().subscribe((ready) => {
            if (ready) {
                this.artistRegisterClientReady = true;
                this.getArtistRegisterRequirement();
            }
        });
        this.signupForm = this.fb.group({
            ArtistName: ["art"],
            MobileNo: ["120"],
            EmailId: ["emailId"],
            Address: ["Address"],
            Age: [""],
            PinCode: [""],
            DateOfBirth: [""],
            DistrictId: ["districid"],
            StateId: ["stateId"],
            BlockName: ["BlockName"],
            CityName: ["CityName"],
            WorkingExperience: [],
            Doordarshan: [],
            AwardReceived: [],
            DescriptionOfCurrentWorking: ["DescriptionOfCurrentWorking"],
            OtherQualityName: ["OtherQualityName"],
            OtherQualityDescription: ["OtherQualityDescription"],
            ConfirmPassword: ["ConfirmPassword"],
            IsRegisteredArtistOfDoordarshan: ["IsRegisteredArtistOfDoordarshan"],
            SupportCertificatePhotoAkasvani: [""],
            IsRegisteredArtistOfAkasvani: [0],
            SupportCertificatePhotoDoordarshan: [""],
            SupportCertificatePhotoNameDoordarshan: ["SupportCertificatePhotoNameDoordarshan"],
            SupportCertificatePhotoICCR: [""],
            SupportCertificatePhotoNameAkasvani: [""],
            SupportCertificatePhotoNameICCR: ["SupportCertificatePhotoNameICCR"],
            IsRegisteredArtistOfICCR: ["IsRegisteredArtistOfICCR"],
            ArtistGrade: ["ArtistGrade"],
            AboutArtist: ["AboutArtist"],
            userName: ["userName", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ["password", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            pKey: ["pKey"],
            CreatedThough: ["CreatedThough"]
        });
    }
    getArtistRegisterRequirement() {
        this.apiService.getArtistRegisterRequirement().subscribe((res) => {
            console.log("requiremtn payload", res);
        });
    }
    submit(isValid, formValue) {
        if (!isValid || !this.artistRegisterClientReady)
            return;
        const formObj = {
            ArtistName: formValue.ArtistName,
            MobileNo: formValue.MobileNo,
            EmailId: formValue.EmailId,
            Address: formValue.Address,
            CityName: formValue.CityName,
            BlockName: formValue.BlockName,
            DistrictId: formValue.DistrictId,
            StateId: formValue.StateId,
            DateOfBirth: formValue.DateOfBirth,
            DescriptionOfCurrentWorking: formValue.DescriptionOfCurrentWorking,
            OtherQualityName: formValue.OtherQualityName,
            OtherQualityDescription: formValue.OtherQualityDescription,
            IsRegisteredArtistOfAkasvani: formValue.IsRegisteredArtistOfAkasvani,
            IsRegisteredArtistOfDoordarshan: formValue.IsRegisteredArtistOfDoordarshan,
            IsRegisteredArtistOfICCR: formValue.IsRegisteredArtistOfICCR,
            SupportCertificatePhotoAkasvani: formValue.SupportCertificatePhotoAkasvani,
            SupportCertificatePhotoNameAkasvani: formValue.SupportCertificatePhotoNameAkasvani,
            SupportCertificatePhotoDoordarshan: formValue.SupportCertificatePhotoDoordarshan,
            SupportCertificatePhotoNameDoordarshan: formValue.SupportCertificatePhotoNameDoordarshan,
            SupportCertificatePhotoICCR: formValue.SupportCertificatePhotoICCR,
            SupportCertificatePhotoNameICCR: formValue.SupportCertificatePhotoNameICCR,
            ArtistGrade: formValue.ArtistGrade,
            AboutArtist: formValue.AboutArtist,
            Password: formValue.password,
            Pkey: 0,
            CreatedThough: formValue.CreatedThough
        };
        console.log("form obj", isValid, formObj);
    }
};
ArtistSignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__.ApiServiceService }
];
ArtistSignupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-artist-signup",
        template: _artist_signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_artist_signup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ArtistSignupComponent);



/***/ }),

/***/ 23990:
/*!*********************************************************************************!*\
  !*** ./src/app/signup/audience-registration/audience-registration.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudienceRegistrationComponent": () => (/* binding */ AudienceRegistrationComponent)
/* harmony export */ });
/* harmony import */ var _Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _audience_registration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audience-registration.component.html?ngResource */ 47533);
/* harmony import */ var _audience_registration_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audience-registration.component.scss?ngResource */ 62288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api-service.service */ 7149);
/* harmony import */ var src_app_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/local-storage.service */ 42518);
/* harmony import */ var src_app_service_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/store.service */ 87627);
/* harmony import */ var src_app_service_util_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/util-service.service */ 29922);
/* harmony import */ var _assets_app_data_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/app-data.json */ 88121);













let AudienceRegistrationComponent = class AudienceRegistrationComponent {
  constructor(fb, apiService, utilService, router, localStorage, platform, storeService) {
    this.fb = fb;
    this.apiService = apiService;
    this.utilService = utilService;
    this.router = router;
    this.localStorage = localStorage;
    this.platform = platform;
    this.storeService = storeService;
    this.signupType = "artist";
    this.language = _assets_app_data_json__WEBPACK_IMPORTED_MODULE_7__;
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("language", _this.language);
      _this.signupForm = _this.fb.group({
        FullName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        MobileNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(10)]],
        Password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(6)]],
        ConfirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      }, {
        validator: _this.passwordMatchValidator
      });
      _this.mode = (yield _this.localStorage.get("mode")) || false;
      _this.isEnglish = (yield _this.localStorage.get("isEnglish")) || false;

      _this.apiService.artistRegisterClientState().subscribe(ready => {
        if (ready) {
          _this.artistRegisterClientReady = true;

          _this.getArtistRegisterRequirement();
        }
      });
    })();
  }

  ngOnChanges(changes) {
    if (changes["isEnglish"] && changes.isEnglish.currentValue) {
      this.isEnglish = changes.isEnglish.currentValue;
    }
  }

  ionViewWillEnter() {
    var _this2 = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isEnglish = (yield _this2.localStorage.get("isEnglish")) || false;
      console.log("is english", _this2.isEnglish);
    })();
  }

  passwordMatchValidator(g) {
    return g.get("Password").value === g.get("ConfirmPassword").value ? null : {
      mismatch: true
    };
  }

  getArtistRegisterRequirement() {
    this.apiService.getArtistRegisterRequirement().subscribe(res => {
      console.log("requiremtn payload", res);
    });
  }

  toggleStatus(status) {
    this.signupType = status;
  }

  imgTobase64(element) {
    console.log("element", element.files);
    var file = element.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      console.log("RESULT", reader.result);
    };

    return reader.readAsDataURL(file);
  }

  password_check() {
    const pass = this.signupForm.get("Password").value;
    console.log(pass);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.exec(pass) == null) {
      this.signupForm.controls["Password"].setErrors({
        error: true
      });
    } else {
      this.signupForm.get("Password").clearValidators();
    }
  }

  submit(isValid, formValue) {
    if (!isValid || !this.artistRegisterClientReady) return;
    const formObj = {
      FullName: formValue.FullName,
      MobileNo: formValue.MobileNo,
      Password: formValue.Password,
      CreatedThrough: this.platform.is("android") ? "ANDROID" : "IOS"
    };
    const {
      FullName,
      MobileNo,
      Password,
      CreatedThrough
    } = formObj;
    console.log("form obj", isValid, formObj);
    this.utilService.presentLoading("Please wait...");
    this.apiService.doAudienceRegister(formObj).subscribe(res => {
      console.log("audience register", res);
      this.utilService.dismissLoading();
      this.storeService.setIsLoggedIn(true);
      res.result == "failure" && this.utilService.presentToast(res.message);

      if (res.result == "success") {
        this.utilService.presentToast("Registered successfully!");
        this.localStorage.set("audienceData", {
          FullName,
          MobileNo,
          Password,
          CreatedThrough,
          AudienceId: res.AudienceId
        });
        this.signupForm.reset();
        this.router.navigate(["signup/signup/audienceSignup2"]);
      }
    });
  }

  goToLoginPage() {
    this.signupForm.reset();
  }

};

AudienceRegistrationComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__.ApiServiceService
}, {
  type: src_app_service_util_service_service__WEBPACK_IMPORTED_MODULE_6__.UtilService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: src_app_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
}, {
  type: src_app_service_store_service__WEBPACK_IMPORTED_MODULE_5__.StoreService
}];

AudienceRegistrationComponent.propDecorators = {
  isEnglish: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
  }]
};
AudienceRegistrationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "app-audience-registration",
  template: _audience_registration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_audience_registration_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AudienceRegistrationComponent);


/***/ }),

/***/ 79503:
/*!***********************************************************************************!*\
  !*** ./src/app/signup/audience-registration2/audience-registration2.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudienceRegistration2Component": () => (/* binding */ AudienceRegistration2Component)
/* harmony export */ });
/* harmony import */ var _Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _audience_registration2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audience-registration2.component.html?ngResource */ 99827);
/* harmony import */ var _audience_registration2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audience-registration2.component.scss?ngResource */ 67691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api-service.service */ 7149);
/* harmony import */ var src_app_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/local-storage.service */ 42518);
/* harmony import */ var src_app_service_util_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/util-service.service */ 29922);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _assets_app_data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/app-data.json */ 88121);












let AudienceRegistration2Component = class AudienceRegistration2Component {
  constructor(fb, apiService, router, localStorage, utilService) {
    this.fb = fb;
    this.apiService = apiService;
    this.router = router;
    this.localStorage = localStorage;
    this.utilService = utilService;
    this.isEnglish = false;
    this.language = _assets_app_data_json__WEBPACK_IMPORTED_MODULE_6__;
  }

  ngOnInit() {
    this.apiService.artistRegisterClientState().subscribe(ready => {
      if (ready) {
        this.artistRegisterClientReady = true;
        this.getArtistRegisterRequirement();
      }
    });
    this.signupForm = this.fb.group({
      FullName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      MobileNo: [""],
      EmailId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      Address: [""],
      CityName: [""],
      Country: ["India"],
      DistrictId: [9],
      StateId: [0],
      DateOfBirth: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.nullValidator],
      Age: [""],
      NotificationRequired: ["email"],
      EmailNotificationRequired: [""],
      MobileNotificationRequired: [""],
      iAgree: [false]
    }); // this.signupForm.controls.MobileNo.disable();
  }

  ionViewWillEnter() {
    var _this = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isEnglish = (yield _this.localStorage.get("isEnglish")) || false;
      const {
        FullName = "",
        MobileNo = "",
        AudienceId = ""
      } = (yield _this.localStorage.get("audienceData")) || {};
      _this.audienceId = AudienceId;

      _this.signupForm.patchValue({
        FullName,
        MobileNo
      });

      _this.signupForm.controls.DateOfBirth.valueChanges.subscribe(res => {
        console.log("date birth", res);

        _this.signupForm.controls.Age.setValue(_this.calculateAge(res));
      });
    })();
  }

  getArtistRegisterRequirement() {
    this.apiService.getArtistRegisterRequirement().subscribe(res => {
      console.log("requiremtn payload", res);
      this.districtArr = res.dropdowndata.district;
    });
  }

  calculateAge(birthday) {
    // birthday is a date
    var ageDifMs = Date.now() - new Date(birthday).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  calculateMonth(month) {
    switch (month) {
      case 0:
        {
          return "January";
          break;
        }

      case 1:
        {
          return "February";
          break;
        }

      case 2:
        {
          return "March";
          break;
        }

      case 3:
        {
          return "April";
          break;
        }

      case 4:
        {
          return "May";
          break;
        }

      case 5:
        {
          return "June";
          break;
        }

      case 6:
        {
          return "July";
          break;
        }

      case 7:
        {
          return "August";
          break;
        }

      case 8:
        {
          return "September";
          break;
        }

      case 9:
        {
          return "October";
          break;
        }

      case 10:
        {
          return "November";
          break;
        }

      case 11:
        {
          return "December";
          break;
        }

      default:
        {
          return "January";
          break;
        }
    }
  }

  submit(isValid, formValue) {
    if (!isValid || !this.artistRegisterClientReady) return;
    const formObj = {
      AudienceId: this.audienceId,
      FullName: formValue.FullName,
      EmailId: formValue.EmailId,
      Address: formValue.Address,
      CityName: formValue.CityName,
      DistrictId: formValue.DistrictId,
      ProfilePhoto: "",
      ProfilePhotoName: "",
      StateId: formValue.StateId,
      Gender: "",
      DateOfBirth: new Date(formValue.DateOfBirth).getFullYear() + "-" + this.calculateMonth(formValue.DateOfBirth.month) + "-" + new Date(formValue.DateOfBirth).getDate(),
      EmailNotificationRequired: formValue.NotificationRequired == "email" ? true : false,
      MobileNotificationRequired: formValue.NotificationRequired == "sms" ? true : false
    };
    this.utilService.presentLoading("Please wait...");
    this.apiService.doAudienceProfileUpdate(formObj).subscribe(res => {
      console.log("audience profile updated", res);
      this.utilService.dismissLoading();
      res.result == "failure" && this.utilService.presentToast(res.message);
      res.result == "success" && this.localStorage.set("audienceData", formObj) && this.utilService.presentToast("Profile updated successfully!") && this.router.navigate([""]);
    });
    console.log("form obj", isValid, formObj);
  }

  languageSwitch(evt) {
    console.log("language", evt.value);
    this.isEnglish = evt.value == "hindi" ? false : true;
  }

  goToLoginPage() {
    this.signupForm.reset();
  }

};

AudienceRegistration2Component.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__.ApiServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
}, {
  type: src_app_service_util_service_service__WEBPACK_IMPORTED_MODULE_5__.UtilService
}];

AudienceRegistration2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: "app-audience-registration2",
  template: _audience_registration2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbInputDatepickerConfig],
  styles: [_audience_registration2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AudienceRegistration2Component);


/***/ }),

/***/ 25320:
/*!*************************************************!*\
  !*** ./src/app/signup/login/login.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 91007);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 59440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/local-storage.service */ 42518);
/* harmony import */ var src_app_service_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/store.service */ 87627);
/* harmony import */ var src_app_service_util_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/util-service.service */ 29922);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/api-service.service */ 7149);










let LoginComponent = class LoginComponent {
    constructor(apiService, utilService, fb, router, localStorageService, storeService) {
        this.apiService = apiService;
        this.utilService = utilService;
        this.fb = fb;
        this.router = router;
        this.localStorageService = localStorageService;
        this.storeService = storeService;
        this.userStatus = "audience";
    }
    ngOnInit() {
        this.subscription();
        this.loginForm = this.fb.group({
            userStatus: ["audience"],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            mobileNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10)]]
        });
    }
    subscription() {
        this.apiService.clientState().subscribe((ready) => {
            if (ready) {
                this.clientReady = true;
            }
        });
    }
    changeUserType(evt) {
        return;
        const userType = (this.userStatus = evt.value);
        console.log("user type", userType);
        if (userType == "artist") {
            this.loginForm.controls["mobileNo"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
            this.loginForm.get("mobileNo").updateValueAndValidity();
            this.loginForm.controls["userName"].clearValidators();
            this.loginForm.get("userName").updateValueAndValidity();
        }
        else {
            this.loginForm.controls["userName"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
            this.loginForm.get("userName").updateValueAndValidity();
            this.loginForm.controls["mobileNo"].clearValidators();
            this.loginForm.get("mobileNo").updateValueAndValidity();
        }
    }
    password_check() {
        const pass = this.loginForm.get("password").value;
        console.log(pass);
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (regex.exec(pass) == null) {
            this.loginForm.controls["password"].setErrors({ error: true });
        }
        else {
            this.loginForm.get("password").clearValidators();
        }
    }
    submit(isValid, formValue) {
        if (!isValid || !this.clientReady)
            return;
        const userType = this.loginForm.controls.userStatus.value;
        userType == "audience" ? this.audienceLogin(formValue) : this.artistLogin(formValue);
    }
    audienceLogin(formValue) {
        const formObj = {
            MobileNo: formValue.mobileNo,
            Password: formValue.password
        };
        console.log("audience obj", formObj);
        this.apiService.audienceLogin(formObj).subscribe((res) => {
            console.log("user logged-in", res);
            if (res.result == "success") {
                const { audienceid = "", usertype = "", fullname = "", mobileno = "" } = res;
                const audienceData = {
                    AudienceId: audienceid,
                    UserType: usertype,
                    FullName: fullname,
                    MobileNo: mobileno
                };
                console.log("userdata", audienceData);
                audienceData && this.localStorageService.set("audienceData", audienceData);
                this.storeService.setIsLoggedIn(true);
                this.utilService.presentToast("Logged In successfully");
                this.loginForm.reset();
                this.router.navigate(["/tabs/home"]);
            }
            else {
                this.utilService.presentToast(res.message);
            }
        }, (error) => {
            console.log("User could not logged-in", error);
            this.utilService.dismissLoading();
        });
    }
    artistLogin(formValue) {
        const formObj = {
            MobileNo: formValue.mobileNo,
            Password: formValue.password
        };
        console.log("artist obj", formObj);
        this.apiService.artistLogin(formObj).subscribe((res) => {
            console.log("artist logged-in", res);
            if (res.result == "success") {
                const { artistid = "", mobileno = "", artistname = "" } = res;
                const userData = {
                    artistid,
                    mobileno,
                    artistname
                };
                console.log("artist data", userData);
                userData && this.localStorageService.set("userData", userData);
                this.router.navigate(["/tabs/home"]);
                this.utilService.dismissLoading();
            }
            else {
                this.utilService.presentToast(res.message);
            }
        }, (error) => {
            console.log("User could not logged-in", error);
            this.utilService.dismissLoading();
        });
    }
    goToRegisterPage() {
        this.loginForm.reset();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_5__.ApiServiceService },
    { type: src_app_service_util_service_service__WEBPACK_IMPORTED_MODULE_4__.UtilService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: src_app_service_store_service__WEBPACK_IMPORTED_MODULE_3__.StoreService }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-login",
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 82820:
/*!*********************************************!*\
  !*** ./src/app/signup/otp/otp.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpComponent": () => (/* binding */ OtpComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _otp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp.component.html?ngResource */ 96484);
/* harmony import */ var _otp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp.component.scss?ngResource */ 42556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let OtpComponent = class OtpComponent {
    constructor() { }
    ngOnInit() { }
};
OtpComponent.ctorParameters = () => [];
OtpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-otp',
        template: _otp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_otp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtpComponent);



/***/ }),

/***/ 50159:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _artist_signup_artist_signup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artist-signup/artist-signup.component */ 9700);
/* harmony import */ var _audience_registration_audience_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audience-registration/audience-registration.component */ 23990);
/* harmony import */ var _audience_registration2_audience_registration2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audience-registration2/audience-registration2.component */ 79503);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 25320);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./otp/otp.component */ 82820);
/* harmony import */ var _signup_step2_signup_step2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-step2/signup-step2.component */ 75851);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ 80771);










const routes = [
    {
        path: "",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent
    },
    {
        path: "signup",
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__.SignupPage
    },
    {
        path: "signup/artistSignup",
        component: _artist_signup_artist_signup_component__WEBPACK_IMPORTED_MODULE_0__.ArtistSignupComponent
    },
    {
        path: "audience",
        component: _audience_registration_audience_registration_component__WEBPACK_IMPORTED_MODULE_1__.AudienceRegistrationComponent
    },
    {
        path: "signup/otp",
        component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_4__.OtpComponent
    },
    {
        path: "signup/audienceSignup2",
        component: _audience_registration2_audience_registration2_component__WEBPACK_IMPORTED_MODULE_2__.AudienceRegistration2Component
    },
    {
        path: "signup2",
        component: _signup_step2_signup_step2_component__WEBPACK_IMPORTED_MODULE_5__.SignupStep2Component
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 75851:
/*!***************************************************************!*\
  !*** ./src/app/signup/signup-step2/signup-step2.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupStep2Component": () => (/* binding */ SignupStep2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_step2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-step2.component.html?ngResource */ 82745);
/* harmony import */ var _signup_step2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup-step2.component.scss?ngResource */ 61381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);





let SignupStep2Component = class SignupStep2Component {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.signupForm = this.fb.group({
            ArtistName: ["kamal sharma", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            MobileNo: [
                "9616167946",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(10)]
            ],
            Password: ["qwertyPassword@123", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
            ConfirmPassword: ["qwertyPassword@123", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    submit(isValid, formValue) { }
};
SignupStep2Component.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
SignupStep2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-signup-step2",
        template: _signup_step2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_step2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupStep2Component);



/***/ }),

/***/ 77648:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 50159);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 80771);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 25320);
/* harmony import */ var _audience_registration_audience_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audience-registration/audience-registration.component */ 23990);
/* harmony import */ var _signup_step2_signup_step2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-step2/signup-step2.component */ 75851);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _artist_signup_artist_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artist-signup/artist-signup.component */ 9700);
/* harmony import */ var _audience_registration2_audience_registration2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audience-registration2/audience-registration2.component */ 79503);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./otp/otp.component */ 82820);














let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule
        ],
        declarations: [
            _signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage,
            _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
            _audience_registration_audience_registration_component__WEBPACK_IMPORTED_MODULE_3__.AudienceRegistrationComponent,
            _signup_step2_signup_step2_component__WEBPACK_IMPORTED_MODULE_4__.SignupStep2Component,
            _artist_signup_artist_signup_component__WEBPACK_IMPORTED_MODULE_5__.ArtistSignupComponent,
            _audience_registration2_audience_registration2_component__WEBPACK_IMPORTED_MODULE_6__.AudienceRegistration2Component,
            _otp_otp_component__WEBPACK_IMPORTED_MODULE_7__.OtpComponent
        ],
        providers: [_audience_registration_audience_registration_component__WEBPACK_IMPORTED_MODULE_3__.AudienceRegistrationComponent]
    })
], SignupPageModule);



/***/ }),

/***/ 80771:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var _Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 31998);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 92444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api-service.service */ 7149);
/* harmony import */ var _service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/local-storage.service */ 42518);
/* harmony import */ var _service_util_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/util-service.service */ 29922);
/* harmony import */ var _assets_app_data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/app-data.json */ 88121);












let SignupPage = class SignupPage {
  constructor(fb, apiService, utilService, localStorage, platform, router) {
    this.fb = fb;
    this.apiService = apiService;
    this.utilService = utilService;
    this.localStorage = localStorage;
    this.platform = platform;
    this.router = router;
    this.signupType = "audience";
    this.isEnglish = false;
    this.language = _assets_app_data_json__WEBPACK_IMPORTED_MODULE_6__;
  }

  ngOnInit() {
    this.apiService.artistRegisterClientState().subscribe(ready => {
      if (ready) {
        this.artistRegisterClientReady = true;
        this.getArtistRegisterRequirement();
      }
    });
    this.signupForm = this.fb.group({
      ArtistName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      MobileNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10)]],
      Password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6)]],
      ConfirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  ionViewWillEnter() {
    var _this = this;

    return (0,_Users_VB_culture_dept_mp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isEnglish = (yield _this.localStorage.get("isEnglish")) || false;
    })();
  }

  passwordMatchValidator(g) {
    return g.get("Password").value === g.get("ConfirmPassword").value ? null : {
      mismatch: true
    };
  }

  getArtistRegisterRequirement() {
    this.apiService.getArtistRegisterRequirement().subscribe(res => {
      console.log("requiremtn payload", res);
    });
  }

  toggleStatus(status) {
    return;
    this.signupType = status;
  }

  imgTobase64(element) {
    console.log("element", element.files);
    var file = element.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      console.log("RESULT", reader.result);
    };

    return reader.readAsDataURL(file);
  }

  languageSwitch(evt) {
    console.log("language", evt.value);
    this.isEnglish = evt.value == "hindi" ? false : true;
  }

  submit(isValid, formValue) {
    if (!isValid || !this.artistRegisterClientReady) return;
    const formObj = {
      FullName: formValue.ArtistName,
      MobileNo: formValue.MobileNo,
      Password: formValue.Password,
      CreatedThrough: this.platform.is("android") ? "ANDROID" : "IOS"
    };
    const {
      FullName,
      MobileNo,
      Password,
      CreatedThrough
    } = formObj;
    console.log("form obj", isValid, formObj);
    this.apiService.doArtistRegister(formObj).subscribe(res => {
      console.log("artist register", res);
      res.result == "failure" && this.utilService.presentToast(res.message);

      if (res.result == "success") {
        this.localStorage.set("artistData", {
          FullName,
          MobileNo,
          Password,
          CreatedThrough,
          ArtistId: res.ArtistId
        });
        this.signupForm.reset();
        this.router.navigate(["signup/signup/artistSignup"]);
      }
    });
  }

};

SignupPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_3__.ApiServiceService
}, {
  type: _service_util_service_service__WEBPACK_IMPORTED_MODULE_5__.UtilService
}, {
  type: _service_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}];

SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "app-signup",
  template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SignupPage);


/***/ }),

/***/ 63870:
/*!******************************************************************************!*\
  !*** ./src/app/signup/artist-signup/artist-signup.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".login_img {\n  text-align: center;\n}\n\nion-icon {\n  vertical-align: middle;\n}\n\n.icon {\n  position: absolute;\n  right: 22px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  z-index: 9;\n  color: #e42f08;\n}\n\nion-input, ion-select {\n  padding: 3px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-input:focus {\n  border: solid 1px #e42f08;\n  color: #e42f08 !important;\n}\n\nion-col {\n  margin-bottom: 10px;\n}\n\n.list-ios {\n  background: transparent;\n}\n\n.login_top {\n  --background: url(/../assets/images/login_top.png) no-repeat right top/60%;\n}\n\n.fnt-bold {\n  font-weight: 800;\n}\n\n.login_top:before {\n  content: \"\";\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 150px;\n  display: block;\n  z-index: 0;\n}\n\nion-checkbox {\n  width: 19px;\n  height: 19px;\n  border-radius: 4px;\n  --border-radius: 4px;\n  --border-color: #107C76;\n}\n\nion-label, ion-item {\n  --border-bottom: none;\n  color: #666;\n  font-size: 13px;\n}\n\ninput {\n  width: 100%;\n  line-height: 17px;\n  padding: 15px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-popover#ion-overlay-1 {\n  margin-top: -50% !important;\n}\n\n.deselected_btn {\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.0588235294);\n  color: black;\n}\n\n.selected_btn {\n  background: red;\n}\n\n#theme-text {\n  color: #797494;\n}\n\nform {\n  border: 1px solid lightgray;\n}\n\nion-radio-group > ion-text {\n  padding-right: 20%;\n}\n\nion-radio-group > ion-radio {\n  margin-right: 10px;\n}\n\nion-text {\n  color: #797494;\n}\n\n.btn-outline-primary {\n  padding: 6px;\n  background: #dcecfd;\n  border: 1px solid #ced4da;\n  border-left: none;\n  border-radius: 4px;\n  color: gray;\n}\n\nion-icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGlzdC1zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSxrQkFBQTtBQUVaOztBQUNBO0VBQVMsc0JBQUE7QUFHVDs7QUFGQTtFQUFNLGtCQUFBO0VBQW9CLFdBQUE7RUFBWSxRQUFBO0VBQVMsMkJBQUE7RUFBNEIsZUFBQTtFQUFpQixVQUFBO0VBQVksY0FBQTtBQVl4Rzs7QUFYQTtFQUFzQixxQ0FBQTtFQUF1QyxrQkFBQTtFQUFvQixXQUFBO0VBQWEsMEJBQUE7RUFBNEIsZ0JBQUE7RUFBa0IsbUJBQUE7QUFvQjVJOztBQW5CQTtFQUFnQix5QkFBQTtFQUEwQix5QkFBQTtBQXdCMUM7O0FBdEJBO0VBQVEsbUJBQUE7QUEwQlI7O0FBeEJBO0VBQVUsdUJBQUE7QUE0QlY7O0FBM0JBO0VBQ0ksMEVBQUE7QUE4Qko7O0FBNUJBO0VBQVcsZ0JBQUE7QUFnQ1g7O0FBL0JBO0VBRUEsV0FBQTtFQUFZLGVBQUE7RUFBZ0IsT0FBQTtFQUFRLFNBQUE7RUFBVSxXQUFBO0VBQVksYUFBQTtFQUFjLGNBQUE7RUFBZSxVQUFBO0FBd0N2Rjs7QUF0Q0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQXlDSjs7QUF2Q0U7RUFBb0IscUJBQUE7RUFBdUIsV0FBQTtFQUFhLGVBQUE7QUE2QzFEOztBQTVDRTtFQUFNLFdBQUE7RUFBWSxpQkFBQTtFQUFrQixzQ0FBQTtFQUF3QyxrQkFBQTtFQUFvQixXQUFBO0VBQWEsMEJBQUE7RUFBNEIsZ0JBQUE7RUFBa0IsbUJBQUE7QUF1RDdKOztBQXREQTtFQUNJLDJCQUFBO0FBeURKOztBQXZEQTtFQUNJLGlCQUFBO0VBQ0osNkNBQUE7RUFDSSxZQUFBO0FBMERKOztBQXhEQTtFQUNJLGVBQUE7QUEyREo7O0FBdkRBO0VBQ0MsY0FBQTtBQTBERDs7QUF2REE7RUFDSSwyQkFBQTtBQTBESjs7QUF4REE7RUFDSSxrQkFBQTtBQTJESjs7QUF6REE7RUFDSSxrQkFBQTtBQTRESjs7QUExREE7RUFDQyxjQUFBO0FBNkREOztBQXpEQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUE0REo7O0FBMURBO0VBQ0ksZUFBQTtBQTZESiIsImZpbGUiOiJhcnRpc3Qtc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luX2ltZyB7dGV4dC1hbGlnbjogY2VudGVyO31cbi8vIC5sb2dpbl9pbWcgaW1nIHttYXgtd2lkdGg6IDEwMCU7bWF4LWhlaWdodDogNjBweDt9XG5cbmlvbi1pY29ue3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxuLmljb257cG9zaXRpb246IGFic29sdXRlOyByaWdodDogMjJweDt0b3A6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7Zm9udC1zaXplOiAxOHB4OyB6LWluZGV4OiA5OyBjb2xvcjogI2U0MmYwODt9XG5pb24taW5wdXQsIGlvbi1zZWxlY3R7cGFkZGluZzogM3B4IDIwcHggMnB4IDIwcHggIWltcG9ydGFudDsgYm9yZGVyLXJhZGl1czogNXB4OyBjb2xvcjogIzMzMzsgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7IG1pbi1oZWlnaHQ6IDUwcHg7IGJhY2tncm91bmQ6ICNkY2ViZmQ7fVxuaW9uLWlucHV0OmZvY3Vze2JvcmRlcjogc29saWQgMXB4ICNlNDJmMDg7Y29sb3I6ICNlNDJmMDggIWltcG9ydGFudDt9XG5cbmlvbi1jb2x7bWFyZ2luLWJvdHRvbTogMTBweDt9XG5cbi5saXN0LWlvc3tiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XG4ubG9naW5fdG9we1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luX3RvcC5wbmcpIG5vLXJlcGVhdCByaWdodCB0b3AvNjAlO1xufVxuLmZudC1ib2xkIHtmb250LXdlaWdodDogODAwO31cbi5sb2dpbl90b3A6YmVmb3Jle1xuLy8gYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW5fYm90dG9tLnBuZykgbm8tcmVwZWF0IGxlZnQgYm90dG9tLzYwJTtcbmNvbnRlbnQ6IFwiXCI7cG9zaXRpb246IGZpeGVkO2xlZnQ6IDA7Ym90dG9tOiAwO3dpZHRoOiAxMDAlO2hlaWdodDogMTUwcHg7ZGlzcGxheTogYmxvY2s7ei1pbmRleDogMDt9XG5cbmlvbi1jaGVja2JveCB7XG4gICAgd2lkdGg6IDE5cHg7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtLWJvcmRlci1jb2xvcjogIzEwN0M3NjtcbiAgfVxuICBpb24tbGFiZWwsIGlvbi1pdGVtey0tYm9yZGVyLWJvdHRvbTogbm9uZTsgY29sb3I6ICM2NjY7IGZvbnQtc2l6ZTogMTNweDt9XG4gIGlucHV0e3dpZHRoOiAxMDAlO2xpbmUtaGVpZ2h0OiAxN3B4O3BhZGRpbmc6IDE1cHggMjBweCAycHggMjBweCAhaW1wb3J0YW50OyBib3JkZXItcmFkaXVzOiA1cHg7IGNvbG9yOiAjMzMzOyBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsgbWluLWhlaWdodDogNTBweDsgYmFja2dyb3VuZDogI2RjZWJmZDt9XG5pb24tcG9wb3ZlciNpb24tb3ZlcmxheS0xIHtcbiAgICBtYXJnaW4tdG9wOi01MCUhaW1wb3J0YW50O1xufVxuLmRlc2VsZWN0ZWRfYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbmJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAwZjtcbiAgICBjb2xvcjpibGFjaztcbn1cbi5zZWxlY3RlZF9idG4ge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuXG4jdGhlbWUtdGV4dCB7XG5cdGNvbG9yOiM3OTc0OTQ7XG59XG5cbmZvcm0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbmlvbi1yYWRpby1ncm91cCA+IGlvbi10ZXh0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XG59XG5pb24tcmFkaW8tZ3JvdXAgPiBpb24tcmFkaW8ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmlvbi10ZXh0e1xuXHRjb2xvcjojNzk3NDk0O1xuXG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5e1xuICAgIHBhZGRpbmc6NnB4O1xuICAgIGJhY2tncm91bmQ6ICNkY2VjZmQ7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1sZWZ0Om5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiBncmF5O1xufVxuaW9uLWljb257XG4gICAgZm9udC1zaXplOjI1cHg7XG59Il19 */";

/***/ }),

/***/ 62288:
/*!**********************************************************************************************!*\
  !*** ./src/app/signup/audience-registration/audience-registration.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".login_img {\n  text-align: center;\n}\n\nion-icon {\n  vertical-align: middle;\n}\n\n.icon {\n  position: absolute;\n  right: 22px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  z-index: 9;\n  color: #e42f08;\n}\n\nion-input, ion-select {\n  padding: 3px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-input:focus {\n  border: solid 1px #e42f08;\n  color: #e42f08 !important;\n}\n\nion-col {\n  margin-bottom: 10px;\n}\n\n.list-ios {\n  background: transparent;\n}\n\n.login_top:before {\n  content: \"\";\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 150px;\n  display: block;\n  z-index: 0;\n}\n\nion-checkbox {\n  width: 19px;\n  height: 19px;\n  border-radius: 4px;\n  --border-radius: 4px;\n  --border-color: #107C76;\n}\n\nion-label, ion-item {\n  --border-bottom: none;\n  color: #666;\n  font-size: 13px;\n}\n\ninput {\n  width: 100%;\n  line-height: 42px;\n  padding: 3px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-popover#ion-overlay-1 {\n  margin-top: -50% !important;\n}\n\n.deselected_btn {\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.0588235294);\n  color: black;\n}\n\n.selected_btn {\n  background: red;\n}\n\nion-list {\n  padding: 5px;\n}\n\nform {\n  border: 1px solid lightgray;\n  margin-top: 15px;\n}\n\nion-text {\n  --color: gray!important;\n  margin-bottom: 15px;\n  font-size: 0.8rem;\n}\n\n.ng-touched:not(form) {\n  border: 1px solid rgba(228, 22, 19, 0.568627451);\n}\n\n.ng-valid:not(form) {\n  border: 1px solid blanchedalmond;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGllbmNlLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLGtCQUFBO0FBRVo7O0FBQ0E7RUFBUyxzQkFBQTtBQUdUOztBQUZBO0VBQU0sa0JBQUE7RUFBb0IsV0FBQTtFQUFZLFFBQUE7RUFBUywyQkFBQTtFQUE0QixlQUFBO0VBQWlCLFVBQUE7RUFBWSxjQUFBO0FBWXhHOztBQVhBO0VBQXNCLHFDQUFBO0VBQXVDLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSwwQkFBQTtFQUE0QixnQkFBQTtFQUFrQixtQkFBQTtBQW9CNUk7O0FBbkJBO0VBQWdCLHlCQUFBO0VBQTBCLHlCQUFBO0FBd0IxQzs7QUF0QkE7RUFBUSxtQkFBQTtBQTBCUjs7QUF4QkE7RUFBVSx1QkFBQTtBQTRCVjs7QUF4QkE7RUFFQSxXQUFBO0VBQVksZUFBQTtFQUFnQixPQUFBO0VBQVEsU0FBQTtFQUFVLFdBQUE7RUFBWSxhQUFBO0VBQWMsY0FBQTtFQUFlLFVBQUE7QUFpQ3ZGOztBQS9CQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBa0NKOztBQWhDRTtFQUFvQixxQkFBQTtFQUF1QixXQUFBO0VBQWEsZUFBQTtBQXNDMUQ7O0FBckNFO0VBQU0sV0FBQTtFQUFZLGlCQUFBO0VBQWtCLHFDQUFBO0VBQXVDLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSwwQkFBQTtFQUE0QixnQkFBQTtFQUFrQixtQkFBQTtBQWdENUo7O0FBL0NBO0VBQ0ksMkJBQUE7QUFrREo7O0FBaERBO0VBQ0ksaUJBQUE7RUFDSiw2Q0FBQTtFQUNJLFlBQUE7QUFtREo7O0FBakRBO0VBQ0ksZUFBQTtBQW9ESjs7QUFqREE7RUFDSSxZQUFBO0FBb0RKOztBQWpEQTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7QUFvREo7O0FBbERBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBcURKOztBQW5EQTtFQUNFLGdEQUFBO0FBc0RGOztBQWpEQTtFQUNFLGdDQUFBO0FBb0RGIiwiZmlsZSI6ImF1ZGllbmNlLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbl9pbWcge3RleHQtYWxpZ246IGNlbnRlcjt9XG4vLyAubG9naW5faW1nIGltZyB7bWF4LXdpZHRoOiAxMDAlO21heC1oZWlnaHQ6IDYwcHg7fVxuXG5pb24taWNvbnt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cbi5pY29ue3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDIycHg7dG9wOiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO2ZvbnQtc2l6ZTogMThweDsgei1pbmRleDogOTsgY29sb3I6ICNlNDJmMDg7fVxuaW9uLWlucHV0LCBpb24tc2VsZWN0e3BhZGRpbmc6IDNweCAyMHB4IDJweCAyMHB4ICFpbXBvcnRhbnQ7IGJvcmRlci1yYWRpdXM6IDVweDsgY29sb3I6ICMzMzM7IGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50OyBtaW4taGVpZ2h0OiA1MHB4OyBiYWNrZ3JvdW5kOiAjZGNlYmZkO31cbmlvbi1pbnB1dDpmb2N1c3tib3JkZXI6IHNvbGlkIDFweCAjZTQyZjA4O2NvbG9yOiAjZTQyZjA4ICFpbXBvcnRhbnQ7fVxuXG5pb24tY29se21hcmdpbi1ib3R0b206IDEwcHg7fVxuXG4ubGlzdC1pb3N7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxuLy8gLmxvZ2luX3RvcHtcbi8vICAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luX3RvcC5wbmcpIG5vLXJlcGVhdCByaWdodCB0b3AvNjAlO1xuLy8gfVxuLmxvZ2luX3RvcDpiZWZvcmV7XG4vLyBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbl9ib3R0b20ucG5nKSBuby1yZXBlYXQgbGVmdCBib3R0b20vNjAlO1xuY29udGVudDogXCJcIjtwb3NpdGlvbjogZml4ZWQ7bGVmdDogMDtib3R0b206IDA7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxNTBweDtkaXNwbGF5OiBibG9jazt6LWluZGV4OiAwO31cblxuaW9uLWNoZWNrYm94IHtcbiAgICB3aWR0aDogMTlweDtcbiAgICBoZWlnaHQ6IDE5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMTA3Qzc2O1xuICB9XG4gIGlvbi1sYWJlbCwgaW9uLWl0ZW17LS1ib3JkZXItYm90dG9tOiBub25lOyBjb2xvcjogIzY2NjsgZm9udC1zaXplOiAxM3B4O31cbiAgaW5wdXR7d2lkdGg6IDEwMCU7bGluZS1oZWlnaHQ6IDQycHg7cGFkZGluZzogM3B4IDIwcHggMnB4IDIwcHggIWltcG9ydGFudDsgYm9yZGVyLXJhZGl1czogNXB4OyBjb2xvcjogIzMzMzsgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7IG1pbi1oZWlnaHQ6IDUwcHg7IGJhY2tncm91bmQ6ICNkY2ViZmQ7fVxuaW9uLXBvcG92ZXIjaW9uLW92ZXJsYXktMSB7XG4gICAgbWFyZ2luLXRvcDotNTAlIWltcG9ydGFudDtcbn1cbi5kZXNlbGVjdGVkX2J0biB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG5ib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMGY7XG4gICAgY29sb3I6YmxhY2s7XG59XG4uc2VsZWN0ZWRfYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbmlvbi1saXN0e1xuICAgIHBhZGRpbmc6NXB4O1xufVxuXG5mb3JtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbmlvbi10ZXh0IHtcbiAgICAtLWNvbG9yOiBncmF5IWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG4ubmctdG91Y2hlZDpub3QoZm9ybSkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTQxNjEzOTE7XG59XG4vLyAubmctaW52YWxpZDpub3QoZm9ybSkge1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZTQxNjEzOTE7XG4vLyB9XG4ubmctdmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhbmNoZWRhbG1vbmQ7XG59XG4vLyBidXR0b257XG4vLyAgICAgd2lkdGg6IDgwJTtcbi8vICAgICBoZWlnaHQ6MzVweDtcbi8vIH1cblxuIl19 */";

/***/ }),

/***/ 67691:
/*!************************************************************************************************!*\
  !*** ./src/app/signup/audience-registration2/audience-registration2.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = ".login_img {\n  text-align: center;\n}\n\nion-icon {\n  vertical-align: middle;\n}\n\n.icon {\n  position: absolute;\n  right: 22px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  z-index: 9;\n  color: #e42f08;\n}\n\nion-input,\nion-select {\n  padding: 3px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-input:focus {\n  border: solid 1px #e42f08;\n  color: #e42f08 !important;\n}\n\nion-col {\n  margin-bottom: 5px;\n}\n\n.list-ios {\n  background: transparent;\n}\n\n.login_top {\n  --background: url(/../assets/images/login_top.png) no-repeat right top/60%;\n}\n\n.fnt-bold {\n  font-weight: 800;\n}\n\n.login_top:before {\n  content: \"\";\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 150px;\n  display: block;\n  z-index: 0;\n}\n\nion-checkbox {\n  width: 19px;\n  height: 19px;\n  border-radius: 4px;\n  --border-radius: 4px;\n}\n\nion-label,\nion-item {\n  --border-bottom: none;\n  color: #666;\n  font-size: 13px;\n}\n\ninput {\n  width: 100%;\n  line-height: 17px;\n  padding: 15px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-popover#ion-overlay-1 {\n  margin-top: -50% !important;\n}\n\n.deselected_btn {\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.0588235294);\n  color: black;\n}\n\n.selected_btn {\n  background: red;\n}\n\n#theme-text {\n  color: #797494;\n}\n\nform {\n  border: 1px solid lightgray;\n}\n\nion-radio-group > ion-text {\n  padding-right: 15%;\n}\n\nion-radio-group > ion-radio {\n  margin-right: 10px;\n}\n\nion-text {\n  color: #797494;\n}\n\n.btn-outline-primary {\n  padding: 6px;\n  background: #dcecfd;\n  border: 1px solid #ced4da;\n  border-left: none;\n  border-radius: 4px;\n  color: gray;\n}\n\nion-icon {\n  font-size: 25px;\n}\n\n#field_birthDate {\n  width: 100%;\n  border: none;\n  line-height: 17px;\n  padding: 3px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\n.cancelBtn {\n  background-color: #ea4c62;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGllbmNlLXJlZ2lzdHJhdGlvbjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBOztFQUVFLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UsdUJBQUE7QUFHRjs7QUFEQTtFQUNFLDBFQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtBQUtGOztBQUhBO0VBRUUsV0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFLRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUtGOztBQUhBOztFQUVFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFNRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSwyQkFBQTtBQVFGOztBQU5BO0VBQ0UsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLFlBQUE7QUFTRjs7QUFQQTtFQUNFLGVBQUE7QUFVRjs7QUFQQTtFQUNFLGNBQUE7QUFVRjs7QUFQQTtFQUNFLDJCQUFBO0FBVUY7O0FBUkE7RUFDRSxrQkFBQTtBQVdGOztBQVRBO0VBQ0Usa0JBQUE7QUFZRjs7QUFWQTtFQUNFLGNBQUE7QUFhRjs7QUFWQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFhRjs7QUFYQTtFQUNFLGVBQUE7QUFjRjs7QUFaQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWVGOztBQWJBO0VBQ0UseUJBQUE7QUFnQkYiLCJmaWxlIjoiYXVkaWVuY2UtcmVnaXN0cmF0aW9uMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbl9pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vLyAubG9naW5faW1nIGltZyB7bWF4LXdpZHRoOiAxMDAlO21heC1oZWlnaHQ6IDYwcHg7fVxuXG5pb24taWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIycHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgei1pbmRleDogOTtcbiAgY29sb3I6ICNlNDJmMDg7XG59XG5pb24taW5wdXQsXG5pb24tc2VsZWN0IHtcbiAgcGFkZGluZzogM3B4IDIwcHggMnB4IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNkY2ViZmQ7XG59XG5pb24taW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTQyZjA4O1xuICBjb2xvcjogI2U0MmYwOCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29sIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubGlzdC1pb3Mge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5sb2dpbl90b3Age1xuICAtLWJhY2tncm91bmQ6IHVybCgvLi4vYXNzZXRzL2ltYWdlcy9sb2dpbl90b3AucG5nKSBuby1yZXBlYXQgcmlnaHQgdG9wLzYwJTtcbn1cbi5mbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4ubG9naW5fdG9wOmJlZm9yZSB7XG4gIC8vIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luX2JvdHRvbS5wbmcpIG5vLXJlcGVhdCBsZWZ0IGJvdHRvbS82MCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDA7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG59XG5pb24tbGFiZWwsXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHggMnB4IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNkY2ViZmQ7XG59XG5pb24tcG9wb3ZlciNpb24tb3ZlcmxheS0xIHtcbiAgbWFyZ2luLXRvcDogLTUwJSAhaW1wb3J0YW50O1xufVxuLmRlc2VsZWN0ZWRfYnRuIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAwZjtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnNlbGVjdGVkX2J0biB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuI3RoZW1lLXRleHQge1xuICBjb2xvcjogIzc5NzQ5NDtcbn1cblxuZm9ybSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbmlvbi1yYWRpby1ncm91cCA+IGlvbi10ZXh0IHtcbiAgcGFkZGluZy1yaWdodDogMTUlO1xufVxuaW9uLXJhZGlvLWdyb3VwID4gaW9uLXJhZGlvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuaW9uLXRleHQge1xuICBjb2xvcjogIzc5NzQ5NDtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNkY2VjZmQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG59XG4jZmllbGRfYmlydGhEYXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHBhZGRpbmc6IDNweCAyMHB4IDJweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZGNlYmZkO1xufVxuLmNhbmNlbEJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTRjNjI7XG59XG4iXX0= */";

/***/ }),

/***/ 59440:
/*!**************************************************************!*\
  !*** ./src/app/signup/login/login.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".login_img {\n  text-align: center;\n  margin: 20px auto 0;\n}\n\n.login_img img {\n  max-width: 14rem;\n  max-height: 140px;\n}\n\n#mt-5v {\n  margin-top: 5vh;\n}\n\nion-icon {\n  vertical-align: middle;\n}\n\n.icon {\n  position: absolute;\n  right: 22px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  z-index: 9;\n  color: #e42f08;\n}\n\nion-input {\n  padding: 3px 40px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-input:focus {\n  border: solid 1px #e42f08;\n  color: #e42f08 !important;\n}\n\nion-col {\n  margin-bottom: 10px;\n}\n\n.padding-15v {\n  margin-left: 13.6vh;\n}\n\nion-chip {\n  background: #e42f08;\n  color: white;\n  font-weight: 500;\n  width: 40vw;\n}\n\n.list-ios {\n  background: transparent;\n}\n\n.login_top {\n  --background: url('login_top.png') no-repeat right\n    top/60%;\n}\n\n.login_top:before {\n  background: url('login_bottom.png') no-repeat left bottom/60%;\n  content: \"\";\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 150px;\n  display: block;\n  z-index: 0;\n}\n\nion-radio {\n  border-radius: 50%;\n  width: 20px;\n  margin-right: 10px;\n  background: #f5f5f5;\n  --color: #333;\n}\n\n.list-md {\n  padding: 5px;\n}\n\nform {\n  border: 1px solid lightgray;\n}\n\n.text-small {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0Usc0JBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUhBO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFKQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFPRjs7QUFKQTtFQUNFLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxtQkFBQTtBQVFGOztBQU5BO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBU0Y7O0FBUEE7RUFDRSx1QkFBQTtBQVVGOztBQVJBO0VBQ0U7V0FBQTtBQVlGOztBQVRBO0VBQ0UsNkRBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQVdGOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFZSjs7QUFUQTtFQVVFLFlBQUE7QUFHRjs7QUFEQTtFQUNFLDJCQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtBQUtGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luX2ltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbn1cbi5sb2dpbl9pbWcgaW1nIHtcbiAgbWF4LXdpZHRoOiAxNHJlbTtcbiAgbWF4LWhlaWdodDogMTQwcHg7XG59XG4jbXQtNXZ7XG4gIG1hcmdpbi10b3A6NXZoO1xufVxuaW9uLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHotaW5kZXg6IDk7XG4gIGNvbG9yOiAjZTQyZjA4O1xufVxuaW9uLWlucHV0IHtcbiAgcGFkZGluZzogM3B4IDQwcHggMnB4IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNkY2ViZmQ7XG59XG5pb24taW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTQyZjA4O1xuICBjb2xvcjogI2U0MmYwOCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29sIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wYWRkaW5nLTE1diB7XG4gIG1hcmdpbi1sZWZ0OiAxMy42dmg7XG59XG5pb24tY2hpcCB7XG4gIGJhY2tncm91bmQ6ICAjZTQyZjA4O1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6NDB2dztcbn1cbi5saXN0LWlvcyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmxvZ2luX3RvcCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW5fdG9wLnBuZykgbm8tcmVwZWF0IHJpZ2h0XG4gICAgdG9wLzYwJTtcbn1cbi5sb2dpbl90b3A6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW5fYm90dG9tLnBuZykgbm8tcmVwZWF0IGxlZnRcbiAgICBib3R0b20vNjAlO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAwO1xufVxuaW9uLXJhZGlvIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1jb2xvcjogIzMzMztcbn1cblxuLmxpc3QtbWQge1xuICAvLyBtYXJnaW4tbGVmdDogMDtcbiAgLy8gbWFyZ2luLXJpZ2h0OiAwO1xuICAvLyBtYXJnaW4tdG9wOiAwO1xuICAvLyBtYXJnaW4tYm90dG9tOiAwO1xuICAvLyBwYWRkaW5nLWxlZnQ6IDA7XG4gIC8vIHBhZGRpbmctcmlnaHQ6IDA7XG4gIC8vIHBhZGRpbmctdG9wOiA4cHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIC8vIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6NXB4O1xufVxuZm9ybXtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnRleHQtc21hbGwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 42556:
/*!**********************************************************!*\
  !*** ./src/app/signup/otp/otp.component.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".login_img {\n  text-align: center;\n}\n\nion-icon {\n  vertical-align: middle;\n}\n\n.icon {\n  position: absolute;\n  right: 22px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  z-index: 9;\n  color: #e42f08;\n}\n\nion-input, ion-select {\n  padding: 3px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-input:focus {\n  border: solid 1px #e42f08;\n  color: #e42f08 !important;\n}\n\nion-col {\n  margin-bottom: 10px;\n}\n\n.list-ios {\n  background: transparent;\n}\n\n.login_top {\n  --background: url('login_top.png') no-repeat right top/60%;\n}\n\n.login_top:before {\n  background: url('login_bottom.png') no-repeat left bottom/60%;\n  content: \"\";\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 150px;\n  display: block;\n  z-index: 0;\n}\n\n.deselected_btn {\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.0588235294);\n  color: black;\n}\n\n.selected_btn {\n  background: red;\n}\n\nion-list {\n  padding: 5px;\n}\n\nion-card {\n  border: 1px solid lightgray;\n  margin-top: 15px;\n  padding: 10px;\n  box-shadow: none;\n}\n\nion-input {\n  border: solid 1px #ccc;\n  padding: 5px;\n  border-radius: 2px;\n  height: 36px;\n  min-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLGtCQUFBO0FBRVo7O0FBQUE7RUFBUyxzQkFBQTtBQUlUOztBQUhBO0VBQU0sa0JBQUE7RUFBb0IsV0FBQTtFQUFZLFFBQUE7RUFBUywyQkFBQTtFQUE0QixlQUFBO0VBQWlCLFVBQUE7RUFBWSxjQUFBO0FBYXhHOztBQVpBO0VBQXNCLHFDQUFBO0VBQXVDLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSwwQkFBQTtFQUE0QixnQkFBQTtFQUFrQixtQkFBQTtBQXFCNUk7O0FBcEJBO0VBQWdCLHlCQUFBO0VBQTBCLHlCQUFBO0FBeUIxQzs7QUF2QkE7RUFBUSxtQkFBQTtBQTJCUjs7QUExQkE7RUFBVSx1QkFBQTtBQThCVjs7QUE3QkE7RUFDSSwwREFBQTtBQWdDSjs7QUE5QkE7RUFDQSw2REFBQTtFQUNBLFdBQUE7RUFBWSxlQUFBO0VBQWdCLE9BQUE7RUFBUSxTQUFBO0VBQVUsV0FBQTtFQUFZLGFBQUE7RUFBYyxjQUFBO0VBQWUsVUFBQTtBQXdDdkY7O0FBdENBO0VBQ0ksaUJBQUE7RUFDSiw2Q0FBQTtFQUNJLFlBQUE7QUF5Q0o7O0FBdkNBO0VBQ0ksZUFBQTtBQTBDSjs7QUF4Q0E7RUFDSSxZQUFBO0FBMkNKOztBQXpDQTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUE0Q0o7O0FBMUNBO0VBQVUsc0JBQUE7RUFBd0IsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxnQkFBQTtBQWtEbEYiLCJmaWxlIjoib3RwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luX2ltZyB7dGV4dC1hbGlnbjogY2VudGVyO31cblxuaW9uLWljb257dmVydGljYWwtYWxpZ246IG1pZGRsZTt9XG4uaWNvbntwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAyMnB4O3RvcDogNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtmb250LXNpemU6IDE4cHg7IHotaW5kZXg6IDk7IGNvbG9yOiAjZTQyZjA4O31cbmlvbi1pbnB1dCwgaW9uLXNlbGVjdHtwYWRkaW5nOiAzcHggMjBweCAycHggMjBweCAhaW1wb3J0YW50OyBib3JkZXItcmFkaXVzOiA1cHg7IGNvbG9yOiAjMzMzOyBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsgbWluLWhlaWdodDogNTBweDsgYmFja2dyb3VuZDogI2RjZWJmZDt9XG5pb24taW5wdXQ6Zm9jdXN7Ym9yZGVyOiBzb2xpZCAxcHggI2U0MmYwODtjb2xvcjogI2U0MmYwOCAhaW1wb3J0YW50O31cblxuaW9uLWNvbHttYXJnaW4tYm90dG9tOiAxMHB4O31cbi5saXN0LWlvc3tiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XG4ubG9naW5fdG9we1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW5fdG9wLnBuZykgbm8tcmVwZWF0IHJpZ2h0IHRvcC82MCU7XG59XG4ubG9naW5fdG9wOmJlZm9yZXtcbmJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luX2JvdHRvbS5wbmcpIG5vLXJlcGVhdCBsZWZ0IGJvdHRvbS82MCU7XG5jb250ZW50OiBcIlwiO3Bvc2l0aW9uOiBmaXhlZDtsZWZ0OiAwO2JvdHRvbTogMDt3aWR0aDogMTAwJTtoZWlnaHQ6IDE1MHB4O2Rpc3BsYXk6IGJsb2NrO3otaW5kZXg6IDA7fVxuXG4uZGVzZWxlY3RlZF9idG4ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDBmO1xuICAgIGNvbG9yOmJsYWNrO1xufVxuLnNlbGVjdGVkX2J0biB7XG4gICAgYmFja2dyb3VuZDogcmVkO1xufVxuaW9uLWxpc3R7XG4gICAgcGFkZGluZzo1cHg7XG59XG5pb24tY2FyZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuaW9uLWlucHV0e2JvcmRlcjogc29saWQgMXB4ICNjY2M7IHBhZGRpbmc6IDVweDsgYm9yZGVyLXJhZGl1czogMnB4OyBoZWlnaHQ6IDM2cHg7IG1pbi1oZWlnaHQ6IDM2cHg7fSJdfQ== */";

/***/ }),

/***/ 61381:
/*!****************************************************************************!*\
  !*** ./src/app/signup/signup-step2/signup-step2.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".login_img {\n  text-align: center;\n  margin: 30px auto 0;\n}\n\n.login_img img {\n  max-width: 100%;\n  max-height: 60px;\n}\n\nion-icon {\n  vertical-align: middle;\n}\n\n.icon {\n  position: absolute;\n  right: 22px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  z-index: 9;\n  color: #e42f08;\n}\n\nion-input, ion-select {\n  padding: 3px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-input:focus {\n  border: solid 1px #e42f08;\n  color: #e42f08 !important;\n}\n\nion-col {\n  margin-bottom: 10px;\n}\n\n.list-ios {\n  background: transparent;\n}\n\n.login_top {\n  --background: url('login_top.png') no-repeat right top/60%;\n}\n\n.login_top:before {\n  background: url('login_bottom.png') no-repeat left bottom/60%;\n  content: \"\";\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 150px;\n  display: block;\n  z-index: 0;\n}\n\nion-checkbox {\n  width: 19px;\n  height: 19px;\n  border-radius: 4px;\n  --border-radius: 4px;\n  --border-color: #107C76;\n}\n\nion-label, ion-item {\n  --border-bottom: none;\n  color: #666;\n  font-size: 13px;\n}\n\ninput {\n  width: 100%;\n  line-height: 42px;\n  padding: 3px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-popover#ion-overlay-1 {\n  margin-top: -50% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC1zdGVwMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLGtCQUFBO0VBQW1CLG1CQUFBO0FBRy9COztBQUZBO0VBQWdCLGVBQUE7RUFBZ0IsZ0JBQUE7QUFPaEM7O0FBTEE7RUFBUyxzQkFBQTtBQVNUOztBQVJBO0VBQU0sa0JBQUE7RUFBb0IsV0FBQTtFQUFZLFFBQUE7RUFBUywyQkFBQTtFQUE0QixlQUFBO0VBQWlCLFVBQUE7RUFBWSxjQUFBO0FBa0J4Rzs7QUFqQkE7RUFBc0IscUNBQUE7RUFBdUMsa0JBQUE7RUFBb0IsV0FBQTtFQUFhLDBCQUFBO0VBQTRCLGdCQUFBO0VBQWtCLG1CQUFBO0FBMEI1STs7QUF6QkE7RUFBZ0IseUJBQUE7RUFBMEIseUJBQUE7QUE4QjFDOztBQTVCQTtFQUFRLG1CQUFBO0FBZ0NSOztBQTlCQTtFQUFVLHVCQUFBO0FBa0NWOztBQWpDQTtFQUNJLDBEQUFBO0FBb0NKOztBQWxDQTtFQUNBLDZEQUFBO0VBQ0EsV0FBQTtFQUFZLGVBQUE7RUFBZ0IsT0FBQTtFQUFRLFNBQUE7RUFBVSxXQUFBO0VBQVksYUFBQTtFQUFjLGNBQUE7RUFBZSxVQUFBO0FBNEN2Rjs7QUExQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQTZDSjs7QUEzQ0U7RUFBb0IscUJBQUE7RUFBdUIsV0FBQTtFQUFhLGVBQUE7QUFpRDFEOztBQWhERTtFQUFNLFdBQUE7RUFBWSxpQkFBQTtFQUFrQixxQ0FBQTtFQUF1QyxrQkFBQTtFQUFvQixXQUFBO0VBQWEsMEJBQUE7RUFBNEIsZ0JBQUE7RUFBa0IsbUJBQUE7QUEyRDVKOztBQTFEQTtFQUNJLDJCQUFBO0FBNkRKIiwiZmlsZSI6InNpZ251cC1zdGVwMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbl9pbWcge3RleHQtYWxpZ246IGNlbnRlcjttYXJnaW46IDMwcHggYXV0byAwO31cbi5sb2dpbl9pbWcgaW1nIHttYXgtd2lkdGg6IDEwMCU7bWF4LWhlaWdodDogNjBweDt9XG5cbmlvbi1pY29ue3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxuLmljb257cG9zaXRpb246IGFic29sdXRlOyByaWdodDogMjJweDt0b3A6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7Zm9udC1zaXplOiAxOHB4OyB6LWluZGV4OiA5OyBjb2xvcjogI2U0MmYwODt9XG5pb24taW5wdXQsIGlvbi1zZWxlY3R7cGFkZGluZzogM3B4IDIwcHggMnB4IDIwcHggIWltcG9ydGFudDsgYm9yZGVyLXJhZGl1czogNXB4OyBjb2xvcjogIzMzMzsgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7IG1pbi1oZWlnaHQ6IDUwcHg7IGJhY2tncm91bmQ6ICNkY2ViZmQ7fVxuaW9uLWlucHV0OmZvY3Vze2JvcmRlcjogc29saWQgMXB4ICNlNDJmMDg7Y29sb3I6ICNlNDJmMDggIWltcG9ydGFudDt9XG5cbmlvbi1jb2x7bWFyZ2luLWJvdHRvbTogMTBweDt9XG5cbi5saXN0LWlvc3tiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XG4ubG9naW5fdG9we1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW5fdG9wLnBuZykgbm8tcmVwZWF0IHJpZ2h0IHRvcC82MCU7XG59XG4ubG9naW5fdG9wOmJlZm9yZXtcbmJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luX2JvdHRvbS5wbmcpIG5vLXJlcGVhdCBsZWZ0IGJvdHRvbS82MCU7XG5jb250ZW50OiBcIlwiO3Bvc2l0aW9uOiBmaXhlZDtsZWZ0OiAwO2JvdHRvbTogMDt3aWR0aDogMTAwJTtoZWlnaHQ6IDE1MHB4O2Rpc3BsYXk6IGJsb2NrO3otaW5kZXg6IDA7fVxuXG5pb24tY2hlY2tib3gge1xuICAgIHdpZHRoOiAxOXB4O1xuICAgIGhlaWdodDogMTlweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLS1ib3JkZXItY29sb3I6ICMxMDdDNzY7XG4gIH1cbiAgaW9uLWxhYmVsLCBpb24taXRlbXstLWJvcmRlci1ib3R0b206IG5vbmU7IGNvbG9yOiAjNjY2OyBmb250LXNpemU6IDEzcHg7fVxuICBpbnB1dHt3aWR0aDogMTAwJTtsaW5lLWhlaWdodDogNDJweDtwYWRkaW5nOiAzcHggMjBweCAycHggMjBweCAhaW1wb3J0YW50OyBib3JkZXItcmFkaXVzOiA1cHg7IGNvbG9yOiAjMzMzOyBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsgbWluLWhlaWdodDogNTBweDsgYmFja2dyb3VuZDogI2RjZWJmZDt9XG5pb24tcG9wb3ZlciNpb24tb3ZlcmxheS0xIHtcbiAgICBtYXJnaW4tdG9wOi01MCUhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 92444:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".login_img {\n  text-align: center;\n}\n\nion-icon {\n  vertical-align: middle;\n}\n\n.icon {\n  position: absolute;\n  right: 22px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  z-index: 9;\n  color: #e42f08;\n}\n\nion-input, ion-select {\n  padding: 3px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-input:focus {\n  border: solid 1px #e42f08;\n  color: #e42f08 !important;\n}\n\nion-col {\n  margin-bottom: 10px;\n}\n\n.list-ios {\n  background: transparent;\n}\n\n.login_top {\n  --background: url('login_top.png') no-repeat right top/60%;\n}\n\n.login_top:before {\n  background: url('login_bottom.png') no-repeat left bottom/60%;\n  content: \"\";\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 150px;\n  display: block;\n  z-index: 0;\n}\n\nion-checkbox {\n  width: 19px;\n  height: 19px;\n  border-radius: 4px;\n  --border-radius: 4px;\n  --border-color: #107C76;\n}\n\nion-label, ion-item {\n  --border-bottom: none;\n  color: #666;\n  font-size: 13px;\n}\n\ninput {\n  width: 100%;\n  line-height: 42px;\n  padding: 3px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-popover#ion-overlay-1 {\n  margin-top: -50% !important;\n}\n\n.deselected_btn {\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.0588235294);\n  color: black;\n}\n\n.selected_btn {\n  background: red;\n}\n\nion-list {\n  padding: 5px;\n}\n\nform {\n  border: 1px solid lightgray;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSxrQkFBQTtBQUVaOztBQUNBO0VBQVMsc0JBQUE7QUFHVDs7QUFGQTtFQUFNLGtCQUFBO0VBQW9CLFdBQUE7RUFBWSxRQUFBO0VBQVMsMkJBQUE7RUFBNEIsZUFBQTtFQUFpQixVQUFBO0VBQVksY0FBQTtBQVl4Rzs7QUFYQTtFQUFzQixxQ0FBQTtFQUF1QyxrQkFBQTtFQUFvQixXQUFBO0VBQWEsMEJBQUE7RUFBNEIsZ0JBQUE7RUFBa0IsbUJBQUE7QUFvQjVJOztBQW5CQTtFQUFnQix5QkFBQTtFQUEwQix5QkFBQTtBQXdCMUM7O0FBdEJBO0VBQVEsbUJBQUE7QUEwQlI7O0FBeEJBO0VBQVUsdUJBQUE7QUE0QlY7O0FBM0JBO0VBQ0ksMERBQUE7QUE4Qko7O0FBNUJBO0VBQ0EsNkRBQUE7RUFDQSxXQUFBO0VBQVksZUFBQTtFQUFnQixPQUFBO0VBQVEsU0FBQTtFQUFVLFdBQUE7RUFBWSxhQUFBO0VBQWMsY0FBQTtFQUFlLFVBQUE7QUFzQ3ZGOztBQXBDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBdUNKOztBQXJDRTtFQUFvQixxQkFBQTtFQUF1QixXQUFBO0VBQWEsZUFBQTtBQTJDMUQ7O0FBMUNFO0VBQU0sV0FBQTtFQUFZLGlCQUFBO0VBQWtCLHFDQUFBO0VBQXVDLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSwwQkFBQTtFQUE0QixnQkFBQTtFQUFrQixtQkFBQTtBQXFENUo7O0FBcERBO0VBQ0ksMkJBQUE7QUF1REo7O0FBckRBO0VBQ0ksaUJBQUE7RUFDSiw2Q0FBQTtFQUNJLFlBQUE7QUF3REo7O0FBdERBO0VBQ0ksZUFBQTtBQXlESjs7QUF0REE7RUFDSSxZQUFBO0FBeURKOztBQXREQTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7QUF5REoiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbl9pbWcge3RleHQtYWxpZ246IGNlbnRlcjt9XG4vLyAubG9naW5faW1nIGltZyB7bWF4LXdpZHRoOiAxMDAlO21heC1oZWlnaHQ6IDYwcHg7fVxuXG5pb24taWNvbnt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cbi5pY29ue3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDIycHg7dG9wOiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO2ZvbnQtc2l6ZTogMThweDsgei1pbmRleDogOTsgY29sb3I6ICNlNDJmMDg7fVxuaW9uLWlucHV0LCBpb24tc2VsZWN0e3BhZGRpbmc6IDNweCAyMHB4IDJweCAyMHB4ICFpbXBvcnRhbnQ7IGJvcmRlci1yYWRpdXM6IDVweDsgY29sb3I6ICMzMzM7IGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50OyBtaW4taGVpZ2h0OiA1MHB4OyBiYWNrZ3JvdW5kOiAjZGNlYmZkO31cbmlvbi1pbnB1dDpmb2N1c3tib3JkZXI6IHNvbGlkIDFweCAjZTQyZjA4O2NvbG9yOiAjZTQyZjA4ICFpbXBvcnRhbnQ7fVxuXG5pb24tY29se21hcmdpbi1ib3R0b206IDEwcHg7fVxuXG4ubGlzdC1pb3N7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxuLmxvZ2luX3RvcHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luX3RvcC5wbmcpIG5vLXJlcGVhdCByaWdodCB0b3AvNjAlO1xufVxuLmxvZ2luX3RvcDpiZWZvcmV7XG5iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbl9ib3R0b20ucG5nKSBuby1yZXBlYXQgbGVmdCBib3R0b20vNjAlO1xuY29udGVudDogXCJcIjtwb3NpdGlvbjogZml4ZWQ7bGVmdDogMDtib3R0b206IDA7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxNTBweDtkaXNwbGF5OiBibG9jazt6LWluZGV4OiAwO31cblxuaW9uLWNoZWNrYm94IHtcbiAgICB3aWR0aDogMTlweDtcbiAgICBoZWlnaHQ6IDE5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMTA3Qzc2O1xuICB9XG4gIGlvbi1sYWJlbCwgaW9uLWl0ZW17LS1ib3JkZXItYm90dG9tOiBub25lOyBjb2xvcjogIzY2NjsgZm9udC1zaXplOiAxM3B4O31cbiAgaW5wdXR7d2lkdGg6IDEwMCU7bGluZS1oZWlnaHQ6IDQycHg7cGFkZGluZzogM3B4IDIwcHggMnB4IDIwcHggIWltcG9ydGFudDsgYm9yZGVyLXJhZGl1czogNXB4OyBjb2xvcjogIzMzMzsgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7IG1pbi1oZWlnaHQ6IDUwcHg7IGJhY2tncm91bmQ6ICNkY2ViZmQ7fVxuaW9uLXBvcG92ZXIjaW9uLW92ZXJsYXktMSB7XG4gICAgbWFyZ2luLXRvcDotNTAlIWltcG9ydGFudDtcbn1cbi5kZXNlbGVjdGVkX2J0biB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG5ib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMGY7XG4gICAgY29sb3I6YmxhY2s7XG59XG4uc2VsZWN0ZWRfYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbmlvbi1saXN0e1xuICAgIHBhZGRpbmc6NXB4O1xufVxuXG5mb3JtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 22923:
/*!******************************************************************************!*\
  !*** ./src/app/signup/artist-signup/artist-signup.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n  <ion-content class=\"ion-padding login_top\">\n    <div class=\"login_img\">\n      <img src=\"../../../assets/images/mp-logo.png\" width=\"100\" />\n    </div>\n    <ion-row class=\"mt10 fnt-bold\">\n      <ion-col size=\"6\"><ion-text>Artist Registration</ion-text></ion-col>\n      <ion-col size=\"6\" class=\"ion-text-right\">\n        <select name=\"cars\" id=\"cars\">\n          <option value=\"english\">English</option>\n        </select>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"submit(signupForm.valid, signupForm.value)\">\n      <ion-list>\n        <ion-row>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>Name <span class=\"text-danger\">*</span></ion-text>\n            <ion-input\n              id=\"ArtistName\"\n              name=\"ArtistName\"\n              placeholder=\"Artist Name\"\n              required\n              formControlName=\"ArtistName\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>Profile Photo <span class=\"text-danger\">*</span></ion-text>\n            <input\n              type=\"file\"\n              id=\"Akashvani\"\n              name=\"Akashvani\"\n              formControlName=\"SupportCertificatePhotoAkasvani\"\n            />\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>Mobile Number <span class=\"text-danger\">*</span></ion-text>\n\n            <ion-input\n              id=\"Mobile\"\n              name=\"Mobile\"\n              placeholder=\"Mobile address\"\n              required\n              formControlName=\"MobileNo\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>Gender <span class=\"text-danger\">*</span></ion-text>\n            <ion-select interface=\"popover\" placeholder=\"Male\">\n              <ion-select-option value=\"male\" selected>Male</ion-select-option>\n              <ion-select-option value=\"female\">Female</ion-select-option>\n              <ion-select-option value=\"other\">Other</ion-select-option>\n            </ion-select>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>Father Name </ion-text>\n            <ion-input\n              id=\"email\"\n              name=\"email\"\n              placeholder=\"\"\n              required\n              formControlName=\"EmailId\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>Email </ion-text>\n            <ion-input\n              id=\"email\"\n              name=\"email\"\n              placeholder=\"\"\n              required\n              formControlName=\"EmailId\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"8\">\n            <ion-text>Birth Date</ion-text>\n            <div class=\"input-group\" (click)=\"d.toggle()\">\n              <input\n                class=\"form-control\"\n                placeholder=\"yyyy-mm-dd\"\n                name=\"dp\"\n                formControlName=\"DateOfBirth\"\n                ngbDatepicker\n                #d=\"ngbDatepicker\"\n              />\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>Age</ion-text>\n            <ion-input placeholder=\"\" required formControlName=\"Address\"></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>Address</ion-text>\n            <ion-input placeholder=\"\" required formControlName=\"Address\"></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>Country</ion-text>\n\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"Select Country\"\n              formControlName=\"DistrictId\"\n            >\n              <ion-select-option value=\"india\">India</ion-select-option>\n            </ion-select>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>State</ion-text>\n            <ion-select interface=\"popover\" placeholder=\"Select State\" formControlName=\"StateId\">\n              <ion-select-option value=\"apples\">Rajsthan</ion-select-option>\n              <ion-select-option value=\"oranges\">Uttar Pradesh</ion-select-option>\n              <ion-select-option value=\"bananas\">Maharastra</ion-select-option>\n              <ion-select-option value=\"bananas\">Madhya Pradesh</ion-select-option>\n            </ion-select>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>District</ion-text>\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"Select District\"\n              formControlName=\"DistrictId\"\n            >\n              <ion-select-option value=\"apples\">Indore</ion-select-option>\n              <ion-select-option value=\"oranges\">Gwalior</ion-select-option>\n              <ion-select-option value=\"bananas\">Bhopal</ion-select-option>\n              <ion-select-option value=\"bananas\">Sehore</ion-select-option>\n              <ion-select-option value=\"bananas\">Itarsi</ion-select-option>\n              <ion-select-option value=\"bananas\">Alirajpur</ion-select-option>\n              <ion-select-option value=\"bananas\">Anuppur</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>Village/City</ion-text>\n            <ion-input required formControlName=\"CityName\"></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>Pin Code</ion-text>\n            <ion-input required formControlName=\"PinCode\"></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>Work Experience in Years</ion-text>\n            <ion-input required formControlName=\"WorkingExperience\"></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>Education Qualification</ion-text>\n            <ion-select interface=\"popover\" placeholder=\"--Select--\" formControlName=\"DistrictId\">\n              <ion-select-option value=\"ma\">MA</ion-select-option>\n              <ion-select-option value=\"mcom\">MCOM</ion-select-option>\n              <ion-select-option value=\"msc\">MSC</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-text>Art Category <span class=\"text-danger\">*</span></ion-text>\n            <ion-select interface=\"popover\" placeholder=\"--Select--\" formControlName=\"DistrictId\">\n              <ion-select-option value=\"classical\">Classical</ion-select-option>\n              <ion-select-option value=\"subclassical\">Subclassical</ion-select-option>\n              <ion-select-option value=\"art\">Modern Art</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" class=\"mt10\"><ion-text>Artist Grade</ion-text></ion-col>\n\n          <ion-col size=\"6\" class=\"relative\">\n            <ion-input readonly=\"true\" formControlName=\"Doordarshan\"></ion-input>\n          </ion-col>\n          <ion-col size=\"6\" class=\"relative\">\n            <ion-select interface=\"popover\" placeholder=\"Choose Grade\" formControlName=\"DistrictId\">\n              <ion-select-option value=\"ma\">MA</ion-select-option>\n              <ion-select-option value=\"mcom\">MCOM</ion-select-option>\n              <ion-select-option value=\"msc\">MSC</ion-select-option>\n            </ion-select>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"relative\">\n            <input\n              type=\"file\"\n              id=\"Akashvani\"\n              name=\"Akashvani\"\n              formControlName=\"SupportCertificatePhotoAkasvani\"\n            />\n          </ion-col>\n\n          <ion-col size=\"6\" class=\"relative\">\n            <ion-input readonly=\"true\" formControlName=\"Doordarshan\"></ion-input>\n          </ion-col>\n          <ion-col size=\"6\" class=\"relative\">\n            <ion-select interface=\"popover\" placeholder=\"Choose Grade\" formControlName=\"DistrictId\">\n              <ion-select-option value=\"ma\">MA</ion-select-option>\n              <ion-select-option value=\"mcom\">MCOM</ion-select-option>\n              <ion-select-option value=\"msc\">MSC</ion-select-option>\n            </ion-select>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"relative\">\n            <input\n              type=\"file\"\n              id=\"Akashvani\"\n              name=\"Akashvani\"\n              formControlName=\"SupportCertificatePhotoAkasvani\"\n            />\n          </ion-col>\n\n          <ion-col size=\"6\" class=\"relative\">\n            <ion-input readonly=\"true\" formControlName=\"CityName\"></ion-input>\n          </ion-col>\n          <ion-col size=\"6\" class=\"relative\">\n            <ion-select interface=\"popover\" placeholder=\"Choose Grade\" formControlName=\"DistrictId\">\n              <ion-select-option value=\"ma\">MA</ion-select-option>\n              <ion-select-option value=\"mcom\">MCOM</ion-select-option>\n              <ion-select-option value=\"msc\">MSC</ion-select-option>\n            </ion-select>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"relative\">\n            <input\n              type=\"file\"\n              id=\"Akashvani\"\n              name=\"Akashvani\"\n              formControlName=\"SupportCertificatePhotoAkasvani\"\n            />\n          </ion-col>\n\n          <ion-col size=\"6\" class=\"relative\">\n            <ion-input readonly=\"true\" formControlName=\"CityName\"></ion-input>\n          </ion-col>\n          <ion-col size=\"6\" class=\"relative\">\n            <ion-select interface=\"popover\" placeholder=\"Choose Grade\" formControlName=\"DistrictId\">\n              <ion-select-option value=\"ma\">MA</ion-select-option>\n              <ion-select-option value=\"mcom\">MCOM</ion-select-option>\n              <ion-select-option value=\"msc\">MSC</ion-select-option>\n            </ion-select>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"relative\">\n            <input\n              type=\"file\"\n              id=\"Akashvani\"\n              name=\"Akashvani\"\n              formControlName=\"SupportCertificatePhotoAkasvani\"\n            />\n          </ion-col>\n\n          <ion-col size=\"12\">\n            <p id=\"theme-text\">\n              <ion-text> Through which medium you want information about the program?</ion-text>\n            </p>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-radio-group formControlName=\"AwardReceived\">\n              <ion-radio value=\"email\"></ion-radio>\n              <ion-text>By Email</ion-text>\n\n              <ion-radio value=\"sms\"></ion-radio>\n              <ion-text>By SMS</ion-text>\n            </ion-radio-group>\n          </ion-col>\n          <ion-col size=\"12\">\n            <h5><ion-text>Disclaimer</ion-text></h5>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-text>\n              1. Registration will not generate the eligibility to give employment or to be called\n              in any program by the department. This gives my consent.\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-text>\n              2. It is certified that the information given by me is completely true.\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-text>\n              3.The information provided by me will be enabled by the department for use in\n              departmental practice.\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-text>\n              4. I give my consent for any action taken by the department for the authenticity of\n              the artist.\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-text>\n              5. In case of any dispute, only the decision of the Principal Secretary/Secretary/Head\n              of the Department of Culture will be valid.\n            </ion-text>\n          </ion-col>\n\n          <ion-col size=\"12\">\n            <ion-checkbox></ion-checkbox>&nbsp; <ion-text>I Agree</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\" class=\"mb30\">\n            <button type=\"submit\" [disabled]=\"signupForm.invalid\">Next</button>\n          </ion-col>\n          <ion-col size=\"6\" class=\"mb30\">\n            <button class=\"skip\" type=\"submit\" routerLink=\"\">Skip</button>\n          </ion-col>\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <p>Already have an account? <a routerLink=\"../../signup\">Login</a></p>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </form>\n  </ion-content>\n</ion-app>\n";

/***/ }),

/***/ 47533:
/*!**********************************************************************************************!*\
  !*** ./src/app/signup/audience-registration/audience-registration.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"signupForm\" (ngSubmit)=\"submit(signupForm.valid, signupForm.value)\" class=\"\">\n  <ion-list>\n    <ion-row class=\"mt10\">\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-text>\n          {{ !isEnglish ? language.mobileNo : \"Mobile No.\" }}\n          <span class=\"text-danger\">*</span></ion-text\n        >\n        <ion-input placeholder=\"Mobile No\" type=\"text\" formControlName=\"MobileNo\"></ion-input>\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"\n            !signupForm.get('MobileNo').hasError('MobileNo') &&\n            signupForm.get('MobileNo').hasError('required') &&\n            (signupForm.get('MobileNo').dirty || signupForm.get('MobileNo').touched)\n          \"\n        >\n          * Mobile Number is Required\n        </ion-text>\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"\n            signupForm.get('MobileNo').hasError('minlength') ||\n            signupForm.get('MobileNo').hasError('maxlength')\n          \"\n        >\n          Enter valid mobile number\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-text>\n          {{ !isEnglish ? language.fullName : \"Full Name\" }}\n          <span class=\"text-danger\">*</span></ion-text\n        >\n        <ion-input placeholder=\"Full Name\" required formControlName=\"FullName\"></ion-input>\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"\n            !signupForm.get('FullName').hasError('FullName') &&\n            signupForm.get('FullName').hasError('required') &&\n            (signupForm.get('FullName').dirty || signupForm.get('FullName').touched)\n          \"\n        >\n          * Full Name is Required\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-text\n          >{{ !isEnglish ? language.password : \"Password\" }}\n          <span class=\"text-danger\">*</span></ion-text\n        >\n        <ion-input\n          placeholder=\"Password\"\n          (ionChange)=\"password_check()\"\n          required\n          type=\"password\"\n          formControlName=\"Password\"\n        ></ion-input>\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"\n            !signupForm.get('Password').hasError('Password') &&\n            signupForm.get('Password').hasError('required') &&\n            (signupForm.get('Password').dirty || signupForm.get('Password').touched)\n          \"\n        >\n          * Password is Required\n        </ion-text>\n        <ion-text\n          class=\"text-small\"\n          color=\"danger\"\n          *ngIf=\"signupForm.get('Password').hasError('error')\"\n        >\n          Password must be 8 characters including 1 uppercase letter, 1 special character and\n          alphanumeric characters\n        </ion-text>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-text>\n          {{ !isEnglish ? language.confirmPassword : \"Confirm Password\" }}\n          <span class=\"text-danger\">*</span></ion-text\n        >\n        <ion-input\n          type=\"password\"\n          placeholder=\"Confirm Password\"\n          required\n          formControlName=\"ConfirmPassword\"\n        ></ion-input>\n\n        <ion-text\n          color=\"danger\"\n          *ngIf=\"\n            signupForm.get('ConfirmPassword').value &&\n            signupForm.get('Password').value !== signupForm.get('ConfirmPassword').value\n          \"\n        >\n          * Password doesn't matched\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"2\"></ion-col>\n      <ion-col size=\"4\" class=\"mb30\">\n        <button\n          type=\"submit\"\n          [ngStyle]=\"{\n            'background-color': signupForm.invalid ? '#ff00009e' : 'red'\n          }\"\n          [disabled]=\"!signupForm.valid\"\n        >\n          {{ !isEnglish ? language.next : \"Next\" }}\n        </button>\n      </ion-col>\n\n      <ion-col size=\"4\" class=\"mb30\">\n        <button class=\"cancel\" type=\"button\" routerLink=\"\">\n          {{ !isEnglish ? language.cancel : \"Cancel\" }}\n        </button>\n      </ion-col>\n      <ion-col size=\"2\"></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <p>\n          {{ !isEnglish ? language.confirm : \"Already have an account?\" }}\n          <a routerLink=\"../../signup\" (click)=\"goToLoginPage()\">{{\n            !isEnglish ? language.loginHere : \"Login\"\n          }}</a>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</form>\n";

/***/ }),

/***/ 99827:
/*!************************************************************************************************!*\
  !*** ./src/app/signup/audience-registration2/audience-registration2.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n  <ion-content class=\"ion-padding login_top\">\n    <div class=\"login_img\">\n      <img src=\"../../../assets/images/mp-logo.png\" width=\"100\" />\n    </div>\n    <ion-grid>\n      <ion-row class=\"mt10 fnt-bold\">\n        <ion-col size=\"8\"\n          ><ion-text>\n            {{ isEnglish ? \"Audience Registration\" : language.audienceRegister }}</ion-text\n          ></ion-col\n        >\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <select name=\"cars\" id=\"cars\" (change)=\"languageSwitch($event.target)\">\n            <option [selected]=\"!isEnglish\" value=\"hindi\">हिन्दी</option>\n            <option [selected]=\"isEnglish\" value=\"english\">English</option>\n          </select>\n        </ion-col>\n      </ion-row>\n      <form [formGroup]=\"signupForm\" (ngSubmit)=\"submit(signupForm.valid, signupForm.value)\">\n        <ion-list>\n          <ion-row>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-text\n                >{{ isEnglish ? \"Name\" : language.name }}\n                <span class=\"text-danger\">*</span></ion-text\n              >\n              <ion-input formControlName=\"FullName\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-text>\n                {{ isEnglish ? \"Mobile Number\" : language.mobileNo\n                }}<span class=\"text-danger\">*</span></ion-text\n              >\n              <ion-input\n                type=\"number\"\n                class=\"readonly\"\n                readonly=\"true\"\n                formControlName=\"MobileNo\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-text>\n                {{ isEnglish ? \"Email\" : language.email\n                }}<span class=\"text-danger\">*</span></ion-text\n              >\n              <ion-input\n                id=\"email\"\n                name=\"email\"\n                placeholder=\"\"\n                formControlName=\"EmailId\"\n                required\n              ></ion-input>\n              <ion-text\n                color=\"danger\"\n                *ngIf=\"\n                  !signupForm.get('EmailId').hasError('EmailId') &&\n                    signupForm.get('EmailId').hasError('required') &&\n                    (signupForm.get('EmailId').dirty || signupForm.get('EmailId').touched);\n                  else errorValidator\n                \"\n              >\n                * Email Id is Required\n              </ion-text>\n              <ng-template #errorValidator>\n                <!-- <ion-text color=\"danger\" *ngIf=\"signupForm.get('EmailId').errors\"\n                  >Enter valid email id</ion-text\n                > -->\n              </ng-template>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-text>{{ isEnglish ? \"Address\" : language.address }}</ion-text>\n              <ion-input placeholder=\"\" formControlName=\"Address\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-text>{{ isEnglish ? \"Country\" : language.country }}</ion-text>\n\n              <ion-select\n                interface=\"popover\"\n                placeholder=\"Select Country\"\n                formControlName=\"Country\"\n              >\n                <ion-select-option value=\"India\">India</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-text>{{ isEnglish ? \"State\" : language.state }}</ion-text>\n              <ion-select interface=\"popover\" placeholder=\"Select State\" formControlName=\"StateId\">\n                <ion-select-option [value]=\"1\">Rajsthan</ion-select-option>\n                <ion-select-option [value]=\"2\">Uttar Pradesh</ion-select-option>\n                <ion-select-option [value]=\"3\">Maharastra</ion-select-option>\n                <ion-select-option [value]=\"0\">Madhya Pradesh</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-text>{{ isEnglish ? \"District\" : language.district }}</ion-text>\n              <ion-select\n                interface=\"popover\"\n                placeholder=\"Select District\"\n                formControlName=\"DistrictId\"\n              >\n                <ion-select-option\n                  [value]=\"district.DistrictId\"\n                  *ngFor=\"let district of districtArr\"\n                  >{{ district.DistrictName }}</ion-select-option\n                >\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-text>Village/City</ion-text>\n              <ion-input\n                id=\"CityName\"\n                name=\"CityName\"\n                placeholder=\"City/Village\"\n                formControlName=\"CityName\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n           -->\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-text>\n                {{ isEnglish ? \"Birth Date\" : language.dob }}\n                <span class=\"text-danger\">*</span></ion-text\n              >\n\n              <input type=\"date\" formControlName=\"DateOfBirth\" id=\"field_birthDate\" />\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-text>{{ isEnglish ? \"Age\" : language.age }}</ion-text>\n              <ion-input\n                placeholder=\"\"\n                type=\"number\"\n                readonly=\"true\"\n                formControlName=\"Age\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <p id=\"theme-text\">\n                <ion-text>\n                  {{\n                    isEnglish\n                      ? \"Through which medium you want information about the program?\"\n                      : language.isNotification\n                  }}\n                </ion-text>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-radio-group formControlName=\"NotificationRequired\">\n                <ion-radio value=\"email\"></ion-radio>\n                <ion-text>{{ isEnglish ? \"By Email\" : language.fromEmail }}</ion-text>\n\n                <ion-radio value=\"sms\"></ion-radio>\n                <ion-text>{{ isEnglish ? \"By SMS\" : language.fromSMS }}</ion-text>\n              </ion-radio-group>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <h5>\n                <ion-text>{{ isEnglish ? \"Disclaimer\" : language.disclaimer }}</ion-text>\n              </h5>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-text\n                >1.\n                {{\n                  isEnglish ? \"The information given by me is correct.\" : language.disclaimer1\n                }}</ion-text\n              >\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-text>\n                2.\n                {{\n                  isEnglish\n                    ? \"I will not have any objection in case the information given by me is used for departmental use.\"\n                    : language.disclaimer2\n                }}\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-checkbox formControlName=\"iAgree\"></ion-checkbox>&nbsp;\n                <ion-text>{{ isEnglish ? \"I Agree\" : language.disclaimer3 }}</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-row>\n          <ion-row *ngIf=\"!signupForm.controls['iAgree'].value\">\n            <ion-col size=\"4\"></ion-col>\n            <ion-col size=\"4\">\n              <button class=\"skip\" type=\"submit\" routerLink=\"\">\n                {{ isEnglish ? \"Skip\" : language.skip }}\n              </button>\n            </ion-col>\n            <ion-col size=\"4\"></ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"signupForm.controls['iAgree'].value\">\n            <ion-col size=\"4\" class=\"mb30\">\n              <button\n                type=\"submit\"\n                [ngStyle]=\"{\n                  'background-color': signupForm.invalid ? '#ff00009e' : 'red'\n                }\"\n                [disabled]=\"!signupForm.valid\"\n              >\n                {{ isEnglish ? \"Save\" : language.save }}\n              </button>\n              <!-- <button type=\"submit\" [disabled]=\"signupForm.invalid\">Save</button> -->\n            </ion-col>\n            <ion-col size=\"4\" class=\"mb30\">\n              <button class=\"cancelBtn\" type=\"submit\" routerLink=\"\">\n                {{ isEnglish ? \"Cancel\" : language.cancel }}\n              </button>\n            </ion-col>\n            <ion-col size=\"4\" class=\"mb30\">\n              <button class=\"skip\" type=\"submit\" routerLink=\"\">\n                {{ isEnglish ? \"Skip\" : language.skip }}\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <p>\n                {{ isEnglish ? \"Already have an account?\" : language.confirm }}\n                <a routerLink=\"../../\" (click)=\"goToLoginPage()\">{{\n                  isEnglish ? \"Login\" : language.loginHere\n                }}</a>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </form>\n    </ion-grid>\n  </ion-content>\n</ion-app>\n";

/***/ }),

/***/ 91007:
/*!**************************************************************!*\
  !*** ./src/app/signup/login/login.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n  <ion-content class=\"ion-padding login_top\">\n    <ion-col id=\"mt-5v\">\n      <div class=\"login_img\">\n        <img src=\"../../../assets/images/mp-logo.png\" width=\"100\" />\n      </div>\n      <h3 class=\"ion-text-center mb30 mt20\">Welcome Back!</h3>\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit(loginForm.valid, loginForm.value)\">\n        <ion-list class=\"mt20\">\n          <!-- <ion-radio-group\n            formControlName=\"userStatus\"\n            mode=\"md\"\n            (ionChange)=\"changeUserType($event.target)\"\n          >\n            <ion-row class=\"\">\n              <ion-col size=\"6\">\n                <ion-chip>\n                  <ion-radio value=\"audience\" color=\"danger\"></ion-radio>\n                  <ion-label>Audience</ion-label>\n                </ion-chip>\n              </ion-col>\n              <ion-col size=\"6\" class=\"ion-text-end\">\n                <ion-chip>\n                  <ion-radio value=\"artist\" color=\"danger\"></ion-radio>\n                  <ion-label>Artist</ion-label>\n                </ion-chip>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group> -->\n          <ion-row>\n            <!-- <ion-col size=\"12\" class=\"relative\" *ngIf=\"userStatus == 'audience'\">\n              <ion-input placeholder=\"Username or email\" formControlName=\"userName\"></ion-input>\n              <ion-icon name=\"person-outline\" class=\"icon\"></ion-icon>\n            </ion-col> -->\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input placeholder=\"Mobile No.\" formControlName=\"mobileNo\"></ion-input>\n              <ion-icon name=\"call-outline\" class=\"icon\"></ion-icon>\n              <ion-text\n                color=\"danger\"\n                class=\"text-small\"\n                *ngIf=\"\n                  !loginForm.get('mobileNo').hasError('mobileNo') &&\n                  loginForm.get('mobileNo').hasError('required') &&\n                  (loginForm.get('mobileNo').dirty || loginForm.get('mobileNo').touched)\n                \"\n              >\n                * Mobile Number is Required\n              </ion-text>\n              <ion-text\n                class=\"text-small\"\n                color=\"danger\"\n                *ngIf=\"\n                  loginForm.get('mobileNo').hasError('minlength') ||\n                  loginForm.get('mobileNo').hasError('maxlength')\n                \"\n              >\n                Enter valid mobile number.\n              </ion-text>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                type=\"password\"\n                placeholder=\"Password\"\n                formControlName=\"password\"\n              ></ion-input>\n              <ion-icon name=\"lock-closed-outline\" class=\"icon\"></ion-icon>\n              <ion-text\n                color=\"danger\"\n                class=\"text-small\"\n                *ngIf=\"\n                  !loginForm.get('password').hasError('password') &&\n                  loginForm.get('password').hasError('required') &&\n                  (loginForm.get('password').dirty || loginForm.get('password').touched)\n                \"\n              >\n                * Password is Required\n              </ion-text>\n            </ion-col>\n            <!-- <ion-text\n                class=\"text-small\"\n                color=\"danger\"\n                *ngIf=\"loginForm.get('password').hasError('error')\"\n              >\n                Password must be eight characters including one uppercase letter, one special\n                character and alphanumeric characters\n              </ion-text> -->\n\n            <ion-col size=\"12\" class=\"mb30\">\n              <button\n                type=\"submit\"\n                [ngStyle]=\"{\n                  'background-color': loginForm.invalid ? '#e42f0896' : ''\n                }\"\n                [disabled]=\"loginForm.invalid\"\n              >\n                Login\n              </button>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <p><a>Forgot Password?</a></p>\n              <p>\n                Didn't have an account?\n                <a [routerLink]=\"'./signup'\" (click)=\"goToRegisterPage()\">Register</a>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </form>\n    </ion-col>\n  </ion-content>\n</ion-app>\n";

/***/ }),

/***/ 96484:
/*!**********************************************************!*\
  !*** ./src/app/signup/otp/otp.component.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n  <ion-content class=\"ion-padding login_top\">\n    <div class=\"login_img\">\n      <img src=\"../../../assets/images/mp-logo.png\" width=\"100\" />\n    </div>\n    <h4 class=\"ion-text-center mt20\">We have sent a verification code to</h4>\n    <h3 class=\"ion-text-center\">+91-9870564545</h3>\n    <ion-card>\n      <ion-row>\n        <ion-col size=\"2\" class=\"mb30\">\n          <ion-input></ion-input>\n        </ion-col>\n        <ion-col size=\"2\" class=\"mb30\">\n          <ion-input></ion-input>\n        </ion-col>\n        <ion-col size=\"2\" class=\"mb30\">\n          <ion-input></ion-input>\n        </ion-col>\n        <ion-col size=\"2\" class=\"mb30\">\n          <ion-input></ion-input>\n        </ion-col>\n        <ion-col size=\"2\" class=\"mb30\">\n          <ion-input></ion-input>\n        </ion-col>\n        <ion-col size=\"2\" class=\"mb30\">\n          <ion-input></ion-input>\n        </ion-col>\n      </ion-row>\n      <p class=\"text_green ion-text-center\">OTP sent successfully.</p>\n      <ion-row>\n        <ion-col size=\"7\" class=\"mb30\">\n          <button type=\"submit\">Resend SMS in 15</button>\n        </ion-col>\n        <ion-col size=\"5\" class=\"mb30\">\n          <button class=\"cancel\" type=\"button\">Validate</button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-content>\n</ion-app>\n";

/***/ }),

/***/ 82745:
/*!****************************************************************************!*\
  !*** ./src/app/signup/signup-step2/signup-step2.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n  <ion-content class=\"ion-padding login_top\">\n    <form\n      [formGroup]=\"signupForm\"\n      (ngSubmit)=\"submit(signupForm.valid, signupForm.value)\"\n      class=\"\"\n    >\n      <ion-list>\n        <div class=\"login_img\">\n          <img src=\"../../../assets/images/logo.png\" />\n        </div>\n        <h3 class=\"ion-text-center mb30\">Welcome, Register Now!</h3>\n        <ion-row>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"Registration\"\n              name=\"Registration\"\n              placeholder=\"Registration No.\"\n              required\n              formControlName=\"Registration\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"Aadhar\"\n              name=\"Aadhar\"\n              placeholder=\"Aadhar No.\"\n              required\n              formControlName=\"Aadhar\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"Pan\"\n              name=\"Pan\"\n              placeholder=\"PAN\"\n              required\n              formControlName=\"Pan\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"Voter\"\n              name=\"Voter\"\n              placeholder=\"Voter ID\"\n              required\n              formControlName=\"Voter\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"Passport\"\n              name=\"Passport\"\n              placeholder=\"Passport No\"\n              required\n              formControlName=\"Passport\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"BankName\"\n              name=\"BankName\"\n              placeholder=\"Bank Name\"\n              required\n              formControlName=\"BankName\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"AccountName\"\n              name=\"AccountName\"\n              placeholder=\"Account Name\"\n              required\n              formControlName=\"AccountName\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"Account\"\n              name=\"Account\"\n              placeholder=\"Account No.\"\n              required\n              formControlName=\"Account\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"IFSC\"\n              name=\"IFSC\"\n              placeholder=\"IFSC\"\n              required\n              formControlName=\"IFSC\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\" class=\"mb30\">\n            <button type=\"submit\" [disabled]=\"signupForm.invalid\">Save</button>\n          </ion-col>\n          <ion-col size=\"6\" class=\"mb30\">\n            <button\n              class=\"cancel\"\n              type=\"submit\"\n              [disabled]=\"signupForm.invalid\"\n            >\n              Cancel\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </form>\n  </ion-content>\n</ion-app>\n";

/***/ }),

/***/ 31998:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n  <ion-content class=\"ion-padding login_top\">\n    <div class=\"login_img\">\n      <img src=\"../../../assets/images/mp-logo.png\" width=\"100\" />\n    </div>\n    <ion-row class=\"mt10 fnt-bold\">\n      <ion-col size=\"8\"\n        ><ion-text\n          ><b> {{ isEnglish ? \"Sign Up Here !\" : language.doRegister }}</b></ion-text\n        ></ion-col\n      >\n      <ion-col size=\"4\" class=\"ion-text-right\">\n        <select name=\"cars\" id=\"cars\" (change)=\"languageSwitch($event.target)\">\n          <option [selected]=\"!isEnglish\" value=\"hindi\">हिन्दी</option>\n          <option [selected]=\"isEnglish\" value=\"english\">English</option>\n        </select>\n      </ion-col>\n    </ion-row>\n\n    <button\n      type=\"submit\"\n      class=\"button_roundad\"\n      [ngClass]=\"{'deselected_btn': signupType === 'artist'}\"\n      (click)=\"toggleStatus('audience')\"\n    >\n      {{ isEnglish ? \"Audience Registration\" : language.audienceRegister }}\n    </button>\n    <ng-container *ngIf=\"signupType == 'artist'\">\n      <form\n        [formGroup]=\"signupForm\"\n        (ngSubmit)=\"submit(signupForm.valid, signupForm.value)\"\n        class=\"\"\n      >\n        <ion-list>\n          <ion-row class=\"mt10\">\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-text>Mobile No. <span class=\"text-danger\">*</span></ion-text>\n              <ion-input placeholder=\"\" required formControlName=\"MobileNo\"></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-text>Artist Name <span class=\"text-danger\">*</span></ion-text>\n              <ion-input placeholder=\"\" required formControlName=\"ArtistName\"></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-text>Password <span class=\"text-danger\">*</span></ion-text>\n              <ion-input\n                placeholder=\"\"\n                required\n                type=\"password\"\n                formControlName=\"Password\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-text>Confirm Password <span class=\"text-danger\">*</span></ion-text>\n\n              <ion-input\n                placeholder=\"\"\n                type=\"password\"\n                required\n                formControlName=\"ConfirmPassword\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"2\"></ion-col>\n            <ion-col size=\"3\" class=\"mb30\">\n              <button\n                type=\"submit\"\n                [ngStyle]=\"{\n            'background-color': signupForm.invalid ? '#ff00009e' : 'red'\n          }\"\n                [disabled]=\"!signupForm.valid\"\n              >\n                Next\n              </button>\n              <ion-col size=\"2\"></ion-col>\n            </ion-col>\n            <ion-col size=\"3\" class=\"mb30\">\n              <button class=\"cancel\" routerLink=\"\" type=\"button\">Cancel</button>\n            </ion-col>\n            <ion-col size=\"2\"></ion-col>\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <p>Already have an account? <a routerLink=\"../../signup\">Login</a></p>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </form>\n    </ng-container>\n    <app-audience-registration\n      *ngIf=\"signupType == 'audience'\"\n      [isEnglish]=\"isEnglish\"\n    ></app-audience-registration>\n  </ion-content>\n</ion-app>\n";

/***/ }),

/***/ 88121:
/*!**********************************!*\
  !*** ./src/assets/app-data.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"doRegister":"पंजीयन यहाँ करें !","audienceRegister":"दर्शकों का पंजीकरण","mobileNo":"मोबाइल नंबर","fullName":"पूरा नाम","password":"पासवर्ड","confirmPassword":"पासवर्ड की पुष्टि कीजिये","next":"अगला","cancel":"रद्द करें","confirm":"क्या आपके पास पहले से एक खाता मौजूद है?","loginHere":"लॉग इन करें","name":"नाम","email":"ई-मेल ","address":"पता ","country":"देश","state":"राज्य","district":"जिला","dob":"जन्म तिथि","age":"आयु","isNotification":"कार्यक्रम की सूचना जिस माध्यम से चाहते हैं उसे सही करें","fromEmail":"ई-मेल द्वारा","fromSMS":"एसएमएस द्वारा","disclaimer":"अस्वीकरण","disclaimer1":"मेरे द्वारा दी गई जानकारी सही है।","disclaimer2":"मेरे द्वारा दी गई जानकारी विभागीय उपयोग में लिये जाने की स्थिति में मुझे कोई आपत्ति न होगी।","disclaimer3":"मैं सहमत हूँ","skip":"छोड़ें","save":"रक्षित करें"}');

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map