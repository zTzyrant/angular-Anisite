import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
@Component({
  selector: 'app-user-list',
  template: `
  <section class="section" style="height: 100vh;">
    <div class="container">
      <div class="columns is-multiline" *ngIf="users">
        <div class="column is-4" *ngFor="let user of users | async">
        <div class="card">
          <a routerLink="../users/{{user.username}}">
            <div class="card-content">
              {{user.username}}
            </div>
          </a>
        </div>
        </div>
      </div>
    </div>
  </section>
  `,
  styles: [
  ]
})
export class UserListComponent implements OnInit {
  users: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
