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
`linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),
  url('${heroImages[currentSlide]}')`;

currentSlide++;

if(currentSlide >= heroImages.length){
currentSlide = 0;
}
}

changeHero();

setInterval(changeHero, 4000);

/* STATS COUNTER */

const counters = document.querySelectorAll(".stat-box h3");

counters.forEach(counter => {

const text = counter.innerText;

if(!text.includes("+")) return;

const target =
parseInt(text.replace(/[^0-9]/g,""));

let count = 0;

const speed = target / 100;

const update = () => {

```
if(count < target){

  count += speed;

  counter.innerText =
  Math.floor(count) + "+";

  requestAnimationFrame(update);

}else{

  counter.innerText = text;

}
```

};

update();

});

/* PARTNER SLIDER PAUSE */

const partnerTrack =
document.querySelector(".partner-track");

if(partnerTrack){

partnerTrack.addEventListener(
"mouseenter",
() => {
partnerTrack.style.animationPlayState =
"
