$(function () {//문서 로드 후 1번만 실행


  // 사이드네브
  $('.gnb .btn-menu').click(function () {
    $('.side-nav,.dimmed,.gnb .btn-explore,.gnb .btn-menu .line.top,.gnb .btn-menu .line.bottom').toggleClass('on');
  })

  $('.sidenav .btn-close,.dimmed,.gnb .btn-explore').click(function () {
    $('.side-nav,.dimmed').removeClass('on');
  })


  $('.link-menu').hover(function(){
    $('.link-menu').addClass('hide');
    $(this).removeClass('hide');
  },function(){
    $('.link-menu').removeClass('hide');
  })



  const showAnim = gsap.from('.header', 
  { 
    // yPercent: -100,
    paused: true,
    duration: 0.1
  }).progress(2);
  
  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });


  /**
   * @load
   * 
   */
  gsap.set('.load .logo-area span',{
    yPercent:100,
    opacity:0
  })

  load=gsap.timeline({
    onComplete:function(){
      $('.load').remove()
      introMotion.play()
    }
  })

  load.to('.load .logo-area span',1,{ yPercent:0, opacity:1 })
  load.addLabel('a')
  load.to('.load .logo-area span',1,{ yPercent:100 ,opacity:0},'a')
  load.to('.load',1,{ yPercent:100 },'a+=0.5')

  load.to('.sc-marquee .marquee',1.5,{ xPercent:-100, opacity:1 },'a')


introMotion = gsap.to('.sc-main .cont-wrap .desc .text',{
  yPercent:-90,
  stagger:0.1,
  paused:true,
})

introMotion = gsap.to('.sc-main .cont-wrap p',{
  xPercent:0,
  stagger:0.1,
  paused:true,
})

introMotion = gsap.to('.sc-main .cont-wrap .desc .text',{
  yPercent:-100,
  stagger:0.1,
  paused:true,
})

introMotion2 = gsap.to('.sc-marquee .marquee',{
  xPercent:-100,
  opacity:0,
  stagger:1,
  paused:true,
})




  gsap.to('.marquee-track',{
    scrollTrigger:{
      trigger:".marquee",
      start:"0% 80%",
      end:"100% 0%",
      // markers:true,
      scrub:1,
    },
    xPercent:-20
  })


  $('.hotel-item').hover(function(){
    $('.hotel-item').addClass('hide');
    $(this).removeClass('hide');
  },function(){
    $('.hotel-item').removeClass('hide');
  })




  gsap.to('.sc-edits .bg',{
    scrollTrigger:{
      trigger:".sc-edits",
      start:"0% 70%",
      end:"100% 100%",
      // markers:true,
    },
    yPercent:-100,
    stagger:0.2, //순차적으로

  })






  more = gsap.timeline({
    scrollTrigger:{
      trigger:".sc-explore",
      start:"0% 0%",
      end:"100% 100%",
      // markers:true,
      scrub:1,
    },
    defaults:{
      ease:'none'
    }
  })
 
  more.addLabel('a')
  more.to('.sc-explore .explore-card.one',{top:' 100%',yPercent:-100},'a')
  more.to('.sc-explore .explore-card.two',{bottom:' 100%',yPercent:100},'a')
  more.to('.sc-explore .bg-img',{xPercent:-10},'a')


//함께 갈 수 있게 timeline
  more = gsap.timeline({
    scrollTrigger:{
      trigger:".sc-more",
      start:"0% 100%",
      end:"100% 0%",
      // markers:true,
      scrub:1,
    },
  })


  more.addLabel('a')//3마리 동시에 라벨링
  more.to('.sc-more .thumb img',{ scale:1.1, },'a')
  more.to('.sc-more .col:nth-child(1)',{ yPercent:-5 },'a')
  more.to('.sc-more .col:nth-child(2)',{ yPercent:5 },'a')
  more.to('.sc-more .col:nth-child(3)',{ yPercent:-5 },'a')


  ScrollTrigger.create({
    trigger:".footer",
    start:"0% 0%",
    end:"100% 0%",
    // markers:true,
    toggleClass:"on"
  })//윈도우스크롤의 특정좌표값만 가져오고싶을때


  ScrollTrigger.create({
    trigger:".footer .bottom",
    start:"-50% 85%",
    end:"-90% 40%",
    // markers:true,
    toggleClass:"on"
  })




});