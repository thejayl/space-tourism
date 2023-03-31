'use strict';

const sectionAll = document.querySelectorAll('section');
const navList = document.querySelector('.nav-list');
const navItemAll = document.querySelectorAll('.nav-item');

navList.addEventListener('click', e => {
  e.preventDefault();
  const navItem = e.target.closest('.nav-item');

  if (!navItem) return;

  for (const section of sectionAll) {
    section.classList.remove('section--active');
  }

  for (const nav of navItemAll) {
    nav.classList.remove('nav--active');
  }

  const activeSection = navItem.getAttribute('data-nav');

  document
    .querySelector(`.section-${activeSection}`)
    .classList.add('section--active');

  document
    .querySelector(`.nav-item[data-nav="${activeSection}"]`)
    .classList.add('nav--active');
});
