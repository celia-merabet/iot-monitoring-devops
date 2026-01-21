async function fetchData() {
  try {
    const res = await fetch("/api/status");
    const data = await res.json();
    return {
      temperature: Math.floor(Math.random() * 50), // simulation
      humidity: Math.floor(Math.random() * 100)
    };
  } catch (err) {
    console.error(err);
    return { temperature: 0, humidity: 0 };
  }
}

// Config Charts
const tempCtx = document.getElementById("temperatureChart").getContext("2d");
const humidityCtx = document.getElementById("humidityChart").getContext("2d");

const temperatureChart = new Chart(tempCtx, {
  type: "line",
  data: {
    labels: ["00:00","01:00","02:00","03:00","04:00"],
    datasets: [{ label: "Température °C", data: [], borderColor: "red", fill: false }]
  }
});

const humidityChart = new Chart(humidityCtx, {
  type: "line",
  data: {
    labels: ["00:00","01:00","02:00","03:00","04:00"],
    datasets: [{ label: "Humidité %", data: [], borderColor: "blue", fill: false }]
  }
});

// Mise à jour des charts toutes les 5 secondes
setInterval(async () => {
  const { temperature, humidity } = await fetchData();

  const timeLabel = new Date().toLocaleTimeString();
  if (temperatureChart.data.labels.length >= 10) {
    temperatureChart.data.labels.shift();
    temperatureChart.data.datasets[0].data.shift();
    humidityChart.data.labels.shift();
    humidityChart.data.datasets[0].data.shift();
  }

  temperatureChart.data.labels.push(timeLabel);
  temperatureChart.data.datasets[0].data.push(temperature);

  humidityChart.data.labels.push(timeLabel);
  humidityChart.data.datasets[0].data.push(humidity);

  temperatureChart.update();
  humidityChart.update();
}, 5000);
