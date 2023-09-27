  function vid1_anim() {
    var video=document.querySelector(".page1 .video1");
    var vid_txt=document.querySelector(".video-text h6");
    video.addEventListener("mouseenter",function (dets) {
      vid_txt.textContent="video 1";
      gsap.to(".video-text", {
      scale:1,
      opacity:1,
      x:dets.x,
      y:dets.y-100
      })
    })
    video.addEventListener("mousemove",function (dets) {
      vid_txt.textContent="video 1";
      gsap.to(".video-text", {
      scale:1,
      opacity:1,
      x:dets.x,
      y:dets.y-100
      })
    })
    video.addEventListener("mouseleave",function (dets) {
      vid_txt.textContent="";
      gsap.to(".video-text", {
      scale:0,
      opacity:0
      })
    })
  }
  vid1_anim();
  
  function vid2_anim() {
    var video=document.querySelector(".page1 .video2");
    var vid_txt=document.querySelector(".video-text h6");
    video.addEventListener("mouseenter",function (dets) {
      vid_txt.textContent="video 2";
      gsap.to(".video-text", {
      scale:1,
      opacity:1,
      x:dets.x-30,
      y:dets.y-100
      })
    })
    video.addEventListener("mousemove",function (dets) {
      vid_txt.textContent="video 2";
      gsap.to(".video-text", {
      scale:1,
      opacity:1,
      x:dets.x-30,
      y:dets.y-110
      })
    })
    video.addEventListener("mouseleave",function (dets) {
      vid_txt.textContent="";
      gsap.to(".video-text", {
      scale:0,
      opacity:0
      })
    })
  }
  vid2_anim();
  
   function text_loading_anim() {
   
    var text=document.querySelector(".page1 .heading1");
    gsap.from(".page1 .heading1",{
      y:30,
      duration:.5,
      delay:.45,
      stagger: .5,
      opacity:0
    })
    gsap.from(".page1 video",{
      scale:0.9,
      duration:.44,
      delay:.25,
      opacity:0
    })
  }
  text_loading_anim()
  
  function text_loading_anim2() {
    gsap.from(".page1 .heading2 span",{
      scale:0,
      duration:.5,
      delay:1,
      stagger: .1,
      opacity:0
    })
  }
  text_loading_anim2()
  
  function typerffect(){
    var typingEffect = new Typed(".anim-txt h1",{
      strings : [" text one" ,"text two"],
      loop: true,
      typeSpeed:100,
      backSpeed:80,
      backDelay:1000
     } )
  }
  typerffect();
  
  function is_scrolled(){
    var curser=document.querySelector(".video-text");
    window.addEventListener("scroll",function() {
      curser.style.opacity="0";
      
    } );
  }
  is_scrolled();
  
  function logo1_anim() {
    gsap.to(".logo-part-one",{
      transform:"translateY(-100%)",
      opacity:0,
      scrollTrigger: {
        trigger:".page1",
        scroller:"body",
        
        start:"top 8%",
        end:"top 7%",
        scrub:2
      }
    })
  }
  logo1_anim();
  
  function logo2_anim() {
    gsap.to(".logo-part-two",{
      opacity:1,
      transform:"translateY(0%)",
      scrollTrigger: {
        trigger:".page1",
        scroller:"body",
        start:"top 7.5%",
        end:"top 7%",
        scrub:2
      }
    })
  }
  logo2_anim();
  
  