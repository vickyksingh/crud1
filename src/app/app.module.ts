import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './home/department/department.component';
import { ContactComponent } from './contact/contact.component';
import { GelleryComponent } from './gellery/gellery.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './teacher/student/student.component';
import { UnitComponent } from './unit/unit.component';
import { AddPipe } from './add.pipe';
import { firstUpperCase } from './Firstupper.pipe';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { MyservService } from './reactive-forms/myserv.service';
import { ServiceCenterComponent } from './contact/service-center/service-center.component';
import { HoverDirective } from './hover.directive';
import { CustomDirective } from './custom.directive';
import { NotfoundComponent } from './notfound/notfound.component';
import { LibreryComponent } from './teacher/librery/librery.component';
import { SectionsComponent } from './teacher/sections/sections.component';
import { ProfesorsComponent } from './teacher/profesors/profesors.component';
import { CourceDetailsComponent } from './teacher/cource-details/cource-details.component';
import { DetailsComponent } from './details/details.component';
import { SectiondisplayComponent } from './sectiondisplay/sectiondisplay.component';
// import { APIcallComponent } from './apicall/apicall.component';
// import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
   
    AppComponent,
    HomeComponent,
    DepartmentComponent,
    ContactComponent,
    GelleryComponent,
    TeacherComponent,
    StudentComponent,
    UnitComponent,
    AddPipe,
    firstUpperCase,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    ServiceCenterComponent,
    HoverDirective,
    CustomDirective,
    NotfoundComponent,
    LibreryComponent,
    SectionsComponent,
    ProfesorsComponent,
    CourceDetailsComponent,
    DetailsComponent,
    SectiondisplayComponent,
    // DisplayComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MyservService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    console.log('hi app module')
  }
}
