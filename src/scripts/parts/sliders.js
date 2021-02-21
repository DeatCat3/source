function initSliderHomepage() {
  var $slider = $('.header__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: "<img src='assets/svg/arr-right.svg' class='arr-right' alt=''>",
    prevArrow: "<img src='assets/svg/arr-left.svg' class='arr-left' alt=''>",
});
$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('header').addClass("dark-theme").eq(nextSlide).removeClass("dark-theme")
});
}
function initSliderItems() {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade:true,
    draggable: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,  
    variableWidth: true,
  });
  $('.contant__bottom-slider').slick({
    slidesToShow: 4,
    nextArrow: "<img src='assets/svg/slider-items/arr-right.svg' class='arr-right-black' alt=''>",
    prevArrow: "<img src='assets/svg/slider-items/arr-left.svg' class='arr-left-black' alt=''>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
}
export default function initSliders() {
    initSliderHomepage();
    initSliderItems();
  }