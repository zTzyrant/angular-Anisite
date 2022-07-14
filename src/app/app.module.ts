import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoreModule } from './core/core.module';
import { ZtzyrantComponent } from './ztzyrant/ztzyrant.component';
import { MemberComponent } from './secret/member/member.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentListComponent } from './student-list/student-list.component';
// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// end toastr
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentmainComponent } from './studentmain/studentmain.component';
import {AngularFireModule} from '@angular/fire/compat';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './admin/login/login.component';
@NgModule({ // Deklarasi untuk app disini
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    ZtzyrantComponent,
    MemberComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentListComponent,
    StudentmainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    NgxPaginationModule,
    RouterModule,
    ReactiveFormsModule,SweetAlert2Module.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
