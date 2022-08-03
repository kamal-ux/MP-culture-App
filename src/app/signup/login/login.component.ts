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
      userName: [""],
      password: ["", Validators.required],
      mobileNo: [""]
    });
  }

  changeUserType(evt: any): void {
    console.log("evt value", evt.target.value);
    const userStatus = (this.userStatus = evt.target.value);
  }

  subscription(): void {
    this.apiService.clientState().subscribe((ready) => {
      if (ready) {
        this.clientReady = true;
      }
    });
  }

  submit(isValid: boolean, formValue: any) {
    if (!isValid || !this.clientReady) return;
    console.log("login type", this.userStatus);

    if (this.userStatus == "audience") {
      this.audienceLogin(formValue);
    } else {
      this.artistLogin(formValue);
    }
  }

  audienceLogin(formValue: any) {
    const formObj = {
      UserName: formValue.userName,
      Password: formValue.password
    };
    console.log("form obj", formObj);
    this.apiService.userLogin(formObj).subscribe(
      (res) => {
        console.log("user logged-in", res);
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
        this.utilService.dismissLoading();
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
    console.log("form obj", formObj);
    this.apiService.artistLogin(formObj).subscribe(
      (res) => {
        console.log("artist logged-in", res);
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
      },
      (error) => {
        console.log("User could not logged-in", error);
        this.utilService.dismissLoading();
      }
    );
  }
}
