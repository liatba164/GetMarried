import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import TasksDto from '../models/TasksDto';


@Injectable({
  providedIn: 'root'
})
export class ServTasksService {

  base_url = `https://localhost:44329/api/Tasks/`;
  constructor(private http:HttpClient) { }
  GetAllTasks(): Observable<TasksDto[]> {
    return this.http.get<TasksDto[]>(`${this.base_url}GetAllTasks`)
  }

  
}
