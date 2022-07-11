import { Injectable } from '@angular/core';
import { Student } from './student';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CurdService {
  studentsRef: AngularFireList<any>;
  studentRef: AngularFireObject<any>;
  constructor (private db: AngularFireDatabase){}
    
  AddStudent(student: Student){
    this.studentsRef.push({
      username: student.username,
      fullname: student.fullname,
      email: student.email,
      note: student.note,
    });
  }

  GetDb(){
    return this.db;
  }

  GetStudent(id: string){
    this.studentRef = this.db.object('students-list/' + id);
    return this.studentRef;
  }

  GetStudentsList() {
    this.studentsRef = this.db.list('students-list');
    return this.studentsRef;
  }

  UpdateStudent(student: Student) {
    this.studentRef.update({
      username: student.username,
      fullname: student.fullname,
      email: student.email,
      note: student.note,
    });
  }

  DeleteStudent(id: string) {
    this.studentRef = this.db.object('students-list/' + id);
    this.studentRef.remove();
  }
}
