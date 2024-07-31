
gsap.to('.info #circle-containers',{
   x: 980,
   
   yoyo: true,
   duration: 2,
   delay: 8.5,
   ease: 'elastic',
})



gsap.to(' #rock',{
  x:300,
  y:1800,

  
    duration: 20,
    rotateZ:360,
  delay: 0,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rock',{
  x:400,
  y:-380,

  
    duration: 10,
  delay: 20,
  
  
  rotateZ:0,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rock',{
  x:-100,
  y: 980,
  
    duration: 10,
    rotateZ:360,
  delay: 30,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rock',{
  x:500,
  y: -380,
  
    duration: 10,
  delay: 40,
  rotateZ:0,
  
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rock',{
  x:300,
  y:1800,

  
    duration: 20,
    rotateZ:360,
  delay: 50,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rock',{
  x:400,
  y:-380,

  
    duration: 10,
  delay: 70,
  
  
  rotateZ:0,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rock',{
  x:-100,
  y: 980,
  
    duration: 10,
    rotateZ:360,
  delay: 80,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rock',{
  x:500,
  y: -380,
  
    duration: 10,
  delay: 90,
  rotateZ:0,
  
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rock',{
  x:300,
  y:1800,

  
    duration: 20,
    rotateZ:360,
  delay: 100,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rock',{
  x:400,
  y:-380,

  
    duration: 20,
  delay: 120,
  
  
  rotateZ:0,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rock',{
  x:-100,
  y: 980,
  
    duration: 10,
    rotateZ:360,
  delay: 130,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rock',{
  x:500,
  y: -380,
  
    duration: 10,
  delay: 140,
  rotateZ:0,
  
  repeat:0,
  ease: 'ease-in',
})


gsap.from('#string0',{
  opacity: 0,
  duration: 3.7,
  delay: 9.5,
  y:50,
})
gsap.to('#space',{
  opacity: 0,
  duration: 3,
  delay: 10.5,
  y: 80,
  
  
  
 
  
})

gsap.from('nav',{
  opacity: 0,
  duration: 3.7,
  delay: 9.5,
  y:50, 
})

gsap.from('#inf',{
    opacity: 0,
    duration: 3.7,
   
    delay: 8.8,
    y:50,
    
})
gsap.from('.harry h2',{
  opacity: 0,
  duration: 3.7,
 
  delay: 9.5,
  y:50,
  
})
gsap.from('.para p',{
  opacity: 0,
  duration: 3.7,
 
  delay: 9.4,
  y:50,
  
})
gsap.from('.para #profilepic ',{
  opacity: 0,
  duration: 5,
 
  delay: 9.3,
  y:50,
  
})



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function pageslide (){
 var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
}


  gsap.from('.heading h1',{
    y:30,
    scaleX : 2,
    x: -110,
  opacity:0,
    duration: 1,
   repeat:-1,
 
  delay: 2,
  stagger: 0.3,


  });
function pageswipe (){
  var swiper = new Swiper(".yourSwiper", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
gsap.to('.topic #three',{
   rotate: 360,
   duration: 1,
   yoyo: true,
   repeat: -1,
   delay: 2,
});
gsap.to('.topic #five',{
  rotateX: -180,
  duration: 1,
  yoyo: true,
  repeat: -1,
  delay: 2,
});
gsap.to('.topic #one',{
  x: 280,
  y: 380,
  duration: 1,
  yoyo: true,
  repeat: 3,
  delay: 2,
});
gsap.to('.topic #six',{
  x: -280,
  y: 380,
  duration: 1,
  yoyo: true,
  repeat: 3,
  delay: 2,
});

gsap.to('#GOLA1',{
 x:600,
 
  duration: 1,
  
  ease: "power4.in",
  repeat: 0,
  delay: 6.1,
  
});
gsap.to('#GOLA1',{
  rotateZ:360,
  repeat:-1,
  duration:10,
  ease:'linear',
  delay:0,
   
 });
gsap.to('#GOLA1',{

   y: 450,
   duration: 1,
   
   ease: 'elastic',
   repeat: 0,
   delay: 8.4,
 });
gsap.to('#GOLA2',{
 x:630,

  duration: 1,
  
  ease: "power4.in",
  repeat: 0,
  delay: 5.8,
});
gsap.to('#GOLA2',{
  rotateZ:360,
  repeat:-1,
  duration:10,
  ease:'linear',
  delay:0,
   
 });
gsap.to('#GOLA2',{

   y: 440,
   duration: 1,
   
   ease: 'elastic',
   repeat: 0,
   delay: 8.3,
 });
gsap.to('#GOLA3',{
 x:690,
 
  duration: 1,
  
  ease: "power4.in",
  repeat: 0,
  delay: 5.5,
});
gsap.to('#GOLA3',{
  rotateZ:360,
  repeat:-1,
  duration:10,
  ease:'linear',
  delay:0,
   
 });
gsap.to('#GOLA3',{

   y: 430,
   duration: 1,
   
   ease: 'elastic',
   repeat: 0,
   delay: 8.2,
 });
gsap.to('#GOLA4',{
 x:780,
 
  duration: 1,
  
  ease: "power4.in",
  repeat: 0,
  delay: 5.2,
});
gsap.to('#GOLA4',{
  rotateZ:360,
  repeat:-1,
  duration:10,
  ease:'linear',
  delay:0,
   
 });
gsap.to('#GOLA4',{
 
   y: 430,
   duration: 1,
   
   ease: 'elastic',
   repeat: 0,
   delay: 8.1,
 });
gsap.to('#GOLA5',{
 x:830,
 
  duration: 1,

  ease: "power4.in",
  repeat: 0,
  delay: 4.9,
});
gsap.to('#GOLA5',{
  rotateZ:360,
  repeat:-1,
  duration:10,
  ease:'linear',
  delay:0,
   
 });
gsap.to('#GOLA5',{
  
   y: 360,
   duration: 1,
 
   ease: 'elastic',
   repeat: 0,
   delay: 8.0,
 });
gsap.to('#GOLA6',{
 x:1045,
 
  duration: 1,
  
  ease: "power4.in",
  repeat: 0,
  delay: 4.6,
});
gsap.to('#GOLA6',{
 rotation:45,
 rotation:-45,
  repeat:-1,
  duration:10,
  ease:'linear',
  delay:0,

});
gsap.to('#GOLA6',{
 
   y: 360,
   duration: 1,
   
   ease: 'elastic',
   repeat: 0,
   delay: 7.9,
 });
gsap.to('#GOLA7',{ //sun
 x:330  ,
  
  duration: 1,
  
  ease: "power4.in",
  repeat: 0,
  delay: 6.4 ,
});
gsap.to('#GOLA7',{
  rotateZ:360,
  repeat:-1,
  duration:65,
  ease:'linear',
  delay:0,
   
 });
gsap.to('#GOLA7',{ //sun
  
   y: 360,
   duration: 1,
   
   ease: 'elastic',
   repeat: 0,
   delay: 8.5,
 });
gsap.to('#GOLA8',{
 x:1360,

  duration: 1,
  ease: "power4.in",
  repeat: 0,
  delay: 4.3,
});
gsap.to('#GOLA8',{
  rotateZ:360,
  repeat:-1,
  duration:19,
  ease:'linear',
  delay:0,
   
 });
gsap.to('#GOLA8',{
  
   y: 370,
   duration: 1,
 
   ease: 'elastic',
   repeat: 0,
   delay: 7.7,
 });
gsap.to('#GOLA9',{
 x:1500,
 
  duration: 1,
  
  ease: "power4.in",
  repeat: 0,
  delay: 4,
});
gsap.to('#GOLA9',{
  rotateZ:360,
  repeat:-1,
  duration:10,
  ease:'linear',
  delay:0,
   
 });
gsap.to('#GOLA9',{ //sun
 
   y: 380,
   duration: 1,
   
   ease: 'elastic',
   repeat: 0,
   delay: 7.6,
 });
 gsap.to('#blade1',{
  rotateZ: 360,
  duration: 3,
  repeat: -1,
  ease: 'linear',

});
gsap.to('#blade2',{
  rotateZ: 360,
  duration: 3,
  repeat: -1,
  ease: 'linear',

});

var path = "M 10 100 Q 500 100 1350 100"
var finalPath = "M 10 100 Q 500 100 1350 100"
var string = document.querySelector("#string1")
string.addEventListener("mousemove", function (dets) { path = `M 10 100 Q ${dets.x} ${dets.y} 1350 100`
gsap.to("svg path", {
attr: { d: path },
duration:0.3,
ease:"power3.out"
})
})
string.addEventListener("mouseleave", function(){
gsap.to("svg path", {
attr:{d:finalPath},
duration:1.5,
ease: "elastic.out(1,0.2)"
})
})

var path = "M 10 100 Q 500 100 1350 100"
var finalPath = "M 10 100 Q 500 100 1350 100"
var string = document.querySelector("#string2")
string.addEventListener("mousemove", function (dets) { path = `M 10 100 Q ${dets.x} ${dets.y} 1350 100`
gsap.to("svg path", {
attr: { d: path },
duration:0.3,
ease:"power3.out"
})
})
string.addEventListener("mouseleave", function(){
gsap.to("svg path", {
attr:{d:finalPath},
duration:1.5,
ease: "elastic.out(1,0.2)"
})
})

var path = "M 10 100 Q 500 100 1350 100"
var finalPath = "M 10 100 Q 500 100 1350 100"
var string = document.querySelector("#string3")
string.addEventListener("mousemove", function (dets) { path = `M 10 100 Q ${dets.x} ${dets.y} 1350 100`
gsap.to("svg path", {
attr: { d: path },
duration:0.3,
ease:"power3.out"
})
})
string.addEventListener("mouseleave", function(){
gsap.to("svg path", {
attr:{d:finalPath},
duration:1.5,
ease: "elastic.out(1,0.2)"
})
})
var path = "M 10 100 Q 500 100 1350 100"
var finalPath = "M 10 100 Q 500 100 1350 100"
var string = document.querySelector("#string0")
string.addEventListener("mousemove", function (dets) { path = `M 10 100 Q ${dets.x} ${dets.y} 1350 100`
gsap.to("svg path", {
attr: { d: path },
duration:0.3,
ease:"power3.out"
})
})
string.addEventListener("mouseleave", function(){
gsap.to("svg path", {
attr:{d:finalPath},
duration:1.5,
ease: "elastic.out(1,0.2)"
})
})


document.querySelector(".Home").style.setProperty("--height", window.innerHeight + "px");


gsap.to(".para p",{
  rotateY: 360,
  repeat: 2,
  yoyo: true,
  duration: 1,
  
});
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}


let banner = document.querySelector('.banner');
let canvas = document.getElementById('dotsCanvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
const ctx = canvas.getContext('2d');
const dots = [];
const arrayColors = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541'];
for (let index = 0; index < 50; index++) {
    dots.push({
        x:  Math.floor(Math.random() * canvas.width),
        y:  Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: arrayColors[Math.floor(Math.random()* 5)]
    });
}
const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
        ctx.fill();
    })
}
drawDots();
banner.addEventListener('mousemove', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
    let mouse = {
        x:  event.pageX - banner.getBoundingClientRect().left,
        y:  event.pageY - banner.getBoundingClientRect().top
    }
    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if(distance < 300){
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    })
})
banner.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
})
window.addEventListener('resize', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = banner.offsetWidth;
    canvas.height = banner.offsetHeight;

    dots = [];
    for (let index = 0; index < 50; index++) {
        dots.push({
            x:  Math.floor(Math.random() * canvas.width),
            y:  Math.floor(Math.random() * canvas.height),
            size: Math.random() * 3 + 5,
            color: arrayColors[Math.floor(Math.random()* 5)]
        });
    }
    drawDots();
})


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

function page4Animation() {
  var elemC = document.querySelector("#elem-container")
  var fixed = document.querySelector("#fixed-image")
  elemC.addEventListener("mouseenter", function () {
      fixed.style.display = "block"
  })
  elemC.addEventListener("mouseleave", function () {
      fixed.style.display = "none"
  })

  var elems = document.querySelectorAll(".elem")
  elems.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
          var image = e.getAttribute("data-image")
          fixed.style.backgroundImage = `url(${image})`
      })
  })
}



animateCircles();

page4Animation();
 
pageswipe()
pageslide()




gsap.to(' #asteroids',{
  x:1800,
  y:1800,

  
    duration: 1,
    
  delay: 0,
  repeat:-1,
  ease: 'ease-in',
})
gsap.to(' #asteroids1',{
  x:800,
  y:1200,

  
    duration: 2,
    
  delay: 0.2,
  repeat:-1,
  ease: 'p',
})
gsap.to(' #asteroids2',{
  x:2000,
  y:1200,

  
    duration: 1,
    
  delay: 0.1,
  repeat:-1,
  ease: 'ease-in',
})
gsap.to(' #asteroids3',{
  x:500,
  y:1200,

  
    duration: 2,
    
  delay: 0.5,
  repeat:-1,
  ease: 'ease-in',
})
gsap.to(' #asteroids4',{
  x:1600,
  y:1200,

  
    duration: 1,
    
  delay: 0.4,
  repeat:-1,
  ease: 'ease-in',
})
gsap.to(' #asteroids5',{
  x:1200,
  y:1200,

  
    duration: 0.5,
    
  delay: 0.9,
  repeat:-1,
  ease: 'ease-in',
})
gsap.to(' #asteroids6',{
  x:1900,
  y:1000,

  
    duration: 1,
    
  delay: 0.6,
  repeat:-1,
  ease: 'ease-in',
})



gsap.to('#asteroids0',{
  x:2000,
  y:1800,

  
    duration: 1,
    
  delay: 11.0,
  repeat:2,
  ease: 'ease-in',
})
gsap.to(' .ast #asteroids01',{
  x:1800,
  y:1600,

  
    duration: 2,
    
  delay: 11.2,
  repeat:2,
  ease: 'p',
})
gsap.to(' .ast #asteroids02',{
  x:2000,
  y:1600,

  
    duration: 1,
    
  delay: 11.1,
  repeat:2,
  ease: 'ease-in',
})
gsap.to('.ast #asteroids03',{
  x:1500,
  y:1600,

  
    duration: 2,
    
  delay: 11.5,
  repeat:2,
  ease: 'ease-in',
})
gsap.to('.ast #asteroids04',{
  x:1600,
  y:1600,

  
    duration: 1,
    
  delay: 11.4,
  repeat:2,
  ease: 'ease-in',
})
gsap.to('.ast #asteroids05',{
  x:1200,
  y:1600,

  
    duration: 0.5,
    
  delay: 11.9,
  repeat:2,
  ease: 'ease-in',
})
gsap.to('.ast #asteroids06',{
  x:1900,
  y:1600,

  
    duration: 1,
    
  delay: 11.6,
  repeat:2,
  ease: 'ease-in',
})



gsap.to(' #rocksmall',{
  x:-300,
  y:-1800,

  
    duration: 20,
    rotateZ:360,
  delay: 0,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rocksmall',{
  x:-400,
  y:80,

  
    duration: 10,
  delay: 20,
  
  
  rotateZ:0,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rocksmall',{
  x:-100,
  y: -80,
  
    duration: 10,
    rotateZ:360,
  delay: 30,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rocksmall',{
  x:-500,
  y: 380,
  
    duration: 10,
  delay: 40,
  rotateZ:0,
  
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rocksmall',{
  x:-300,
  y:-800,

  
    duration: 20,
    rotateZ:360,
  delay: 50,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rocksmall',{
  x:-400,
  y:80,

  
    duration: 10,
  delay: 70,
  
  
  rotateZ:0,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rocksmall',{
  x:100,
  y: -80,
  
    duration: 10,
    rotateZ:360,
  delay: 80,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rocksmall',{
  x:-500,
  y: 30,
  
    duration: 10,
  delay: 90,
  rotateZ:0,
  
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rocksmall',{
  x:-300,
  y:-100,

  
    duration: 20,
    rotateZ:360,
  delay: 100,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rocksmall',{
  x:-400,
  y:80,

  
    duration: 20,
  delay: 120,
  
  
  rotateZ:0,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rocksmall',{
  x:100,
  y: -90,
  
    duration: 10,
    rotateZ:360,
  delay: 130,
  repeat:0,
  ease: 'ease-in',
})
gsap.to(' #rocksmall',{
  x:-500,
  y: 380,
  
    duration: 10,
  delay: 140,
  rotateZ:0,
  
  repeat:0,
  ease: 'ease-in',
})

console.log("random movement of the astro");

let ball=document.querySelector(".astronaut");

let main= document.getElementsByTagName("main")[0];

ball.addEventListener("click", function () {

let randomWidth = `${Math.floor(Math.random() * (main.offsetWidth -100))}px`;

let randomHeight = `${Math.floor(

Math.random()* (main.offsetHeight - 100)

)}px`;

ball.style.left = `${randomWidth}`;

ball.style.top = `${randomHeight}`;

});



function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4200)
}


loaderAnimation()