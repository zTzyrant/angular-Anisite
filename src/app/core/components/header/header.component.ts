import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { CurdService } from 'src/app/shared/curd.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-black">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-bold" routerLink="/">
          <img src="/assets/img/cli.svg" alt="" style="height: 50px; margin-right: 0.4rem;">
          <div class="waviy">
            <span style="--i: 1;">z</span>
            <span style="--i: 2;">T</span>
            <span style="--i: 3;">z</span>
            <span style="--i: 4;">y</span>
            <span style="--i: 5;">r</span>
            <span style="--i: 6;">a</span>
            <span style="--i: 7;">n</span>
            <span style="--i: 8;">t</span>
          </div>
        </a>
        <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      </div>
      <!-- Menu -->
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" routerLink="/">Home</a>
          <a class="navbar-item" routerLink="/anisite">Anisite</a>
          <a class="navbar-item" routerLink="/contactus">Contact Us</a>
          <a class="navbar-item" routerLink="/student">Student</a>
          <a class="navbar-item" *ngIf="authService.currentUser$ | async as user;">
            <button class="button is-info is-outlined" (click)="logut()">
              <i class="fa-solid fa-right-from-bracket" style="margin-right: 0.25rem; text-decoration: none;"></i>Sign Out
            </button>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');
    .waviy {
  position: relative;
}
.waviy span {
  font-family: 'Roboto Mono', monospace;
  position: relative;
  display: inline-block;
  font-size: 1.5rem;
  color: #fff;
  animation: flip 2s infinite;
  animation-delay: calc(.2s * var(--i))
}
@keyframes flip {
  0%,80% {
    transform: rotateY(360deg) 
  }
}
  `]
})
export class HeaderComponent implements OnInit {

  constructor(
    public crudApi: CurdService,
    private location: Location,
    public authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    $(document).ready(function() {

      // Check for click events on the navbar burger icon
      $(".navbar-burger").click(function() {
    
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $(".navbar-burger").toggleClass("is-active");
          $(".navbar-menu").toggleClass("is-active");
      });
    });
  }

  logut(){
    this.authService.logout().subscribe(() => {
      
      Swal.fire({
        title: 'Are you want to login again?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Redirecting!',
            'Redirecting to login page.',
            'success'
          )
          this.router.navigate(['/login']);
        } else {
          Swal.fire(
            'Logged Out!',
            'Success Logged out.',
            'success'
          )
        }
      })
    })
  }

}
