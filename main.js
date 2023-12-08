'use strict';

{
  const menu = document.querySelector(".menu");
  const spNav = document.querySelector(".sp-nav");

  menu.addEventListener('click',() =>{
    menu.classList.toggle('menu-active');
    spNav.classList.toggle('nav-active');
  });
}