import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { ApiServiceService } from "src/app/service/api-service.service";
import { LocalStorageService } from "src/app/service/local-storage.service";
import { UtilService } from "src/app/service/util-service.service";
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
  NgbInputDatepickerConfig
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-audience-registration2",
  templateUrl: "./audience-registration2.component.html",
  styleUrls: ["./audience-registration2.component.scss"],
  providers: [NgbInputDatepickerConfig]
})
export class AudienceRegistration2Component implements OnInit {
  model: NgbDateStruct;
  signupForm!: FormGroup;
  artistRegisterClientReady: boolean;
  districtArr: any;
  audienceId: any;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiServiceService,
    private router: Router,
    private localStorage: LocalStorageService,
    private utilService: UtilService,
    config: NgbInputDatepickerConfig,
    calendar: NgbCalendar
  ) {
    // customize default values of datepickers used by this component tree
    config.minDate = { year: 1900, month: 1, day: 1 };
    config.maxDate = { year: 2099, month: 12, day: 31 };

    // days that don't belong to current month are not visible
    config.outsideDays = "hidden";

    // weekends are disabled
    config.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;

    // setting datepicker popup to close only on click outside
    config.autoClose = "outside";

    // setting datepicker popup to open above the input
    config.placement = ["top-start", "top-end"];
  }

  ngOnInit() {
    this.apiService.artistRegisterClientState().subscribe((ready) => {
      if (ready) {
        this.artistRegisterClientReady = true;
        this.getArtistRegisterRequirement();
      }
    });
    this.signupForm = this.fb.group({
      FullName: ["", Validators.required],
      MobileNo: [""],
      EmailId: ["", [Validators.email, Validators.required]],
      Address: [""],
      CityName: [""],
      Country: ["India"],
      DistrictId: [9],
      StateId: [0],
      DateOfBirth: ["", Validators.nullValidator],
      Age: [""],
      NotificationRequired: ["email"],
      EmailNotificationRequired: [""],
      MobileNotificationRequired: [""],
      iAgree: [false]
    });
    // this.signupForm.controls.MobileNo.disable();
  }

  async ionViewWillEnter() {
    const {
      FullName = "",
      MobileNo = "",
      AudienceId = ""
    } = await this.localStorage.get("audienceData");
    console.log("Mobile number", MobileNo);
    this.audienceId = AudienceId;
    this.signupForm.patchValue({
      FullName,
      MobileNo
    });
    this.signupForm.controls.DateOfBirth.valueChanges.subscribe((res: any) => {
      console.log("date birth", res);
      this.signupForm.controls.Age.setValue(this.calculateAge(res));
    });
  }

  public getArtistRegisterRequirement(): void {
    this.apiService.getArtistRegisterRequirement().subscribe((res: any) => {
      console.log("requiremtn payload", res);
      this.districtArr = res.dropdowndata.district;
    });
  }

  calculateAge(birthday) {
    // birthday is a date
    var ageDifMs = Date.now() - new Date(birthday).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  calculateMonth(month) {
    switch (month) {
      case 0: {
        return "January";
        break;
      }
      case 1: {
        return "February";
        break;
      }
      case 2: {
        return "March";
        break;
      }
      case 3: {
        return "April";
        break;
      }
      case 4: {
        return "May";
        break;
      }
      case 5: {
        return "June";
        break;
      }
      case 6: {
        return "July";
        break;
      }
      case 7: {
        return "August";
        break;
      }
      case 8: {
        return "September";
        break;
      }
      case 9: {
        return "October";
        break;
      }
      case 10: {
        return "November";
        break;
      }
      case 11: {
        return "December";
        break;
      }
      default: {
        return "January";
        break;
      }
    }
  }

  submit(isValid: boolean, formValue: any): void {
    if (!isValid || !this.artistRegisterClientReady) return;
    const formObj = {
      AudienceId: this.audienceId,
      FullName: formValue.FullName,
      EmailId: formValue.EmailId,
      Address: formValue.Address,
      CityName: formValue.CityName,
      DistrictId: formValue.DistrictId,
      ProfilePhoto: "",
      ProfilePhotoName: "",
      StateId: formValue.StateId,
      Gender: "",
      DateOfBirth:
        formValue.DateOfBirth.year +
        "-" +
        this.calculateMonth(formValue.DateOfBirth.month) +
        "-" +
        formValue.DateOfBirth.day,
      EmailNotificationRequired: formValue.NotificationRequired == "email" ? true : false,
      MobileNotificationRequired: formValue.NotificationRequired == "sms" ? true : false
    };

    this.apiService.doAudienceProfileUpdate(formObj).subscribe((res: any) => {
      console.log("audience profile updated", res);
      res.result == "failure" && this.utilService.presentToast(res.message);
      res.result == "success" &&
        this.localStorage.set("audienceData", formObj) &&
        this.utilService.presentToast("Successfull registered") &&
        this.router.navigate([""]);
    });
    console.log("form obj", isValid, formObj);
  }
}
