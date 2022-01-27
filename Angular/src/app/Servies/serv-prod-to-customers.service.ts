import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ProductsToCustomersDto from '../models/productsToCustomersDto';

@Injectable({
  providedIn: 'root'
})
export class ServProdToCustomersService {
  base_url = `https://localhost:44329/api/ProductsToCustomers/`;
  constructor(private http:HttpClient) { }
  
  GetAllProductsToCustomers(idCust:number): Observable<ProductsToCustomersDto[]> {
    return this.http.get<ProductsToCustomersDto[]>(`${this.base_url}GetAllProductsToCustomers/${idCust}`)
  }

  GetHallProductsToCustomersById(id:number,idCust:number): Observable<ProductsToCustomersDto> {
    return this.http.get<ProductsToCustomersDto>(`${this.base_url}GetHallProductsToCustomersById/${id}/${idCust}`)
  }

  GetSupplierProductsToCustomersById(id:number,idCust:number): Observable<ProductsToCustomersDto> {
    return this.http.get<ProductsToCustomersDto>(`${this.base_url}GetSupplierProductsToCustomersById/${id}/${idCust}`)
  }

  AddProducts(prodToCust: ProductsToCustomersDto) {
    return this.http.post<boolean>(`${this.base_url}PostProductsToCustomers`, prodToCust);
  }
 
  DeleteProducts(id:number) {
    return this.http.delete<boolean>(`${this.base_url}DeleteProductsToCustomers/${id}`);
  }
}

