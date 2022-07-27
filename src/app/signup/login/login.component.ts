import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiServiceService } from "../../service/api-service.service";
import { UtilServiceService } from "../../service/util-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private apiService: ApiServiceService,
    private utilService: UtilServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  submit(isValid: boolean, formValue: any) {
    if (!isValid) return;
    const formObj = {
      userName: formValue.userName,
      password: formValue.password,
    };
    this.apiService.userLogin(formObj).subscribe(
      (res) => {
        console.log("user logged-in", res);
        this.utilService.dismissLoading();
      },
      (error) => {
        console.log("User could not logged-in", error);
        this.utilService.dismissLoading();
      }
    );
    console.log("isvalid", isValid, formObj);
    this.router.navigate(["home"]);
  }
}
