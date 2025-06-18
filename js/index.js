let error = document.querySelector(".error-index")

function startQuiz() {
  const checkBox = document.getElementById("myCheckbox")
  if (checkBox.checked) {
    window.location.href = "./question.html"
    error.style.display = "none"
  } else {
    error.style.display = "block"
    error.innerHTML = `<i class="fas fa-exclamation-triangle"></i> You must first confirm the checkbox`
  }
}
