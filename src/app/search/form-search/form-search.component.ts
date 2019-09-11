import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  
  queryText: string;
  result: string;

  @Input() labelButton: string;
  @Input() placeholder: string;

  @Output() 
  searchEvent = new EventEmitter();

  constructor() {
    this.queryText = '';
  }

  search(event) {
    event.preventDefault();
    this.result = this.queryText;
    let eventResponse = {query: this.queryText, resultado:this.result};
    this.searchEvent.emit(eventResponse);
  }

  ngOnInit() {
    this.labelButton = this.labelButton ? this.labelButton : 'Find!';
    this.placeholder = this.placeholder ? this.placeholder : 'Search...';
  }
}
