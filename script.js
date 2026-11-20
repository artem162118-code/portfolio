let button = document.getElementById("ShowMore");
let text = document.getElementById("moreText");
button.onclick = function() {
  text.classList.toggle("d-none");
};
let form = document.getElementById("ContactForm");
form.onsubmit = function(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let result = document.getElementById("result");
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
