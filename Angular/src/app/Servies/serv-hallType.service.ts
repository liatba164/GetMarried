import { Injectable } from '@angular/core';
import HallType from '../models/hallTypeDto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import HallTypeDto from '../models/hallTypeDto';

@Injectable({
  providedIn: 'root'
})
export class ServHallTypeService {
  base_url = `https://localhost:44329/api/HallType/`;
  constructor(private http:HttpClient) { }
  GetHallType(): Observable<HallTypeDto[]> {
    return this.http.get<HallTypeDto[]>(`${this.base_url}GetAllHallType`)
  }
GetHallTypeById(id:number): Observable<HallTypeDto> {
  return this.http.get<HallTypeDto>(`${this.base_url}GetHallTypeById/${id}`)
}
 
}
