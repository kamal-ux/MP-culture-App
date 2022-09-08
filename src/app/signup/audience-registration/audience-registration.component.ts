import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController, Platform } from "@ionic/angular";
import { ApiServiceService } from "src/app/service/api-service.service";
import { LocalStorageService } from "src/app/service/local-storage.service";
import { StoreService } from "src/app/service/store.service";
import { UtilService } from "src/app/service/util-service.service";
import * as language from "../../../assets/app-data.json";

@Component({
  selector: "app-audience-registration",
  templateUrl: "./audience-registration.component.html",
  styleUrls: ["./audience-registration.component.scss"]
})
export class AudienceRegistrationComponent implements OnInit {
  signupForm!: FormGroup;
  signupType = "artist";
  artistRegisterClientReady: boolean;
  language: any = (language as any).default;
  mode: boolean;
  @Input() isEnglish!: boolean;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiServiceService,
    private utilService: UtilService,
    private router: Router,
    private localStorage: LocalStorageService,
    private platform: Platform,
    private storeService: StoreService
  ) {}

  async ngOnInit() {
    console.log("language", this.language);
    this.signupForm = this.fb.group(
      {
        FullName: ["", [Validators.required]],
        MobileNo: ["", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
        Password: ["", [Validators.required, Validators.minLength(6)]],
        ConfirmPassword: ["", [Validators.required]]
      },
      { validator: this.passwordMatchValidator }
    );
    this.mode = (await this.localStorage.get("mode")) || false;
    this.isEnglish = (await this.localStorage.get("isEnglish")) || false;

    this.apiService.artistRegisterClientState().subscribe((ready) => {
      if (ready) {
        this.artistRegisterClientReady = true;
        this.getArtistRegisterRequirement();
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["isEnglish"] && changes.isEnglish.currentValue) {
      this.isEnglish = changes.isEnglish.currentValue;
    }
  }

  async ionViewWillEnter() {
    this.isEnglish = (await this.localStorage.get("isEnglish")) || false;
    console.log("is english", this.isEnglish);
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

  password_check() {
    const pass = this.signupForm.get("Password").value;
    console.log(pass);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.exec(pass) == null) {
      this.signupForm.controls["Password"].setErrors({ error: true });
    } else {
      this.signupForm.get("Password").clearValidators();
    }
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
    this.utilService.presentLoading("Please wait...");
    this.apiService.doAudienceRegister(formObj).subscribe((res: any) => {
      console.log("audience register", res);
      this.utilService.dismissLoading();
      this.storeService.setIsLoggedIn(true);

      res.result == "failure" && this.utilService.presentToast(res.message);
      if (res.result == "success") {
        this.utilService.presentToast("Registered successfully!");
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

  goToLoginPage(): void {
    this.signupForm.reset();
  }
}
