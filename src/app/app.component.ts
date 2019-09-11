import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public query: string;

  public title:string

  constructor() {
    this.title = 'app works'
  }

  search(event):void {
    this.query = event.query;
  }
}
