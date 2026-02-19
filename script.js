const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


function parallaxpage1() {
  ScrollTrigger.create({
  trigger: "#page1",
  start: "top top",
  end: "bottom top",
  scrub: true,
  onUpdate: (self) => {
    const progress = self.progress;
    const yvalue = 25 * progress;
    gsap.set("#p1wrapper", {
      y: `${yvalue}%`
    });
    gsap.set("#p1wrapper2", {
      y: `${yvalue}%`
    });
  }
});
}

function mousemoveanime() {
  


  const p1wrapper = document.querySelector("#p1wrapper");
  const info1 = document.querySelector("#info1");
  const info2 = document.querySelector("#info2");

  document.querySelector("#page1").addEventListener("mousemove", function(dets){
    
    gsap.to(p1wrapper, {
      clipPath: `circle(15% at ${dets.x}px ${dets.y}px)`
    });
  });

  document.querySelector("#page1").addEventListener("mouseleave", function(dets){
    gsap.to(p1wrapper, {
      clipPath: `circle(2% at ${dets.x}px ${dets.y}px)`
    });
  });

  document.querySelector("#page2").addEventListener("mousemove", function(dets){
    gsap.to(info1, {
      clipPath: `circle(12% at ${dets.x}px ${dets.y}px)`
    });
  });

  document.querySelector("#page2").addEventListener("mouseleave", function(dets){
    gsap.to(info1, {
      clipPath: `circle(2% at ${dets.x}px ${dets.y}px)`
    });
  });

  document.querySelector("#page3").addEventListener("mousemove", function(dets){
    gsap.to("#exp1", {
      clipPath: `circle(16% at ${dets.x}px ${dets.y}px)`
    });
  });

  document.querySelector("#page3").addEventListener("mouseleave", function(dets){
    gsap.to("#exp1", {
      clipPath: `circle(2% at ${dets.x}px ${dets.y}px)`
    });
  });
  

  

  // const fronttext = document.querySelector("#fronttext");

  // fronttext.addEventListener("mouseenter", function(dets){
  //   gsap.to(p1wrapper, {
  //     clipPath: `circle(30% at ${dets.x}px ${dets.y}px)`
  //   })
  // });

  // fronttext.addEventListener("mouseleave", function(dets){
  //   gsap.to(p1wrapper, {
  //     clipPath: `circle(2% at ${dets.x}px ${dets.y}px)`
  //   })
  // })
}

function socialshover() {
  let socials = document.querySelector(".social h3");
  let about = document.querySelector("#about");
  let work = document.querySelector("#work");
  let contact = document.querySelector("#contact");

  about.addEventListener("mouseenter", function(){
    gsap.to("#about h3", {
      y: "-100%",
      ease: "power4.out",
      duration: 1
    });  
  });

  about.addEventListener("mouseleave", function(){
    gsap.to("#about h3", {
      y: "0%",
      duration: 1
    });  
  });

  work.addEventListener("mouseenter", function(){
    gsap.to("#work h3", {
      y: "-100%",
      ease: "power4.out",
      duration: 1
    });  
  });

  work.addEventListener("mouseleave", function(){
    gsap.to("#work h3", {
      y: "0%",
      duration: 1
    });  
  });

  contact.addEventListener("mouseenter", function(){
    gsap.to("#contact h3", {
      y: "-100%",
      ease: "power4.out",
      duration: 1
    });  
  });

  contact.addEventListener("mouseleave", function(){
    gsap.to("#contact h3", {
      y: "0%",
      duration: 1
    });  
  });
}

function textappear() {
  const texts = document.querySelectorAll(".h1h1");

  var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".whatido",
      start: "top 75%",
      end: "top -65%",
      scrub: true
    }
  });

  tl1.to(texts, {
    width: "50%",
    stagger: 0.05,
    ease: "power4.out"
  });
}


function ref() {
  var svg1 = document.querySelector("#instagram");
  var svg2 = document.querySelector("#linkedin");

  svg1.addEventListener("click", function() {
    window.open("https://www.instagram.com/nikunj_404_/", "_blank");
  });

  svg2.addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/nikunj-raghav-411419326/", "_blank");
  });
}



socialshover()
parallaxpage1()
mousemoveanime()
textappear()
ref()
