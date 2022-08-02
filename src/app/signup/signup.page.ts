import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage implements OnInit {
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      userName: ["", Validators.required],
      email: ["", Validators.email],
      password: ["", Validators.required]
    });
  }

  submit(isValid: boolean, formValue: any): void {
    console.log("form obj", isValid, formValue);
  }
}
