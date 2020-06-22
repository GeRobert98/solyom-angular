import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Robika99';
  counter = 0;
  time: {
    h: string,
    m: string, 
    s: string
  } = null;

  constructor() {
    setInterval(() => {
      //this.counter++;
      const now = new Date();
      this.time = {
        h: now.getHours().toString(),
        m: now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes().toString(),
        s: now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds().toString()
      }  
    }, 1000
    )
  }
}



