import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tasks';
  upperText: string = 'Dysplay uppercase text';
  lowerText: string = 'Dysplay lowercase text';
  percent: number = 0.5;
  currency: number = 10.56789;
  data: Date = new Date();
  user: User = {
    name: 'lucas', 
    idade : 25
  };
  profile: number = 2;
  isAdmin: boolean = true;
  name: string = '';
  email: string = '';
}
