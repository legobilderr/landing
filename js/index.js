document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 1,
    width: "80%",
    drag: true,
    autoplay: true,
    interval: 2000,
    breakpoints: {
      768: {
        width: "90%",
      },
    },
  });
  splide.mount();

  let openButton = document.querySelector(".burger-wrapper");
  let closeButton = document.querySelector(".close-button");
  let mobileMenu = document.querySelector(".mobile-menu-wrapper");
  let blocker = document.querySelector(".blocker");
  const body = document.querySelector("body");
  const header = document.querySelector("header");

  openButton.addEventListener("click", () => openModal(mobileMenu));
  closeButton.addEventListener("click", () => cloaseModal(mobileMenu));
  mobileMenu.addEventListener("click", (e) => menuHandler(e));

  function openModal(element) {
    element.classList.remove("show");
    blocker.classList.add("show");
    header.classList.add("zIndex");
    body.classList.add("fixed-position");
    blocker.addEventListener("click", (e) => clickCB(e, element));
  }

  function cloaseModal(element) {
    element.classList.add("show");
    blocker.classList.remove("show");
    header.classList.remove("zIndex");
    body.classList.remove("fixed-position");
    blocker.removeEventListener("click", (e) => clickCB(e, element));
  }

  function clickCB(e, element) {
    if (e.target === e.currentTarget) {
      cloaseModal(element);
    }
  }

  function menuHandler(event) {
    let target = event.target;
    if (target.tagName === "A") cloaseModal(mobileMenu);
  }
});
