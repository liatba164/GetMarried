import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AreaDto from '../models/AreaDto';

@Injectable({
  providedIn: 'root'
})
export class ServAreaService {
  base_url = `https://localhost:44329/api/Area/`;
  constructor(private http: HttpClient) { }
  GetArea(): Observable<AreaDto[]> {
    return this.http.get<AreaDto[]>(`${this.base_url}GetAllArea`)
  }
  GetAreaById(id:number): Observable<AreaDto> {
    return this.http.get<AreaDto>(`${this.base_url}GetAreaById/${id}`)
  }
}
