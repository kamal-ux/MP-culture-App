import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { UtilService } from "../service/util-service.service";
// import { UtilServiceService } from "../service/util-service.service";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  urslsNotToShowLoading: Array<string>;

  constructor(private utilService: UtilService) {
    this.urslsNotToShowLoading = [
      "assets/test.xml",
      "assets/program.xml",
      "/ProgramService.asmx",
      "/landingPage.xml",
      "/LandingPageService.asmx",
      "/artistRegister.xml",
      "/SignupService.asmx"
    ];
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isValidRequestForInterceptor(request.url) && !this.utilService.isLoading) {
      this.utilService.presentLoading("Please wait...");
    }

    // if (!request.headers.has("Content-Type")) {
    //   request = request.clone({
    //     setHeaders: {
    //       "content-type": "text/xml"
    //     }
    //   });
    // }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log("event--->>>", event);
          this.utilService.dismissLoading();
        }

        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        this.utilService.dismissLoading();
        return throwError(error);
      })
    );
  }

  private isValidRequestForInterceptor(requestUrl: string): boolean {
    let positionIndicator: string = "/";
    let position = requestUrl.indexOf(positionIndicator);
    console.log(position);
    if (position > 0) {
      let destination: string = requestUrl.substr(position + positionIndicator.length);
      console.log("destination", destination);
      for (let address of this.urslsNotToShowLoading) {
        if (new RegExp(address).test(destination)) {
          console.log("false");
          return false;
        }
        // if(destination.includes(address)){
        //   return false
        // }
      }
    }
    return true;
  }
}
