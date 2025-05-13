/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_qv3jt2t",
      "template_r0phpyo",
      "#contact-form",
      "-kuYpgCGRmOl8bB-w"
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = "Message sent successfully";

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Message failed to send";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll-up")
    : scrollUp.classList.remove("show-scroll-up");
};
window.addEventListener("scroll", scrollUp);

/*=============== HIDE SCROLL UP ON HOME ===============*/
const hideScrollUpOnHome = () => {
  const scrollUp = document.getElementById("scroll-up");
  const scrollY = window.scrollY;

  if (scrollY === 0) {
    scrollUp.classList.remove("show-scroll-up");
  }
};
window.addEventListener("scroll", hideScrollUpOnHome);

/*=============== SHOW SCROLL DOWN ===============*/
const scrollDown = () => {
  const scrollDown = document.getElementById("scroll-down");
  const contactSection = document.getElementById("contact");
  const contactTop = contactSection.offsetTop;
  const contactHeight = contactSection.offsetHeight;
  const scrollY = window.scrollY;

  if (
    scrollY + window.innerHeight >= contactTop &&
    scrollY <= contactTop + contactHeight
  ) {
    scrollDown.classList.remove("show-scroll-down");
  } else {
    scrollDown.classList.add("show-scroll-down");
  }
};
window.addEventListener("scroll", scrollDown);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 400,
  reset: true,
});

sr.reveal(`.home__data, .all__skills, .contact__container`);
sr.reveal(`.home__img`, { delay: 600 });
sr.reveal(`.home__scroll`, { delay: 800 });
sr.reveal(`.content__project`, { interval: 100 });
sr.reveal(`.about__content, .experience__content`, {
  origin: "right",
});
sr.reveal(`.about__img, .experience__company`, {
  origin: "left",
});
