import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private rootUrl = 'http://smktesting.herokuapp.com';
  constructor(private http: HttpClient) { }

  registerUser(login, password) {
    //let reqHeader = new HttpHeaders({''});
    console.log("==Register==");
    console.log(login);
    console.log(password);
    return this.http.post(this.rootUrl + '/api/register/', {
      username: login,
      password: password
    });
  }

  loginUser(login, password) {
  	console.log("==Login==");
    console.log(login);
    console.log(password);
    return this.http.post(this.rootUrl + '/api/login/', {
      username: login,
      password: password
    });
  }
}
