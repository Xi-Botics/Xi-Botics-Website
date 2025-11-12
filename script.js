// Source - https://stackoverflow.com/a
// Posted by Bryan Rieger, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-10, License - CC BY-SA 4.0

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

console.log(width);

var position = 0;

function moveCarousel(direction) {
  if (direction == 'forward') {
    if (position == 2) {
      return false;
    }
    position++;
  }
  else if (direction == 'backward') {
    if (position == 0) {
      return false;
    }
    position--;
  }
  let offset = 0;
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  // if (width >= 1024) {
  //   offset = 806 * position;
  // }
  if (width >= 768) {
    offset = 406 * position;
  }
  else {
    offset = 306 * position;
  }
  document.querySelectorAll('.carousel-item').forEach(carouselItemElement => {
    carouselItemElement.style.transform = `translateX(-${offset}px)`;
  })
}