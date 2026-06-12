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
setInterval(changeHero,4000);

/* ANIMATED STATS */

const counters = document.querySelectorAll(".stat-box h3");

const animateCounter = (counter) => {

const originalText = counter.innerText;

let target =
parseInt(originalText.replace(/[^0-9]/g,""));

if(isNaN(target)) return;

let count = 0;

const increment = Math.max(1, Math.ceil(target / 100));

const update = () => {

```
count += increment;

if(count < target){

  if(originalText.includes("+")){
    counter.innerText = count + "+";
  }else{
    counter.innerText = count;
  }

  requestAnimationFrame(update);

}else{

  counter.innerText = originalText;

}
```

};

update();
};

const observer = new IntersectionObserver((
