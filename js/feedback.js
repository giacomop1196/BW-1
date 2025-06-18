/* ---------- FEEDBACK PAGE ---------- */
// DIV STAR
const stars = []
const span = document.getElementById("stars")
let selectedRating = 0
let error = document.querySelector(".error-feedback")

for (let i = 1; i <= 10; i++) {
  const img = document.createElement("img")
  img.src = "../assets/images/star.copy.svg"
  img.dataset.index = i
  img.classList.add("star")
  img.style.margin = "10px"

  img.addEventListener("click", () => {
    const index = parseInt(img.dataset.index)
    selectedRating = index
    for (let j = 0; j < stars.length; j++) {
      if (j < index) {
        stars[j].src = "../assets/images/star.svg"
      } else {
        stars[j].src = "../assets/images/star.copy.svg"
      }
    }
  })

  stars.push(img)
  span.appendChild(img)
}

// DIV COMMENT
const button = document.getElementsByClassName("button-style")[0]
const feedback = document.querySelector(".feedback")
const restart = document.getElementById("restart")
const feedbackTextTitle = document.getElementById("feedback-text")
const modal = document.querySelector(".popup")
restart.style.display = "none"

button.addEventListener("click", (event) => {
  event.preventDefault()

  const feedbackText = feedback.value.trim()

  if (feedbackText !== "" && selectedRating > 0) {
    error.innerText = ""
    modal.classList.remove("hidden")
  } else {
    error.style.display = "block"
    error.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Please write a comment and select at least one star.`
  }
})

feedback.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    button.click()
  }
})
/* ========== FEEDBACK PAGE ========== */
