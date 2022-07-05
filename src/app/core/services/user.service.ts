import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = CryptoJS.AES.decrypt( environment.apiURL, environment.secretkey).toString(CryptoJS.enc.Utf8);

  constructor(private http: HttpClient) { }

  /**
   * Get All Users
   */
  getUsers(){
    return this.http
    .get(`${this.apiUrl}`);
  }

  /**
   * Get User
   */
  getUser(username: string){
    return this.http
    .get(`${this.apiUrl}&user=${username}`);
  }
}
