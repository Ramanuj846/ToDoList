import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from 'src/app/service/crudservice.service';
import { ReactiveFormsModule,FormGroup,FormControlName,FormsModule,FormBuilder } from '@angular/forms';
import { Todolist } from 'src/app/model/todolist';
import {Observable} from 'rxjs'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskObj:Todolist= new Todolist()

  taskArr:Todolist[]=[];

  addTaskValue:string='';
  constructor(private crudservice:CrudserviceService) { }

  ngOnInit(): void {
    this.taskObj=new Todolist();
    this.getTask();

  }
  getTask() {
    this.crudservice.getTask().subscribe(res =>
      {
        this.taskArr=res;
      },err =>
      {
        alert(err)
      })
  }

  addTask()
  {
    this.taskObj.taskName=this.addTaskValue
    this.crudservice.addTask(this.taskObj).subscribe(res =>
      {
        this.ngOnInit();
        this.addTaskValue='';
      },err =>
      {
        alert(err)
      })
  }

  editTask(eTask:Todolist)
  {
    this.crudservice.editTask(this.taskObj).subscribe(res =>
      {
        this.ngOnInit();
      },err =>
      {
        alert(err)
      })
  }

  deleteTask(eTask:Todolist)
  {
    this.crudservice.deleteTask(eTask).subscribe(res =>
      {
        this.ngOnInit();
      },err =>
      {
        alert(err)
      })
  }
  

}
