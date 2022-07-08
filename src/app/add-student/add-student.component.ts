import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurdService } from '../shared/curd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-student',
  templateUrl: "./regist.html",
  styles: [
  ]
})
export class AddStudentComponent implements OnInit {
  public studentForm: FormGroup;
  somthing: any;
  avilableor: boolean = true;
  data: any;
  constructor(
    public crudApi: CurdService,
    public fb: FormBuilder,
  ) {}
  ngOnInit() {
    this.crudApi.GetStudentsList();
    this.studenForm();
    this.validusername();
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
  validusername(){
    this.crudApi.GetStudentsList().valueChanges().subscribe(data => { 
      for (let counter = 0; counter < data.length; counter++) {
        if("dhito" === data[counter].username){
          this.avilableor = false;
        }
      }
    })

  }
  submitStudentData() {
    // this.validusername();
    // console.log(this.avilableor);
    //if(this.avilableor == false){
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: 'Username Already taken!',
      // })
    //} else {
      this.crudApi.AddStudent(this.studentForm.value);
      Swal.fire('Good job!',
      'Username: ' + this.studentForm.controls['username'].value + ' successfully added!', 'success')
      this.ResetForm();
   // }
    
  }
}