import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import TasksDto from 'src/app/models/TasksDto';
import TasksToCustomerDto from 'src/app/models/TasksToCustomerDto';
import { ServTasksToCustomerService } from 'src/app/Servies/serv-tasks-to-customer.service';
import { ServTasksService } from 'src/app/Servies/serv-tasks.service';


@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  TasksToCustomer = new TasksToCustomerDto()
  TasksList: TasksDto[] = [];
  TaskToCust: TasksToCustomerDto[] = [];
  cust: any = localStorage.getItem('user');

  constructor(private snackBar: MatSnackBar,private task_serv: ServTasksService, private srv_task_customer: ServTasksToCustomerService) {

  }

  done(id: number): boolean {
    let ans: boolean = false;
    this.TaskToCust.forEach((element) => {
      if (element.idTask == id && element.done == true)
        ans = true;
    });

    return ans;
  }


  onChange(completed: boolean, id: number) {
    this.srv_task_customer.GetTasksToCustomerById(id, JSON.parse(this.cust).id).subscribe(x => {
      this.TasksToCustomer = x;
      if (this.TasksToCustomer == null) {
        this.TasksToCustomer = new TasksToCustomerDto();
        this.TasksToCustomer.idTask = id;
        this.TasksToCustomer.idCustomer = JSON.parse(this.cust).id;
        this.TasksToCustomer.done = completed;
        this.srv_task_customer.AddTaskToCustomer(this.TasksToCustomer).subscribe(x=>{
          if(x==false)
          this.snackBar.open('לא הצלחנו להוסיף :( נא רענן את העמוד ונסה שנית', 'אישור', {
            duration: 2000,
          });
        });
      }
      else {
        this.TasksToCustomer.done = completed;
        this.srv_task_customer.UpDateTaskToCustomer(this.TasksToCustomer).subscribe(x=>{
          if(x==false)
          this.snackBar.open('לא הצלחנו למחוק :( נא רענן את העמוד ונסה שנית', 'אישור', {
            duration: 2000,
          });
        });
      }
    })

  }

  ngOnInit(): void {
    this.task_serv.GetAllTasks().subscribe(x => { this.TasksList = x });
    this.srv_task_customer.GetAllTasksToCustomer(JSON.parse(this.cust).id).subscribe(x => {
      this.TaskToCust = x;
    });
    setTimeout(() => {
    }, 1000);

  }
}
