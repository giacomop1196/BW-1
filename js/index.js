let error = document.querySelector('.error-index')

function startQuiz() {
  const checkBox = document.getElementById("myCheckbox")
  if (checkBox.checked) {
    window.location.href = "./question.html"
  } else {
    error.innerText = "You must first confirm the checkbox"
  }
}
