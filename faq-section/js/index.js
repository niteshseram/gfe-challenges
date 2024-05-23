// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const accordions = document.getElementsByClassName("faq__accordion__label");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    const faqContent = this.nextElementSibling;
    const activeIcon = this.lastElementChild.firstElementChild;
    const inactiveIcon = this.lastElementChild.lastElementChild;
    faqContent.classList.toggle('open');
    activeIcon.classList.toggle('open');
    inactiveIcon.classList.toggle('open');
  });
}
