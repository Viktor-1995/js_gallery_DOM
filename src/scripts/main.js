'use strict';

const el = document.querySelector('ul');
const largeImg = document.getElementById('largeImg');

el.addEventListener('click', ChangeImg);

function ChangeImg(e) {
  e.preventDefault();

  if (!e.target.src) {
    largeImg.src = e.target.querySelector('img').src;
  } else {
    largeImg.src = e.target.src;
  }
}
