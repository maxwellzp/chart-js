const lineChart = document.getElementById("lineChart");

const labels = [
  "Apr 10, 2023",
  "Apr 11, 2023",
  "Apr 12, 2023",
  "Apr 13, 2023",
  "Apr 14, 2023",
  "Apr 15, 2023",
  "Apr 16, 2023",
];
const lineData = {
  labels: labels,
  datasets: [
    {
      label: "Ethereum Average Price, $",
      data: [1910.36, 1889.86, 1916.58, 2012.11, 2099.98, 2090.59, 2101.07],
      fill: false,
      borderColor: "rgb(102, 178, 255)",
      tension: 0.1,
    },
  ],
};

new Chart(lineChart, {
  type: "line",
  data: lineData,
  options: {
    scales: {
      y: {
        stacked: true,
      },
    },
  },
});
