import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(){
    return localStorage.getItem("token");
  }


  isAuthenticated ()
  {
    var GetToken = localStorage.getItem("token");
    if(GetToken){
      return true;
    }
    return false;
  }
}
