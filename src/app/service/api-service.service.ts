import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UtilServiceService } from "./util-service.service";

@Injectable({
  providedIn: "root",
})
export class ApiServiceService {
  constructor(
    private http: HttpClient,
    private uitlService: UtilServiceService
  ) {}

  userLogin(obj) {
    this.uitlService.presentLoader();
    const login = this.http.post("", obj);
    return login;
  }
}
