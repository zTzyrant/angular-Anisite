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

function openModal() {
  var modal = document.querySelector('.modal');
  modal.classList.add('is-active');
}

function closeModal() {
  var modal = document.querySelector('.modal');
  modal.classList.remove('is-active');
}

function starX() {
  s = document.getElementById('star'); 

  var st1 = document.getElementById("c1x23r1");
  var st2 = document.getElementById("c1x23r2");
  var st3 = document.getElementById("c1x23r3");
  var st4 = document.getElementById("c1x23r4");
  var st5 = document.getElementById("c1x23r5");

  if(s.value == "1"){
    st1.setAttribute("style", "color: gold;");
    st2.removeAttribute("style");
    st3.removeAttribute("style");
    st4.removeAttribute("style");
    st5.removeAttribute("style");
  }else if(s.value == '2'){
    st1.setAttribute("style", "color: gold;");
    st2.setAttribute("style", "color: gold;");
    st3.removeAttribute("style");
    st4.removeAttribute("style");
    st5.removeAttribute("style");
  }else if(s.value == '3'){
    st1.setAttribute("style", "color: gold;");
    st2.setAttribute("style", "color: gold;");
    st3.setAttribute("style", "color: gold;");
    st4.removeAttribute("style");
    st5.removeAttribute("style");
  }else if(s.value == '4'){
    st1.setAttribute("style", "color: gold;");
    st2.setAttribute("style", "color: gold;");
    st3.setAttribute("style", "color: gold;");
    st4.setAttribute("style", "color: gold;");
    st5.removeAttribute("style");
  }else if(s.value == '5'){
    st1.setAttribute("style", "color: gold;");
    st2.setAttribute("style", "color: gold;");
    st3.setAttribute("style", "color: gold;");
    st4.setAttribute("style", "color: gold;");
    st5.setAttribute("style", "color: gold;");
  } else{
    st1.removeAttribute("style");
    st2.removeAttribute("style");
    st3.removeAttribute("style");
    st4.removeAttribute("style");
    st5.removeAttribute("style");
  }
}


function showstar(num){
  console.log(num);
  for (let index = 1; index <= num; index++) {
    var idstar = "strc1x23r" + index;
    document.getElementById(idstar).setAttribute("style", "color: gold;");
  }
}

function logging(){
  console.log(11);
}

function templeft(){
  document.getElementById('textareatr').onkeyup = function () {
    document.getElementById('countrv').innerHTML = "Characters left: " + (250 - this.value.length);
    
  };
}