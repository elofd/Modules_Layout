// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (elem) {
  elem.addEventListener('click',
    () => {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    })
})

// swiper
let swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: "bullets",
    clickable: true,
  },
});

// tabs
let tabsBtns = document.querySelectorAll('.work-steps__btn');
let tabsItems = document.querySelectorAll('.work-steps__item_bottom');

tabsBtns.forEach(btn => {
  btn.addEventListener('click', elem => {
    const path = elem.currentTarget.dataset.path;
    
    tabsBtns.forEach(el => { el.classList.remove('works-steps__btn--active') });
    elem.currentTarget.classList.add('works-steps__btn--active');

    tabsItems.forEach(el => { el.classList.remove('work-steps__item_bottom--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('work-steps__item_bottom--active');
  })
});

// accordeon
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
});