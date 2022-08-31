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
      password: ["", [Validators.required]],
      mobileNo: ["", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
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
    return;
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

  password_check() {
    const pass = this.loginForm.get("password").value;
    console.log(pass);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.exec(pass) == null) {
      this.loginForm.controls["password"].setErrors({ error: true });
    } else {
      this.loginForm.get("password").clearValidators();
    }
  }

  submit(isValid: boolean, formValue: any) {
    if (!isValid || !this.clientReady) return;
    const userType = this.loginForm.controls.userStatus.value;
    userType == "audience" ? this.audienceLogin(formValue) : this.artistLogin(formValue);
  }

  audienceLogin(formValue: any) {
    const formObj = {
      MobileNo: formValue.mobileNo,
      Password: formValue.password
    };
    console.log("audience obj", formObj);
    this.apiService.audienceLogin(formObj).subscribe(
      (res) => {
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
          this.utilService.presentToast("Logged In successfully");
          this.loginForm.reset();
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

  goToRegisterPage(): void {
    this.loginForm.reset();
  }
}
