// ===========================
// ANIMATED COUNTERS
// ===========================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {
  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    let count = 0;

    const increment = target / 120;

    const updateCounter = () => {

      if (count < target) {

        count += increment;

        counter.innerText = Math.ceil(count).toLocaleString();

        requestAnimationFrame(updateCounter);

      } else {

        counter.innerText = target.toLocaleString() + "+";

      }

    };

    updateCounter();

  });
};

const statsSection = document.querySelector(".stats");

let statsStarted = false;

window.addEventListener("scroll", () => {

  if (!statsSection) return;

  const trigger =
    statsSection.getBoundingClientRect().top;

  if (trigger < window.innerHeight - 100 && !statsStarted) {

    statsStarted = true;

    startCounter();

  }

});


// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


// ===========================
// PARTNER SLIDER PAUSE
// ===========================

const track = document.querySelector(".partner-track");

if (track) {

  track.addEventListener("mouseenter", () => {

    track.style.animationPlayState = "paused";

  });

  track.addEventListener("mouseleave", () => {

    track.style.animationPlayState = "running";

  });

}


// ===========================
// SCROLL REVEAL EFFECT
// ===========================

const reveals = document.querySelectorAll(
  ".icon-card, .stat-box, .testimonial, .fleet-grid img"
);

function revealElements() {

  reveals.forEach(el => {

    const top =
      el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

      el.style.opacity = "1";
      el.style.transform = "translateY(0)";

    }

  });

}

reveals.forEach(el => {

  el.style.opacity = "0";

  el.style.transform = "translateY(40px)";

  el.style.transition =
    "all .8s ease";

});

window.addEventListener("scroll", revealElements);

revealElements();


// ===========================
// NAVBAR ACTIVE LINK
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (pageYOffset >= sectionTop) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === "#" + current
    ) {
      link.classList.add("active");
    }

  });

});


// ===========================
// HERO IMAGE PRELOAD
// ===========================

const heroImg = new Image();
heroImg.src = "hero1.jpg";


// ===========================
// CONSOLE MESSAGE
// ===========================

console.log(
  "EMERGIX & RAHS Premium Website Loaded Successfully"
);
