function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco();

const link = document.querySelector("#link");
const line = document.querySelector(".line");
const bottomLinks1 = document.querySelector("#btm-link1");
const bottomLinks2 = document.querySelector("#btm-link2");
const bottomLine1 = document.querySelector("#bottom-line1");
const bottomLine2 = document.querySelector("#bottom-line2");
const firstHeading = document.querySelector("#first-heading");
const secondHeading = document.querySelector("#second-heading");
const navbar = document.querySelector(".nav");
const bottom = document.querySelector(".bottom");
const cursor = document.querySelector(".cursor");
const close = document.getElementById("close");
const fullNav = document.querySelector(".full-nav");
const contentImage = document.querySelector("#content-img");
const content = document.querySelector(".content");
const bottomOne = document.querySelector(".bottom-one");
const thirdHeading = document.querySelector("#third-heading");

const subLink = document.querySelector("#sub-link");
const subLine = document.querySelector("#sub-line");

const currentTime = document.querySelector("#current-time");
const time = new Date();
const hour = time.getHours();
const mins = time.getMinutes();

const dribbleLink = document.querySelector("#dribble-link");
const instaLink = document.querySelector("#insta-link");
const linkedinLink = document.querySelector("#linkedin-link");
const twitterLink = document.querySelector("#twitter-link");

const dribbleLine = document.querySelector("#dribble-line");
const instaLine = document.querySelector("#insta-line");
const linkedinLine = document.querySelector("#linkedin-line");
const twitterLine = document.querySelector("#twitter-line");

document.querySelectorAll(".content").forEach(function(elem){
  var rotate = 0;
  var diffRotate = 0;

  elem.addEventListener("mousemove", function(dets){
    const diff = dets.clientY - e.getBoundingClientRect().top;
    diffRotate = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(contentImage, {
      opacity: 1,
      ease: Power3,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diff)
    })
  })

  // elem.addEventListener("mousseleave", function(dets){
  //   gsap.to(contentImage, {
  //     opacity: 0,
  //     ease: Power1,
  //   })
  // })
})

function mouseFollowCircle(){
  document.addEventListener("mousemove", function(dets){
    document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  })
}
mouseFollowCircle();

function showTime(){
  function addZero(num){
    return num < 10 ? `0${num}` : num;
  }
  
  currentTime.innerHTML = `${hour}:${mins}`;
}
showTime();
setInterval(showTime, 60000);

function imageAnimation(){
  content.addEventListener("mouseenter", function(dets){
    contentImage.style.display = "block";
  })
  
  content.addEventListener("mouseleave", function(dets){
    contentImage.style.display = "none";
  })
  
  document.addEventListener("mousemove", function(dets){
    const imgX = dets.clientX + "px";
    const imgY = dets.clientY + "px"
    gsap.to(contentImage, {
      top: imgY,
      left: imgX
    })
  })
}

function navbarAnimation(){
  link.addEventListener("click", function(){
    gsap.to(fullNav, {
      transform: "translateY(0%)",
      opacity: 1,
      ease: Power3
    })
  })
  
  close.addEventListener("click", function(){
    gsap.to(fullNav, {
      transform: "translateY(-100%)",
      ease: Power3,
      opacity: 0,
    })
  })
}
navbarAnimation();

function heroAnimation(){
  gsap.from(navbar, {
    transform: "translateY(-100%)",
    duration: .5,
    delay: .5,
    stagger: .5,
    ease: Power3
  })
  
  gsap.from(firstHeading, {
    opacity: 0,
    transform: "translateY(50%)",
    duration: .4,
    delay: 1,
    ease: Power3
  })
  
  gsap.from(secondHeading, {
    opacity: 0,
    transform: "translateX(-100%)",
    duration: .8,
    delay: 1.1,
    ease: Power3
  })
  
  gsap.from(thirdHeading, {
    opacity: 0,
    transform: "translateY(-50%)",
    duration: .4,
    delay: 1.6,
    ease: Power3
  })
  
  gsap.from(bottom, {
    transform: "translateY(130%)",
    delay: 1.8,
    ease: Power3,
    opacity: 0
  })
}
heroAnimation();

function linkAnimation(){
  link.addEventListener("mouseenter", function(){
    gsap.to(line, {
      scale: 1,
      left: 0,
      duration: .3,
      transformOrigin: "0% 50%"
    })
  })
  
  link.addEventListener("mouseleave", function(){
    gsap.to(line, {
      scale: 0,
      right: 0,
      duration: .3,
      transformOrigin: "100% 50%"
    })
  })

  bottomLinks1.addEventListener("mouseenter", function(){
    gsap.to(bottomLine1, {
      scale: 1,
      left: 30,
      duration: .3,
      transformOrigin: "0% 50%"
    })
  })

  bottomLinks1.addEventListener("mouseleave", function(){
    gsap.to(bottomLine1, {
      scale: 0,
      right: 0,
      duration: .3,
      transformOrigin: "100% 50%"
    })
  })

  bottomLinks2.addEventListener("mouseenter", function(){
    gsap.to(bottomLine2, {
      scale: 1,
      left: 500,
      duration: .3,
      transformOrigin: "0% 50%"
    })
  })

  bottomLinks2.addEventListener("mouseleave", function(){
    gsap.to(bottomLine2, {
      scale: 0,
      right: 0,
      duration: .3,
      transformOrigin: "100% 50%"
    })
  })

  subLink.addEventListener("mouseenter", function(){
    gsap.to(subLine, {
      scale: 1,
      transformOrigin: "0% 50%"
    })
  })
  
  subLink.addEventListener("mouseleave", function(){
    gsap.to(subLine, {
      scale: 0,
      transformOrigin: "100% 50%"
    })
  })

  dribbleLink.addEventListener("mouseenter", function(){
    gsap.to(dribbleLine, {
      scale: 1,
      transformOrigin: "0% 50%",
      duration: .3,
      ease: Power3
    })
  })
  
  dribbleLink.addEventListener("mouseleave", function(){
    gsap.to(dribbleLine, {
      scale: 0,
      transformOrigin: "100% 50%",
      duration: .3,
      ease: Power3
    })
  })
  
  instaLink.addEventListener("mouseenter", function(){
    gsap.to(instaLine, {
      scale: 1,
      transformOrigin: "0% 50%",
      duration: .3,
      ease: Power3
    })
  })
  
  instaLink.addEventListener("mouseleave", function(){
    gsap.to(instaLine, {
      scale: 0,
      transformOrigin: "100% 50%",
      duration: .3,
      ease: Power3
    })
  })
  
  linkedinLink.addEventListener("mouseenter", function(){
    gsap.to(linkedinLine, {
      scale: 1,
      transformOrigin: "0% 50%",
      duration: .3,
      ease: Power3
    })
  })
  
  linkedinLink.addEventListener("mouseleave", function(){
    gsap.to(linkedinLine, {
      scale: 0,
      transformOrigin: "100% 50%",
      duration: .3,
      ease: Power3
    })
  })
  
  twitterLink.addEventListener("mouseenter", function(){
    gsap.to(twitterLine, {
      scale: 1,
      transformOrigin: "0% 50%",
      duration: .3,
      ease: Power3
    })
  })
  
  twitterLink.addEventListener("mouseleave", function(){
    gsap.to(twitterLine, {
      scale: 0,
      transformOrigin: "100% 50%",
      duration: .3,
      ease: Power3
    })
  })
}
linkAnimation();