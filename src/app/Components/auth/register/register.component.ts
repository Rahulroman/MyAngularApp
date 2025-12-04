  import { Component } from '@angular/core';
  import { User } from '../../../models/userModules'
   import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../Services/core/api.service';

  
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

 constructor(private router: Router, private ApiService: ApiService) { }



 
  user :   User = {
    Username : '',
    Email: '',
    PasswordHash: '',
    Mobile : ''
  };
  
  onRegister() {

    this.ApiService.postCall("Auth/register", this.user).subscribe({
      next: (res) => {
        if (res?.response) { alert(res.response.message) }
      },
      error: (err) => { alert(err.response) }

    });

  }



}
