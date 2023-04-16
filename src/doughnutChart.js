const doughnutChart = document.getElementById("doughnutChart");

const doughnutData = {
  labels: ["BTC", "ETH", "USDT"],
  datasets: [
    {
      label: "Volume(24), $",
      data: [11413389661, 6650372515, 21903887562],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

new Chart(doughnutChart, {
  type: "doughnut",
  data: doughnutData,
});
