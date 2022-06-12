import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

declare function handleOrientation(event:any):any;


@Component({
  selector: 'app-ztzyrant',
  template: `

  <div id="homexrd" class="triton">
    <img id="moon" class="moon unselectable" src="/assets/img/fiper/galaxy-min.png" alt="Moon">
    <img id="astro" class="astro unselectable" src="/assets/img/fiper/astropng-min.png" alt="Astro">
    <img id="rocket" class="rocket unselectable" src="/assets/img/fiper/rocket-min.png" alt="Rocket">
    <div class="contentzxt">
      <h2>Welcome To zTyrant Space.</h2>
      <div class="scrolldown"></div>
    </div> 
    <div class="contentzxt">
      <h2>Who am I?</h2>
    </div>
    <div class="contentzxt">
      <h2 onclick="darkMode();">Click On Earth</h2>
      <div class="arrow" style="margin-top: 10%;">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="contentzxt undertzx">

        <img class="astroearth" src="/assets/img/astromoon.png" alt="AstroEarth" onclick="scrollToElement('whoIam')">

    </div>
  </div> 
  
  <section id="whoIam" class="coverbgtz">
    <h1 class="title has-text-centered">Hi there!</h1>

    <div class="timeline">

      <div class="centerunder"  data-aos="fade-up" data-aos-offset="300">
        <div class="contentxz">
          <div class="underflex">
            <h2>About Me</h2>
          </div>
        </div>
      </div>

      <div class="containertxz left">
        <div class="contentxz" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div class="flexi-container">
            <div class="underflex">
              <h2>Who am I?</h2>
              <p>My name is zTzyrant a.k.a Katachi and I am a website developer.</p>
            </div>
            <div class="underflex">
              <i class="fa-solid fa-question" style="font-size: 8rem;"></i>
            </div>        
          </div>
        </div>
      </div>

      <div class="containertxz right">
        <div class="contentxz" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div class="flexi-container">
            <div class="underflex">
            <i class="fa-solid fa-user-astronaut" style="font-size: 8rem;"></i>
            </div>
            <div class="underflex">
              <h2>Status</h2>
              <p>I'm a college student. I don't study harder but study with fun. 
                if there's a course that I'm not interested in, it's really annoying 
                when I'm forced to study for that course</p>
            </div>
          </div>
        </div>
      </div>

      <div class="containertxz left">
        <div class="contentxz" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div class="flexi-container">
            <div class="underflex">
              <!-- Edit Disini -->
              <i class="fa-regular fa-window-restore" style="font-size: 8rem; margin-top: 10%;"></i>
            </div>
            <div class="underflex">
              <!-- Edit Disini -->
              <h2>This Website?</h2>
              <p>ahh this website I made for fun only. there is no special reason for making this website. 
                This website is based on Angular 13 with minimalistic settings. In the future, this website 
                will have many features that I will add for my learning needs.</p>
            </div>
          </div>
        </div>
      </div>
        
        <div class="containertxz right">
          <div class="contentxz" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div class="flexi-container">
              <div class="underflex">
                <!-- Edit Disini -->
                <i class="fa-solid fa-cubes" style="font-size: 8rem; margin-top: 10%;"></i>
              </div>
              <div class="underflex">
                <!-- Edit Disini -->
                <h2>What Can I Do?</h2>
                <p>i can actually do a lot of programming stuff, but sometimes i 
                  feel busy and not excited to do programming. but I can do some 
                  things like make a website, build bots and do penetration tests.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="centerunder"  data-aos="fade-up" data-aos-offset="300">
          <div class="contentxz">
            <div class="underflex">
              <h2>Web Framework Knowledge</h2>
            </div>
          </div>
        </div>

        <div class="containertxz left">
          <div class="contentxz" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div class="flexi-container">
              <div class="underflex">
                <!-- Edit Disini -->
                <i class="fa-brands fa-angular" style="font-size: 8rem; margin-top: 10%; color: red;"></i>
              </div>
              <div class="underflex">
                <!-- Edit Disini -->
                <h2>Angular</h2>
                <p style="font-style: italic;">Expert process: 76%</p>
                <p>Angular is a development platform, built on TypeScript. As a platform, 
                  Angular includes: A component-based framework for building scalable web applications 
                  <a href="https://angular.io/guide/what-is-angular"
                   style="font-style: italic; color: #fff;">Learn more.</a></p>
              </div>
            </div>
          </div>
        </div>

        <div class="containertxz right">
          <div class="contentxz" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div class="flexi-container">
              <div class="underflex">
                <!-- Edit Disini -->
                <i class="fa-brands fa-laravel" style="font-size: 8rem; margin-top: 10%; color: #f05340;"></i>
              </div>
              <div class="underflex">
                <!-- Edit Disini -->
                <h2>Laravel</h2>
                <p style="font-style: italic;">Expert process: 40% (Dropped)</p>
                <p>Laravel is a web application framework with expressive, elegant syntax. 
                  Laravel aims to make the development process a pleasing one for the developer 
                  without sacrificing application functionality. Happy developers make the best code. 
                  <a href="https://laravel.com/docs/4.2/introduction"
                   style="font-style: italic; color: #fff;">Learn more.</a></p>
              </div>
            </div>
          </div>
        </div>

        <div class="containertxz left">
          <div class="contentxz" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div class="flexi-container">
              <div class="underflex">
                <!-- Edit Disini -->
                <img src="https://static.djangoproject.com/img/logos/django-logo-negative.png" alt="Django" style="max-width: 8rem; margin-top: 10%;">
              </div>
              <div class="underflex">
                <!-- Edit Disini -->
                <h2>Django</h2>
                <p style="font-style: italic;">Expert process: 20% (Dropped)</p>
                <p>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. 
                  <a href="https://www.djangoproject.com/"
                   style="font-style: italic; color: #fff;">Learn more.</a></p>
              </div>
            </div>
          </div>
        </div>

        <div class="containertxz right">
          <div class="contentxz" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div class="flexi-container">
              <div class="underflex">
                <!-- Edit Disini -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg" alt="Rails" style="max-width: 8rem; margin-top: 10%;">
              </div>
              <div class="underflex">
                <!-- Edit Disini -->
                <h2>Ruby On Rails</h2>
                <p style="font-style: italic;">Expert process: 53% (Seek)</p>
                <p>Rails is a web application development framework written in the Ruby programming language. 
                  It is designed to make programming web applications easier by making assumptions about what every developer needs to get started.
                  <a href="https://guides.rubyonrails.org/getting_started.html"
                   style="font-style: italic; color: #fff;">Learn more.</a></p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="centerunder"  data-aos="fade-up" data-aos-offset="300">
          <div class="contentxz">
            <div class="underflex">
              <h2>Programing Language Knowledge</h2>
            </div>
          </div>
        </div>
        
        <div class="containertxz left">
          <div class="contentxz" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div class="flexi-container">
              <div class="underflex">
                <!-- Edit Disini -->
                <i class="fa-brands fa-python" style="font-size: 8rem; margin-top: 10%; color: #183153;"></i>
              </div>
              <div class="underflex">
                <!-- Edit Disini -->
                <h2>Python</h2>
                <p style="font-style: italic;">Expert process: 60% (Seek)</p>
                <p>Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. 
                  Its high-level built in data structures, combined with dynamic typing 
                  and dynamic binding.
                  <a href="https://www.python.org/doc/essays/blurb/"
                   style="font-style: italic; color: #fff;">Learn more.</a></p>
              </div>
            </div>
          </div>
        </div>

        <div class="containertxz right">
          <div class="contentxz" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div class="flexi-container">
              <div class="underflex">
                <!-- Edit Disini -->
                <i class="fa-brands fa-java" style="font-size: 8rem; margin-top: 10%; color: #5382a1;"></i>
              </div>
              <div class="underflex">
                <!-- Edit Disini -->
                <h2>Java</h2>
                <p style="font-style: italic;">Expert process: 80%</p>
                <p>Java is a programming language and computing platform first released by Sun Microsystems in 1995. 
                  It has evolved from humble beginnings to power a large share of today's digital world, by providing
                   the reliable platform upon which many services and applications are built. 
                  <a href="https://www.java.com/en/download/help/whatis_java.html"
                   style="font-style: italic; color: #fff;">Learn more.</a></p>
              </div>
            </div>
          </div>
        </div>

        <div class="containertxz left">
          <div class="contentxz" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div class="flexi-container">
              <div class="underflex">
                <!-- Edit Disini -->
                <i class="fa-solid fa-c" style="font-size: 8rem; margin-top: 10%; color: #fff;"></i>
              </div>
              <div class="underflex">
                <!-- Edit Disini -->
                <h2>C</h2>
                <p style="font-style: italic;">Expert process: 50% (Seek)</p>
                <p>C is a procedural programming language. It was initially developed by Dennis Ritchie in the year 1972. 
                  It was mainly developed as a system programming language to write an operating system. The main 
                  features of the C language include low-level memory access, a simple set of keywords, and a clean style.
                  <a href="https://www.geeksforgeeks.org/c-language-set-1-introduction/"
                   style="font-style: italic; color: #fff;">Learn more.</a></p>
              </div>
            </div>
          </div>
        </div>  

        <div class="containertxz right">
          <div class="contentxz" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div class="flexi-container">
              <div class="underflex">
                <!-- Edit Disini -->
                <i class="fa-solid fa-gem" style="font-size: 8rem; margin-top: 10%; color: red;"></i>
              </div>
              <div class="underflex">
                <!-- Edit Disini -->
                <h2>Ruby</h2>
                <p style="font-style: italic;">Expert process: 20% (Seek)</p>
                <p>Ruby is a language of careful balance. Its creator, Yukihiro “Matz” Matsumoto, 
                  blended parts of his favorite languages (Perl, Smalltalk, Eiffel, Ada, and Lisp) 
                  to form a new language that balanced functional programming with imperative programming.
                  <a href="https://www.ruby-lang.org/en/about/"
                   style="font-style: italic; color: #fff;">Learn more.</a></p>
              </div>
            </div>
          </div>
        </div>

    </div> 


  </section>
  `,
  styles: [`
    .unselectable{
      user-drag: none; 
      user-select: none;
      -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      pointer-events: none;
    }
    .astroearth{
      cursor: pointer;
    }
    .coverbgtz{
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      height: 100%;
      box-sizing: border-box;
      top: 5%;
    }
    .title{
      color:#75b0e0;
      font-size: 40px;
      text-shadow: 2px 2px #24345c, 3px 3px 5px blue;;
    }
    
    .flexi-container {
      display: flex;
      flex-direction: row;
    }
    .underflex {
      margin: 10px;
    }
    .arrow{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
  }
  .arrow span{
      display: block;
      width: 30px;
      height: 30px;
      border-bottom: 5px solid #06A8FF;
      border-right: 5px solid #06A8FF;
      transform: rotate(45deg);
      margin: -10px;
      animation: animatezx 2s infinite;
  }
  .arrow span:nth-child(2){
      animation-delay: -0.2s;
  }
  .arrow span:nth-child(3){
      animation-delay: -0.4s;
  }
  @keyframes animatezx {
      0%{
          opacity: 0;
          transform: rotate(45deg) translate(-20px,-20px);
      }
      50%{
          opacity: 1;
      }
      100%{
          opacity: 0;
          transform: rotate(45deg) translate(20px,20px);
      }
  }

    /* Responsive layout - makes a one column layout instead of a two-column layout */
    @media (max-width: 800px) {
      .flexi-container {
        flex-direction: column;
      }
    }
  `],
  styleUrls:[
    './pendragon.css',
  ]
})
export class ZtzyrantComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    handleOrientation('event');
    $('img').on('dragstart', function(event) { event.preventDefault(); });
    AOS.init();
  }

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: any) {
    
    const moon = document.getElementById('moon');
    const astro = document.getElementById("astro");
    const rocket = document.getElementById("rocket");
    const  x = - e.clientX/30,
      y = - e.clientY/30,
      mx = - e.clientX/25,
      my = - e.clientY/25,
      rx = - e.clientX/20,
      ry = - e.clientY/20;
      moon.style.transform = "translate3d(" + x + "px" + ", " + y + "px, 0)";
      astro.style.transform = "translate3d(" + mx + "px" + ", " + my + "px, 0)";
      rocket.style.transform = "translate3d(" + rx + "px" + ", " + ry + "px, 0)";

      
  }
  
  
}

