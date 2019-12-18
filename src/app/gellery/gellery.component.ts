import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gellery',
  templateUrl: './gellery.component.html',
  styleUrls: ['./gellery.component.css']
})
export class GelleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ReceivedEmploees(data){
    console.log(data)
  }

}
