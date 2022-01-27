import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AreaDto from '../models/AreaDto';
import FilterSupplier from '../models/FilterSupplier';
import ServiceDto from '../models/serviesDto';
import SuppliersDto from '../models/suppliersDto';

@Injectable({
  providedIn: 'root'
})
export class ServSuppliersService {
  filter: FilterSupplier = new FilterSupplier();
  base_url = `https://localhost:44329/api/Suppliers/`;
  constructor(private http: HttpClient) { }
  GetAllSuppliers(): Observable<SuppliersDto[]> {
    return this.http.get<SuppliersDto[]>(`${this.base_url}GetAllSuppliers`)
  }

  GetSuppliers(id: number): Observable<SuppliersDto[]> {
    return this.http.get<SuppliersDto[]>(`${this.base_url}GetAllSuppliers/${id}`)
  }

  GetLastSupplier() {
    return this.http.get<SuppliersDto>(`${this.base_url}GetLastSupplier/`)
  }

  AddSupplier(supplier: SuppliersDto) {
    return this.http.post<number>(`${this.base_url}PostSuppliers`, supplier)
  }

  UpdateSupplier(supplier: SuppliersDto) {
    return this.http.put<boolean>(`${this.base_url}PutSupplier`, supplier)
  }


  GetSupplierByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.base_url}GetSupplierByName/${name}`)
  }

  GetMaxPrice(category: number) {
    return this.http.get<number>(`${this.base_url}GetMaxPrice/${category}`)
  }

  GetMinPrice(category: number) {
    return this.http.get<number>(`${this.base_url}GetMinPrice/${category}`)
  }

  GetSuppliersByFilter(ArrAreas: AreaDto[], ArrService: ServiceDto[], price: number, idCategory: number): Observable<SuppliersDto[]> {
    this.filter.areas = ArrAreas;
    this.filter.service = ArrService;
    this.filter.price = price;
    this.filter.idCategory = idCategory;
    return this.http.post<SuppliersDto[]>(`${this.base_url}GetSuppliersByFilter`, this.filter)
  }

  DeleteSuppliers(id: number) {
    return this.http.delete<boolean>(`${this.base_url}DeleteSupplier/${id}`)
  }

  GetSuppliersById(id: number): Observable<SuppliersDto> {
    return this.http.get<SuppliersDto>(`${this.base_url}GetSupplierById/${id}`)
  }
}
