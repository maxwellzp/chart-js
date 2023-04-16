const pieChart = document.getElementById("pieChart");

const pieData = {
  labels: ["BTC", "ETH", "USDT", "BNB", "USDC", "XRP"],
  datasets: [
    {
      label: "Market Cap",
      data: [
        586679494767, 251243660301, 80974710142, 54290921777, 3181987634,
        26994810183,
      ],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

new Chart(pieChart, {
  type: "pie",
  data: pieData,
});
