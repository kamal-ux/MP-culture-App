import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { ApiServiceService } from "../service/api-service.service";
import { LocalStorageService } from "../service/local-storage.service";
import { UtilService } from "../service/util-service.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage implements OnInit {
  signupForm!: FormGroup;
  signupType = "audience";
  artistRegisterClientReady: boolean;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiServiceService,
    private utilService: UtilService,
    private localStorage: LocalStorageService,
    private platform: Platform,
    private router: Router
  ) {}

  ngOnInit() {
    this.apiService.artistRegisterClientState().subscribe((ready) => {
      if (ready) {
        this.artistRegisterClientReady = true;
        this.getArtistRegisterRequirement();
      }
    });
    this.signupForm = this.fb.group(
      {
        ArtistName: ["", [Validators.required]],
        MobileNo: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        Password: ["", [Validators.required, Validators.minLength(6)]],
        ConfirmPassword: ["", [Validators.required]]
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get("Password").value === g.get("ConfirmPassword").value ? null : { mismatch: true };
  }

  public getArtistRegisterRequirement(): void {
    this.apiService.getArtistRegisterRequirement().subscribe((res: any) => {
      console.log("requiremtn payload", res);
    });
  }

  toggleStatus(status: any) {
    return;
    this.signupType = status;
  }

  imgTobase64(element) {
    console.log("element", element.files);
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
    };
    return reader.readAsDataURL(file);
  }

  submit(isValid: boolean, formValue: any): void {
    if (!isValid || !this.artistRegisterClientReady) return;
    const formObj = {
      FullName: formValue.ArtistName,
      MobileNo: formValue.MobileNo,
      Password: formValue.Password,
      CreatedThrough: this.platform.is("android") ? "ANDROID" : "IOS"
    };
    const { FullName, MobileNo, Password, CreatedThrough } = formObj;

    console.log("form obj", isValid, formObj);
    this.apiService.doArtistRegister(formObj).subscribe((res: any) => {
      console.log("artist register", res);
      res.result == "failure" && this.utilService.presentToast(res.message);
      if (res.result == "success") {
        this.localStorage.set("artistData", {
          FullName,
          MobileNo,
          Password,
          CreatedThrough,
          ArtistId: res.ArtistId
        });
        this.signupForm.reset();
        this.router.navigate(["signup/signup/artistSignup"]);
      }
    });
  }
}
