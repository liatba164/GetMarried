import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import EmailModel from '../models/EmailModel';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  
  base_url = `https://localhost:44329/api/SendMail/`;
  constructor(private http: HttpClient) { }

  sendMail(email:string,name:string) :Observable<string>{
    return this.http.get<string>(`${this.base_url}Get/${email}/${name}`)
  }
  
sendMailByCust(e:EmailModel){
  return this.http.post<string>(`${this.base_url}GetMail`,e)
}

}
