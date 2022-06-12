import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  template: `
    <section class="hero is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact Us!</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">

        <form (ngSubmit)="submitForm()" #contactForm="ngForm">
          <!--- Name --->
          <div class="field">
            <label for="name" class="label">Name</label>
            <input type="text" name="name" class="input" [(ngModel)]="name" #nameInput="ngModel" required>
            
            <div class="help is-error is-danger" *ngIf="nameInput.invalid && nameInput.touched">*Please Fill This Field</div>
          </div>

          <!--- Email --->
          <div class="field">
            <label for="email" class="label">Email</label>
            <input type="email" name="email" class="input" [(ngModel)]="email" #emailInput="ngModel" required email>

            <div class="help is-error is-danger" *ngIf="emailInput.invalid && emailInput.touched">*Please Fill Email Field</div>
          </div>

          <!--- Message --->
          <div class="field">
            <label for="msg" class="label">Message</label>
            <textarea name="msg" class="textarea" [(ngModel)]="msg"></textarea>
          </div>
          
          <!--- Submit --->
          <div class="field">
            <button type="submit" class="button is-info is-primary" [disabled]="contactForm.invalid">
              Send!
            </button>
          </div>

        </form>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class ContactusComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;
  msg: string | undefined;

  constructor() { }

  ngOnInit(): void {}

  submitForm(){
    const message = `Massage: ${this.msg} From: ${this.name}`;
    alert(message);
  }

}
