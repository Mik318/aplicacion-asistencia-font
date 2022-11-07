import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CreaateUserDto, User} from '../models/user.model';
import {Auth} from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = '/api/v1/auth';

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string){
    return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password})
  }

  profile(){
    return this.http.get(`${this.apiUrl}/profile`);
  }
}
