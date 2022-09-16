import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { ApiServiceService } from "../service/api-service.service";
import { LocalStorageService } from "../service/local-storage.service";
import { UtilService } from "../service/util-service.service";
import * as _ from "lodash";
@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  mode: boolean;
  isLanguage: boolean;
  language: string = "hindi";
  isDefaultLanguage: boolean = false;
  settingsClientReady: boolean = false;
  EmailNotificationRequired: boolean;
  MobileNotificationRequired: boolean;
  audienceId: any;
  isNotificationChange: boolean = true;
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private localStorageService: LocalStorageService,
    private apiService: ApiServiceService,
    private utilService: UtilService
  ) {}

  async ngOnInit() {
    // this.mode = (await this.localStorageService.get("mode")) || false;
    // console.log("mode", this.mode);
    // this.apiService.settingsClientState().subscribe(async (ready) => {
    //   if (ready) {
    //     this.settingsClientReady = true;
    //     const { AudienceId = "" } = (await this.localStorageService.get("audienceData")) || "";
    //     this.audienceId = AudienceId;
    //     !_.isEmpty(this.audienceId) && this.loadRequirementForSettings(AudienceId);
    //   }
    // });
  }

  async ionViewWillEnter() {
    this.EmailNotificationRequired =
      (await this.localStorageService.get("EmailNotificationRequired")) || false;
    this.MobileNotificationRequired =
      (await this.localStorageService.get("MobileNotificationRequired")) || false;
    this.mode = (await this.localStorageService.get("mode")) || false;
    this.isLanguage = (await this.localStorageService.get("isEnglish")) || false;
    console.log("mode", this.mode);
    this.apiService.settingsClientState().subscribe(async (ready) => {
      if (ready) {
        this.settingsClientReady = true;
        const { AudienceId = "" } = (await this.localStorageService.get("audienceData")) || "";
        this.audienceId = AudienceId;
        !_.isEmpty(this.audienceId) && this.loadRequirementForSettings(AudienceId);
      }
    });
  }

  loadRequirementForSettings(AudienceId): void {
    const audienceData = { AudienceId };
    console.log("audience data", audienceData);
    this.apiService.loadSettingsData(audienceData).subscribe((notification: any) => {
      console.log("settings requirement", notification);
      const { EmailNotificationRequired = false, MobileNotificationRequired = false } =
        notification[0] || {};
      this.isNotificationChange = false;
      this.EmailNotificationRequired = EmailNotificationRequired;
      this.MobileNotificationRequired = MobileNotificationRequired;
    });
  }

  onToggleColorTheme(event): void {
    this.localStorageService.set("mode", event.target.checked);
    if (event.target.checked) {
      this.renderer.setAttribute(document.body, "color-theme", "dark");
    } else {
      this.renderer.setAttribute(document.body, "color-theme", "light");
    }
  }

  emailNotificationChange(): void {
    if (this.EmailNotificationRequired && !this.MobileNotificationRequired) {
      this.EmailNotificationRequired = !this.EmailNotificationRequired;
      return;
    }
    const settings = {
      AudienceId: this.audienceId,
      EmailNotificationRequired: !this.EmailNotificationRequired,
      SMSNotificationRequired: this.MobileNotificationRequired
    };
    this.changeStatus(settings);
  }
  smsNotificationChange(): void {
    if (!this.EmailNotificationRequired && this.MobileNotificationRequired) {
      this.MobileNotificationRequired = !this.MobileNotificationRequired;
      return;
    }
    const settings = {
      AudienceId: this.audienceId,
      EmailNotificationRequired: this.EmailNotificationRequired,
      SMSNotificationRequired: !this.MobileNotificationRequired
    };
    this.changeStatus(settings);
  }

  changeStatus(settings): void {
    this.apiService.changeSettings(settings).subscribe((res: any) => {
      console.log(res);
      this.localStorageService.set("EmailNotificationRequired", settings.EmailNotificationRequired);
      this.localStorageService.set("MobileNotificationRequired", settings.SMSNotificationRequired);
      if (res.result == "success" && res.message) {
        this.utilService.presentToast(res.message);
      } else {
        this.utilService.presentToast(res.message);
      }
    });
  }

  notificationChange(): void {
    console.log("sms", !this.MobileNotificationRequired);
    console.log("sms email", !this.EmailNotificationRequired);
    return;
    const settings = {
      AudienceId: this.audienceId,
      EmailNotificationRequired: this.EmailNotificationRequired,
      SMSNotificationRequired: this.MobileNotificationRequired
    };
    if (!this.audienceId) {
      this.utilService.presentToast("Please login first to change notification settings.");
      return;
    }
    if (!this.EmailNotificationRequired && !this.MobileNotificationRequired) {
      this.utilService.presentToast("Please select atleast one mode of notification.");
      return;
    }
    this.apiService.changeSettings(settings).subscribe((res: any) => {
      console.log(res);
      this.localStorageService.set("EmailNotificationRequired", this.EmailNotificationRequired);
      this.localStorageService.set("MobileNotificationRequired", this.MobileNotificationRequired);
      if (res.result == "success" && res.message) {
        this.utilService.presentToast(res.message);
      } else {
        this.utilService.presentToast(res.message);
      }
    });
  }

  languageSwitcher(event): any {
    if (event.target.checked) {
      this.language = "english";
      this.localStorageService.set("isEnglish", true);
    } else {
      this.language = "hindi";
      this.localStorageService.set("isEnglish", false);
    }
  }

  navigateToHome() {
    this.router.navigate([""]);
  }
}
