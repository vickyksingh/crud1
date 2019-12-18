import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {

  transform(value:string, grade:string):string{
    console.log(value)
    if(grade==='a'){
      return 'Junior'+' '+value;
    }else{
      return 'Senior'+' '+value;
    }
  }
  constructor(){
    
  }

}
