// let pass = 7

// let fail = 3

const resultsComparator = (pass, fail) => {
  if (pass > fail) {
    let rightResultDisplay = document.createElement(`div`)
    rightResultDisplay.classList.add(`correct-display-results`)
    rightResultDisplay.innerHTML = `
    <p>${pass.value} %</p>
    <p>${pass}/10 questions</p>`
    const rightNumberQuestion = document.getElementsByClassName(
      `doughnut-chart-exitPool-Correct`
    )
    rightNumberQuestion.appendChild(rightResultDisplay)
  } else {
  }
}

resultsComparator(7, 3)
