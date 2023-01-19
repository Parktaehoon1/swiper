window.onload = function(){

    var swiper1 = new Swiper(".visual_swiper1", {
      spaceBetween: 30,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect:'fade'
    });

  let options = {
    init: true,
    loop: true,
    speed: 1000,
    // autoplay: {
    //   delay: 3000,
    // },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    effect: 'fade'
  };
  let mySwiper = new Swiper(".visual_swiper3", options);
  let mySwiper2 = new Swiper(".visual_swiper4", options);
  let mySwiper3 = new Swiper(".visual_swiper5", options);

  // 1번쨰 슬라이드
  var X, Y;
  var Xtratado, Ytratado;

  function mover() {
    traslate = "translate(" + Xtratado + "px," + Ytratado + "px)";

    $(".bg").css({
      transform: traslate,
    });

    window.requestAnimationFrame(mover);
  }
  $(document).on("mousemove", function (event) {
    X = event.pageX;
    Y = event.pageY;

    ancho = $(window).width() / 2;
    largo = $(window).height() / 2;

    Xtratado = (ancho - X) * (1 / 50);
    Ytratado = (largo - Y) * (1 / 50);

    console.log(Xtratado + " " + Ytratado);
  });

  mover();
}