/* ---------- FEEDBACK PAGE ---------- */
// DIV STAR
const stars = []
const span = document.getElementById("stars") /* Prende l’elemento in HTML con ID "stars" dove verranno inserite le stelle */
let selectedRating = 0 /* Variabile per tenere traccia delle stelle cliccate */
let error = document.querySelector(".error-feedback")
/* Prende l'elemento con classe "error-feedback" per mostrare eventuali messaggi di errore */

for (let i = 1; i <= 10; i++) {
  const img = document.createElement("img")
  img.src = "../assets/images/star.copy.svg"
  img.dataset.index = i
  img.classList.add("star")
  img.style.margin = "10px"

  img.addEventListener("click", () => { /* Si aggiunge un listener per gestire il click su ciascuna stella */
    const index = parseInt(img.dataset.index)/* Legge l’indice della stella cliccata e lo converte in numero intero */
    selectedRating = index /* Aggiorna la stella selezionata */
    for (let j = 0; j < stars.length; j++) { /* Cicla tutte le stelle per aggiornare la visualizzazione se siano piene o vuote */
      if (j < index) {
        stars[j].src = "../assets/images/star.svg"
      } else {
        stars[j].src = "../assets/images/star.copy.svg"
      }
    }
  })
/* Aggiunge l’immagine della stella nell’array (stars) e la inserisce nel DOM */  
  stars.push(img)
  span.appendChild(img) 
}

// DIV COMMENT
const button = document.getElementsByClassName("button-style")[0]/* Prende il primo pulsante con classe button-style */
const feedback = document.querySelector(".feedback") /* Qui seleziona il campo di testo input con classe feedback */
const restart = document.getElementById("restart") /* Qui seleziona l'elemento con ID restart */
const feedbackTextTitle = document.getElementById("feedback-text") /* Qui seleziona l’elemento con ID feedback-text */
const modal = document.querySelector(".popup") /* Qui seleziona il modale (popup) che appare dopo l’invio del feedback */
restart.style.display = "none" /* Inizialmente nasconde il pulsante restart */

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
