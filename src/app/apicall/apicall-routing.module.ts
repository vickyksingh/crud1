import { NgModule } from "@angular/core";
import {  Routes, RouterModule } from '@angular/router';
import { APIcallComponent } from './apicall.component';
// import { SectiondisplayComponent } from '../sectiondisplay/sectiondisplay.component';
import { DisplayComponent } from '../display/display.component';


const ApicallRoute : Routes = [
    {
        path: '', component: APIcallComponent, children:[
          {path:'display', component:DisplayComponent}
        ]
      },
      // {
      //   path: '', component: DisplayComponent
      // },

]

@NgModule({
    imports:[RouterModule.forRoot(ApicallRoute)],
    exports:[RouterModule],
})

export class ApicallRoutingModule {
    
}