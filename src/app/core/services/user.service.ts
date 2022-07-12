import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://api.github.com/users?per_page=10";

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
    .get(`${this.apiUrl}/${username}`);
  }
}
