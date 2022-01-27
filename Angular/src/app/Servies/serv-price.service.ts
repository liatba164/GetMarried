import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import PriceDto from '../models/PriceDto';

@Injectable({
  providedIn: 'root'
})
export class ServPriceService {

  base_url = `https://localhost:44329/api/Price/`;
  constructor(private http:HttpClient) { }
 

  GetAllPrice(): Observable<PriceDto[]> {
    return this.http.get<PriceDto[]>(`${this.base_url}GetAllPrice}`)
  }

  GetPricedById(id:number): Observable<PriceDto> {
    return this.http.get<PriceDto>(`${this.base_url}GetPriceById/${id}`)
  }
}
