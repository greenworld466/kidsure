$(function(){

$('.top-bottom').click(function(){
     $('html,body').animate({scrollDown: 0},2000);
 });  
$('.back-top').click(function(){
     $('html,body').animate({scrollTop: 0},2000);
 });  

 $(window).scroll(function(){
  let scrolling = $(this).scrollTop();
  if(scrolling > 100) {
      $('.navbar').addClass('header-bg');
  }else {
      $('.navbar').removeClass('header-bg');
  }
});

$('.kid_slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<i class="far fa-angle-left pre"></i>',
    nextArrow: '<i class="far fa-angle-right next"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
$('.testi_slide').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<i class="far fa-angle-left pre"></i>',
    nextArrow: '<i class="far fa-angle-right next"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });



});