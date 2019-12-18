import { Component } from '@angular/core';
import { MyservService } from './reactive-forms/myserv.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //http calls
private commingData;
  getdata(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (res)=>{
       console.log( res)
     this.commingData = res
      //  let obj = res;
      //  let result = Object.keys(obj).map(function(key){
      //    return [Number(key), obj[key]]
      //  })
      //  console.log(result)
      //  this.commingData = result
      }
    )
  }

  addeddata: any
  adddata(userId, body, title ){
    let data = {
      userId: parseInt (userId.value),
    body : body.value,
    title: title.value
    }
    this.http.post('https://jsonplaceholder.typicode.com/posts', data).subscribe(
      (res)=>{
        console.log('record saved!')
       this.commingData.splice(0,0, data)
       // this.getdata()
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  deleteRecord(id){
    this.http.delete('https://jsonplaceholder.typicode.com/posts'+'/'+id).subscribe(
      (res)=>{
        
        // let index = this.commingData.indexOf(data)
        // this.commingData.splice(index, 1)
        console.log('record deleted!')
      }
    )
  }

  updateRecord(data){
    this.http.put('https://jsonplaceholder.typicode.com/posts'+'/'+data.id, data).subscribe(
      res=>{
        console.log('Updated')
      }
    )
  }
  

  Employers: any[]

  boom : boolean = true;
 
  mycol = this.myservice.colorPreferance
  constructor( private myservice : MyservService, private http : HttpClient){
    this.getdata()
    
    this.Employers = [
      {
        name: 'Capgemini'
      },
      {
        name: 'Infosys'
      },
      {
        name: 'Tcs'
      },{
        name: 'Cognizant'
      },
    ]

  }

  addEmployers(){
   this.Employers = [
      {
        name: 'Capgemini'
      },
      {
        name: 'Infosys'
      },
      {
        name: 'Tcs'
      },{
        name: 'Cognizant'
      },
      {
        name: 'Google'
      },
    ]
  }

  trackbyId(index, Employers){
    return Employers.index
  }

  fname : string = 'vicky';
  lname : string = 'singh';

  fullname(): string {
    return `${this.fname} ${this.lname}`
  }

alertUser(){
  let a = prompt('1')
  if(a=='1'){
    return true
  }else{
    false
  }
}

private changeColor: boolean = true;
private changeFont : boolean = false

addClass(){

  let classes = {
    buttonColor: this.changeColor,
    buttonSize: this.changeFont
  }
  return classes;
}
onClick(){
  alert('hi')
}



}
