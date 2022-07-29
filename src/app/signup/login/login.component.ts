import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiServiceService } from "../../service/api-service.service";
import { UtilServiceService } from "../../service/util-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  clientReady: boolean;
  constructor(
    private apiService: ApiServiceService,
    private utilService: UtilServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription();
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    });
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
    const formObj = {
      UserName: formValue.userName,
      Password: formValue.password
    };
    console.log("isvalid", isValid, formObj);
    this.apiService.userLogin(formObj).subscribe((res: any) => {
      console.log("login res", res);
    });
    // this.router.navigate(["home"]);
  }
}
