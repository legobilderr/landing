document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 1,
    width: "80%",
    drag: true,
    autoplay: true,
    interval: 3000,
    breakpoints: {
      768: {
        width: "90%",
      },
    },
  });
  splide.mount();
});
