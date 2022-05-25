const fadeIn = document.querySelectorAll(".fade-in");
const slideIn = document.querySelectorAll(".slide-in");

const options = {
    
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
options);

fadeIn.forEach((fader) => {
  appearOnScroll.observe(fader);
});

slideIn.forEach(slider => {
    appearOnScroll.observe(slider);
  });
