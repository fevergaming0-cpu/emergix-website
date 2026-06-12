const heroImages = [
  "ambulance1.jpg",
  "ambulance2.jpg",
  "tempo 1.jpg",
  "trax1.jpg",
  "eeco1.jpg"
];

let currentSlide = 0;

const hero = document.querySelector(".hero");

function changeHero() {
  if (!hero) return;

  hero.style.backgroundImage =
    `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)), url('${heroImages[currentSlide]}')`;

  currentSlide++;
  if (currentSlide >= heroImages.length) {
    currentSlide = 0;
  }
}

changeHero();
setInterval(changeHero, 4000);

const galleryImages = [
  "ambulance1.jpg",
  "ambulance2.jpg",
  "eeco1.jpg",
  "eeco 3.jpg",
  "eeco5.jpg",
  "eeco 8.jpg",
  "eeco9.jpg",
  "eertiga1.jpg",
  "eertiga2.jpg",
  "ertiga3.jpg",
  "tempo 1.jpg",
  "tempo 2.jpg",
  "tempo 4.jpg",
  "tempo 5.jpg",
  "tempo6.jpg",
  "tempo7.jpg",
  "tempo8.jpg",
  "tempo9.jpg",
  "trax1.jpg",
  "trax2.jpg"
];

const gallery = document.getElementById("gallery-grid");

if (gallery) {
  galleryImages.forEach(img => {
    gallery.innerHTML += `
      <div class="gallery-item">
        <img src="${img}" alt="Ambulance">
      </div>
    `;
  });
}
