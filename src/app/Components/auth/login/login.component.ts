import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormsModule,  } from "@angular/forms";
 import {  UserLogin } from '../../../models/userModules'
import { ApiService } from '../../../Services/core/api.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private route : Router ,private  apiService : ApiService){}

userLogin : UserLogin = {
  Username : '',
  password : ''
}

onLogin () {
  
  this.apiService.postCall("Auth/login" , this.userLogin).subscribe({
    next : (res) => {
      if(res?.response)
        {  alert(res.response);
          localStorage.setItem('token' , res.token.token);
this.route.navigate(["/dashboard"]);
          }
    } ,
    error : (err) => {}
  });

}



}
