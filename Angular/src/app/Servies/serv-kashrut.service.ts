import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import KashrutDto from '../models/KashrutDto';

@Injectable({
  providedIn: 'root'
})
export class ServKashrutService {

  base_url = `https://localhost:44329/api/Kashrut/`;
  constructor(private http:HttpClient) { }
 
  GetKashrutById(id:number): Observable<KashrutDto> {
    return this.http.get<KashrutDto>(`${this.base_url}GetKashrutById/${id}`)
  }
  GetKashrut(): Observable<KashrutDto[]> {
    return this.http.get<KashrutDto[]>(`${this.base_url}GetAllKashrut`)
  }

}
