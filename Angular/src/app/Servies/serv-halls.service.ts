import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AreaDto from '../models/AreaDto';
import Filter from '../models/filter';
import HallsDto from '../models/hallsDto';
import HallTypeDto from '../models/hallTypeDto';
import InvitedDto from '../models/InvitedDto';
import KashrutDto from '../models/KashrutDto';

@Injectable({
  providedIn: 'root'
})
export class ServHallsService {

  base_url = `https://localhost:44329/api/Halls/`;
  filter: Filter = new Filter();
  constructor(private http: HttpClient,) { }
  GetHalls(): Observable<HallsDto[]> {
    return this.http.get<HallsDto[]>(`${this.base_url}GetAllHalls`)
  }

  GetHallById(id: number): Observable<HallsDto> {
    return this.http.get<HallsDto>(`${this.base_url}GetHallById/${id}`)
  }

  GetMaxPrice() {
    return this.http.get<number>(`${this.base_url}GetMaxPrice`)
  }

  GetMinPrice() {
    return this.http.get<number>(`${this.base_url}GetMinPrice`)
  }
  GetHallsByFilter(arrInvited: InvitedDto[], ArrAreas: AreaDto[], ArrHallTyp: HallTypeDto[], ArrKashrut: KashrutDto[], price: number): Observable<HallsDto[]> {

    this.filter.areas = ArrAreas;
    this.filter.hallTypes = ArrHallTyp;
    this.filter.invitds = arrInvited;
    this.filter.kashrut = ArrKashrut;
    this.filter.price = price;
    return this.http.post<HallsDto[]>(`${this.base_url}GetHallByFilter`, this.filter);
  }

  UpdateHall(hall: HallsDto) {
    return this.http.put<boolean>(`${this.base_url}PutHall`, hall)
  }

  AddHall(hall: HallsDto) {
    return this.http.post<number>(`${this.base_url}PostHall`, hall)
  }

  DeleteHalls(id: number) {
    return this.http.delete<boolean>(`${this.base_url}DeleteHalls/${id}`)
  }




}
