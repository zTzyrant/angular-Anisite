import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CurdService } from '../shared/curd.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit.comp.html',
  styles: [
  ]
})
export class EditStudentComponent implements OnInit {
  editForm: any;
  student: any;
  constructor(
    private crudApi: CurdService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.updateStudentData();
    
    
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetStudent(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
    });  
    
    console.log(id);
  }
  get username() {
    return this.editForm.get('username');
  }
  get fullname() {
    return this.editForm.get('fullname');
  }
  get email() {
    return this.editForm.get('email');
  }
  get note() {
    return this.editForm.get('note');
  }
  updateStudentData() {
    this.editForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      fullname: [''],
      email: [''],
      note: [''],
    });
  }
  goBack() {
    this.location.back();
  }
  updateForm() {
    this.crudApi.UpdateStudent(this.editForm.value);
    Swal.fire(
      'Good job!',
      this.fullname.value + ' updated successfully',
      'success'
    )
  }
}
