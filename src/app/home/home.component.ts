import { Component, OnInit, Input } from '@angular/core';
import { MyservService } from '../reactive-forms/myserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  name: string = 'vicky Singh';
  age: number = 23;
  profile : string = "Angular dev";
  company : string = "infosys Limited"

  showDetails: boolean = false;

  toggaleValue(){
    this.showDetails = !this.showDetails
    
  }

  serviceCatch = this.service.colorPreferance
  private Comingdata : string;
  constructor(private service : MyservService, private router: Router) {

   }

   onclickChange(sep){
    this.router.navigate(['/home', sep.id])
   }

  @Input() Allarm : string = 'this is basic alarm'

  ngOnInit() {
  }
totalDepartment:any = [
  {
    id:1,
    name: 'vicky',
    age : 23,
  },
  {
    id:2,
    name : 'govinda',
    age: 34
  }
]
  displayTime(){
    console.log(new Date);
  }

  DisplayData(data){
    this.Comingdata = data;
console.log(data)
  }

  Showprompt(data){
    console.log (data);
  }
}
