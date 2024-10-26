const teams = {
  LMP: [
    { name: "Aguilas", logo: "LMP/aguilas.png" },
    { name: "Algodoneros", logo: "LMP/algodoneros.png" },
    { name: "Cañeros", logo: "LMP/caneros.png" },
    { name: "Charros", logo: "LMP/charros.png" },
    { name: "Mayos", logo: "LMP/mayos.png" },
    { name: "Naranjeros", logo: "LMP/naranjeros.png" },
    { name: "Sultanes", logo: "LMP/sultanes.png" },
    { name: "Tomateros", logo: "LMP/tomateros.png" },
    { name: "Venados", logo: "LMP/venados.png" },
    { name: "Yaquis", logo: "LMP/yaquis.png" },
  ],
};

const daySelect = document.getElementById("matchDay");
for (let day = 1; day <= 31; day++) {
  const option = document.createElement("option");
  option.value = day;
  option.textContent = day;
  daySelect.appendChild(option);
}

document.getElementById("league").addEventListener("change", updateTeams);
document
  .getElementById("matchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    generateFlyer();
  });

function updateTeams() {
  const league = document.getElementById("league").value;
  const teamASelect = document.getElementById("teamA");
  const teamBSelect = document.getElementById("teamB");

  // Limpiar las opciones de los equipos
  teamASelect.innerHTML = "";
  teamBSelect.innerHTML = "";

  // Llenar las opciones de los equipos según la liga seleccionada
  teams[league].forEach((team) => {
    const optionA = document.createElement("option");
    optionA.value = team.logo;
    optionA.textContent = team.name;
    teamASelect.appendChild(optionA);

    const optionB = document.createElement("option");
    optionB.value = team.logo;
    optionB.textContent = team.name;
    teamBSelect.appendChild(optionB);
  });
}

function generateFlyer() {
  const canvas = document.getElementById("flyerCanvas");
  const ctx = canvas.getContext("2d");

  const backgroundImage = new Image();
  backgroundImage.src = "logos/LMP/background.png"; // Ruta de la imagen de fondo
  backgroundImage.onload = () => {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    const teamA = document.getElementById("teamA").selectedOptions[0].text;
    const logoA = document.getElementById("teamA").value;
    const teamB = document.getElementById("teamB").selectedOptions[0].text;
    const logoB = document.getElementById("teamB").value;
    const matchDay = document.getElementById("matchDay").value;
    const matchMonth = document.getElementById("matchMonth").value;
    const matchTime = document.getElementById("matchTime").value;

    const teamALogo = new Image();
    const teamBLogo = new Image();
    teamALogo.src = `logos/${logoA}`; // Ruta del logo de equipo A
    teamBLogo.src = `logos/${logoB}`; // Ruta del logo de equipo B

    teamALogo.onload = () => {
      ctx.drawImage(teamALogo, 125, 340, 200, 255);
    };

    teamBLogo.onload = () => {
      ctx.drawImage(teamBLogo, 755, 340, 200, 255);
    };

    ctx.font = "900 40px Roboto";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(`${matchTime}`, 615, 665);
    ctx.textAlign = "right";
    ctx.fillText(`${matchMonth}`, 512, 665);

    ctx.font = "900 40px Roboto";
    ctx.fillStyle = "#FD4D16";
    ctx.fillText(`${matchDay}`, 432, 665);

    document.getElementById("downloadBtn").style.display = "block";
  };
}

document.getElementById("downloadBtn").addEventListener("click", function () {
  const canvas = document.getElementById("flyerCanvas");
  const image = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = image;
  link.download = "flyer.png";
  link.click();
});

// Inicializar con la primera liga seleccionada
updateTeams();
