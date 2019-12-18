import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GelleryComponent } from './gellery/gellery.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { UnitComponent } from './unit/unit.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LibreryComponent } from './teacher/librery/librery.component';
import { ProfesorsComponent } from './teacher/profesors/profesors.component';
import { SectionsComponent } from './teacher/sections/sections.component';
import { StudentComponent } from './teacher/student/student.component';
import { CourceDetailsComponent } from './teacher/cource-details/cource-details.component';
import { DetailsComponent } from './details/details.component';
import { SectiondisplayComponent } from './sectiondisplay/sectiondisplay.component';
import { APIcallComponent } from './apicall/apicall.component';


const routes: Routes = [ 

  // {
  //   path:'', redirectTo:'home', pathMatch:'full'
  // },
  // {
  //   path: '', component: HomeComponent
  // },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'home/:id', component: DetailsComponent
  },
  {
    path: 'contact' , component: ContactComponent
  },
  {
    path: 'gellery', component: GelleryComponent
  },
  {
    path: 'reactive', component:ReactiveFormsComponent
  },
  {
    path: 'teacher', component: TeacherComponent, children:[
      // {
      //   path: '', component: TeacherComponent
      // },
      {
        path: 'librery', component: LibreryComponent
      },
      {
        path: 'teacher/librery/:id', component: CourceDetailsComponent
      },
      {
        path: 'profesor', component:ProfesorsComponent
      },
      {
        path: 'section', component: SectionsComponent,
      },
      // {
      //   path: 'section/:id', component: SectiondisplayComponent,
      // },
      {
        path: 'student', component: StudentComponent
      }
    ] 
  },
  {
    path: 'template', component:TemplateFormsComponent
  },
  {
    path: 'unit', component: UnitComponent
  },
  {
    path: 'unit/:id', component: SectiondisplayComponent
  },
  
  {
    path: 'apicall', loadChildren: 'src/app/apicall/apicall.module#ApicallModule'
  },

  {
    path:'**', component:NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
