const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());



var typed = new Typed(".text", {
  strings: ["MERN Stack Developer", "Web Designer"],
  typeSpeed: 70,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});