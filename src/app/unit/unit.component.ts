import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  empDetails:any[]=[
    {
      name: 'vicky',
      unit: 'Angular',
      grade: 'a'
    },
    {
      name: 'shiva',
      unit: 'CyberSecurity',
      grade: 'b'
    },
    {
      name: 'amit',
      unit: 'ReAAct',
      grade: 'a'
    },
    {
      name: 'Gogi',
      unit: 'Javascript',
      grade: 'b'
    },
  ]

  
  actorsDetails = [
    {
     id: 1, name: 'Sahrukh', age: '56', img : 'https://i.pinimg.com/236x/bc/53/73/bc53737b2684faaef3f9ea688144cbd8.jpg'
    },
    {
      id: 2, name: 'Tiger', age: '28', img : 'https://timesofindia.indiatimes.com/thumb/msid-69324584,imgsize-328023,width-800,height-600,resizemode-4/69324584.jpg'
    },
    {
      id:3, name: 'allu', age: '32', img: 'https://i.ytimg.com/vi/pNTQoTn7Nk8/hqdefault.jpg'
    }
  ]

  onclickChange(x){
    this.router.navigate(['/unit', x.id])
  }

}
