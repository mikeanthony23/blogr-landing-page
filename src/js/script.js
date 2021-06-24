'use strict';

const menuBtn = document.querySelector('.nav__burger-menu');
const navList = document.querySelector('.nav__list');
const overlay = document.querySelector('.overlay');

const navHeader = document.querySelectorAll('.nav__item-header');
const navSubListLinks = document.querySelector('.nav__sub-list');

const togglers = function () {
  menuBtn.classList.toggle('open');
  navList.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

const openCloseMenu = function () {
  menuBtn.addEventListener('click', function (e) {
    const btn = e.target.closest('.nav__burger-menu');
    if (!btn) return;
    togglers();
    return btn.classList.contains('open')
      ? (btn.src = '/icon-hamburger.daad064d.svg')
      : (btn.src = '/icon-close.14c7d256.svg');
  });
};
openCloseMenu();

const closeMenuOverlay = function () {
  overlay.addEventListener('click', function (e) {
    const btn = e.target.closest('.overlay');
    if (!btn) return;
    togglers();
    return (menuBtn.src = '/icon-hamburger.daad064d.svg');
  });
};
closeMenuOverlay();
