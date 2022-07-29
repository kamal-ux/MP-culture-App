import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";
// import * as soap from "soap";
@Injectable({
  providedIn: "root"
})
export class UtilServiceService {
  constructor(private modalCtrl: LoadingController) {
    // soap.createClient("webservice.fiService.solyn.in", {}, function (err, client) {
    //   console.log("client", client);
    // });
  }

  async presentLoader() {
    let loader = await this.modalCtrl.create({
      message: "Please wait"
    });
    await loader.present();
  }

  async dismissLoading() {
    this.modalCtrl.dismiss();
  }
}
