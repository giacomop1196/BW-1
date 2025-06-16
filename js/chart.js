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
  options: {
    borderWidth: 2,
    borderRadius: 10,
    hoverBorderWidth: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
})
