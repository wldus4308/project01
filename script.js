const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

// const scrollRevealOption = {
//   distance: "50px",
//   origin: "bottom",
//   duration: 1000,
// };

// SrollReveal().reveal(".home .content h1", {
//   ...scrollRevealOption,
// });
// SrollReveal().reveal(".home .content p", {
//   ...scrollRevealOption,
//   delay: 15
// });

ScrollReveal().reveal("section", {
  distance: "100px",
  origin: "bottom",
  duration: 800,
  easing: "ease-in",
});

ScrollReveal().reveal(".home .content", {
  distance: "50px",
  origin: "bottom",
  duration: 800,
  easing: "ease-in",
});