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
      ArtistName: [],
      Mobile: [],
      email: [],
      Address: [],
      BlockName: [],
      CityVillage: [],
      Description: [],
      AnyOtherQuality: [],
      Describeit: [],
      ConfirmPassword: [],

      userName: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  submit(isValid: boolean, formValue: any): void {
    console.log("form obj", isValid, formValue);
  }
}
