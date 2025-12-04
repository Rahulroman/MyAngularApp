import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../Services/auth/auth.service';
import {  inject } from '@angular/core';



export const authGuard: CanActivateFn = ( state) => {

  var authService = inject(AuthService);
  var route = inject(Router);


if(!authService.isAuthenticated()){
 route.navigate(["/login"]);
return false;
}

  return true;
};
