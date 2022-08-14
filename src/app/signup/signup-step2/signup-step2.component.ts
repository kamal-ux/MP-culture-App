import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-signup-step2",
  templateUrl: "./signup-step2.component.html",
  styleUrls: ["./signup-step2.component.scss"]
})
export class SignupStep2Component implements OnInit {
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      ArtistName: ["kamal sharma", [Validators.required]],
      MobileNo: [
        "9616167946",
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      ],
      Password: ["qwertyPassword@123", [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ["qwertyPassword@123", [Validators.required]]
    });
  }

  submit(isValid: boolean, formValue: any) {}
}
