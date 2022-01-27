import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import CustomersDto from '../models/CustomersDto';

@Injectable({
  providedIn: 'root'
})
export class ServCustomerService {
  base_url = `https://localhost:44329/api/Customers/`;

  constructor(private http: HttpClient) {

  }
  GetCustomers(): Observable<CustomersDto[]> {
    return this.http.get<CustomersDto[]>(`${this.base_url}GetAllCustomers`)
  }
  
  GetCustomerByMail(mail:string): Observable<CustomersDto> {
    return this.http.get<CustomersDto>(`${this.base_url}GetCustomerByMail/${mail}`)
  }
 
  GetCustomerById(id:number): Observable<CustomersDto> {
    return this.http.get<CustomersDto>(`${this.base_url}GetCustomerById/${id}`)
  }

  AddCustomer(currentCustomer: CustomersDto) {
    return this.http.post<number>(`${this.base_url}PostCustomer`, currentCustomer);
  }
  
  updateCustomer(customer: CustomersDto) {
    return this.http.put<boolean>(`${this.base_url}PutCustomer`, customer);
  }
}
