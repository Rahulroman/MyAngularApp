import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../Services/auth/auth.service';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const skipUrls = [
      '/register',
      '/login'
    ];
    
  if (skipUrls.some(url => req.url.includes(url))) {
    return next(req);
  }


var authService = inject(AuthService);
var route = inject(Router);
console.log("interceptor call");
const token = authService.getToken();
if(!token){
  localStorage.removeItem("token");
  route.navigate(["/login"]);
  return EMPTY;  
}
else{
         const authReq = req.clone({
      setHeaders : { Authorization : `Bearer ${token}` }
  });
  return next(authReq).pipe(
    catchError(err => {
      if(err.status == 401){
        localStorage.removeItem("token");
        route.navigate(["/login"]);
        return EMPTY;  
      }
       return EMPTY;  
    })
  ); 



}

};
