window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(event) {
    var moon = document.getElementById('moon');
    var astro = document.getElementById("astro");
    var rocket = document.getElementById("rocket");
    var y = -event.beta;
      z = -event.gamma;
      if (y < -90) { y = -90};
      if (y >  90) { y =  90};
      if (z < -90) { z = -90};
      if (z >  90) { z =  90};
      
      moon.style.transform = "translate3d(" + 0 + "px" + ", " + (y-10) + "px, "+ (z-10) +"px)";
      astro.style.transform = "translate3d(" + 0 + "px" + ", " + (y-10) + "px, "+ (z-10) +"px)";
      rocket.style.transform = "translate3d(" + 0 + "px" + ", " + (y-10) + "px, "+ (z-10) +"px)";
}


// window.onscroll = function() {cleanerS()} ;


// var whoIam = document.getElementById("whoIam");
// function cleanerS(){
  
//   if (window.pageYOffset >= 1132) {
//     location.href='#';  }
// }


var scrollToElement = function(id){
  document.getElementById(id).scrollIntoView();
}

var backTopFunction = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}