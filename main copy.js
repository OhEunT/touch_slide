const panel = document.querySelector('.panel');
const panel_li = panel.querySelectorAll("li");
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const delay = convertSpeed(panel.children[0]);
let enableClick = true;
console.log(delay);
let isTouching = false;

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


//웹에서 드레그

panel.addEventListener('mousedown', (e) => {
  startX = e.clientX;
  isTouching = true;
});

panel.addEventListener('mousemove', (e) => {
  if (!isTouching) return;
  const mouseX = e.clientX;
  const mouseDiff = startX - mouseX;

  if (mouseDiff > 50) { // 마우스 이동 거리가 50px 이상이면
    moveNext();
    isTouching = false; // 한 번만 실행되도록 플래그를 리셋
  } else if (mouseDiff < -50) {
    movePrev();
    isTouching = false;
  }
});

panel.addEventListener('mouseup', () => {
  isTouching = false;
});

panel.addEventListener('mouseleave', () => {
  isTouching = false;
});






///모바일 터치



panel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isTouching = true;
});

panel.addEventListener('touchmove', (e) => {
  if (!isTouching) return;
  const touchX = e.touches[0].clientX;
  const touchDiff = startX - touchX;

  if (touchDiff > 50) { // 터치 이동 거리가 50px 이상이면
    moveNext();
    isTouching = false; // 한 번만 실행되도록 플래그를 리셋
  } else if (touchDiff < -50) {
    movePrev();
    isTouching = false;
  }
});

panel.addEventListener('touchend', () => {
  isTouching = false;
});








