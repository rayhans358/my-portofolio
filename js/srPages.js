const srProject = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 400,
  interval: 100,
  reset: true,
});

const srContent = ScrollReveal({
  origin: "right",
  distance: "60px",
  duration: 1500,
  delay: 400,
  reset: true,
});

const srCompany = ScrollReveal({
  origin: "left",
  distance: "60px",
  duration: 1500,
  delay: 400,
  reset: true,
});

srProject.reveal(`.project__card`);
srContent.reveal(`.about__content, .experience__content`);
srCompany.reveal(`.about__img, .experience__company`);
