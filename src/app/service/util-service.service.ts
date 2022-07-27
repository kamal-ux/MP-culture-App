import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class UtilServiceService {
  constructor(private modalCtrl: LoadingController) {}

  async presentLoader() {
    let loader = await this.modalCtrl.create({
      message: "Please wait",
    });
    await loader.present();
  }

  async dismissLoading() {
    this.modalCtrl.dismiss();
  }
}
