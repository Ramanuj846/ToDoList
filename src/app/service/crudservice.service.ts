import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Todolist} from '../model/todolist'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  serviceURL:string;

  constructor(private http:HttpClient)
   {
    this.serviceURL="http://localhost:3000/todoTask"

    }

    addTask(task:Todolist):Observable<Todolist>
    {
      return this.http.post<Todolist>(this.serviceURL,task)
    }

    getTask():Observable<Todolist[]>
    {
      return this.http.get<Todolist[]>(this.serviceURL)
    }

    editTask(task:Todolist):Observable<Todolist>
    {
      return this.http.put<Todolist>(this.serviceURL+'/'+ task.id,task)
    }

    deleteTask(task:Todolist):Observable<Todolist>
    {
      return this.http.delete<Todolist>(this.serviceURL+'/'+ task.id)
    }


}
