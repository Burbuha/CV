//menu
const menuButton = document.querySelector(".menu-button");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
menuButton.addEventListener("click", (event) => {
  event.preventDefault();
  menuBtn.classList.toggle("menu-btn-active");
  menu.classList.toggle("menu-active");
});
menu.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-btn-active");
  menu.classList.toggle("menu-active");
});

//to-top
$(document).ready(function () {
  var button = $("#to-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on("click", function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});
