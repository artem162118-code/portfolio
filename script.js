let button = document.getElementByld("ShowMore");
let text = document.getElementByld("moreText");
button.onclick = function() {
  text.classList.toggle("d-none");
};
let form = document.getElementByld("ContactForm");
form.onsubmit = function(event) {
  event.preventDefault();
  let name = document.getElementByld("name").value;
  let email = document.getElementByld("email").value;
  let message = document.getElementByld("message").value;
  let result = document.getElementByld("result");
  if (name == "" || email == "" || message == ""){
    result.innerText = "Заполните все поля";
    result.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    result.innerText = "Введите правильную почту";
    result.style.color = "red";
  } else {
    result.innerText = "Сообщение отправлено";
    result.style.color = "green";
    form.reset();
  }
};