import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CurdService } from '../shared/curd.service';
import { Student } from '../shared/student';
import { Location } from '@angular/common';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student.html',
  styles: [``]
})
export class StudentListComponent implements OnInit {
  // user
  user$ = this.authService.currentUser$;

  something: any;
  p: number = 1;
  Student: Student[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  
  constructor(
    public crudApi: CurdService,
    private location: Location,
    public authService: AuthService,
    private router: Router,
    ){ }

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetStudentsList(); 
    s.snapshotChanges().subscribe(data => {
      this.Student = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Student.push(a as Student);
      })
    })
  }

  logut(){
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    })
  }

  goback(){
    this.location.back();
  }

  dataState() {     
    this.crudApi.GetStudentsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length > 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      }
    })
    
  }

  deleteStudent(student) {
    Swal.fire({
      title: 'Are sure you want to delete this student?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.crudApi.DeleteStudent(student.$key)
        Swal.fire(
          'Deleted!',
          student.fullname +' data has been deleted.',
          'success'
        )
      }
    })
  } 
}