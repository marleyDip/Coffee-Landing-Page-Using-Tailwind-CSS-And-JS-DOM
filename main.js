/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/

const navMenu = document.getElementById("nav-menu");

const navLinks = document.querySelectorAll(".nav-link");

const hamburger = document.getElementById("hamburger");

const closeicon = document.getElementById("closeicon");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("right-[0]");
});

closeicon.addEventListener("click", () => {
  navMenu.classList.toggle("right-[0]");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("right-[0]");
  });
});

/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ STICKY HEADER ~~~~~~~~~~~~~~~*/

const scrollHeader = () => {
  const stickyMenu = document.getElementById("sticky-menu");

  if (this.scrollY >= 150) {
    stickyMenu.classList.remove("lg:top-[-100%]");
    stickyMenu.classList.add("bg-black/80");
  } else {
    stickyMenu.classList.add("lg:top-[-100%]");
    stickyMenu.classList.remove("bg-black/80");
  }
};

window.addEventListener("scroll", scrollHeader);
/*~~~~~~~~~~~~~~~ STICKY HEADER ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ YEAR ~~~~~~~~~~~~~~~*/
document.getElementById("year").textContent = new Date().getFullYear();
/*~~~~~~~~~~~~~~~ YEAR ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ ACTIVE LINK ~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~ ACTIVE LINK ~~~~~~~~~~~~~~~*/
