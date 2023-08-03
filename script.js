
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const ativeClass = 'ativo';
    if(accordionList.length) {
      accordionList[0].classList.add(ativeClass);
      accordionList[0].nextElementSibling.classList.add(ativeClass);

      function activeAccordion() {
        this.classList.toggle(ativeClass);
        this.nextElementSibling.classList.toggle(ativeClass);
     }

      accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
   }
}
initAccordion();

function initScrollSuave() {
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: 'smooth',
    block:'start',
  })
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});
}
initScrollSuave();

