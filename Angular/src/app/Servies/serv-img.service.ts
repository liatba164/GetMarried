import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ImgDto from '../models/imgDto';

@Injectable({
  providedIn: 'root'
})
export class ServImgService {

  

  base_url = `https://localhost:44329/api/Img/`;
  constructor(private http: HttpClient) { }
  GetAllImg(): Observable<ImgDto[]> {
    return this.http.get<ImgDto[]>(`${this.base_url}GetAllImg`)
  }

  AddImg(img: ImgDto) {
    return this.http.post<boolean>(`${this.base_url}PostImg`, img)
  }

  AddImagesSupp(img: ImgDto[]) {
    return this.http.post<boolean>(`${this.base_url}PostImagesSupp`, img)
  }

  deleteImg(id: number) {
    return this.http.delete<boolean>(`${this.base_url}DeleteImg/${id}`)
  }

  PostImages(img: ImgDto[]) {
    return this.http.post<boolean>(`${this.base_url}PostImages`,img)
  }
  
  GetImgById(idcategory: number, idhall: number): Observable<ImgDto[]> {
    return this.http.get<ImgDto[]>(`${this.base_url}GetHallImgById/${idcategory}/${idhall}`)
  }

  GetImgSuppliersById(idcategory: number, idSupp: number): Observable<ImgDto[]> {
    return this.http.get<ImgDto[]>(`${this.base_url}GetSuppliersImgById/${idcategory}/${idSupp}`)
  }
}
