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

//scroll menu
$(document).ready(function () {
  $(menu).on("click", "a", function (event) {
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });
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
