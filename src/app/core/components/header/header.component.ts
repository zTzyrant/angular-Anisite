import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-black">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-bold" routerLink="/">
        <div class="waviy">
   <span style="--i:1">z</span>
   <span style="--i:2">T</span>
   <span style="--i:3">z</span>
   <span style="--i:4">y</span>
   <span style="--i:5">r</span>
   <span style="--i:6">a</span>
   <span style="--i:7">n</span>
   <span style="--i:8">t</span>
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
