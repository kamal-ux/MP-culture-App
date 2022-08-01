import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UtilServiceService } from "./util-service.service";
import { NgxSoapService, Client, ISoapMethodResponse } from "ngx-soap";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiServiceService {
  client: Client;
  path = "../assets/test.xml";
  private clientReady = new BehaviorSubject(false);
  constructor(
    private http: HttpClient,
    private uitlService: UtilServiceService,
    private soap: NgxSoapService
  ) {
    this.soap.createClient(this.path).then((client) => {
      console.log("client", client);
      this.client = client;
      this.clientReady.next(true);
    });
  }

  clientState() {
    return this.clientReady.asObservable();
  }

  userLogin(obj) {
    // this.uitlService.presentLoader();
    this.client.addHttpHeader("Content-Type", "text/xml");
    return this.client.call("Login", obj);
  }
}
