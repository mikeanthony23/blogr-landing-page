'use strict';
import { func } from 'assert-plus';
import 'core-js/stable';

const menuBtn = document.querySelector('.nav__burger-menu');
const navList = document.querySelector('.nav__list');
const overlay = document.querySelector('.overlay');

const navHeader = document.querySelectorAll('.nav__item-header');
const redArrowIcon = document.querySelectorAll('.arrow-icon');

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

const rotateArrow = function () {
  const header = Array.from(navHeader);
  header.forEach((el, i) => {
    el.addEventListener('click', function (e) {
      const btn = e.target.closest('.nav__item-header');
      if (!btn) return;
      Array.from(redArrowIcon)[i].classList.toggle('rotate');
    });
  });
};
rotateArrow();
