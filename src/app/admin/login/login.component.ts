import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl:'./admin-page.html',  
  styleUrls: ['./admin-page.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('',Validators.required),
  });

  constructor(private authService: AuthService,
      private router: Router,
    ) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  submit(){
    if(!this.loginForm.valid){
      return;
    }

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe(() => {
      this.router.navigate(['/view-students']);
    })
  }
}
