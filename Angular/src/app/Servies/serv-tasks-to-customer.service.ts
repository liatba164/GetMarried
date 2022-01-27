import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import TasksToCustomerDto from '../models/TasksToCustomerDto';

@Injectable({
  providedIn: 'root'
})
export class ServTasksToCustomerService {

  base_url = `https://localhost:44329/api/TasksToCustomers/`;
  constructor(private http:HttpClient) { }
  
  GetAllTasksToCustomer(id:number): Observable<TasksToCustomerDto[]> {
    return this.http.get<TasksToCustomerDto[]>(`${this.base_url}GetTasksToCustomers/${id}`)
  }
  GetTasksToCustomerById(id:number,idCust:number) {
    return this.http.get<TasksToCustomerDto>(`${this.base_url}GetTasksToCustomerById/${id}/${idCust}`)
  }

  AddTaskToCustomer(taskToCust:TasksToCustomerDto){
    debugger
    return this.http.post<boolean>(`${this.base_url}PostTasksToCustomer`, taskToCust);
  }

  UpDateTaskToCustomer(taskToCust:TasksToCustomerDto){
    return this.http.put<boolean>(`${this.base_url}PutTasksToCustomer`, taskToCust);
  }
  
  DeleteTaskToCustomer(id:number) {
    return this.http.delete<number>(`${this.base_url}DeleteTasksToCustomer/${id}`);
  }
}
