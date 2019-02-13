import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
 
  public tasks = [];
  task: string= '';
  isAdmin: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public addTask(): void {
    this.tasks.push(this.task);
  }

}
