import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import OpinionDto from '../models/opinionDto';

@Injectable({
  providedIn: 'root'
})
export class ServOpinionService {
  base_url = `https://localhost:44329/api/Opinion/`;
  constructor(private http:HttpClient) { }
  
  GetAllOpinionToHall(id:number): Observable<OpinionDto[]> {
    return this.http.get<OpinionDto[]>(`${this.base_url}GetAllOpinionToHall/${id}`)
  }

  GetAllOpinionToSupp(id:number): Observable<OpinionDto[]> {
    return this.http.get<OpinionDto[]>(`${this.base_url}GetAllOpinionToSupp/${id}`)
  }

 AddOpinion(Opinion: OpinionDto){
    return this.http.post<boolean>(`${this.base_url}PostOpinion`, Opinion);
 }

}
