import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiServiceService } from "../../service/api-service.service";
import { UtilServiceService } from "../../service/util-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private apiService: ApiServiceService,
    private utilService: UtilServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  submit(isValid: boolean, formValue: any) {
    if (!isValid) return;
    const formObj = {
      userName: formValue.userName,
      password: formValue.password
    };
    console.log("isvalid", isValid, formObj);
  }
}
