import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
environment
HttpClient

@Injectable({
  providedIn: 'root'
})
export class ApiService {

private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient , ) { }

getCallwithdata(endpoint: string , body: any): Observable<any> {
    return this.http.get(this.baseUrl + endpoint , body);
}

getCall(endpoint: string ): Observable<any> {
    return this.http.get(this.baseUrl + endpoint );
}

postCall(endpoint: string , body: any): Observable<any> {
    return this.http.post(this.baseUrl + endpoint , body);
}

putCall(endpoint :string , body : any) : Observable<any>{
  return this.http.put(this.baseUrl+endpoint , body);
}



}
