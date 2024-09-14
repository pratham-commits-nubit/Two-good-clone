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
let mousehover = document.getElementById('mouse-hover')
let TextTransitionOne = document.querySelector(".mainfirst")
let TextTransitionSecond = document.querySelector(".mainsecond")
let productcursor = document.getElementById('cursor')

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
            top:dets.clientY,
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
    })
    document.querySelector('#item1').addEventListener('mouseleave',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(0)'
            })
    })
    
    document.querySelector('#item1').addEventListener('mousemove',(dets)=>{
            gsap.to(productcursor,{
               left:dets.x,
               top:dets.y,
               duration:0.3,
               ease:Expo

            })
    })
    document.querySelector('#item2').addEventListener('mouseenter',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(1)'
            })
    })
    document.querySelector('#item2').addEventListener('mouseleave',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(0)'
            })
    })
    
    document.querySelector('#item2').addEventListener('mousemove',(dets)=>{
            gsap.to(productcursor,{
               left:dets.x,
               top:dets.y,
               duration:0.3,
               ease:Expo

            })
    })
    document.querySelector('#item3').addEventListener('mouseenter',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(1)'
            })
    })
    document.querySelector('#item3').addEventListener('mouseleave',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(0)'
            })
    })
    
    document.querySelector('#item3').addEventListener('mousemove',(dets)=>{
            gsap.to(productcursor,{
               left:dets.x,
               top:dets.y,
               duration:0.3,
               ease:Expo

            })
    })
    document.querySelector('#item4').addEventListener('mouseenter',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(1)'
            })
    })
    document.querySelector('#item4').addEventListener('mouseleave',()=>{
            gsap.to(productcursor,{
                transform: 'translate(-50%,-50%) scale(0)'
            })
    })
    
    document.querySelector('#item4').addEventListener('mousemove',(dets)=>{
            gsap.to(productcursor,{
               left:dets.x,
               top:dets.y,
               duration:0.3,
               ease:Expo

            })
    })
   

}    
productkacursor()
