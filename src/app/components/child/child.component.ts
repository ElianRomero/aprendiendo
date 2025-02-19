import { Component,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  userName: String = "Elian";


  @Output()
  login: EventEmitter<any> = new EventEmitter<any>;

  // login = Output<any>(); para version 18

  handleLogin() {
    this.login.emit(this.userName);
  }
}
