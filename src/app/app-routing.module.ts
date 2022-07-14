import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './secret/member/member.component';
import { ZtzyrantComponent } from './ztzyrant/ztzyrant.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentmainComponent } from './studentmain/studentmain.component';
// admin component
import { LoginComponent } from './admin/login/login.component';
const routes: Routes = [{
  path:'',
  component: ZtzyrantComponent
  }, { 
    path: 'student',
    component: StudentmainComponent ,
    pathMatch: 'full'
  },{ 
    path: 'register-student',
    component: AddStudentComponent ,
  }, { 
    path: 'view-students', 
    component: StudentListComponent ,
  }, {
    path: 'edit-student/:id', 
    component: EditStudentComponent ,
  }, {
    path:'anisite',
    component: HomeComponent,
    pathMatch: 'full'
  }, {
    path:'contactus',
    component: ContactusComponent,
    pathMatch: 'full'
  }, {
    path:'secret',
    component: MemberComponent,
    pathMatch: 'full'
  }, {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }, {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
