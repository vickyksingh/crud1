import { Injectable } from "@angular/core";


@Injectable()

export class MyservService {

    colorPreferance: string = 'red'

    constructor(){
        console.log('created')
    }
}