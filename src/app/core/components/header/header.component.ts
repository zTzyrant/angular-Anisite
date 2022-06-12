import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-black">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-bold" routerLink="/">
        <img src="/assets/img/MoshedBYphotomosh.gif" />
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
          <a class="navbar-item" routerLink="/contact">Contact</a>
          <a class="navbar-item" routerLink="/users">Users</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @media only screen and (max-width: 1025px) { 

    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

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

}
