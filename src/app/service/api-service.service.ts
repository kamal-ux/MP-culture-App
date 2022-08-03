import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxSoapService, Client, ISoapMethodResponse } from "ngx-soap";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiServiceService {
  client: Client;
  path = "../assets/test.xml";
  private clientReady = new BehaviorSubject(false);
  constructor(private http: HttpClient, private soap: NgxSoapService) {
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
    this.client.addHttpHeader("Content-Type", "text/xml");
    return this.client.call("UserLogin", obj).pipe(
      map((data) => {
        return JSON.parse(data.result.UserLoginResult);
      })
    );
  }

  artistLogin(obj) {
    this.client.addHttpHeader("Content-Type", "text/xml");
    return this.client.call("ArtistLogin", obj).pipe(
      map((data) => {
        return JSON.parse(data.result.ArtistLoginResult);
      })
    );
  }
}
