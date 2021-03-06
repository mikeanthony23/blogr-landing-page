'use strict';
import { func } from 'assert-plus';
import 'core-js/stable';
import iconBurger from 'url:../images/icon-hamburger.svg';
import iconClose from 'url:../images/icon-close.svg';

const menuBtn = document.querySelector('.nav__burger-menu');
const navList = document.querySelector('.nav__list');
const overlay = document.querySelector('.overlay');

const navHeader = document.querySelectorAll('.nav__item-header');
const redArrowIcon = document.querySelectorAll('.arrow-icon');

const navTogglers = function () {
  menuBtn.classList.toggle('open-nav');
  navList.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

const openCloseMenu = function () {
  menuBtn.addEventListener('click', function (e) {
    const btn = e.target.closest('.nav__burger-menu');
    if (!btn) return;
    navTogglers();
    return btn.classList.contains('open-nav')
      ? (btn.src = `${iconClose}`)
      : (btn.src = `${iconBurger}`);
  });
};


const closeMenuOverlay = function () {
  overlay.addEventListener('click', function (e) {
    const btn = e.target.closest('.overlay');
    if (!btn) return;
    navTogglers();
    return (menuBtn.src = `${iconBurger}`);
  });
};


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

const init = function(){
  openCloseMenu();
  closeMenuOverlay();
  rotateArrow();
}
init();
