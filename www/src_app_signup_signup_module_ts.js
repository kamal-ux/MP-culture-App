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
        this.clientReady = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.programClientReady = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.landingPageClientReady = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.artistRegisterClientReady = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
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
    userLogin(obj) {
        this.client.addHttpHeader("Content-Type", "text/xml");
        return this.client.call("UserLogin", obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.UserLoginResult);
        }));
    }
    artistLogin(obj) {
        this.client.addHttpHeader("Content-Type", "text/xml");
        return this.client.call("ArtistLogin", obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.ArtistLoginResult);
        }));
    }
    loadUpcomingProgram() {
        this.programClient.addHttpHeader("Content-Type", "text/xml");
        return this.programClient.call("LoadUpcomingProgram", null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.LoadUpcomingProgramResult);
        }));
    }
    loadPastProgram() {
        this.programClient.addHttpHeader("Content-Type", "text/xml");
        return this.programClient.call("LoadPastProgram", {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.LoadPastProgramResult);
        }));
    }
    loadTodaysProgram() {
        this.programClient.addHttpHeader("Content-Type", "text/xml");
        return this.programClient.call("LoadTodaysProgram", {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.LoadTodaysProgramResult);
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
        return this.artistRegisterClient.call("ArtistRegistration", obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.ArtistRegistrationResult);
        }));
    }
    getArtistRegisterRequirement() {
        this.artistRegisterClient.addHttpHeader("Content-Type", "text/xml");
        return this.artistRegisterClient.call("ArtistRegistrationPageLoad", {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            return JSON.parse(data.result.ArtistRegistrationPageLoadResult);
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

/***/ 23990:
/*!*********************************************************************************!*\
  !*** ./src/app/signup/audience-registration/audience-registration.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudienceRegistrationComponent": () => (/* binding */ AudienceRegistrationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _audience_registration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audience-registration.component.html?ngResource */ 47533);
/* harmony import */ var _audience_registration_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audience-registration.component.scss?ngResource */ 62288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api-service.service */ 7149);






let AudienceRegistrationComponent = class AudienceRegistrationComponent {
    constructor(fb, apiService) {
        this.fb = fb;
        this.apiService = apiService;
        this.signupType = "artist";
    }
    ngOnInit() {
        this.apiService.artistRegisterClientState().subscribe((ready) => {
            if (ready) {
                this.artistRegisterClientReady = true;
                this.getArtistRegisterRequirement();
            }
        });
        this.signupForm = this.fb.group({
            FullName: ["art", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            MobileNo: ["120"],
            EmailId: ["emailId"],
            Address: ["Address"],
            DateOfBirth: [""],
            DistrictId: ["districid"],
            StateId: ["stateId"],
            BlockName: ["BlockName"],
            CityName: ["CityName"],
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
    submit(isValid, formValue) {
        // if (!isValid || !this.artistRegisterClientReady) return;
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
AudienceRegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__.ApiServiceService }
];
AudienceRegistrationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-audience-registration",
        template: _audience_registration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_audience_registration_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AudienceRegistrationComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 91007);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 59440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/local-storage.service */ 42518);
/* harmony import */ var src_app_service_util_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/util-service.service */ 29922);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/api-service.service */ 7149);









let LoginComponent = class LoginComponent {
    constructor(apiService, utilService, fb, router, localStorageService) {
        this.apiService = apiService;
        this.utilService = utilService;
        this.fb = fb;
        this.router = router;
        this.localStorageService = localStorageService;
        this.userStatus = "audience";
    }
    ngOnInit() {
        this.subscription();
        this.loginForm = this.fb.group({
            userStatus: ["audience"],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            mobileNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
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
        const userType = (this.userStatus = evt.value);
        console.log("user type", userType);
        if (userType == "artist") {
            this.loginForm.controls["mobileNo"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
            this.loginForm.get("mobileNo").updateValueAndValidity();
            this.loginForm.controls["userName"].clearValidators();
            this.loginForm.get("userName").updateValueAndValidity();
        }
        else {
            this.loginForm.controls["userName"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
            this.loginForm.get("userName").updateValueAndValidity();
            this.loginForm.controls["mobileNo"].clearValidators();
            this.loginForm.get("mobileNo").updateValueAndValidity();
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
            UserName: formValue.userName,
            Password: formValue.password
        };
        console.log("audience obj", formObj);
        this.apiService.userLogin(formObj).subscribe((res) => {
            console.log("user logged-in", res);
            if (res.result == "success") {
                const { userid = "", usertype = "", username = "", departmentid = "", userfullname = "" } = res;
                const userData = {
                    userid,
                    usertype,
                    username,
                    departmentid,
                    userfullname
                };
                console.log("userdata", userData);
                userData && this.localStorageService.set("userData", userData);
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
};
LoginComponent.ctorParameters = () => [
    { type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_4__.ApiServiceService },
    { type: src_app_service_util_service_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-login",
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _audience_registration_audience_registration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audience-registration/audience-registration.component */ 23990);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 25320);
/* harmony import */ var _signup_step2_signup_step2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-step2/signup-step2.component */ 75851);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ 80771);







const routes = [
    {
        path: "",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
    },
    {
        path: "signup",
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__.SignupPage
    },
    {
        path: "audience",
        component: _audience_registration_audience_registration_component__WEBPACK_IMPORTED_MODULE_0__.AudienceRegistrationComponent
    },
    {
        path: "signup2",
        component: _signup_step2_signup_step2_component__WEBPACK_IMPORTED_MODULE_2__.SignupStep2Component
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_step2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-step2.component.html?ngResource */ 82745);
/* harmony import */ var _signup_step2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup-step2.component.scss?ngResource */ 61381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let SignupStep2Component = class SignupStep2Component {
    constructor() { }
    ngOnInit() { }
};
SignupStep2Component.ctorParameters = () => [];
SignupStep2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-signup-step2',
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 50159);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 80771);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 25320);
/* harmony import */ var _audience_registration_audience_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audience-registration/audience-registration.component */ 23990);
/* harmony import */ var _signup_step2_signup_step2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-step2/signup-step2.component */ 75851);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);











let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _audience_registration_audience_registration_component__WEBPACK_IMPORTED_MODULE_3__.AudienceRegistrationComponent, _signup_step2_signup_step2_component__WEBPACK_IMPORTED_MODULE_4__.SignupStep2Component],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 31998);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 92444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-service.service */ 7149);






let SignupPage = class SignupPage {
    constructor(fb, apiService) {
        this.fb = fb;
        this.apiService = apiService;
        this.signupType = "audience";
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
            DateOfBirth: [""],
            DistrictId: ["districid"],
            StateId: ["stateId"],
            BlockName: ["BlockName"],
            CityName: ["CityName"],
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
    submit(isValid, formValue) {
        // if (!isValid || !this.artistRegisterClientReady) return;
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
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _service_api_service_service__WEBPACK_IMPORTED_MODULE_2__.ApiServiceService }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-signup",
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 62288:
/*!**********************************************************************************************!*\
  !*** ./src/app/signup/audience-registration/audience-registration.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".login_img {\n  text-align: center;\n}\n\nion-icon {\n  vertical-align: middle;\n}\n\n.icon {\n  position: absolute;\n  right: 22px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  z-index: 9;\n  color: #e42f08;\n}\n\nion-input, ion-select {\n  padding: 3px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-input:focus {\n  border: solid 1px #e42f08;\n  color: #e42f08 !important;\n}\n\nion-col {\n  margin-bottom: 10px;\n}\n\n.list-ios {\n  background: transparent;\n}\n\n.login_top:before {\n  content: \"\";\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 150px;\n  display: block;\n  z-index: 0;\n}\n\nion-checkbox {\n  width: 19px;\n  height: 19px;\n  border-radius: 4px;\n  --border-radius: 4px;\n  --border-color: #107C76;\n}\n\nion-label, ion-item {\n  --border-bottom: none;\n  color: #666;\n  font-size: 13px;\n}\n\ninput {\n  width: 100%;\n  line-height: 42px;\n  padding: 3px 20px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-popover#ion-overlay-1 {\n  margin-top: -50% !important;\n}\n\n.deselected_btn {\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.0588235294);\n  color: black;\n}\n\n.selected_btn {\n  background: red;\n}\n\nion-list {\n  padding: 5px;\n}\n\nform {\n  border: 1px solid lightgray;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGllbmNlLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLGtCQUFBO0FBRVo7O0FBQ0E7RUFBUyxzQkFBQTtBQUdUOztBQUZBO0VBQU0sa0JBQUE7RUFBb0IsV0FBQTtFQUFZLFFBQUE7RUFBUywyQkFBQTtFQUE0QixlQUFBO0VBQWlCLFVBQUE7RUFBWSxjQUFBO0FBWXhHOztBQVhBO0VBQXNCLHFDQUFBO0VBQXVDLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSwwQkFBQTtFQUE0QixnQkFBQTtFQUFrQixtQkFBQTtBQW9CNUk7O0FBbkJBO0VBQWdCLHlCQUFBO0VBQTBCLHlCQUFBO0FBd0IxQzs7QUF0QkE7RUFBUSxtQkFBQTtBQTBCUjs7QUF4QkE7RUFBVSx1QkFBQTtBQTRCVjs7QUF4QkE7RUFFQSxXQUFBO0VBQVksZUFBQTtFQUFnQixPQUFBO0VBQVEsU0FBQTtFQUFVLFdBQUE7RUFBWSxhQUFBO0VBQWMsY0FBQTtFQUFlLFVBQUE7QUFpQ3ZGOztBQS9CQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBa0NKOztBQWhDRTtFQUFvQixxQkFBQTtFQUF1QixXQUFBO0VBQWEsZUFBQTtBQXNDMUQ7O0FBckNFO0VBQU0sV0FBQTtFQUFZLGlCQUFBO0VBQWtCLHFDQUFBO0VBQXVDLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSwwQkFBQTtFQUE0QixnQkFBQTtFQUFrQixtQkFBQTtBQWdENUo7O0FBL0NBO0VBQ0ksMkJBQUE7QUFrREo7O0FBaERBO0VBQ0ksaUJBQUE7RUFDSiw2Q0FBQTtFQUNJLFlBQUE7QUFtREo7O0FBakRBO0VBQ0ksZUFBQTtBQW9ESjs7QUFqREE7RUFDSSxZQUFBO0FBb0RKOztBQWpEQTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7QUFvREoiLCJmaWxlIjoiYXVkaWVuY2UtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luX2ltZyB7dGV4dC1hbGlnbjogY2VudGVyO31cbi8vIC5sb2dpbl9pbWcgaW1nIHttYXgtd2lkdGg6IDEwMCU7bWF4LWhlaWdodDogNjBweDt9XG5cbmlvbi1pY29ue3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxuLmljb257cG9zaXRpb246IGFic29sdXRlOyByaWdodDogMjJweDt0b3A6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7Zm9udC1zaXplOiAxOHB4OyB6LWluZGV4OiA5OyBjb2xvcjogI2U0MmYwODt9XG5pb24taW5wdXQsIGlvbi1zZWxlY3R7cGFkZGluZzogM3B4IDIwcHggMnB4IDIwcHggIWltcG9ydGFudDsgYm9yZGVyLXJhZGl1czogNXB4OyBjb2xvcjogIzMzMzsgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7IG1pbi1oZWlnaHQ6IDUwcHg7IGJhY2tncm91bmQ6ICNkY2ViZmQ7fVxuaW9uLWlucHV0OmZvY3Vze2JvcmRlcjogc29saWQgMXB4ICNlNDJmMDg7Y29sb3I6ICNlNDJmMDggIWltcG9ydGFudDt9XG5cbmlvbi1jb2x7bWFyZ2luLWJvdHRvbTogMTBweDt9XG5cbi5saXN0LWlvc3tiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XG4vLyAubG9naW5fdG9we1xuLy8gICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW5fdG9wLnBuZykgbm8tcmVwZWF0IHJpZ2h0IHRvcC82MCU7XG4vLyB9XG4ubG9naW5fdG9wOmJlZm9yZXtcbi8vIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luX2JvdHRvbS5wbmcpIG5vLXJlcGVhdCBsZWZ0IGJvdHRvbS82MCU7XG5jb250ZW50OiBcIlwiO3Bvc2l0aW9uOiBmaXhlZDtsZWZ0OiAwO2JvdHRvbTogMDt3aWR0aDogMTAwJTtoZWlnaHQ6IDE1MHB4O2Rpc3BsYXk6IGJsb2NrO3otaW5kZXg6IDA7fVxuXG5pb24tY2hlY2tib3gge1xuICAgIHdpZHRoOiAxOXB4O1xuICAgIGhlaWdodDogMTlweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLS1ib3JkZXItY29sb3I6ICMxMDdDNzY7XG4gIH1cbiAgaW9uLWxhYmVsLCBpb24taXRlbXstLWJvcmRlci1ib3R0b206IG5vbmU7IGNvbG9yOiAjNjY2OyBmb250LXNpemU6IDEzcHg7fVxuICBpbnB1dHt3aWR0aDogMTAwJTtsaW5lLWhlaWdodDogNDJweDtwYWRkaW5nOiAzcHggMjBweCAycHggMjBweCAhaW1wb3J0YW50OyBib3JkZXItcmFkaXVzOiA1cHg7IGNvbG9yOiAjMzMzOyBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsgbWluLWhlaWdodDogNTBweDsgYmFja2dyb3VuZDogI2RjZWJmZDt9XG5pb24tcG9wb3ZlciNpb24tb3ZlcmxheS0xIHtcbiAgICBtYXJnaW4tdG9wOi01MCUhaW1wb3J0YW50O1xufVxuLmRlc2VsZWN0ZWRfYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbmJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAwZjtcbiAgICBjb2xvcjpibGFjaztcbn1cbi5zZWxlY3RlZF9idG4ge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuaW9uLWxpc3R7XG4gICAgcGFkZGluZzo1cHg7XG59XG5cbmZvcm0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuIl19 */";

/***/ }),

/***/ 59440:
/*!**************************************************************!*\
  !*** ./src/app/signup/login/login.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".login_img {\n  text-align: center;\n  margin: 20px auto 0;\n}\n\n.login_img img {\n  max-width: 14rem;\n  max-height: 140px;\n}\n\n#mt-5v {\n  margin-top: 5vh;\n}\n\nion-icon {\n  vertical-align: middle;\n}\n\n.icon {\n  position: absolute;\n  right: 22px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  z-index: 9;\n  color: #e42f08;\n}\n\nion-input {\n  padding: 3px 40px 2px 20px !important;\n  border-radius: 5px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-input:focus {\n  border: solid 1px #e42f08;\n  color: #e42f08 !important;\n}\n\nion-col {\n  margin-bottom: 10px;\n}\n\n.padding-15v {\n  margin-left: 13.6vh;\n}\n\nion-chip {\n  background: #e42f08;\n  color: white;\n  font-weight: 500;\n  width: 40vw;\n}\n\n.list-ios {\n  background: transparent;\n}\n\n.login_top {\n  --background: url('login_top.png') no-repeat right\n    top/60%;\n}\n\n.login_top:before {\n  background: url('login_bottom.png') no-repeat left bottom/60%;\n  content: \"\";\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 150px;\n  display: block;\n  z-index: 0;\n}\n\nion-radio {\n  border-radius: 50%;\n  width: 20px;\n  margin-right: 10px;\n  background: #f5f5f5;\n  --color: #333;\n}\n\n.list-md {\n  padding: 5px;\n}\n\nform {\n  border: 1px solid lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0Usc0JBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUhBO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFKQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFPRjs7QUFKQTtFQUNFLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxtQkFBQTtBQVFGOztBQU5BO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBU0Y7O0FBUEE7RUFDRSx1QkFBQTtBQVVGOztBQVJBO0VBQ0U7V0FBQTtBQVlGOztBQVRBO0VBQ0UsNkRBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQVdGOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFZSjs7QUFUQTtFQVVFLFlBQUE7QUFHRjs7QUFEQTtFQUNFLDJCQUFBO0FBSUYiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5faW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xufVxuLmxvZ2luX2ltZyBpbWcge1xuICBtYXgtd2lkdGg6IDE0cmVtO1xuICBtYXgtaGVpZ2h0OiAxNDBweDtcbn1cbiNtdC01dntcbiAgbWFyZ2luLXRvcDo1dmg7XG59XG5pb24taWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIycHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgei1pbmRleDogOTtcbiAgY29sb3I6ICNlNDJmMDg7XG59XG5pb24taW5wdXQge1xuICBwYWRkaW5nOiAzcHggNDBweCAycHggMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2RjZWJmZDtcbn1cbmlvbi1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlNDJmMDg7XG4gIGNvbG9yOiAjZTQyZjA4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnBhZGRpbmctMTV2IHtcbiAgbWFyZ2luLWxlZnQ6IDEzLjZ2aDtcbn1cbmlvbi1jaGlwIHtcbiAgYmFja2dyb3VuZDogICNlNDJmMDg7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDo0MHZ3O1xufVxuLmxpc3QtaW9zIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubG9naW5fdG9wIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbl90b3AucG5nKSBuby1yZXBlYXQgcmlnaHRcbiAgICB0b3AvNjAlO1xufVxuLmxvZ2luX3RvcDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbl9ib3R0b20ucG5nKSBuby1yZXBlYXQgbGVmdFxuICAgIGJvdHRvbS82MCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDA7XG59XG5pb24tcmFkaW8ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAtLWNvbG9yOiAjMzMzO1xufVxuXG4ubGlzdC1tZCB7XG4gIC8vIG1hcmdpbi1sZWZ0OiAwO1xuICAvLyBtYXJnaW4tcmlnaHQ6IDA7XG4gIC8vIG1hcmdpbi10b3A6IDA7XG4gIC8vIG1hcmdpbi1ib3R0b206IDA7XG4gIC8vIHBhZGRpbmctbGVmdDogMDtcbiAgLy8gcGFkZGluZy1yaWdodDogMDtcbiAgLy8gcGFkZGluZy10b3A6IDhweDtcbiAgLy8gcGFkZGluZy1ib3R0b206IDhweDtcbiAgLy8gYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzo1cHg7XG59XG5mb3Jte1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4iXX0= */";

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

/***/ 47533:
/*!**********************************************************************************************!*\
  !*** ./src/app/signup/audience-registration/audience-registration.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"signupForm\" (ngSubmit)=\"submit(signupForm.valid, signupForm.value)\" class=\"\">\n  <ion-list>\n    <ion-row class=\"mt10\">\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-label>Mobile No.</ion-label>\n        <ion-input\n          id=\"Mobile\"\n          name=\"Mobile\"\n          placeholder=\"Mobile address\"\n          required\n          formControlName=\"MobileNo\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-label>Full Name</ion-label>\n        <ion-input\n          id=\"FullName\"\n          name=\"FullName\"\n          placeholder=\"Full Name\"\n          required\n          formControlName=\"FullName\"\n        ></ion-input>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-label>Email</ion-label>\n        <ion-input\n          id=\"email\"\n          name=\"email\"\n          placeholder=\"Email address\"\n          required\n          formControlName=\"EmailId\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"input-group\" (click)=\"d.toggle()\">\n          <input\n            class=\"form-control\"\n            placeholder=\"yyyy-mm-dd\"\n            name=\"dp\"\n            formControlName=\"DateOfBirth\"\n            ngbDatepicker\n            #d=\"ngbDatepicker\"\n          />\n        </div>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-select interface=\"popover\" placeholder=\"Select State\">\n          <ion-select-option value=\"apples\">Rajsthan</ion-select-option>\n          <ion-select-option value=\"oranges\">Uttar Pradesh</ion-select-option>\n          <ion-select-option value=\"bananas\">Maharastra</ion-select-option>\n          <ion-select-option value=\"bananas\">Madhya Pradesh</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-input\n          id=\"Address\"\n          name=\"Address\"\n          placeholder=\"Address\"\n          required\n          formControlName=\"Address\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-select interface=\"popover\" placeholder=\"Select State\" formControlName=\"StateId\">\n          <ion-select-option value=\"apples\">Rajsthan</ion-select-option>\n          <ion-select-option value=\"oranges\">Uttar Pradesh</ion-select-option>\n          <ion-select-option value=\"bananas\">Maharastra</ion-select-option>\n          <ion-select-option value=\"bananas\">Madhya Pradesh</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-input\n          id=\"BlockName\"\n          name=\"BlockName\"\n          placeholder=\"Block Name\"\n          required\n          formControlName=\"BlockName\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-select interface=\"popover\" placeholder=\"Select District\" formControlName=\"DistrictId\">\n          <ion-select-option value=\"apples\">Indore</ion-select-option>\n          <ion-select-option value=\"oranges\">Gwalior</ion-select-option>\n          <ion-select-option value=\"bananas\">Bhopal</ion-select-option>\n          <ion-select-option value=\"bananas\">Sehore</ion-select-option>\n          <ion-select-option value=\"bananas\">Itarsi</ion-select-option>\n          <ion-select-option value=\"bananas\">Alirajpur</ion-select-option>\n          <ion-select-option value=\"bananas\">Anuppur</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-input\n          id=\"CityName\"\n          name=\"CityName\"\n          placeholder=\"City/Village\"\n          required\n          formControlName=\"CityName\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-input\n          id=\"Description\"\n          name=\"Description\"\n          placeholder=\"Description of current working\"\n          required\n          formControlName=\"DescriptionOfCurrentWorking\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-input\n          id=\"OtherQualityName\"\n          name=\"OtherQualityName\"\n          placeholder=\"Any Other Quality\"\n          required\n          formControlName=\"OtherQualityName\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-input\n          id=\"OtherQualityDescription\"\n          name=\"OtherQualityDescription\"\n          placeholder=\"Describe it\"\n          required\n          formControlName=\"OtherQualityDescription\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-list>\n          <ion-item>\n            <ion-checkbox\n              color=\"primary\"\n              slot=\"start\"\n              formControlName=\"IsRegisteredArtistOfAkasvani\"\n            ></ion-checkbox>\n            <ion-label> Register Artist of Akashvani </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-label for=\"Akashvani\">Upload Certificate of Akashvani</ion-label>\n        <input\n          type=\"file\"\n          id=\"Akashvani\"\n          name=\"Akashvani\"\n          formControlName=\"SupportCertificatePhotoAkasvani\"\n          (change)=\"imgTobase64($event.target)\"\n        />\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-list>\n          <ion-item>\n            <ion-checkbox\n              color=\"primary\"\n              slot=\"start\"\n              formControlName=\"IsRegisteredArtistOfDoordarshan\"\n            ></ion-checkbox>\n            <ion-label> Register Artist of Doordarshan </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-label for=\"Doordarshan\">Upload Certificate of Doordarshan</ion-label>\n        <input\n          type=\"file\"\n          id=\"Doordarshan\"\n          name=\"Doordarshan\"\n          formControlName=\"SupportCertificatePhotoDoordarshan\"\n        />\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-list>\n          <ion-item>\n            <ion-checkbox\n              color=\"primary\"\n              slot=\"start\"\n              formControlName=\"IsRegisteredArtistOfICCR\"\n            ></ion-checkbox>\n            <ion-label> Register Artist of ICCR </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-label for=\"ICCR\">Upload Certificate of ICCR</ion-label>\n        <input type=\"file\" id=\"ICCR\" name=\"ICCR\" formControlName=\"SupportCertificatePhotoICCR\" />\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-select\n          interface=\"popover\"\n          placeholder=\"Select Artist Grade\"\n          formControlName=\"ArtistGrade\"\n        >\n          <ion-select-option value=\"apples\">A+</ion-select-option>\n          <ion-select-option value=\"oranges\">A</ion-select-option>\n          <ion-select-option value=\"bananas\">B+</ion-select-option>\n          <ion-select-option value=\"bananas\">B</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-input\n          type=\"password\"\n          name=\"password\"\n          placeholder=\"Password\"\n          required\n          formControlName=\"password\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-input\n          type=\"ConfirmPassword\"\n          name=\"ConfirmPassword\"\n          placeholder=\"Confirm Password\"\n          required\n          formControlName=\"ConfirmPassword\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-select interface=\"popover\" placeholder=\"Artist Education Category\">\n          <ion-select-option value=\"apples\">A+</ion-select-option>\n          <ion-select-option value=\"oranges\">A</ion-select-option>\n          <ion-select-option value=\"bananas\">B+</ion-select-option>\n          <ion-select-option value=\"bananas\">B</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-select interface=\"popover\" placeholder=\"Artist Education SubCategory\">\n          <ion-select-option value=\"apples\">A+</ion-select-option>\n          <ion-select-option value=\"oranges\">A</ion-select-option>\n          <ion-select-option value=\"bananas\">B+</ion-select-option>\n          <ion-select-option value=\"bananas\">B</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-input\n          type=\"AboutArtist\"\n          name=\"AboutArtist\"\n          placeholder=\"About Artist\"\n          required\n          formControlName=\"AboutArtist\"\n        ></ion-input>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"relative\">\n        <ion-list>\n          <ion-item>\n            <ion-checkbox color=\"success\" slot=\"start\"></ion-checkbox>\n            <ion-label>\n              By Signing up it is not assured to get the work from ministry of culture\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"6\" class=\"mb30\">\n        <button type=\"submit\" [disabled]=\"signupForm.invalid\">Save</button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"mb30\">\n        <button class=\"cancel\" type=\"button\">Cancel</button>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <p>Already have an account? <a href=\"#!\">Login</a></p>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</form>\n";

/***/ }),

/***/ 91007:
/*!**************************************************************!*\
  !*** ./src/app/signup/login/login.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n  <ion-content class=\"ion-padding login_top\">\n    <ion-col id=\"mt-5v\">\n      <div class=\"login_img\">\n        <img src=\"../../../assets/images/mp-logo.png\" width=\"70\" />\n      </div>\n      <h3 class=\"ion-text-center mb30 mt20\">Welcome Back!</h3>\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit(loginForm.valid, loginForm.value)\">\n        <ion-list>\n          <ion-radio-group\n            formControlName=\"userStatus\"\n            mode=\"md\"\n            (ionChange)=\"changeUserType($event.target)\"\n          >\n            <ion-row class=\"\">\n              <ion-col size=\"6\">\n                <ion-chip>\n                  <ion-radio value=\"audience\" color=\"danger\"></ion-radio>\n                  <ion-label>Audience</ion-label>\n                </ion-chip>\n              </ion-col>\n              <ion-col size=\"6\" class=\"ion-text-end\">\n                <ion-chip>\n                  <ion-radio value=\"artist\" color=\"danger\"></ion-radio>\n                  <ion-label>Artist</ion-label>\n                </ion-chip>\n              </ion-col>\n            </ion-row>\n          </ion-radio-group>\n          <ion-row>\n            <!-- <ion-col size=\"12\" class=\"relative\" *ngIf=\"userStatus == 'audience'\">\n              <ion-input placeholder=\"Username or email\" formControlName=\"userName\"></ion-input>\n              <ion-icon name=\"person-outline\" class=\"icon\"></ion-icon>\n            </ion-col> -->\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input placeholder=\"Mobile No.\" formControlName=\"mobileNo\"></ion-input>\n              <ion-icon name=\"call-outline\" class=\"icon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                type=\"password\"\n                placeholder=\"Password\"\n                formControlName=\"password\"\n              ></ion-input>\n              <ion-icon name=\"lock-closed-outline\" class=\"icon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"12\" class=\"mb30\">\n              <button\n                type=\"submit\"\n                [ngStyle]=\"{\n                  'background-color': loginForm.invalid ? '#e42f0896' : ''\n                }\"\n                [disabled]=\"loginForm.invalid\"\n              >\n                Login\n              </button>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <p><a href=\"#!\">Forgot Password?</a></p>\n              <p>Didn't have an account? <a [routerLink]=\"'./signup'\">Register</a></p>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </form>\n    </ion-col>\n  </ion-content>\n</ion-app>\n";

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

module.exports = "<ion-app>\n  <ion-content class=\"ion-padding login_top\">\n    <div class=\"login_img\">\n      <img src=\"../../../assets/images/mp-logo.png\" width=\"70\" />\n    </div>\n    <h3 class=\"ion-text-center mb30\">Welcome, Register Now!</h3>\n    <button\n      type=\"submit\"\n      class=\"button_roundad\"\n      [ngClass]=\"{'deselected_btn': signupType === 'audience'}\"\n      (click)=\"toggleStatus('artist')\"\n    >\n      Artist Registeration\n    </button>\n    <button\n      type=\"submit\"\n      class=\"button_roundad\"\n      [ngClass]=\"{'deselected_btn': signupType === 'artist'}\"\n      (click)=\"toggleStatus('audience')\"\n    >\n      Audience Registration\n    </button>\n    <ng-container *ngIf=\"signupType == 'artist'\">\n      <form\n        [formGroup]=\"signupForm\"\n        (ngSubmit)=\"submit(signupForm.valid, signupForm.value)\"\n        class=\"\"\n      >\n        <ion-list>\n          <ion-row class=\"mt10\">\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                id=\"ArtistName\"\n                name=\"ArtistName\"\n                placeholder=\"Artist Name\"\n                required\n                formControlName=\"ArtistName\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                id=\"Mobile\"\n                name=\"Mobile\"\n                placeholder=\"Mobile address\"\n                required\n                formControlName=\"MobileNo\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                id=\"email\"\n                name=\"email\"\n                placeholder=\"Email address\"\n                required\n                formControlName=\"EmailId\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\">\n              <div class=\"input-group\" (click)=\"d.toggle()\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"yyyy-mm-dd\"\n                  name=\"dp\"\n                  formControlName=\"DateOfBirth\"\n                  ngbDatepicker\n                  #d=\"ngbDatepicker\"\n                />\n              </div>\n              <!-- <ion-label id=\"date-time\"\n              >{{signupForm.controls['DateOfBirth'].value ?\n              (signupForm.controls['DateOfBirth'].value | date: 'mediumDate')\n              :\"Select date\" }}</ion-label\n            >\n            <ion-popover trigger=\"date-time\">\n              <ng-template>\n                <ion-datetime\n                  formControlName=\"DateOfBirth\"\n                  presentation=\"date\"\n                  showDefaultButtons=\"{true}\"\n                >\n                </ion-datetime>\n              </ng-template>\n            </ion-popover> -->\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-select interface=\"popover\" placeholder=\"Select State\">\n                <ion-select-option value=\"apples\">Rajsthan</ion-select-option>\n                <ion-select-option value=\"oranges\">Uttar Pradesh</ion-select-option>\n                <ion-select-option value=\"bananas\">Maharastra</ion-select-option>\n                <ion-select-option value=\"bananas\">Madhya Pradesh</ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                id=\"Address\"\n                name=\"Address\"\n                placeholder=\"Address\"\n                required\n                formControlName=\"Address\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-select interface=\"popover\" placeholder=\"Select State\" formControlName=\"StateId\">\n                <ion-select-option value=\"apples\">Rajsthan</ion-select-option>\n                <ion-select-option value=\"oranges\">Uttar Pradesh</ion-select-option>\n                <ion-select-option value=\"bananas\">Maharastra</ion-select-option>\n                <ion-select-option value=\"bananas\">Madhya Pradesh</ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                id=\"BlockName\"\n                name=\"BlockName\"\n                placeholder=\"Block Name\"\n                required\n                formControlName=\"BlockName\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-select\n                interface=\"popover\"\n                placeholder=\"Select District\"\n                formControlName=\"DistrictId\"\n              >\n                <ion-select-option value=\"apples\">Indore</ion-select-option>\n                <ion-select-option value=\"oranges\">Gwalior</ion-select-option>\n                <ion-select-option value=\"bananas\">Bhopal</ion-select-option>\n                <ion-select-option value=\"bananas\">Sehore</ion-select-option>\n                <ion-select-option value=\"bananas\">Itarsi</ion-select-option>\n                <ion-select-option value=\"bananas\">Alirajpur</ion-select-option>\n                <ion-select-option value=\"bananas\">Anuppur</ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                id=\"CityName\"\n                name=\"CityName\"\n                placeholder=\"City/Village\"\n                required\n                formControlName=\"CityName\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                id=\"Description\"\n                name=\"Description\"\n                placeholder=\"Description of current working\"\n                required\n                formControlName=\"DescriptionOfCurrentWorking\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                id=\"OtherQualityName\"\n                name=\"OtherQualityName\"\n                placeholder=\"Any Other Quality\"\n                required\n                formControlName=\"OtherQualityName\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                id=\"OtherQualityDescription\"\n                name=\"OtherQualityDescription\"\n                placeholder=\"Describe it\"\n                required\n                formControlName=\"OtherQualityDescription\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-list>\n                <ion-item>\n                  <ion-checkbox\n                    color=\"primary\"\n                    slot=\"start\"\n                    formControlName=\"IsRegisteredArtistOfAkasvani\"\n                  ></ion-checkbox>\n                  <ion-label> Register Artist of Akashvani </ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-label for=\"Akashvani\">Upload Certificate of Akashvani</ion-label>\n              <input\n                type=\"file\"\n                id=\"Akashvani\"\n                name=\"Akashvani\"\n                formControlName=\"SupportCertificatePhotoAkasvani\"\n                (change)=\"imgTobase64($event.target)\"\n              />\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-list>\n                <ion-item>\n                  <ion-checkbox\n                    color=\"primary\"\n                    slot=\"start\"\n                    formControlName=\"IsRegisteredArtistOfDoordarshan\"\n                  ></ion-checkbox>\n                  <ion-label> Register Artist of Doordarshan </ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-label for=\"Doordarshan\">Upload Certificate of Doordarshan</ion-label>\n              <input\n                type=\"file\"\n                id=\"Doordarshan\"\n                name=\"Doordarshan\"\n                formControlName=\"SupportCertificatePhotoDoordarshan\"\n              />\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-list>\n                <ion-item>\n                  <ion-checkbox\n                    color=\"primary\"\n                    slot=\"start\"\n                    formControlName=\"IsRegisteredArtistOfICCR\"\n                  ></ion-checkbox>\n                  <ion-label> Register Artist of ICCR </ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-label for=\"ICCR\">Upload Certificate of ICCR</ion-label>\n              <input\n                type=\"file\"\n                id=\"ICCR\"\n                name=\"ICCR\"\n                formControlName=\"SupportCertificatePhotoICCR\"\n              />\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-select\n                interface=\"popover\"\n                placeholder=\"Select Artist Grade\"\n                formControlName=\"ArtistGrade\"\n              >\n                <ion-select-option value=\"apples\">A+</ion-select-option>\n                <ion-select-option value=\"oranges\">A</ion-select-option>\n                <ion-select-option value=\"bananas\">B+</ion-select-option>\n                <ion-select-option value=\"bananas\">B</ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"Password\"\n                required\n                formControlName=\"password\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                type=\"ConfirmPassword\"\n                name=\"ConfirmPassword\"\n                placeholder=\"Confirm Password\"\n                required\n                formControlName=\"ConfirmPassword\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-select interface=\"popover\" placeholder=\"Artist Education Category\">\n                <ion-select-option value=\"apples\">A+</ion-select-option>\n                <ion-select-option value=\"oranges\">A</ion-select-option>\n                <ion-select-option value=\"bananas\">B+</ion-select-option>\n                <ion-select-option value=\"bananas\">B</ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-select interface=\"popover\" placeholder=\"Artist Education SubCategory\">\n                <ion-select-option value=\"apples\">A+</ion-select-option>\n                <ion-select-option value=\"oranges\">A</ion-select-option>\n                <ion-select-option value=\"bananas\">B+</ion-select-option>\n                <ion-select-option value=\"bananas\">B</ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-input\n                type=\"AboutArtist\"\n                name=\"AboutArtist\"\n                placeholder=\"About Artist\"\n                required\n                formControlName=\"AboutArtist\"\n              ></ion-input>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"relative\">\n              <ion-list>\n                <ion-item>\n                  <ion-checkbox color=\"success\" slot=\"start\"></ion-checkbox>\n                  <ion-label>\n                    By Signing up it is not assured to get the work from ministry of culture\n                  </ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\" class=\"mb30\">\n              <button type=\"submit\" [disabled]=\"signupForm.invalid\">Save</button>\n            </ion-col>\n            <ion-col size=\"6\" class=\"mb30\">\n              <button class=\"cancel\" type=\"button\">Cancel</button>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <p>Already have an account? <a href=\"#!\">Login</a></p>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </form>\n    </ng-container>\n    <app-audience-registration *ngIf=\"signupType == 'audience'\"></app-audience-registration>\n  </ion-content>\n</ion-app>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map