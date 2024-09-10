if (document.getElementsByClassName('hamburger').length > 0) {
  // use this if you are using class to check
  console.log('hamburger');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach((n) =>
    n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    })
  );
}




const slidePage = document.querySelector('.slide-page');
const nextBtnFirst = document.querySelector('.firstNext');
const prevBtnSec = document.querySelector('.prev-1');
const nextBtnSec = document.querySelector('.next-1');
const prevBtnThird = document.querySelector('.prev-2');
const nextBtnThird = document.querySelector('.next-2');

const prevBtnFourth = document.querySelector('.prev-3');
const nextBtnFourth = document.querySelector('.next-3');

const prevBtnFifth = document.querySelector('.prev-4');
const nextBtnFifth = document.querySelector('.next-4');

const prevBtnSixth = document.querySelector('.prev-5');
const submitBtn = document.querySelector('.submit');

const progressText = document.querySelectorAll('.step p');
const progressCheck = document.querySelectorAll('.step .check');
const bullet = document.querySelectorAll('.step .bullet');
let current = 1;

document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('.download-link')
    .addEventListener('click', function () {
      alert('You are about to download the terms and conditions.');
    });
});

nextBtnFirst.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-16.7%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});
nextBtnSec.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-33.3%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});
nextBtnThird.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-50%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});
nextBtnFourth.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-66.7%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});

nextBtnFifth.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-83.4%';
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
});

submitBtn.addEventListener('click', function () {
  bullet[current - 1].classList.add('active');
  progressCheck[current - 1].classList.add('active');
  progressText[current - 1].classList.add('active');
  current += 1;
  setTimeout(function () {
    alert('Your Form Successfully Signed up');
    location.reload();
  }, 800);
});

prevBtnSec.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '0%';
  bullet[current - 2].classList.remove('active');
  progressCheck[current - 2].classList.remove('active');
  progressText[current - 2].classList.remove('active');
  current -= 1;
});
prevBtnThird.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-16.7%';
  bullet[current - 2].classList.remove('active');
  progressCheck[current - 2].classList.remove('active');
  progressText[current - 2].classList.remove('active');
  current -= 1;
});
prevBtnFourth.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-33.3%';
  bullet[current - 2].classList.remove('active');
  progressCheck[current - 2].classList.remove('active');
  progressText[current - 2].classList.remove('active');
  current -= 1;
});
prevBtnFifth.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-50%';
  bullet[current - 2].classList.remove('active');
  progressCheck[current - 2].classList.remove('active');
  progressText[current - 2].classList.remove('active');
  current -= 1;
});
prevBtnSixth.addEventListener('click', function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = '-67.70%';
  bullet[current - 2].classList.remove('active');
  progressCheck[current - 2].classList.remove('active');
  progressText[current - 2].classList.remove('active');
  current -= 1;
});
