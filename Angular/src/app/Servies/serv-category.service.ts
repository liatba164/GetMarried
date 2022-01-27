import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import CategoryDto from '../models/CategoryDto';
@Injectable({
  providedIn: 'root'
})
export class ServCategoryService {
  base_url = `https://localhost:44329/api/Categories/`;
  constructor(private http: HttpClient) {

  }
  GetCategories(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(`${this.base_url}GetAllCategories`)
  }

  GetCategoryById(id:number): Observable<CategoryDto> {
    return this.http.get<CategoryDto>(`${this.base_url}GetCategoryById/${id}`)
  }

}
