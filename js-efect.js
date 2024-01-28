// const images = document.getElementsByClassName("image");

// let globalIndex = 0,
//     last = { x: 0, y: 0 };

// const activate = (image, x, y) => {
//   image.style.left = `${x}px`;
//   image.style.top = `${y}px`;
//   image.style.zIndex = globalIndex;

//   image.dataset.status = "active";

//   last = { x, y };
// }

// const distanceFromLast = (x, y) => {
//   return Math.hypot(x - last.x, y - last.y);
// }

// const handleOnMove = e => {
//   if(distanceFromLast(e.clientX, e.clientY) > (window.innerWidth / 20)) {
//     const lead = images[globalIndex % images.length],
//           tail = images[(globalIndex - 5) % images.length];

//     activate(lead, e.clientX, e.clientY);

//     if(tail) tail.dataset.status = "inactive";
    
//     globalIndex++;
//   }
// }

// const mouseEffectSection = document.querySelector(".mouse-efect");
// mouseEffectSection.onmousemove = e => handleOnMove(e);

// window.ontouchmove = e => handleOnMove(e.touches[0]);
const section = document.querySelector(".mouse-efect");
const images = section.getElementsByClassName("image");

let globalIndex = 0,
    last = { x: 0, y: 0 };

const activate = (image, x, y) => {
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
  image.style.zIndex = globalIndex;

  image.dataset.status = "active";

  last = { x, y };
}

const distanceFromLast = (x, y) => {
  return Math.hypot(x - last.x, y - last.y);
}

const handleOnMove = e => {
  if(distanceFromLast(e.clientX, e.clientY) > (window.innerWidth / 20)) {
    const lead = images[globalIndex % images.length],
          tail = images[(globalIndex - 5) % images.length];

    activate(lead, e.clientX, e.clientY);

    if(tail) tail.dataset.status = "inactive";
    
    globalIndex++;
  }
}

const hideAllImages = () => {
  for (let i = 0; i < images.length; i++) {
    images[i].dataset.status = "inactive";
  }
}

section.addEventListener("mouseenter", () => {
  window.onmousemove = e => handleOnMove(e);
  window.ontouchmove = e => handleOnMove(e.touches[0]);
});

section.addEventListener("mouseleave", () => {
  window.onmousemove = null;
  window.ontouchmove = null;
  hideAllImages();
});












