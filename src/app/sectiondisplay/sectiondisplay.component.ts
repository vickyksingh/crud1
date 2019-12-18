import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sectiondisplay',
  templateUrl: './sectiondisplay.component.html',
  styleUrls: ['./sectiondisplay.component.css']
})
export class SectiondisplayComponent implements OnInit {
  mydata;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('name')
    this.mydata = id
  }

}
