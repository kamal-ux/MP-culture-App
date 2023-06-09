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
  categoryClient: Client;
  settingsClient: Client;

  path = "../assets/test.xml";
  programWSDLPath = "../assets/program.xml";
  landingPageWSDLPath = "../assets/landingPage.xml";
  artistRegisterWSDLPath = "../assets/artistRegister.xml";
  categoryWSDLPath = "../assets/category.xml";
  settingsWSDLPath = "../assets/settings.xml";

  private clientReady = new BehaviorSubject(false);
  private programClientReady = new BehaviorSubject(false);
  private landingPageClientReady = new BehaviorSubject(false);
  private artistRegisterClientReady = new BehaviorSubject(false);
  private categoryClientReady = new BehaviorSubject(false);
  private settingsClientReady = new BehaviorSubject(false);

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
    this.soap.createClient(this.categoryWSDLPath).then((client) => {
      console.log("artist register client", client);
      this.categoryClient = client;
      this.categoryClientReady.next(true);
    });
    this.soap.createClient(this.settingsWSDLPath).then((client) => {
      console.log("artist register client", client);
      this.settingsClient = client;
      this.settingsClientReady.next(true);
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

  categoryClientState() {
    return this.categoryClientReady.asObservable();
  }

  settingsClientState() {
    return this.settingsClientReady.asObservable();
  }

  userLogin(obj) {
    this.client.addHttpHeader("Content-Type", "text/xml");
    return this.client.call("UserLogin", obj).pipe(
      map((data) => {
        return JSON.parse(data.result.UserLoginResult);
      })
    );
  }
  // AudienceLogin;

  audienceLogin(obj) {
    this.client.addHttpHeader("Content-Type", "text/xml");
    return this.client.call("AudienceLogin", obj).pipe(
      map((data) => {
        return JSON.parse(data.result.AudienceLoginResult);
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

  loadLiveProgram() {
    this.programClient.addHttpHeader("Content-Type", "text/xml");
    return this.programClient.call("LoadLiveProgram", { Count: 20 }).pipe(
      map((data) => {
        return JSON.parse(data.result.LoadLiveProgramResult);
      })
    );
  }

  loadUpcomingProgram() {
    this.programClient.addHttpHeader("Content-Type", "text/xml");
    return this.programClient.call("LoadUpcomingProgram", { Count: 20 }).pipe(
      map((data) => {
        return JSON.parse(data.result.LoadUpcomingProgramResult);
      })
    );
  }

  loadPastProgram() {
    this.programClient.addHttpHeader("Content-Type", "text/xml");
    return this.programClient.call("LoadPastProgram", { Count: 20 }).pipe(
      map((data) => {
        return JSON.parse(data.result.LoadPastProgramResult);
      })
    );
  }

  loadTodaysProgram() {
    this.programClient.addHttpHeader("Content-Type", "text/xml");
    return this.programClient.call("LoadTodaysProgram", { Count: 20 }).pipe(
      map((data) => {
        return JSON.parse(data.result.LoadTodaysProgramResult);
      })
    );
  }

  loadMonthlyProgram() {
    this.programClient.addHttpHeader("Content-Type", "text/xml");
    return this.programClient.call("PopularProgramOfMonth", { Count: 20 }).pipe(
      map((data) => {
        return JSON.parse(data.result.PopularProgramOfMonthResult);
      })
    );
  }

  loadProgramRating(obj) {
    this.programClient.addHttpHeader("Content-Type", "text/xml");
    return this.programClient.call("LoadProgramRatingReviewByProgramId", obj).pipe(
      map((data) => {
        return JSON.parse(data.result.LoadProgramRatingReviewByProgramIdResult);
      })
    );
  }

  InsertProgramRatingReviewByAudienceId(obj) {
    this.programClient.addHttpHeader("Content-Type", "text/xml");
    return this.programClient.call("InsertProgramRatingReviewByAudienceId", obj).pipe(
      map((data) => {
        return JSON.parse(data.result.InsertProgramRatingReviewByAudienceIdResult);
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

  loadCategoryData() {
    this.categoryClient.addHttpHeader("Content-Type", "text/xml");
    return this.categoryClient.call("LoadAllCategory", {}).pipe(
      map((data) => {
        return JSON.parse(data.result.LoadAllCategoryResult);
      })
    );
  }

  loadSettingsData(audienceData) {
    this.settingsClient.addHttpHeader("Content-Type", "text/xml");
    return this.settingsClient.call("LoadNotificationRequirementByAudienceId", audienceData).pipe(
      map((data) => {
        return JSON.parse(data.result.LoadNotificationRequirementByAudienceIdResult);
      })
    );
  }

  changeSettings(audienceSettingsData) {
    this.settingsClient.addHttpHeader("Content-Type", "text/xml");
    return this.settingsClient.call("UpdateNotificationRequirement", audienceSettingsData).pipe(
      map((data) => {
        return JSON.parse(data.result.UpdateNotificationRequirementResult);
      })
    );
  }
}
