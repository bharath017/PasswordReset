import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Reset } from './reset.model';  

@Injectable({
  providedIn: 'root'
})

export class ResetService {

    formData : Reset;

    url='https://localhost:5001/Users/ResetPassword/Reset';

  constructor(private http: HttpClient,
                  ) { }

    resetPassword(formData : Reset){
      console.log(formData);
      console.log(this.http.post(this.url, this.formData));
    return this.http.post(this.url, this.formData,  {headers : headers});
    }

}

let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');