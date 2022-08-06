"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_signup_signup_module_ts"],{

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
            userName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 25320);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 80771);





const routes = [
    {
        path: "",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    },
    {
        path: "signup",
        component: _signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], SignupPageRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 50159);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 80771);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 25320);








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 31998);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 92444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);





let SignupPage = class SignupPage {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.signupForm = this.fb.group({
            userName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    submit(isValid, formValue) {
        console.log("form obj", isValid, formValue);
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-signup",
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 59440:
/*!**************************************************************!*\
  !*** ./src/app/signup/login/login.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".login_img {\n  text-align: center;\n  margin: 70px auto 0;\n}\n\n.login_img img {\n  max-width: 100%;\n  max-height: 140px;\n}\n\nion-icon {\n  vertical-align: middle;\n}\n\n.icon {\n  position: absolute;\n  right: 22px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  z-index: 9;\n  color: #e42f08;\n}\n\nion-input {\n  padding: 3px 40px 2px 20px !important;\n  border-radius: 100px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-input:focus {\n  border: solid 1px #e42f08;\n  color: #e42f08 !important;\n}\n\nion-col {\n  margin-bottom: 10px;\n}\n\n.padding-15v {\n  margin-left: 13.6vh;\n}\n\nion-chip {\n  background: transparent;\n}\n\n.list-ios {\n  background: transparent;\n}\n\n.login_top {\n  --background: url('login_top.png') no-repeat right top/60%;\n}\n\n.login_top:before {\n  background: url('login_bottom.png') no-repeat left bottom/60%;\n  content: \"\";\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 150px;\n  display: block;\n  z-index: 0;\n}\n\nion-radio {\n  border-radius: 50%;\n  width: 23px;\n  margin-right: 5px;\n  background: #f5f5f5;\n  border: solid 1px #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVksa0JBQUE7RUFBbUIsbUJBQUE7QUFHL0I7O0FBRkE7RUFBZ0IsZUFBQTtFQUFnQixpQkFBQTtBQU9oQzs7QUFMQTtFQUFTLHNCQUFBO0FBU1Q7O0FBUkE7RUFBTSxrQkFBQTtFQUFvQixXQUFBO0VBQVksUUFBQTtFQUFTLDJCQUFBO0VBQTRCLGVBQUE7RUFBaUIsVUFBQTtFQUFZLGNBQUE7QUFrQnhHOztBQWpCQTtFQUFVLHFDQUFBO0VBQXVDLG9CQUFBO0VBQXNCLFdBQUE7RUFBYSwwQkFBQTtFQUE0QixnQkFBQTtFQUFrQixtQkFBQTtBQTBCbEk7O0FBekJBO0VBQWdCLHlCQUFBO0VBQTBCLHlCQUFBO0FBOEIxQzs7QUE1QkE7RUFBUSxtQkFBQTtBQWdDUjs7QUEvQkE7RUFDSSxtQkFBQTtBQWtDSjs7QUFoQ0E7RUFBVSx1QkFBQTtBQW9DVjs7QUFuQ0E7RUFBVSx1QkFBQTtBQXVDVjs7QUF0Q0E7RUFDSSwwREFBQTtBQXlDSjs7QUF2Q0E7RUFDQSw2REFBQTtFQUNBLFdBQUE7RUFBWSxlQUFBO0VBQWdCLE9BQUE7RUFBUSxTQUFBO0VBQVUsV0FBQTtFQUFZLGFBQUE7RUFBYyxjQUFBO0VBQWUsVUFBQTtBQWlEdkY7O0FBaERBO0VBQVUsa0JBQUE7RUFDTixXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNKLHNCQUFBO0FBb0RBIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luX2ltZyB7dGV4dC1hbGlnbjogY2VudGVyO21hcmdpbjogNzBweCBhdXRvIDA7fVxuLmxvZ2luX2ltZyBpbWcge21heC13aWR0aDogMTAwJTttYXgtaGVpZ2h0OiAxNDBweDt9XG5cbmlvbi1pY29ue3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxuLmljb257cG9zaXRpb246IGFic29sdXRlOyByaWdodDogMjJweDt0b3A6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7Zm9udC1zaXplOiAxOHB4OyB6LWluZGV4OiA5OyBjb2xvcjogI2U0MmYwODt9XG5pb24taW5wdXR7cGFkZGluZzogM3B4IDQwcHggMnB4IDIwcHggIWltcG9ydGFudDsgYm9yZGVyLXJhZGl1czogMTAwcHg7IGNvbG9yOiAjMzMzOyBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsgbWluLWhlaWdodDogNTBweDsgYmFja2dyb3VuZDogI2RjZWJmZDt9XG5pb24taW5wdXQ6Zm9jdXN7Ym9yZGVyOiBzb2xpZCAxcHggI2U0MmYwODtjb2xvcjogI2U0MmYwOCAhaW1wb3J0YW50O31cblxuaW9uLWNvbHttYXJnaW4tYm90dG9tOiAxMHB4O31cbi5wYWRkaW5nLTE1diB7XG4gICAgbWFyZ2luLWxlZnQ6IDEzLjZ2aDtcbn1cbmlvbi1jaGlwIHtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XG4ubGlzdC1pb3N7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxuLmxvZ2luX3RvcHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luX3RvcC5wbmcpIG5vLXJlcGVhdCByaWdodCB0b3AvNjAlO1xufVxuLmxvZ2luX3RvcDpiZWZvcmV7XG5iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbl9ib3R0b20ucG5nKSBuby1yZXBlYXQgbGVmdCBib3R0b20vNjAlO1xuY29udGVudDogXCJcIjtwb3NpdGlvbjogZml4ZWQ7bGVmdDogMDtib3R0b206IDA7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxNTBweDtkaXNwbGF5OiBibG9jazt6LWluZGV4OiAwO31cbmlvbi1yYWRpb3tib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDIzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbmJvcmRlcjogc29saWQgMXB4ICNjY2M7fSJdfQ== */";

/***/ }),

/***/ 92444:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".login_img {\n  text-align: center;\n  margin: 30px auto 0;\n}\n\n.login_img img {\n  max-width: 100%;\n  max-height: 60px;\n}\n\nion-icon {\n  vertical-align: middle;\n}\n\n.icon {\n  position: absolute;\n  right: 22px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  z-index: 9;\n  color: #e42f08;\n}\n\nion-input, ion-select {\n  padding: 3px 40px 2px 20px !important;\n  border-radius: 100px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n\nion-input:focus {\n  border: solid 1px #e42f08;\n  color: #e42f08 !important;\n}\n\nion-col {\n  margin-bottom: 10px;\n}\n\n.list-ios {\n  background: transparent;\n}\n\n.login_top {\n  --background: url('login_top.png') no-repeat right top/60%;\n}\n\n.login_top:before {\n  background: url('login_bottom.png') no-repeat left bottom/60%;\n  content: \"\";\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 150px;\n  display: block;\n  z-index: 0;\n}\n\nion-checkbox {\n  width: 19px;\n  height: 19px;\n  border-radius: 4px;\n  --border-radius: 4px;\n  --border-color: #107C76;\n}\n\nion-label, ion-item {\n  --border-bottom: none;\n  color: #666;\n  font-size: 13px;\n}\n\ninput {\n  width: 100%;\n  line-height: 42px;\n  padding: 3px 40px 2px 20px !important;\n  border-radius: 100px;\n  color: #333;\n  font-size: 14px !important;\n  min-height: 50px;\n  background: #dcebfd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSxrQkFBQTtFQUFtQixtQkFBQTtBQUcvQjs7QUFGQTtFQUFnQixlQUFBO0VBQWdCLGdCQUFBO0FBT2hDOztBQUxBO0VBQVMsc0JBQUE7QUFTVDs7QUFSQTtFQUFNLGtCQUFBO0VBQW9CLFdBQUE7RUFBWSxRQUFBO0VBQVMsMkJBQUE7RUFBNEIsZUFBQTtFQUFpQixVQUFBO0VBQVksY0FBQTtBQWtCeEc7O0FBakJBO0VBQXNCLHFDQUFBO0VBQXVDLG9CQUFBO0VBQXNCLFdBQUE7RUFBYSwwQkFBQTtFQUE0QixnQkFBQTtFQUFrQixtQkFBQTtBQTBCOUk7O0FBekJBO0VBQWdCLHlCQUFBO0VBQTBCLHlCQUFBO0FBOEIxQzs7QUE1QkE7RUFBUSxtQkFBQTtBQWdDUjs7QUE5QkE7RUFBVSx1QkFBQTtBQWtDVjs7QUFqQ0E7RUFDSSwwREFBQTtBQW9DSjs7QUFsQ0E7RUFDQSw2REFBQTtFQUNBLFdBQUE7RUFBWSxlQUFBO0VBQWdCLE9BQUE7RUFBUSxTQUFBO0VBQVUsV0FBQTtFQUFZLGFBQUE7RUFBYyxjQUFBO0VBQWUsVUFBQTtBQTRDdkY7O0FBMUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUE2Q0o7O0FBM0NFO0VBQW9CLHFCQUFBO0VBQXVCLFdBQUE7RUFBYSxlQUFBO0FBaUQxRDs7QUFoREU7RUFBTSxXQUFBO0VBQVksaUJBQUE7RUFBa0IscUNBQUE7RUFBdUMsb0JBQUE7RUFBc0IsV0FBQTtFQUFhLDBCQUFBO0VBQTRCLGdCQUFBO0VBQWtCLG1CQUFBO0FBMkQ5SiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luX2ltZyB7dGV4dC1hbGlnbjogY2VudGVyO21hcmdpbjogMzBweCBhdXRvIDA7fVxuLmxvZ2luX2ltZyBpbWcge21heC13aWR0aDogMTAwJTttYXgtaGVpZ2h0OiA2MHB4O31cblxuaW9uLWljb257dmVydGljYWwtYWxpZ246IG1pZGRsZTt9XG4uaWNvbntwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAyMnB4O3RvcDogNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtmb250LXNpemU6IDE4cHg7IHotaW5kZXg6IDk7IGNvbG9yOiAjZTQyZjA4O31cbmlvbi1pbnB1dCwgaW9uLXNlbGVjdHtwYWRkaW5nOiAzcHggNDBweCAycHggMjBweCAhaW1wb3J0YW50OyBib3JkZXItcmFkaXVzOiAxMDBweDsgY29sb3I6ICMzMzM7IGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50OyBtaW4taGVpZ2h0OiA1MHB4OyBiYWNrZ3JvdW5kOiAjZGNlYmZkO31cbmlvbi1pbnB1dDpmb2N1c3tib3JkZXI6IHNvbGlkIDFweCAjZTQyZjA4O2NvbG9yOiAjZTQyZjA4ICFpbXBvcnRhbnQ7fVxuXG5pb24tY29se21hcmdpbi1ib3R0b206IDEwcHg7fVxuXG4ubGlzdC1pb3N7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxuLmxvZ2luX3RvcHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luX3RvcC5wbmcpIG5vLXJlcGVhdCByaWdodCB0b3AvNjAlO1xufVxuLmxvZ2luX3RvcDpiZWZvcmV7XG5iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbl9ib3R0b20ucG5nKSBuby1yZXBlYXQgbGVmdCBib3R0b20vNjAlO1xuY29udGVudDogXCJcIjtwb3NpdGlvbjogZml4ZWQ7bGVmdDogMDtib3R0b206IDA7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxNTBweDtkaXNwbGF5OiBibG9jazt6LWluZGV4OiAwO31cblxuaW9uLWNoZWNrYm94IHtcbiAgICB3aWR0aDogMTlweDtcbiAgICBoZWlnaHQ6IDE5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjMTA3Qzc2O1xuICB9XG4gIGlvbi1sYWJlbCwgaW9uLWl0ZW17LS1ib3JkZXItYm90dG9tOiBub25lOyBjb2xvcjogIzY2NjsgZm9udC1zaXplOiAxM3B4O31cbiAgaW5wdXR7d2lkdGg6IDEwMCU7bGluZS1oZWlnaHQ6IDQycHg7cGFkZGluZzogM3B4IDQwcHggMnB4IDIwcHggIWltcG9ydGFudDsgYm9yZGVyLXJhZGl1czogMTAwcHg7IGNvbG9yOiAjMzMzOyBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsgbWluLWhlaWdodDogNTBweDsgYmFja2dyb3VuZDogI2RjZWJmZDt9XG4iXX0= */";

/***/ }),

/***/ 91007:
/*!**************************************************************!*\
  !*** ./src/app/signup/login/login.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n  <ion-content class=\"ion-padding login_top\">\n    <form\n      [formGroup]=\"loginForm\"\n      (ngSubmit)=\"submit(loginForm.valid, loginForm.value)\"\n    >\n      <ion-list>\n        <div class=\"login_img\">\n          <img src=\"../../../assets/images/login_img.png\" />\n        </div>\n        <!-- <h3 class=\"ion-text-center mb30\">Welcome Back!</h3> -->\n\n        <ion-row class=\"mt20 mb20\">\n          <ion-radio-group\n            formControlName=\"userStatus\"\n            mode=\"ios\"\n            (ionChange)=\"changeUserType($event.target)\"\n          >\n            <ion-col size=\"6\">\n              <ion-chip>\n                <ion-radio value=\"audience\" color=\"success\"></ion-radio>\n                <ion-label>Audience</ion-label>\n              </ion-chip>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-chip>\n                <ion-radio value=\"artist\" color=\"success\"></ion-radio>\n                <ion-label>Artist</ion-label>\n              </ion-chip>\n            </ion-col>\n          </ion-radio-group>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" class=\"relative\" *ngIf=\"userStatus == 'audience'\">\n            <ion-input\n              placeholder=\"Username or email\"\n              formControlName=\"userName\"\n            ></ion-input>\n            <ion-icon name=\"person-outline\" class=\"icon\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\" *ngIf=\"userStatus == 'artist'\">\n            <ion-input\n              placeholder=\"Mobile No.\"\n              formControlName=\"mobileNo\"\n            ></ion-input>\n            <ion-icon name=\"phone-portrait-outline\" class=\"icon\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              type=\"password\"\n              placeholder=\"Password\"\n              formControlName=\"password\"\n            ></ion-input>\n            <ion-icon name=\"lock-open-outline\" class=\"icon\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"12\" class=\"mb30\">\n            <button\n              type=\"submit\"\n              [ngStyle]=\"{\n                'background-color': loginForm.invalid ? '#e42f0896' : ''\n              }\"\n              [disabled]=\"loginForm.invalid\"\n            >\n              Login\n            </button>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <p><a href=\"#!\">Forgot Password?</a></p>\n            <p>Don't have an account? <a href=\"#!\">Register</a></p>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </form>\n  </ion-content>\n</ion-app>\n";

/***/ }),

/***/ 31998:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n  <ion-content class=\"ion-padding login_top\">\n    <form\n      [formGroup]=\"signupForm\"\n      (ngSubmit)=\"submit(signupForm.valid, signupForm.value)\"\n      class=\"\"\n    >\n      <ion-list>\n        <div class=\"login_img\">\n          <img src=\"../../../assets/images/logo-white.png\" />\n        </div>\n        <h3 class=\"ion-text-center mb30\">Welcome, Register Now!</h3>\n        <ion-row>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"ArtistName\"\n              name=\"ArtistName\"\n              placeholder=\"Artist Name\"\n              required\n              formControlName=\"ArtistName\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"Mobile\"\n              name=\"Mobile\"\n              placeholder=\"Mobile address\"\n              required\n              formControlName=\"Mobile\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"email\"\n              name=\"email\"\n              placeholder=\"Email address\"\n              required\n              formControlName=\"email\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-select interface=\"popover\" placeholder=\"Select State\">\n              <ion-select-option value=\"apples\">Rajsthan</ion-select-option>\n              <ion-select-option value=\"oranges\"\n                >Uttar Pradesh</ion-select-option\n              >\n              <ion-select-option value=\"bananas\">Maharastra</ion-select-option>\n              <ion-select-option value=\"bananas\"\n                >Madhya Pradesh</ion-select-option\n              >\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"Address\"\n              name=\"Address\"\n              placeholder=\"Address\"\n              required\n              formControlName=\"Address\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-select interface=\"popover\" placeholder=\"Select State\">\n              <ion-select-option value=\"apples\">Rajsthan</ion-select-option>\n              <ion-select-option value=\"oranges\"\n                >Uttar Pradesh</ion-select-option\n              >\n              <ion-select-option value=\"bananas\">Maharastra</ion-select-option>\n              <ion-select-option value=\"bananas\"\n                >Madhya Pradesh</ion-select-option\n              >\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"BlockName\"\n              name=\"BlockName\"\n              placeholder=\"Block Name\"\n              required\n              formControlName=\"BlockName\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-select interface=\"popover\" placeholder=\"Select District\">\n              <ion-select-option value=\"apples\">Indore</ion-select-option>\n              <ion-select-option value=\"oranges\">Gwalior</ion-select-option>\n              <ion-select-option value=\"bananas\">Bhopal</ion-select-option>\n              <ion-select-option value=\"bananas\">Sehore</ion-select-option>\n              <ion-select-option value=\"bananas\">Itarsi</ion-select-option>\n              <ion-select-option value=\"bananas\">Alirajpur</ion-select-option>\n              <ion-select-option value=\"bananas\">Anuppur</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"CityVillage\"\n              name=\"CityVillage\"\n              placeholder=\"City/Village\"\n              required\n              formControlName=\"CityVillage\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"Description\"\n              name=\"Description\"\n              placeholder=\"Description of current working\"\n              required\n              formControlName=\"Description\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"AnyOtherQuality\"\n              name=\"AnyOtherQuality\"\n              placeholder=\"Any Other Quality\"\n              required\n              formControlName=\"AnyOtherQuality\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              id=\"Describeit\"\n              name=\"Describeit\"\n              placeholder=\"Describe it\"\n              required\n              formControlName=\"Describeit\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-list>\n              <ion-item>\n                <ion-checkbox color=\"success\" slot=\"start\"></ion-checkbox>\n                <ion-label> Register Artist of Akashvani </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-label for=\"Akashvani\"\n              >Upload Certificate of Akashvani</ion-label\n            >\n            <input type=\"file\" id=\"Akashvani\" name=\"Akashvani\" />\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-list>\n              <ion-item>\n                <ion-checkbox color=\"success\" slot=\"start\"></ion-checkbox>\n                <ion-label> Register Artist of Doordarshan </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-label for=\"Doordarshan\"\n              >Upload Certificate of Doordarshan</ion-label\n            >\n            <input type=\"file\" id=\"Doordarshan\" name=\"Doordarshan\" />\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-list>\n              <ion-item>\n                <ion-checkbox color=\"success\" slot=\"start\"></ion-checkbox>\n                <ion-label> Register Artist of ICCR </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-label for=\"ICCR\">Upload Certificate of ICCR</ion-label>\n            <input type=\"file\" id=\"ICCR\" name=\"ICCR\" />\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-select interface=\"popover\" placeholder=\"Select Artist Grade\">\n              <ion-select-option value=\"apples\">A+</ion-select-option>\n              <ion-select-option value=\"oranges\">A</ion-select-option>\n              <ion-select-option value=\"bananas\">B+</ion-select-option>\n              <ion-select-option value=\"bananas\">B</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              type=\"password\"\n              name=\"password\"\n              placeholder=\"Password\"\n              required\n              formControlName=\"password\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              type=\"ConfirmPassword\"\n              name=\"ConfirmPassword\"\n              placeholder=\"Confirm Password\"\n              required\n              formControlName=\"ConfirmPassword\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"Artist Education Category\"\n            >\n              <ion-select-option value=\"apples\">A+</ion-select-option>\n              <ion-select-option value=\"oranges\">A</ion-select-option>\n              <ion-select-option value=\"bananas\">B+</ion-select-option>\n              <ion-select-option value=\"bananas\">B</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"Artist Education SubCategory\"\n            >\n              <ion-select-option value=\"apples\">A+</ion-select-option>\n              <ion-select-option value=\"oranges\">A</ion-select-option>\n              <ion-select-option value=\"bananas\">B+</ion-select-option>\n              <ion-select-option value=\"bananas\">B</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-input\n              type=\"ConfirmPassword\"\n              name=\"ConfirmPassword\"\n              placeholder=\"About Artist\"\n              required\n              formControlName=\"ConfirmPassword\"\n            ></ion-input>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"relative\">\n            <ion-list>\n              <ion-item>\n                <ion-checkbox color=\"success\" slot=\"start\"></ion-checkbox>\n                <ion-label>\n                  By Signing up it is not assured to get the work from ministry\n                  of culture\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\" class=\"mb30\">\n            <button type=\"submit\" [disabled]=\"signupForm.invalid\">Save</button>\n          </ion-col>\n          <ion-col size=\"6\" class=\"mb30\">\n            <button\n              class=\"cancel\"\n              type=\"submit\"\n              [disabled]=\"signupForm.invalid\"\n            >\n              Cancel\n            </button>\n          </ion-col>\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <p>Already have an account? <a href=\"#!\">Login</a></p>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </form>\n  </ion-content>\n</ion-app>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map