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
    <p class="right-percentage">${resultCorrect.toFixed(0)} %</p>
    <p class="right-answers">${correctAnswer}/${questionLength} questions</p>`
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
    <p class="wrong-percentage">${resultIncorrect.toFixed(0)} %</p>
    <p class="wrong-answers">${incorrectAnswer}/${questionLength} questions</p>`
  wrongNumberQuestion.appendChild(wrongResultDisplay)
}

window.onload = function () {
  startPageResultIncorrect()
  startPageResultCorrect()
}

let percentageCorrect = (correctAnswer / questionLength) * 100

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
