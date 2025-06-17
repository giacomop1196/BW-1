let correctAnswer = sessionStorage.getItem(`correctAnswerCount`)
let incorrectAnswer = sessionStorage.getItem(`incorrectAnswerCount`)
let questionLength = sessionStorage.getItem(`questionLength`)

const chartData = {
  labels: [`Wrong`, `Correct`],
  data: [incorrectAnswer, correctAnswer],
}

const chart = document.getElementById(`mainChart`)

new Chart(chart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: `Test result`,
        data: chartData.data,
      },
    ],
  },
  options: {
    borderWidth: 0,
    borderRadius: 2,
    cutout: `70%`,
    hoverBorderWidth: 1,
    backgroundColor: [` #d20094`, `#00ffff`],
    plugins: {
      legend: {
        display: false,
      },
    },
  },
})

const rightNumberQuestion = document.querySelector(
  `.doughnut-chart-exitPool-Correct`
)

const startPageResultCorrect = () => {
  let resultCorrect = (correctAnswer / questionLength) * 100
  let rightResultDisplay = document.createElement(`div`)
  rightResultDisplay.classList.add(`correct-display-results`)
  rightResultDisplay.innerHTML = `
    <p>${resultCorrect.toFixed(2)} %</p>
    <p>${correctAnswer}/${questionLength} questions</p>`
  rightNumberQuestion.appendChild(rightResultDisplay)
}

const wrongNumberQuestion = document.querySelector(
  `.doughnut-chart-exitPool-Wrong`
)

const startPageResultIncorrect = () => {
  let resultIncorrect = (incorrectAnswer / questionLength) * 100
  let wrongResultDisplay = document.createElement(`div`)
  wrongResultDisplay.classList.add(`incorrect-display-results`)
  wrongResultDisplay.innerHTML = `
    <p>${resultIncorrect.toFixed(2)} %</p>
    <p>${incorrectAnswer}/${questionLength} questions</p>`
  wrongNumberQuestion.appendChild(wrongResultDisplay)
}

window.onload = function () {
  startPageResultIncorrect()
  startPageResultCorrect()
}

let percentageCorrect = (correctAnswer / questionLength) * 100

console.log(percentageCorrect)

const textResultMessage = () => {
  if (percentageCorrect >= 60) {
    console.log(`VA BENE`)
  } else {
    console.log(`NO BUONO`)
  }
}

textResultMessage()
