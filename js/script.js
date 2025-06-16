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
        incorrect_answers: [
          "Ice Cream Sandwich",
          "Jelly Bean",
          "Marshmallow",
        ],
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
    ];

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
    };

      // Come calcolare il risultato? Hai due strade:
      // Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
      // Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

      // BUON LAVORO 💪🚀

/* ---------- FEEDBACK PAGE ---------- */
// DIV STAR
const stars = [];
const span = document.getElementById("stars");

for(let i = 1; i <=10; i++){
  const img = document.createElement('img');
  img.src = '../assets/images/star.copy.svg';
  img.dataset.index = i;
  img.classList.add('star');
  img.style.margin = '10px';

  img.addEventListener('click',() => {
    const index = parseInt(img.dataset.index) -1;
    for(let j = 0; j < stars.length; j++){
      if(j <= index) {
        stars[j].src = '../assets/images/star.svg';
      } else {
        stars[j].src = '../assets/images/star.copy.svg';
      }
    }
  });
  
  stars.push(img);
  span.appendChild(img);
}

// DIV COMMENT
const button = document.getElementsByClassName('button-style')[0];
const feedback = document.querySelector('.feedback');

button.addEventListener('click', () => {
  alert('Feedback Inviato');
  location.reload();
});

feedback.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    button.click();
  }
});
/* ========== FEEDBACK PAGE ========== */