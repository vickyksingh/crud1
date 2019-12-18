import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  Items: any={}
  commingValue(data):any{
     this.Items = data;

     console.log(data)

  }

  constructor() { }

  ngOnInit() {
  }

  teacher : any[] = [
    {
      name:'Satesh',
      Subject: 'Controlm',
    },
    {
      name:'ramesh',
      Subject: 'Database'
    },{
      name:'kulkarni',
      Subject: 'Math',
    },
  ]

}