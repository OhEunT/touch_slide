const panel = document.querySelector('.panel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const delay = convertSpeed(panel.children[0]);
let enableClick = true;
console.log(delay);

next.addEventListener('click', moveNext);
prev.addEventListener('click', movePrev);

function moveNext() {
  if (!enableClick) return;
  enableClick = false;
  panel.append(panel.firstElementChild);
  setTimeout(() => enableClick = true, delay);
}

function movePrev() {
  if (!enableClick) return;
  enableClick = false;
  panel.prepend(panel.lastElementChild);
  setTimeout(() => enableClick = true, delay);
}

function convertSpeed(el) {
  return parseFloat(getComputedStyle(el).transitionDuration) * 1000;
}


