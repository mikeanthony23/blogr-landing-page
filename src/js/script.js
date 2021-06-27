'use strict';
import { func } from 'assert-plus';
import 'core-js/stable';
import iconBurger from 'url:../images/icon-hamburger.svg';
import iconClose from 'url:../images/icon-close.svg';
console.log(iconBurger);

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
    console.log(btn.src);
    togglers();

    return btn.classList.contains('open')
      ? (btn.src = `.${iconBurger}`)
      : (btn.src = `.${iconClose}`);
  });
};
openCloseMenu();

const closeMenuOverlay = function () {
  overlay.addEventListener('click', function (e) {
    const btn = e.target.closest('.overlay');
    if (!btn) return;
    togglers();
    return (menuBtn.src = `${iconBurger}`);
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
