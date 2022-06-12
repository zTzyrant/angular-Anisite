import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="texted titlecust">Welcome To Anisite</h1>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .texted {
      background-color: #000;
      color: #fff;
      display: inline-block;
      padding-left: 8px;
      padding-right: 8px;
      text-align: center;
    }
    .titlecust {
      padding-left: 10px;
      padding-right: 10px;
      font-size: 40px;
    }
    .hero {
      background-image: url('/assets/img/bgurara.png') !important;
      background-size: cover;
      background-position: center center;
      -webkit-filter: grayscale(30%); /* Safari 6.0 - 9.0 */
      filter: grayscale(30%);
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
