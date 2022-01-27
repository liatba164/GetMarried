import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ServiceDto from '../models/serviesDto';

@Injectable({
  providedIn: 'root'
})
export class ServServiceService {
  base_url = `https://localhost:44329/api/Service/`;
  constructor(private http: HttpClient) { }

  GetListService(id:number): Observable<ServiceDto[]> {
    return this.http.get<ServiceDto[]>(`${this.base_url}GetAllServices/${id}`)
  }


  GetServiceById(id:number): Observable<ServiceDto> {
    return this.http.get<ServiceDto>(`${this.base_url}GetServiceById/${id}`)
  }
}