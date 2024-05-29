/*============== toggle icon navbar ===============*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("static");
};

/*============== scroll sections active link ===============*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("static");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("static");
      });
    }
  });

  /*============== sticky navbar ===============*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*============== remove toggle icon and navbar when there is any click on navbar ===============*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("static");
};

/*============== Scroll Reveal ===============*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .projects-container, .contact-list, .btn",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .logo, .about-img, .contact p", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content, .stack-icon, .contact h4", { origin: "right" });
