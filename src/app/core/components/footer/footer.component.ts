import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
        <!-- Copyright symbol of company -->
      <div class="content has-text-centered">
        <p>Copyright © zTzyrant</p>
  
      </div>
  
      <!-- Three columns created using columns class of Bulma -->
      <div class="columns">
          <!-- Column 1 -->
        <div class="column">
          <h4 class="bd-footer-title 
                    has-text-weight-medium
                    has-text-weight-bold
                    has-text-left">
            zTzyrant Cyber Art
          </h4>
          <p class="bd-footer-link 
                    has-text-left">
                    zTzyrant is a website developer that uses various 
                    Web Application Frameworks. 
                    The purpose of making this website is to be a 
                    learning material to develop knowledge about 
                    web-based programming.
          </p>
        </div>
      
        <!-- Column 2 -->
        <div class="column">
          <h4 class="bd-footer-title 
                    has-text-weight-medium 
                    has-text-weight-bold
                    has-text-justify">
            Explore
          </h4>
          <!-- Column 2 lists with links -->
          <p class="bd-footer-link">
            <a routerLink="/anisite">
              <span class="icon-text">
                <span>Anisite</span>
              </span>
            </a>
              <br />
              <a routerLink="/student">
                  <span class="icon-text">
                    <span>Student</span>
                  </span>
                </a>
              <br />
          </p>
        </div>
      
        <!-- Column 3 -->
        <div class="column">
          <h4 class="bd-footer-title
                    has-text-weight-medium
                    has-text-weight-bold
                    has-text-justify">
            Contact us
          </h4>
          <!-- Column 3 lists with links -->
          <p class="bd-footer-link">
              <a href="mailto:ztzyrant@gmail.com">
                  <span class="icon-text">
                    <span>Email</span>
                  </span>
                </a>
              <br />
              <a href="tel:+6282130306677">
                  <span class="icon-text">
                    <span>Call Us</span>
                  </span>
                </a>
              <br />
              <a href="https://www.instagram.com/me.zein_/">
                  <span class="icon-text">
                    <span>Chat with us!</span>
                  </span>
                </a>
          </p>
      
        </div>
      </div>
    </footer>
  `,
  styles: [`
      footer{
        color: #eee; 
        background: #222225;
      }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
