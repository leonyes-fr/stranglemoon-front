import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class GlobalService {

  public token: any='';

  constructor() {}

  public setToken(token: any): void {
    this.token = token;
  }

  public getToken(): any {
    return this.token;
  }

}
