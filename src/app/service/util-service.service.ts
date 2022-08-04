import { Injectable } from "@angular/core";
import { AlertController, ToastController, LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class UtilService {
  alert: any;
  toast: any;
  loading: any;
  header: any = {
    "Content-Type": "application/json"
  };
  isLoading: any = false;
  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  async basicAlert(header: string, message: string, buttons: any) {
    this.alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header,
      message,
      buttons
    });
    this.alert.present();
  }

  async presentToast(message: string, duration: number = 1500) {
    this.toast ? this.toast.dismiss() : false;
    this.toast = await this.toastCtrl.create({
      message,
      duration,
      position: "top"
    });
    this.toast.present();
  }

  async dismissToast() {
    return this.toast.dismiss();
  }

  async presentLoading(message: any) {
    this.loading = this.loading ? await this.loading.dismiss() : false;
    this.loading = await this.loadingCtrl.create({
      message
    });
    await this.loading.present();
  }

  async dismissLoading() {
    await (this.loading && this.loadingCtrl.dismiss());
  }
}
