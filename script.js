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
	element.addEventListener('click',()=>toggleOff('#centre'));
	element.addEventListener('click',()=>toggleOff('#voyage_page'));
	element.addEventListener('click',()=>toggleOff('#tennis_page'));
	element.addEventListener('click',()=>toggleOff('#reseau_page'));
	element.addEventListener('click',()=>toggleOff('#programmation_page'));
	element.addEventListener('click',()=>toggleOff('#archi_page'));
	element.addEventListener('click',()=>toggleOff('#archi1'));
});

const on = document.querySelector('.on');
const overlay = document.querySelector('.modal-overlay');
const reseau = document.querySelector('#reseau');
const programmation = document.querySelector('#programmation');
const archi_centre = document.querySelector('#archi_centre');
const voyage = document.querySelector('#voyage');
const tennis = document.querySelector('#tennis');
const archi1 = document.querySelector('#archi1');


reseau.addEventListener('click',()=>toggleOn('#reseau_page'));
programmation.addEventListener('click',()=>toggleOn('#programmation_page'));
archi.addEventListener('click',()=>toggleOn('#archi_page'));
archi_centre.addEventListener('click',()=>toggleOn('#centre'));
voyage.addEventListener('click',()=>toggleOn('#voyage_page'));
tennis.addEventListener('click',()=>toggleOn('#tennis_page'));
archi1.addEventListener('click',()=>toggleOn('#archi11'));

const archi11 = document.querySelectorAll('#archi11');

const modalFollowButtons = document.querySelectorAll('.modal-follow22');

modalFollowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentModal = button.closest('.modal-overlay22');
    let nextModalId;

    if (currentModal.id === 'reseau_page') {
      nextModalId = 'programmation_page';
      toggleOff('#reseau_page');
      toggleOn('#programmation_page');
    } else if (currentModal.id === 'programmation_page') {
      nextModalId = 'archi_page';
      toggleOff('#programmation_page');
      toggleOn('#archi_page');
    } else if (currentModal.id === 'archi_page') {
      nextModalId = 'reseau_page';
      toggleOff('#archi_page');
      toggleOn('#reseau_page');
    } else if (currentModal.id === 'centre') {
      nextModalId = 'voyage_page';
      toggleOff('#centre');
      toggleOn('#voyage_page');
    } else if (currentModal.id === 'voyage_page') {
      nextModalId = 'tennis_page';
      toggleOff('#voyage_page');
      toggleOn('#tennis_page');
    } else if (currentModal.id === 'tennis_page') {
      nextModalId = 'centre';
      toggleOff('#tennis_page');
      toggleOn('#centre');
    }

  });
});
