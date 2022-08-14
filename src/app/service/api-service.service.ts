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
  programClient: Client;
  landingPageClient: Client;
  artistRegisterClient: Client;

  path = "../assets/test.xml";
  programWSDLPath = "../assets/program.xml";
  landingPageWSDLPath = "../assets/landingPage.xml";
  artistRegisterWSDLPath = "../assets/artistRegister.xml";

  private clientReady = new BehaviorSubject(false);
  private programClientReady = new BehaviorSubject(false);
  private landingPageClientReady = new BehaviorSubject(false);
  private artistRegisterClientReady = new BehaviorSubject(false);

  constructor(private http: HttpClient, private soap: NgxSoapService) {
    this.soap.createClient(this.path).then((client) => {
      console.log("client", client);
      this.client = client;
      this.clientReady.next(true);
    });

    this.soap.createClient(this.programWSDLPath).then((client) => {
      console.log("program client", client);
      this.programClient = client;
      this.programClientReady.next(true);
    });

    this.soap.createClient(this.landingPageWSDLPath).then((client) => {
      console.log("landing page client", client);
      this.landingPageClient = client;
      this.landingPageClientReady.next(true);
    });

    this.soap.createClient(this.artistRegisterWSDLPath).then((client) => {
      console.log("artist register client", client);
      this.artistRegisterClient = client;
      this.artistRegisterClientReady.next(true);
    });
  }

  clientState() {
    return this.clientReady.asObservable();
  }

  programClientState() {
    return this.programClientReady.asObservable();
  }

  landingPageClientState() {
    return this.landingPageClientReady.asObservable();
  }

  artistRegisterClientState() {
    return this.artistRegisterClientReady.asObservable();
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

  loadUpcomingProgram() {
    this.programClient.addHttpHeader("Content-Type", "text/xml");
    return this.programClient.call("LoadUpcomingProgram", null).pipe(
      map((data) => {
        return JSON.parse(data.result.LoadUpcomingProgramResult);
      })
    );
  }

  loadPastProgram() {
    this.programClient.addHttpHeader("Content-Type", "text/xml");
    return this.programClient.call("LoadPastProgram", {}).pipe(
      map((data) => {
        return JSON.parse(data.result.LoadPastProgramResult);
      })
    );
  }

  loadTodaysProgram() {
    this.programClient.addHttpHeader("Content-Type", "text/xml");
    return this.programClient.call("LoadTodaysProgram", {}).pipe(
      map((data) => {
        return JSON.parse(data.result.LoadTodaysProgramResult);
      })
    );
  }

  loadLandingPageContent() {
    this.landingPageClient.addHttpHeader("Content-Type", "text/xml");
    return this.landingPageClient.call("LoadLandingData", {}).pipe(
      map((data) => {
        return JSON.parse(data.result.LoadLandingDataResult);
      })
    );
  }

  doArtistRegister(obj) {
    this.artistRegisterClient.addHttpHeader("Content-Type", "text/xml");
    return this.artistRegisterClient.call("ArtistSignup", obj).pipe(
      map((data) => {
        return JSON.parse(data.result.ArtistSignupResult);
      })
    );
  }

  doAudienceRegister(obj) {
    this.artistRegisterClient.addHttpHeader("Content-Type", "text/xml");
    return this.artistRegisterClient.call("AudienceSignup", obj).pipe(
      map((data) => {
        return JSON.parse(data.result.AudienceSignupResult);
      })
    );
  }

  doAudienceProfileUpdate(obj) {
    this.artistRegisterClient.addHttpHeader("Content-Type", "text/xml");
    return this.artistRegisterClient.call("AudienceUpdate", obj).pipe(
      map((data) => {
        return JSON.parse(data.result.AudienceUpdateResult);
      })
    );
  }

  getArtistRegisterRequirement() {
    this.artistRegisterClient.addHttpHeader("Content-Type", "text/xml");
    return this.artistRegisterClient.call("ArtistRegistrationPageLoad", {}).pipe(
      map((data) => {
        return JSON.parse(data.result.ArtistRegistrationPageLoadResult);
      })
    );
  }
}
