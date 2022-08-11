import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LocalStorageService } from "src/app/service/local-storage.service";
import { UtilService } from "src/app/service/util-service.service";
import { ApiServiceService } from "../../service/api-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  clientReady: boolean;
  userStatus: string = "audience";
  constructor(
    private apiService: ApiServiceService,
    private utilService: UtilService,
    private fb: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.subscription();
    this.loginForm = this.fb.group({
      userStatus: ["audience"],
      password: ["", Validators.required],
      mobileNo: ["", [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  subscription(): void {
    this.apiService.clientState().subscribe((ready) => {
      if (ready) {
        this.clientReady = true;
      }
    });
  }

  changeUserType(evt: any): void {
    const userType = (this.userStatus = evt.value);
    console.log("user type", userType);
    if (userType == "artist") {
      this.loginForm.controls["mobileNo"].setValidators([Validators.required]);
      this.loginForm.get("mobileNo").updateValueAndValidity();
      this.loginForm.controls["userName"].clearValidators();
      this.loginForm.get("userName").updateValueAndValidity();
    } else {
      this.loginForm.controls["userName"].setValidators([Validators.required]);
      this.loginForm.get("userName").updateValueAndValidity();
      this.loginForm.controls["mobileNo"].clearValidators();
      this.loginForm.get("mobileNo").updateValueAndValidity();
    }
  }

  submit(isValid: boolean, formValue: any) {
    if (!isValid || !this.clientReady) return;
    const userType = this.loginForm.controls.userStatus.value;
    userType == "audience" ? this.audienceLogin(formValue) : this.artistLogin(formValue);
  }

  audienceLogin(formValue: any) {
    const formObj = {
      UserName: formValue.userName,
      Password: formValue.password
    };
    console.log("audience obj", formObj);
    this.apiService.userLogin(formObj).subscribe(
      (res) => {
        console.log("user logged-in", res);
        if (res.result == "success") {
          const {
            userid = "",
            usertype = "",
            username = "",
            departmentid = "",
            userfullname = ""
          } = res;
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
        } else {
          this.utilService.presentToast(res.message);
        }
      },
      (error) => {
        console.log("User could not logged-in", error);
        this.utilService.dismissLoading();
      }
    );
  }

  artistLogin(formValue: any) {
    const formObj = {
      MobileNo: formValue.mobileNo,
      Password: formValue.password
    };
    console.log("artist obj", formObj);
    this.apiService.artistLogin(formObj).subscribe(
      (res) => {
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
        } else {
          this.utilService.presentToast(res.message);
        }
      },
      (error) => {
        console.log("User could not logged-in", error);
        this.utilService.dismissLoading();
      }
    );
  }
}
