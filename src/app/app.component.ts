import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventHandlingOnChange';
  name : string;

  onChangeName(event) : void{
    this.name = event.target.value;
  }

}
