//Кнопка "Приховати" ховає текст і замінює назву кнопки на
//"Розкрити", при повторному натисканні текст знову стає доступним
//і кнопка набуває початкового вигляду.

const refs = {
  taskTitle: document.querySelector(".taskTitle"),
  passwordInput: document.querySelector("#passwordInput"),
  passwordButton: document.querySelector("#passwordButton"),
};

refs.passwordButton.addEventListener("click", passwordButtonHandler);

function passwordButtonHandler(event) {
  if (refs.passwordButton.textContent === "Скрыть") {
    refs.passwordButton.textContent = "Розкрити";
    refs.taskTitle.style.display = "none";
  } else {
    refs.passwordButton.textContent = "Скрыть";
    refs.taskTitle.style.display = "block";
  }
}

//Натискання на кнопку "SHOW ME" має виводити значення
//з поля введення(дивіться на елементи в html - розмітці)
// const refs = {
//   taskTitle: document.querySelector(".taskTitle"),
//   alertInput: document.querySelector("#alertInput"),
//   alertButton: document.querySelector("#alertButton"),
// };

// refs.alertButton.addEventListener("click", onAlertButtonClick);

// function onAlertButtonClick(evt) {
//   const inputValue = refs.alertInput.value;
//   refs.taskTitle.textContent = inputValue;
//   refs.alertInput.value = "";
// }
