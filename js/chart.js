const chartData = {
  labels: [`Wrong`, `Correct`],
  data: [30, 70],
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
