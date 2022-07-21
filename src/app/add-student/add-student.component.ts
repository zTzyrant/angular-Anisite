import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CurdService } from '../shared/curd.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-student',
  templateUrl: "./regist.html",
  styles: [
  ]
})
export class AddStudentComponent implements OnInit {
  public studentForm: UntypedFormGroup;
  x: Subscription;
  trte: boolean = true;
  constructor(
    public crudApi: CurdService,
    public fb: UntypedFormBuilder,
    private location: Location
  ) {}
  ngOnInit() {
    this.crudApi.GetStudentsList();
    this.studenForm();
  }
  studenForm() {
    this.studentForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      fullname: [''],
      email: [''],
      note: [''],
    });
  }
  get username() {
    return this.studentForm.get('username');
  }
  get fullname() {
    return this.studentForm.get('fullname');
  }
  get email() {
    return this.studentForm.get('email');
  }
  get note() {
    return this.studentForm.get('note');
  }

  ResetForm() {
    this.studentForm.reset();
  }

  goBack() {
    this.location.back();
  }
  
  submitStudentData() {
    this.x = this.crudApi.GetStudentsList().valueChanges().subscribe(data =>{
      for (let index = 0; index < data.length; index++) {
        if(data[index].username == this.username.value){
          this.trte = false;
        }
      } 
      // Setelah kurang lebih 3 hari cara terbaik untuk validasi username dengan
      // menambahkan library rxjs lalu menggunakan fungsi Subscription untuk dapat
      // menghentikan proses subscribe pada data

      // NOTE: 
      // data yang di olah menggunakan metode Subscribe dapat direturn 
      // tetapi tidak dapat digunakan dengan baik
      if(this.trte == true){
        this.crudApi.AddStudent(this.studentForm.value);
        Swal.fire(
          'Good job!',
          this.fullname.value +' has added to database!',
          'success'
        )
        this.ResetForm();
        this.x.unsubscribe();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Username Already Taken!',
        })
        this.trte = true;
        this.x.unsubscribe();
      }
    })
  }
}