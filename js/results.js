const chartData = {
  labels: [`Correct`, `Wrong`],
  data: [50, 50],
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
})

// const chart = document.getElementById("myChart")
// const myChart = new Chart(chart, {
//   type: "doughnut",
//   data: {
//     labels: ["correct", "wrong"],
//     datasets: [
//       {
//         label: "Risposte",
//         data: [75, 25],
//       },
//     ],
//   },
// })
