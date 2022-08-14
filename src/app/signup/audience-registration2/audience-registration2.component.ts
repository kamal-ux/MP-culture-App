import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { ApiServiceService } from "src/app/service/api-service.service";
import { LocalStorageService } from "src/app/service/local-storage.service";
import { UtilService } from "src/app/service/util-service.service";

@Component({
  selector: "app-audience-registration2",
  templateUrl: "./audience-registration2.component.html",
  styleUrls: ["./audience-registration2.component.scss"]
})
export class AudienceRegistration2Component implements OnInit {
  signupForm!: FormGroup;
  artistRegisterClientReady: boolean;
  districtArr: any;
  audienceId: any;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiServiceService,
    private router: Router,
    private localStorage: LocalStorageService,
    private utilService: UtilService
  ) {}

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
      EmailId: ["", Validators.email],
      Address: [""],
      CityName: [""],
      Country: ["India"],
      DistrictId: [9],
      StateId: [0],
      DateOfBirth: ["", Validators.nullValidator],
      Age: [""],
      NotificationRequired: ["email"],
      EmailNotificationRequired: [""],
      MobileNotificationRequired: [""]
    });
    // this.signupForm.controls.MobileNo.disable();
  }

  async ionViewWillEnter() {
    const { FullName, MobileNo, AudienceId } = await this.localStorage.get("audienceData");
    this.audienceId = AudienceId;
    this.signupForm.patchValue({
      FullName,
      MobileNo
    });
    this.signupForm.controls.DateOfBirth.valueChanges.subscribe((res: any) => {
      console.log("date birth", res);
      const dateOfBirth = res.year + "-" + res.month + "-" + res.day;
      this.signupForm.controls.Age.setValue(this.calculateAge(dateOfBirth));
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
        this.utilService.presentToast("Successfull registered") &&
        this.router.navigate([""]);
    });
    console.log("form obj", isValid, formObj);
  }
}
