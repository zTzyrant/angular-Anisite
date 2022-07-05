import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

declare function handleOrientation(event:any):any;


@Component({
  selector: 'app-ztzyrant',
  templateUrl: "./ztzyrant.html",
  styleUrls:[
    './pendragon.css',
    './bckgrdani.css',
  ]
})
export class ZtzyrantComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    handleOrientation('event');
    $('img').on('dragstart', function(event) { event.preventDefault(); });
    AOS.init();

    const checkbox = document.getElementById('checkboxzx');
    checkbox.addEventListener('change', ()=>{
      this.toggleDarkTheme();
    })

    const mybutton = document.getElementById("stickBtn");
    const topcont = document.getElementById("whoIam").offsetTop -700;
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > topcont || document.documentElement.scrollTop > topcont) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    
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
  toggleDarkTheme(): void {
    const bgmain = document.querySelector('.triton');
    const balldk = document.querySelector('.ballroll');
    const bckball = document.querySelector('.labelcx');
    const dkMode = [];
    document.body.classList.toggle('dark-theme');
    
    if(bgmain.getAttribute("style") != null){
      bgmain.removeAttribute("style");  // turn off dark mode
      balldk.setAttribute("style", "transform: translateX(0px);");
      bckball.setAttribute("style", "background-color: #333;");
      
      
      for (let i = 0; i < 15; i++) {
        dkMode[i] = document.getElementById("areaCon" + i);
      }
      for(let i = 0; i < 15; i++) {
        dkMode[i].removeAttribute("style");
        
      }
    } else{
      bgmain.setAttribute("style",  // turn on dark mode
      "background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), "+
      "url('/assets/img/star-min.jpg'); background-position: center; background-size: auto;");
      balldk.setAttribute("style", "transform: translateX(24px); background-color: #333;");
      bckball.setAttribute("style", "background-color: #d7d7d7;");
      for (let i = 0; i < 15; i++) {
        dkMode[i] = document.getElementById("areaCon" + i);
      }
      for(let i = 0; i < 15; i++) {
        dkMode[i].setAttribute("style", "background-color: rgb(25, 73, 112); z-index: 1;");
        
      }
    }
    

    
    
  }

}

