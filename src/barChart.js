const barChart = document.getElementById("barChart");

new Chart(barChart, {
  type: "bar",
  data: {
    labels: ["Dec 2022", "Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023"],
    datasets: [
      {
        label: "Bitcoin avg price, $",
        data: [16537.4, 23125.1, 23130.5, 28473.7, 30322.4],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
