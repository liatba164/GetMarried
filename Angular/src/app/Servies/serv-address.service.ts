import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AddressDto from '../models/AddressDto';
@Injectable({
  providedIn: 'root'
})
export class ServAddressService {
  base_url = `https://localhost:44329/api/Address/`;
  constructor(private http: HttpClient) { }


  GetAddress(): Observable<AddressDto[]> {
    return this.http.get<AddressDto[]>(`${this.base_url}GetAllAddress`)
  }

DeleteAddress(id: number){
  return this.http.delete<boolean>(`${this.base_url}DeleteAddress/${id}`)
}

  GetLastAddress(): Observable<AddressDto> {
    return this.http.get<AddressDto>(`${this.base_url}GetLastAddress`)
  }

  GetAddressById(id: number): Observable<AddressDto> {
    return this.http.get<AddressDto>(`${this.base_url}GetAddressById/${id}`)
  }

  uppdateAddress(address: AddressDto) {
    return this.http.put<boolean>(`${this.base_url}PutAddress`, address)
  }

  AddAddress(address: AddressDto){
    return this.http.post<number>(`${this.base_url}PostAddress`, address)
  }


}
