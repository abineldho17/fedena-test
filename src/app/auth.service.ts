import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {



    private _loginUrl = "https://depaul.fedena.org/oauth/token"
  constructor(private http: HttpClient) {}

  loginUser(user) {
    

  let body = {
    client_id: '4dc80b6ce4e4b854cf33a74392a465933f2164b09de9ba66791284097403d1d9',
    client_secret: 'd4c771d4ea001ae5839009000dde9dda75f70a554f4cf2586aa135488ad793cd',
    grant_type: 'password',
    username: user.username,
    password: user.password,
    redirect_url: 'https://depaul.fedena.org',
};



const header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   return this.http.post<any>(this._loginUrl, body, {headers: header} )
  }
}