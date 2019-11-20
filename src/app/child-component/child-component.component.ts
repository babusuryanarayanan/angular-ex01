import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() flag : boolean;
  @Output() eventEmitted : EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onClick(data) {
    this.eventEmitted.emit(data);
  }

}