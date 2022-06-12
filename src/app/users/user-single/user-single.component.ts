import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
@Component({
  selector: 'app-user-single',
  template: `
    <section class="section">
      <div class="container">


        <div class="card has-text-centered" *ngIf="user">
          <img [src]="user.avatar_url" class="avaCustm">
          <h2><strong>Username:</strong> {{user.login}}</h2>
          <h2><strong>Something:</strong> {{user.node_id}}</h2>
        </div>
      </div>
    </section>

  `,
  styles: [`
    .avaCustm{
      height: 460px;
    }
  `]
})
export class UserSingleComponent implements OnInit {
  user: any;

  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const username = params['username'];

      this.userService
      .getUser(username)
      .subscribe(user =>  this.user = user);
    });
  }

}
