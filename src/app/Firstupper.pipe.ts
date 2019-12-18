import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'firstUpperCase'
})

export class firstUpperCase implements PipeTransform{
    transform(value:string):string{
        if(value.slice(0,1).toLowerCase())
        return (value.slice(0,1)).toUpperCase()+ value.slice(1).toLowerCase()
    }
}