// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const accordions = document.getElementsByClassName("faq__accordion__label");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    const faqContent = this.nextElementSibling;
    const activeIcon = this.lastElementChild.firstElementChild;
    const inactiveIcon = this.lastElementChild.lastElementChild;
    if (faqContent.style.display === "none") {
      faqContent.style.display = "block";
      activeIcon.style.display = "block";
      inactiveIcon.style.display = "none";
    } else {
      faqContent.style.display = "none";
      activeIcon.style.display = "none";
      inactiveIcon.style.display = "block";
    }
  });
}
