var contentBoxs = document.querySelectorAll('.content-box');

window.addEventListener("scroll", scrollAnimaton);

scrollAnimaton();

// Scroll Animatiion Function
function scrollAnimaton() {
  var boxTrigger = window.innerHeight / 5 * 4;
  contentBoxs.forEach(function (contentBox) {
    var box = contentBox.getBoundingClientRect().top;
    if(box < boxTrigger) {
      contentBox.classList.add('show-box');
  } else {
      contentBox.classList.remove('show-box');
  }
  })
}