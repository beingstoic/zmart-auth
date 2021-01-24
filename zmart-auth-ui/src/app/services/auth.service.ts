//This service sends signup, login HTTP POST requests to back-end.
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { JwtHelperService } from '@auth0/angular-jwt';

const AUTH_API = 'http://localhost:7001/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'auth/signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'auth/signup', {
      username: user.username,
      password: user.password,
      email: user.email,
      firstName: user.firstName,
      lastName : user.lastName,
      mobileNo: user.mobile,
      gender:user.gender,
      role: ["CUSTOMER"]
      
    }, httpOptions);
  }


}
