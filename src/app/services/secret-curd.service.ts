import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { secret } from '../secret/member/models/secret'; // user set

@Injectable({
  providedIn: 'root'
})
export class SecretCurdService {

  private url = ""

  constructor(private http: HttpClient) { }
}
