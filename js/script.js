//array delle domande
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
]

window.onload = function () {
  // TIPS:
  // SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
  // Per ogni domanda, crea un container e incorporale tutte all'interno.
  // Crea poi dei radio button
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
  // con le risposte corrette e incorrette come opzioni
  // (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale)
  //
  // SE MOSTRI UNA DOMANDA ALLA VOLTA:
  // Mostra la prima domanda con il testo e i radio button.
  // Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
  // salvando le risposte dell'utente in una variabile
}

// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

// BUON LAVORO 💪🚀

let correctAnswerCount = 0
let incorrectAnswerCount = 0
let currentQuestionIndex = 0
let timer
let questionTitle = document.querySelector(".questions-title")
let timerDisplay = document.querySelector(".sessanta")
let formQuestions = document.querySelector(".form-domande")
let questionTracker = document.querySelector("footer p")
let timeLeft = 60

function startTimer() {
  clearInterval(timer) // é la funzione che azzera il timer
  timeLeft = 60
  timerDisplay.textContent = timeLeft
  timer = setInterval(() => {
    // é la funzione che fa partire il countdown
    timeLeft--
    timerDisplay.textContent = timeLeft
    if (timeLeft <= 0) {
      clearInterval(timer) // Se il tempo é <- 0 , resettiamo il timer
      incorrectAnswerCount++
      currentQuestionIndex++
      displayQuestions()
      console.log(incorrectAnswerCount)
    }
  }, 1000) // per farlo contare in secondi
}

console.log(incorrectAnswerCount)

function displayQuestions() {
  // questa funzione Mostra le domande sullo schermo
  if (currentQuestionIndex < questions.length) {
    // questa funziona dichiara che se l'indice é minore della lunghezza dell'array, parte la funzione del timer
    startTimer()
    const questionData = questions[currentQuestionIndex] // questa costante definisce la domanda tramite l'array
    questionTitle.innerHTML = questionData.question // qui la andiamo ad "appendere" nel h1 presente in html
    formQuestions.innerHTML = "" // qui vengono cancellati i pulsanti precedenti
    const allAnswer = [
      ...questionData.incorrect_answers,
      questionData.correct_answer, // ... copia tutte le risposte dell array delle domande e le inserisce dentro Allanswer
    ]
    console.log(allAnswer)
    allAnswer.forEach((answer) => {
      const button = document.createElement("input") //qua abbiamo creato i bottoni presenti all'interno delle domande
      button.type = "button"
      button.classList.add("button-4-questions") // gli abbiamo dato una classe per il css
      button.value = answer // qui andiamo a riempire il bottone

      button.addEventListener("click", () => checkAnswer(answer)) // questo evento controlla che la risposta giusta o sbagliata

      formQuestions.appendChild(button) // abbiamo appeso questi bottoni dentro il form
    })
    questionTracker.innerHTML = `Domanda ${
      currentQuestionIndex + 1 // serve per tenere traccia del numero della domanda
    } <span class="purple">/${questions.length}</span> ` //quante domande ci sono all'interno dell'aray
  } else {
    sessionStorage.setItem(`correctAnswerCount`, correctAnswerCount)
    sessionStorage.setItem(`incorrectAnswerCount`, incorrectAnswerCount)
    sessionStorage.setItem(`questionLength`, questions.length)
    window.location.href = "./results.html" //collegamento alla pagina html, quando finisce il quiz o quando termina il tempo
  }

  console.log(correctAnswerCount, +"   " + incorrectAnswerCount) // serve a noi per controllare in console le risposte
}

function checkAnswer(selectedAnswer) {
  const questionData = questions[currentQuestionIndex] //creiamo una variabile uguale ad un array per le domande
  if (selectedAnswer === questionData.correct_answer) {
    // controlla se la risposta è corretta o sbagliata
    correctAnswerCount++ //aggiunge un +1 alle domande corrette
  } else {
    incorrectAnswerCount++ //aggiunge un +1 alle domande sbagliate
  }

  currentQuestionIndex++
  displayQuestions()
}

window.onload = function () {
  displayQuestions()
}
