import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-librery',
  templateUrl: './librery.component.html',
  styleUrls: ['./librery.component.css']
})
export class LibreryComponent implements OnInit {

  constructor( private route : Router) { }

  bookDetails= [
    {'id': 1, 'name':'Angular'},
    {'id': 2, 'name':'Javascrip'},
    {'id': 3, 'name':'ModeJs'},
    {'id': 4, 'name':'Vewjs'}
  ]

  ngOnInit() {
  }
  onclickMethod(x){
    this.route.navigate(['teacher/librery', x.id])
  }

}
