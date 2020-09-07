import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { ResetForm } from './reset-form.model';  

@Injectable({
  providedIn: 'root'
})
export class ResetFormService {

    formData : ResetForm;

  url='https://localhost:5001/Users/ResetPassword/Reset';
  constructor(private http: HttpClient) { 
    
  }

  resetPassword(formData : ResetForm){
    console.log(formData);
   return this.http.post(this.url, this.formData);
  }

}

