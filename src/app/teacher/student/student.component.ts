import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Output() passStudents = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  @Input() getvalue ;

  students:any = {
    name: 'Amar',
    age: 23,
    class: 10
  }

  getStudents(){
    this.passStudents.emit(this.students)
  }

}
