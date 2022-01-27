import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import InvitedDto from '../models/InvitedDto';

@Injectable({
  providedIn: 'root'
})
export class ServInvitedService {

  base_url = `https://localhost:44329/api/Invited/`;
  constructor(private http:HttpClient) { }
 
  GetAllInvited(): Observable<InvitedDto[]> {
    return this.http.get<InvitedDto[]>(`${this.base_url}GetAllInvited`)
  }

  GetInvitedById(id:number): Observable<InvitedDto> {
    return this.http.get<InvitedDto>(`${this.base_url}GetInvitedById/${id}`)
  }
}
