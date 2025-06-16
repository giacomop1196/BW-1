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
    hoverBorderWidth: 2,
    backgroundColor: [` #d20094`, `#00ffff`],
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  plugins: [
    {
      id: "centerText",
      afterDraw: function (chart) {
        const ctx = chart.ctx
        // ctx.save()
        ctx.font = "24px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillStyle = "white"
        const centerX = chart.canvas.width / 1.5
        const centerY = chart.canvas.height / 1.5
        ctx.fillText(``, centerX, centerY)
        // ctx.restore()
      },
    },
  ],
})
