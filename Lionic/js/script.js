// burger menu
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (elem) {
  elem.addEventListener('click',
    function () {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    })
})

// articles hidden
const btnMore = document.querySelector('.articles-more');
const articlesItems = document.querySelectorAll('.articles-item');

btnMore.addEventListener('click', () => {
    articlesItems.forEach(elem => { elem.classList.add('articles-item--visible') });
    btnMore.closest('.articles-center').classList.add('articles-center--hidden');
  })