import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  private todaysPrograms: any;
  private upcomingPrograms;
  private pastPrograms;
  private monthlyPrograms;

  constructor() {}

  public get todaysProgramsData() {
    return this.todaysPrograms;
  }

  public set todaysProgramsData(val) {
    this.todaysPrograms = val;
  }

  public get upcomingProgramsData() {
    return this.upcomingPrograms;
  }

  public set upcomingProgramsData(val) {
    this.upcomingPrograms = val;
  }

  public get pastProgramsData() {
    return this.pastPrograms;
  }

  public set pastProgramsData(val) {
    this.pastPrograms = val;
  }

  public get monthlyProgramsData() {
    return this.monthlyPrograms;
  }

  public set monthlyProgramsData(val) {
    this.monthlyPrograms = val;
  }
}
