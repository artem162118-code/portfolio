let button = document.getElementByld("ShowMore");
let text = document.getElementByld("moreText");
button.onclick = function() {
  text.classList.toggle("d-none");
};