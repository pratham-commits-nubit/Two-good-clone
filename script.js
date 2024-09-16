
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
//     multiplier: 1,
//     class: 'is-scrolling',
//     getDirection: true,
//     ignoreMobileResize: true, // Add this option
//   });
  
 
// Declaring variables
let mainvideo = document.querySelector('#video-box')
let mousehover = document.querySelector('.mouse-hover')
let TextTransitionOne = document.querySelector(".mainfirst")
let TextTransitionSecond = document.querySelector(".mainsecond")
let productcursor = document.getElementById('cursor')

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotiveAnimation();
  
  function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to(".nav-part2 ul .nav-li", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  navbarAnimation()
  
function videoanimation() {
    mainvideo.addEventListener('mouseenter',()=>{
      gsap.to(mousehover,{
        transform: 'translate(-50%,-50%) scale(1)',
        opacity:1
      })
    })
    mainvideo.addEventListener('mouseleave',()=>{
        gsap.to(mousehover,{
          transform: 'translate(-50%,-50%) scale(0)',
          opacity:0,
        })
    })
    mainvideo.addEventListener('mousemove',(dets)=>{
        mousehover.style.transition = '0s'       
        gsap.to(mousehover,{
            left:dets.clientX,
            top:dets.clientY +850,
            duration:0.3,
            ease: Expo
           
        })
    })
}
videoanimation()

function loadTransition() {
    gsap.from(TextTransitionOne,{
        y:550,
        opacity:0,
        duration:0.5,
    })

    gsap.from(TextTransitionSecond,{
        y:500,
        opacity:0,
        duration:0.5,
        delay:0.3
    })
}
loadTransition()

function productkacursor() {
    
    document.querySelector('#item1').addEventListener('mouseenter',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(1)'
                
            })
            productcursor.style.backgroundColor = "rgba(180, 211, 252, 0.466)"
    })
    document.querySelector('#item1').addEventListener('mouseleave',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(0)'
            })
    })
    
    document.querySelector('#item1').addEventListener('mousemove',(dets)=>{
            gsap.to(productcursor,{
               left:dets.clientX,
               top:dets.clientY+2600,
               duration:0.3,
               ease:Expo

            })
    })
    document.querySelector('#item2').addEventListener('mouseenter',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(1)',
            })
            productcursor.style.backgroundColor = "pink"
            
    })
    document.querySelector('#item2').addEventListener('mouseleave',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(0)'
            })
    })
    
    document.querySelector('#item2').addEventListener('mousemove',(dets)=>{
            gsap.to(productcursor,{
                left:dets.clientX,
                top:dets.clientY+2600,
               duration:0.3,
               ease:Expo

            })
    })
    document.querySelector('#item3').addEventListener('mouseenter',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(1)'
            })
            productcursor.style.backgroundColor = "lightgreen"
    })
    document.querySelector('#item3').addEventListener('mouseleave',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(0)'
            })
    })
    
    document.querySelector('#item3').addEventListener('mousemove',(dets)=>{
            gsap.to(productcursor,{
                left:dets.clientX,
                top:dets.clientY+3300,
               duration:0.3,
               ease:Expo

            })
    })
    document.querySelector('#item4').addEventListener('mouseenter',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(1)'
            })
            productcursor.style.backgroundColor = "orange"
    })
    document.querySelector('#item4').addEventListener('mouseleave',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(0)'
            })
    })
    
    document.querySelector('#item4').addEventListener('mousemove',(dets)=>{
            gsap.to(productcursor,{
                left:dets.clientX,
                top:dets.clientY+3300,
               duration:0.3,
               ease:Expo

            })
    })
   

}    
productkacursor()

document.querySelector('#mouse-hover').addEventListener('click',()=>{
  document.querySelector('#video-box > video').controls = document.querySelector('#video-box > video').controls
  document.querySelector('#video-box > video').muted = false
  document.querySelector('#video-box > video').volume = 1
  document.querySelector('#video-box > video').currentTime = 0
  document.querySelector('#video-box > video').play()
  document.querySelector('#mouse-hover').style.display = "none";
  console.log("HELLO ")

})
