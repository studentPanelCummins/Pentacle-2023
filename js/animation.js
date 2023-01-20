//  SOCCER 2

const step2_bodyLines = anime({
  targets: ".soccer2_line path",
  strokeDashoffset: [anime.setDashoffset, 99200],
  easing: "easeInOutSine",
  duration: 2500,
  delay: function(el, i) {
    return 1000 + i * 20;
  },
  autoplay: false
});

const step2_bodyExtra = anime({
  targets: ".soccer2_extra-line > *",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function(el, i) {
    return 1000 + i * 20;
  },
  autoplay: false
});


function step2_bodyTL(){

  const timeline = new TimelineMax({onStart: function(){
    step2_bodyExtra.play();
    step2_bodyLines.play();
  }, onComplete:function(){
        step2_bodyExtra.reverse();
        step2_bodyLines.reverse();
        step2_bodyExtra.play();
        step2_bodyLines.play();
  }});

  timeline.staggerFromTo(".soccer2_fill > *", 0.3, {scale: 0, transformOrigin: "100% 100%"}, {scale: 1}, 0.03)
  .to(".soccer2_fill", 0.2, {onStart: function(){
    step2_bodyExtra.reverse();
    step2_bodyLines.reverse();
    step2_bodyExtra.play();
    step2_bodyLines.play();

  }})
  .staggerTo(".soccer2_fill > *", 0.2, {scale: 0, delay: 1}, 0.01)

  return timeline;

}


// BASKETBALL

const step3_bodyLines = anime({
  targets: ".basket_extra-line > *",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2500,
  delay: function(el, i) {
    return i * 10;
  },
  autoplay: false
});

const step3_extraLines = anime({
  targets: ".basket_line > *",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2500,
  delay: function(el, i) {
    return i * 10;
  },
  autoplay: false
});


function step3_bodyTL(){

  const timeline = new TimelineMax({onStart: function(){
    step3_bodyLines.play();
    step3_extraLines.play();
  }, onComplete:function(){
        step3_bodyLines.reverse();
        step3_extraLines.reverse();
        step3_bodyLines.play();
        step3_extraLines.play();
  }});

  timeline.staggerFromTo(".basket_fill > *", 0.3, {scale: 0, y: 300, transformOrigin: "0% 0%"}, {scale: 1, y: 0}, 0.03)
  .to(".basket_fill", 0.2, {onStart: function(){
    step3_bodyLines.reverse();
    step3_extraLines.reverse();
    step3_bodyLines.play();
    step3_extraLines.play();
  }})
  .staggerTo(".basket_fill > *", 0.2, {scale: 0, delay: 1}, 0.02)

  return timeline;
}



// utilities
function hide(elem){
  const tl = new TimelineMax();
  tl.to(elem, 0.1, {autoAlpha: 0})
  .to(elem, 0.1, {display: "none"})
  return tl;
}
function show(elem){
  const tl = new TimelineMax();
  tl.to(elem, 0.1, {autoAlpha: 1})
  .to(elem, 0.1, {display: "block"})
  return tl;
}

var secondTL = new TimelineMax({repeat:-1});
var mainTL = new TimelineMax({repeat:-1});

function init() {

  secondTL
    .add(show("#basket"), 'step6')
    .add(step3_bodyTL(), 'step7')

  mainTL
    .add(show("#soccer2"), 'step3')
    .add(step2_bodyTL(), 'step4')
    .add(hide("#soccer2"), 'step5')

}

init();
