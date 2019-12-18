import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  private myfrm : FormGroup;
  constructor() {
    this.myfrm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required,])
    })
   }

  ngOnInit() {

  }
  private valueSet: boolean = true

  login(){
   console.log( this.myfrm.value)
  }
  setvalue(){
    this.myfrm.setValue({
      name: 'vicky',
      email: 'abc@domain.com',
      password: '1111'
    })
  }
  patchvalue(){
    this.myfrm.patchValue({
      name: 'vicky',
      email: 'abc@domain.com',
      
    })
  }

}
