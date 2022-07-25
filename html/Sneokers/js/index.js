$(".slide-items").slick({
  arrows: false,
  autoplay: true,
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        centerPadding: '10%',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 426,
      settings: {
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ]
});

function button() {
  alert('送信されました！');
}
