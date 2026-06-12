/* EMERGIX Counter Animation */

const counters = document.querySelectorAll(’.counter’);

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {

if (!entry.isIntersecting) return;
const counter = entry.target;
const target = parseInt(counter.dataset.target);
let current = 0;
const increment = Math.max(1, Math.ceil(target / 100));
function update() {
  current += increment;
  if (current < target) {
    counter.textContent =
      current + (target >= 10 ? "+" : "");
    requestAnimationFrame(update);
  } else {
    counter.textContent =
      target + (target >= 10 ? "+" : "");
  }
}
update();
observer.unobserve(counter);

});
}, {
threshold: 0.5
});

counters.forEach(counter => {
observer.observe(counter);
});

/* Pause Partner Slider On Hover */

const partnerTrack =
document.querySelector(’.partner-track’);

if (partnerTrack) {

partnerTrack.addEventListener(‘mouseenter’, () => {
partnerTrack.style.animationPlayState = ‘paused’;
});

partnerTrack.addEventListener(‘mouseleave’, () => {
partnerTrack.style.animationPlayState = ‘running’;
});

}

/* Smooth Scrolling */

document.querySelectorAll(‘a[href^=”#”]’).forEach(anchor => {

anchor.addEventListener(‘click’, function (e) {

e.preventDefault();
const target =
  document.querySelector(
    this.getAttribute('href')
  );
if (target) {
  target.scrollIntoView({
    behavior: 'smooth'
  });
}

});

});
