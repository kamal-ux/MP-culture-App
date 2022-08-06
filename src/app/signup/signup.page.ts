import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiServiceService } from "../service/api-service.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage implements OnInit {
  signupForm!: FormGroup;
  artistRegisterClientReady: boolean;
  constructor(private fb: FormBuilder, private apiService: ApiServiceService) {}

  ngOnInit() {
    this.apiService.artistRegisterClientState().subscribe((ready) => {
      if (ready) {
        this.artistRegisterClientReady = true;
        this.getArtistRegisterRequirement();
      }
    });
    this.signupForm = this.fb.group({
      ArtistName: ["art"],
      MobileNo: ["120"],
      EmailId: ["emailId"],
      Address: ["Address"],
      DateOfBirth: [""],
      DistrictId: ["districid"],
      StateId: ["stateId"],
      BlockName: ["BlockName"],
      CityName: ["CityName"],
      DescriptionOfCurrentWorking: ["DescriptionOfCurrentWorking"],
      OtherQualityName: ["OtherQualityName"],
      OtherQualityDescription: ["OtherQualityDescription"],
      ConfirmPassword: ["ConfirmPassword"],
      IsRegisteredArtistOfDoordarshan: ["IsRegisteredArtistOfDoordarshan"],
      SupportCertificatePhotoAkasvani: [""],
      IsRegisteredArtistOfAkasvani: [0],
      SupportCertificatePhotoDoordarshan: [""],
      SupportCertificatePhotoNameDoordarshan: ["SupportCertificatePhotoNameDoordarshan"],
      SupportCertificatePhotoICCR: [""],
      SupportCertificatePhotoNameAkasvani: [""],
      SupportCertificatePhotoNameICCR: ["SupportCertificatePhotoNameICCR"],
      IsRegisteredArtistOfICCR: ["IsRegisteredArtistOfICCR"],
      ArtistGrade: ["ArtistGrade"],
      AboutArtist: ["AboutArtist"],
      userName: ["userName", Validators.required],
      password: ["password", Validators.required],
      pKey: ["pKey"],
      CreatedThough: ["CreatedThough"]
    });
  }

  public getArtistRegisterRequirement(): void {
    this.apiService.getArtistRegisterRequirement().subscribe((res: any) => {
      console.log("requiremtn payload", res);
    });
  }

  submit(isValid: boolean, formValue: any): void {
    if (!isValid || !this.artistRegisterClientReady) return;
    const formObj = {
      ArtistName: formValue.ArtistName,
      MobileNo: formValue.MobileNo,
      EmailId: formValue.EmailId,
      Address: formValue.Address,
      CityName: formValue.CityName,
      BlockName: formValue.BlockName,
      DistrictId: formValue.DistrictId,
      StateId: formValue.StateId,
      DateOfBirth: formValue.DateOfBirth,
      DescriptionOfCurrentWorking: formValue.DescriptionOfCurrentWorking,
      OtherQualityName: formValue.OtherQualityName,
      OtherQualityDescription: formValue.OtherQualityDescription,
      IsRegisteredArtistOfAkasvani: formValue.IsRegisteredArtistOfAkasvani,
      IsRegisteredArtistOfDoordarshan: formValue.IsRegisteredArtistOfDoordarshan,
      IsRegisteredArtistOfICCR: formValue.IsRegisteredArtistOfICCR,
      SupportCertificatePhotoAkasvani: formValue.SupportCertificatePhotoAkasvani,
      SupportCertificatePhotoNameAkasvani: formValue.SupportCertificatePhotoNameAkasvani,
      SupportCertificatePhotoDoordarshan: formValue.SupportCertificatePhotoDoordarshan,
      SupportCertificatePhotoNameDoordarshan: formValue.SupportCertificatePhotoNameDoordarshan,
      SupportCertificatePhotoICCR: formValue.SupportCertificatePhotoICCR,
      SupportCertificatePhotoNameICCR: formValue.SupportCertificatePhotoNameICCR,
      ArtistGrade: formValue.ArtistGrade,
      AboutArtist: formValue.AboutArtist,
      Password: formValue.password,
      Pkey: 0,
      CreatedThough: formValue.CreatedThough
    };

    console.log("form obj", isValid, formObj);
  }
}
