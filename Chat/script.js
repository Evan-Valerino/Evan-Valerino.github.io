// JavaScript
const modalLinks = document.querySelectorAll('.modal-link');
const close = document.querySelectorAll('.modal-close');
const close22 = document.querySelectorAll('.modal-close22');


function toggleOn(selector) {
	const elements = document.querySelector(selector)
	elements.classList.add('on')
	document.body.style.overflowY = 'hidden';
};

function toggleOff(selector) {
	const elements = document.querySelector(selector)
	elements.classList.remove('on')
	document.body.style.overflowY = 'scroll';
};

close22.forEach(element=> {
  element.addEventListener('click',()=>toggleOff('#race1_page'));
  element.addEventListener('click',()=>toggleOff('#race2_page'));
  element.addEventListener('click',()=>toggleOff('#race3_page'));
});

const on = document.querySelector('.on');
const overlay = document.querySelector('.modal-overlay');
const race1 = document.querySelector('#race1_card');
const race2 = document.querySelector('#race2_card');
const race3 = document.querySelector('#race3_card');

const boutonTopologie = document.getElementById('topologie');
const fenetreTopologie = document.getElementById('topologie_page');
const boutonFermerTopologie = fenetreTopologie.querySelector('.modal-close22');

boutonTopologie.addEventListener('click', function() {
  fenetreTopologie.classList.add('on');
});

boutonFermerTopologie.addEventListener('click', function() {
  fenetreTopologie.classList.remove('on');
});


race1.addEventListener('click',()=>toggleOn('#race1_page'));
race2.addEventListener('click',()=>toggleOn('#race2_page'));
race3.addEventListener('click',()=>toggleOn('#race3_page'));


const modalFollowButtons = document.querySelectorAll('.modal-follow22');

modalFollowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentModal = button.closest('.modal-overlay22');
    let nextModalId;

    if (currentModal.id === 'race1_page') {
      nextModalId = 'race2_page';
      toggleOff('#race1_page');
      toggleOn('#race2_page');
    } else if (currentModal.id === 'race2_page') {
      nextModalId = 'race3_page';
      toggleOff('#race2_page');
      toggleOn('#race3_page');
    } else if (currentModal.id === 'race3_page') {
      nextModalId = 'race1_page';
      toggleOff('#race3_page');
      toggleOn('#race1_page');
    } 
  });
});
