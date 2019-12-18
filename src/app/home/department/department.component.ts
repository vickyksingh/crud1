import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

   @Input('abc') message
   @Input() passData
   @Output() firemessgae = new EventEmitter();
   @Output() promptvalue = new EventEmitter();

   @Output() EmployeesValue = new EventEmitter()
   
   sendEmploeeDetails(){
     this.EmployeesValue.emit(this.employees)
   }

  constructor() { }

  ngOnInit() {
  }

  Getmessage(){
    this.firemessgae.emit(this.carObj)
  }


  private carObj = {
    brand: 'bmw',
    model : '7 series'
  }

  funValue(){
    this.promptvalue.emit(prompt)
  }

  private prompt = function(){
    return 4
  }

  employees : any[] = [
    {
      name: "vicky",
      age : 23,
      address: 'ranchi',
      country: "India"
    },
    {
      name: "tom",
      age : 33,
      address: 'California',
      country: "Us"
    },
    {
      name: "Stop",
      age : 43,
      address: 'Brisban',
      country: "UK"
    },
    {
      name: "Pandit",
      age : 27,
      address: 'Paris',
      country: "France"
    },
  ]

  hiddenValue: boolean = false

  ShowDetailed(){
    this.hiddenValue = !this.hiddenValue
  }
}
