$(function () {
  $(".header__lang").on("click", function () {
    $(".header__lang").removeClass("header__lang--active");
    $(this).toggleClass("header__lang--active");
  });

  $(".header__menu-dropdown").on("click", function (e) {
    e.preventDefault();
    $(".menu").toggleClass("menu--active");
    $(".header__menu-dropdown").toggleClass("header__menu-dropdown--active");
  });


  $(function () {
    function maskPhone() {
      var country = $("#country option:selected").val();
      switch (country) {
        case "ru":
          $("#reg-tel").mask("+7(999) 999-99-99");
          break;
        case "ua":
          $("#reg-tel").mask("+380(999) 999-99-99");
          break;
        case "by":
          $("#reg-tel").mask("+375(999) 999-99-99");
          break;
      }
    }
    maskPhone();
    $("#country").on("change", function () {
      maskPhone();
    });
    // $("input").focus();
  });

  $(".slider-top__items").slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".slider-bottom__items").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prevbottom"></button>',
    nextArrow: '<button type="button" class="slick-nextbottom"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  

});
