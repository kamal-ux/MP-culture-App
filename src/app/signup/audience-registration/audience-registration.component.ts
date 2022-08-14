import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController, Platform } from "@ionic/angular";
import { ApiServiceService } from "src/app/service/api-service.service";
import { LocalStorageService } from "src/app/service/local-storage.service";
import { UtilService } from "src/app/service/util-service.service";

@Component({
  selector: "app-audience-registration",
  templateUrl: "./audience-registration.component.html",
  styleUrls: ["./audience-registration.component.scss"]
})
export class AudienceRegistrationComponent implements OnInit {
  signupForm!: FormGroup;
  signupType = "artist";
  artistRegisterClientReady: boolean;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiServiceService,
    private utilService: UtilService,
    private router: Router,
    private localStorage: LocalStorageService,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        FullName: ["", [Validators.required]],
        MobileNo: ["", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
        Password: ["", [Validators.required, Validators.minLength(6)]],
        ConfirmPassword: ["", [Validators.required]]
      },
      { validator: this.passwordMatchValidator }
    );
    this.apiService.artistRegisterClientState().subscribe((ready) => {
      if (ready) {
        this.artistRegisterClientReady = true;
        this.getArtistRegisterRequirement();
      }
    });
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
      FullName: formValue.FullName,
      MobileNo: formValue.MobileNo,
      Password: formValue.Password,
      CreatedThrough: this.platform.is("android") ? "ANDROID" : "IOS"
    };
    const { FullName, MobileNo, Password, CreatedThrough } = formObj;
    console.log("form obj", isValid, formObj);
    this.apiService.doAudienceRegister(formObj).subscribe((res: any) => {
      console.log("audience register", res);
      res.failed && this.utilService.presentToast(res.message);
      if (res.result == "success") {
        this.localStorage.set("audienceData", {
          FullName,
          MobileNo,
          Password,
          CreatedThrough,
          AudienceId: res.AudienceId
        });
        this.signupForm.reset();

        this.router.navigate(["signup/signup/audienceSignup2"]);
      }
    });
  }
}
