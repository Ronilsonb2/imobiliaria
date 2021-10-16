// 1 item por vez
// $('.carousel').slick();

// Responsivo

if($(window).width() > 1000){
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 3
  });
}
else{
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1
  });
}