let correctAnswer = sessionStorage.getItem(`correctAnswerCount`) // Collettiamo il NUMERO di domande Corrette
let incorrectAnswer = sessionStorage.getItem(`incorrectAnswerCount`) // Collettiamo il NUMERO di domande Sbagliate
let questionLength = sessionStorage.getItem(`questionLength`) // Collettiamo il NUMERO totale di domande poste dal quiz

// Da qua inizia la creazione del Chart a Ciambella (In fondo all'HTML dobbiamo caricare uno <script> preso da ChartJS)

const chartData = {
  labels: [`Wrong`, `Correct`], // Porzione di etichette `Wrong` & `Correct` sulla Ciambella
  data: [incorrectAnswer, correctAnswer], // Porzione di VALORI precedentemente collettati `Wrong` & `Correct` sulla Ciambella
}

const chart = document.getElementById(`mainChart`) // Creazione Ciambella

new Chart(chart, {
  type: "doughnut", // Tipo di Chart `doughnut`(Ciambella), `pie`(Torta), etc.
  data: {
    labels: chartData.labels, // Richiamo alle etichette da inserire nel Chart
    datasets: [
      {
        label: `Test result`,
        data: chartData.data, // Richiamo i VALORI da inserire e "spalmare" nel Chart
      },
    ],
  },
  options: {
    // opzioni Grafiche del Chart
    borderWidth: 0,
    borderRadius: 2,
    cutout: `70%`,
    hoverBorderWidth: 1,
    backgroundColor: [` #d20094`, `#00ffff`],
    plugins: {
      legend: {
        display: false, // Eliminiamo la Legenda del Chart
      },
    },
  },
})

const rightNumberQuestion = document.querySelector(
  `.doughnut-chart-exitPool-Correct`
) // Richiamiamo e appendo il box a SX della pagina Results dove colletteremo il NUMERO e la PERCETUALE di risposte GIUSTE

const startPageResultCorrect = () => {
  let resultCorrect = (correctAnswer / questionLength) * 100
  let rightResultDisplay = document.createElement(`div`)
  rightResultDisplay.classList.add(`correct-display-results`)
  rightResultDisplay.innerHTML = `
    <p class="right-percentage">${resultCorrect.toFixed(0)} %</p>
    <p class="right-answers">${correctAnswer}/${questionLength} questions</p>`
  rightNumberQuestion.appendChild(rightResultDisplay)
}

const wrongNumberQuestion = document.querySelector(
  `.doughnut-chart-exitPool-Wrong`
) // Richiamiamo e appendo il box a DX della pagina Results dove colletteremo il NUMERO e la PERCETUALE di risposte SBAGLIATE

const startPageResultIncorrect = () => {
  let resultIncorrect = (incorrectAnswer / questionLength) * 100
  let wrongResultDisplay = document.createElement(`div`)
  wrongResultDisplay.classList.add(`incorrect-display-results`)
  wrongResultDisplay.innerHTML = `
    <p class="wrong-percentage">${resultIncorrect.toFixed(0)} %</p>
    <p class="wrong-answers">${incorrectAnswer}/${questionLength} questions</p>`
  wrongNumberQuestion.appendChild(wrongResultDisplay)
}

window.onload = function () {
  // Al caricamento della pagina Result, invochiamo le funzioni di cui sopra
  startPageResultIncorrect()
  startPageResultCorrect()
}

let percentageCorrect = (correctAnswer / questionLength) * 100 // Creiamo il Testo (positivo o negativo) da far apparire al centro del Chart a fine quiz in base alla percentuale riscontrata

console.log(percentageCorrect)

const textResultMessage = () => {
  const firstText = document.querySelector(`.congrat`)
  const secondText = document.querySelector(`.passedORfail`)
  const thirdText = document.querySelector(`.final-message`)
  if (percentageCorrect >= 60) {
    firstText.innerText = `Congratulation!`
    secondText.innerText = `You passed the exam.`
    secondText.style.color = `#00ffff`
    thirdText.innerText = `We'll send you the certificate in few minutes. Check your email
    (including promotion / spam folder)`
  } else {
    firstText.innerText = `We're sorry :(`
    secondText.innerText = `You did not passed the exam.`
    secondText.style.color = `#c2128d`
    thirdText.innerText = `We'll send you a link for a new test sheet in few minutes. Check your email
    (including promotion / spam folder)`
  }
}

textResultMessage()
