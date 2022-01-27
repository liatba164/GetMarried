import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ServToSuppDto from '../models/ServToSuppDto';

@Injectable({
  providedIn: 'root'
})
export class ServServToSuppService {
  base_url = `https://localhost:44329/api/ServToSupp/`;
  constructor(private http: HttpClient) { }

  GetAllServToSupp(id: number): Observable<ServToSuppDto[]> {
    return this.http.get<ServToSuppDto[]>(`${this.base_url}GetAllServToSupp/${id}`)
  }

  updateService(serv: ServToSuppDto) {
    return this.http.put<boolean>(`${this.base_url}PutServToSupp`, serv)
  }

  PostService(serv: ServToSuppDto) {
    return this.http.post<boolean>(`${this.base_url}PostServToSupp`, serv)
  }

  PostServices(serv: ServToSuppDto[]) {
    return this.http.post<boolean>(`${this.base_url}PostServicesToSupp`, serv)
  }

  DeleteService(id: number) {
    return this.http.delete<boolean>(`${this.base_url}DeleteServToSupp/${id}`)
  }

}
