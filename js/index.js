const buyCarouselWrapper = document.querySelector(".buyexplain-carousel-wrapper");
const buyPrevBtn = document.querySelector("#buyexplain-prev-btn");
const buyNextBtn = document.querySelector("#buyexplain-next-btn");
const worksCarouselWrapper = document.querySelector(".works-carousel-wrapper");
const worksPrevBtn = document.querySelector("#works-prev-btn");
const worksNextBtn = document.querySelector("#works-next-btn");
let buyIndexCost = 0;
let worksIndexCost = 0;
const imgWidth = 587 + 32;

buyPrevBtn.addEventListener("click", function () {
  if (buyIndexCost == -2) {
    buyIndexCost = 0;
    buyCarouselWrapper.style.transform = `translateX(${buyIndexCost}px)`;
    buyCarouselWrapper.style.transition = "transform 0.2s ease";
  } else {
    buyIndexCost = buyIndexCost - 1;
    let translateDistance = buyIndexCost * -imgWidth;
    buyCarouselWrapper.style.transform = `translateX(${translateDistance}px)`;
    buyCarouselWrapper.style.transition = "transform 0.4s ease";
  }
});

buyNextBtn.addEventListener("click", function () {
  if (buyIndexCost == 2) {
    buyIndexCost = 0;
    buyCarouselWrapper.style.transform = `translateX(${buyIndexCost}px)`;
    buyCarouselWrapper.style.transition = "transform 0.2s ease";
  } else {
    buyIndexCost = buyIndexCost + 1;
    let translateDistance = buyIndexCost * -imgWidth;
    buyCarouselWrapper.style.transform = `translateX(${translateDistance}px)`;
    buyCarouselWrapper.style.transition = "transform 0.4s ease";
  }
});

worksPrevBtn.addEventListener("click", function () {
  if (worksIndexCost == -2) {
    worksIndexCost = 0;
    worksCarouselWrapper.style.transform = `translateX(${worksIndexCost}px)`;
    worksCarouselWrapper.style.transition = "transform 0.2s ease";
  } else {
    worksIndexCost = worksIndexCost - 1;
    let translateDistance = worksIndexCost * -imgWidth;
    worksCarouselWrapper.style.transform = `translateX(${translateDistance}px)`;
    worksCarouselWrapper.style.transition = "transform 0.4s ease";
  }
});

worksNextBtn.addEventListener("click", function () {
  if (worksIndexCost == 2) {
    worksIndexCost = 0;
    worksCarouselWrapper.style.transform = `translateX(${worksIndexCost}px)`;
    worksCarouselWrapper.style.transition = "transform 0.2s ease";
  } else {
    worksIndexCost = worksIndexCost + 1;
    let translateDistance = worksIndexCost * -imgWidth;
    worksCarouselWrapper.style.transform = `translateX(${translateDistance}px)`;
    worksCarouselWrapper.style.transition = "transform 0.4s ease";
  }
});
