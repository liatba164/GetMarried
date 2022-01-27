import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ContactUsDto from '../models/ContactUsDto';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  base_url = `https://localhost:44329/api/ContactUs/`;
  constructor(private http:HttpClient) { }
 
  GetAllContact(): Observable<ContactUsDto[]> {
    return this.http.get<ContactUsDto[]>(`${this.base_url}GetAllContact`)
  }

 PostContact(contact:ContactUsDto){
  return this.http.post<boolean>(`${this.base_url}PostContactUs`,contact)
 }

 DeleteContactUs(id:number){
  return this.http.delete<boolean>(`${this.base_url}DeleteContactUs/${id}`)
 }
}
