import { NgModule } from "@angular/core";
import { APIcallComponent } from './apicall.component';
import { ApicallRoutingModule } from './apicall-routing.module';
import { SectiondisplayComponent } from '../sectiondisplay/sectiondisplay.component';
import { DisplayComponent } from '../display/display.component';


@NgModule({

    declarations:[APIcallComponent, DisplayComponent ],
    imports: [ ApicallRoutingModule],

})

export class ApicallModule {
    constructor(){
        console.log('hello')
    }
}