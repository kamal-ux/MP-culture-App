import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiServiceService } from "src/app/service/api-service.service";
import { LocalStorageService } from "src/app/service/local-storage.service";
import { StoreService } from "src/app/service/store.service";
import { UtilService } from "src/app/service/util-service.service";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"]
})
export class RatingComponent implements OnInit {
  ratingForm!: FormGroup;
  rate = 0;

  ratingObj = [
    { index: 1, active: false, text: "I just hate it" },
    { index: 2, active: false, text: "I don't like it" },
    { index: 3, active: false, text: "It is awesome" },
    { index: 4, active: false, text: "I just like it" },
    { index: 5, active: false, text: "I just love it" }
  ];

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private utilService: UtilService,
    private router: Router,
    private apiService: ApiServiceService,
    private storeService: StoreService
  ) {}

  async ngOnInit() {
    this.ratingForm = this.fb.group({
      ProgramId: [""],
      rate: [null, Validators.required],
      review: ["", Validators.required],
      AudienceId: [""]
    });
    const programDetails = this.router?.getCurrentNavigation()?.extras?.state;
    const { ProgramId = "" } = programDetails;

    const { AudienceId = "" } = (await this.localStorageService.get("audienceData")) || {};
    console.log("program details", ProgramId);

    this.ratingForm.patchValue({
      AudienceId,
      ProgramId
    });
  }
  async ionViewWillEnter() {}

  doRate(index: number): void {
    console.log(index);
    if (index <= this.ratingObj.length) {
      for (let i = 0; i <= index; ++i) {
        this.ratingObj[i].active = true;
      }
      for (let j = index + 1; j < this.ratingObj.length; ++j) {
        this.ratingObj[j].active = false;
      }
    }
    this.rate = index;
    this.ratingForm.controls["rate"].setValue(index + 1);
    console.log(this.ratingObj[index].active);
  }
  submit(isValid: boolean, formValue: any) {
    if (!formValue.AudienceId) {
      this.utilService.presentToast("Please login first for rating.");
      return;
    }
    if (!isValid) return;
    const formObj = {
      ProgramId: formValue.ProgramId,
      AudienceId: formValue.AudienceId,
      Rating: formValue.rate,
      Review: formValue.review
    };
    console.log("form obj", formObj);
    this.utilService.presentLoading("Please wait...");
    this.apiService.InsertProgramRatingReviewByAudienceId(formObj).subscribe((res: any) => {
      console.log("rating done", res);
      if (res.result == "success") {
        this.utilService.presentToast(res.message);
        this.storeService.setRatingData(true);
        this.router.navigate(["tabs/home/programDetails"], {
          state: formObj
        });
      } else {
        this.utilService.presentToast(res.message);
      }
      this.utilService.dismissLoading();
    });
  }
}
