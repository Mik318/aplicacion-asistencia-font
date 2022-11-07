import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CreaateUserDto, User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = '/api/v1/auth/users';

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreaateUserDto){
    return this.http.post<User>(this.apiUrl, dto);
  }

  getAll(){
    return this.http.get<User[]>(this.apiUrl)
  }
}
