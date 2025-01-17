// logos de ligas
const teams = {
  LMX: [
    { name: "America", logo: "LMX/lgAmerica.png" },
    { name: "Atlas", logo: "LMX/lgAtlas.png" },
    { name: "Cruz Azul", logo: "LMX/lgCruzAzul.png" },
    { name: "Guadalajara", logo: "LMX/lgGuadalajara.png" },
    { name: "Juarez", logo: "LMX/lgJuarez.png" },
    { name: "León", logo: "LMX/lgLeon.png" },
    { name: "Mazatlan", logo: "LMX/lgMazatlan.png" },
    { name: "Monterrey", logo: "LMX/lgMonterrey.png" },
    { name: "Necaxa", logo: "LMX/lgNecaxa.png" },
    { name: "Pachuca", logo: "LMX/lgPachuca.png" },
    { name: "Puebla", logo: "LMX/lgPuebla.png" },
    { name: "Pumas", logo: "LMX/lgPumas.png" },
    { name: "Querétearo", logo: "LMX/lgQueretaro.png" },
    { name: "Santos", logo: "LMX/lgSantos.png" },
    { name: "San Luis", logo: "LMX/lgSanLuis.png" },
    { name: "Tigres", logo: "LMX/lgTigres.png" },
    { name: "Tijuana", logo: "LMX/lgTijuana.png" },
    { name: "Toluca", logo: "LMX/lgToluca.png" },
  ],
  LaLIGA: [
    { name: "Alaves", logo: "LaLIGA/lgAlaves.png" },
    { name: "Athletic", logo: "LaLIGA/lgAthletic.png" },
    { name: "Atl. Madrid", logo: "LaLIGA/lgAtlMadrid.png" },
    { name: "Barcelona", logo: "LaLIGA/lgBarcelona.png" },
    { name: "Betis", logo: "LaLIGA/lgBetis.png" },
    { name: "Celta", logo: "LaLIGA/lgCelta.png" },
    { name: "Getafe", logo: "LaLIGA/lgGetafe.png" },
    { name: "Girona", logo: "LaLIGA/lgGirona.png" },
    { name: "Leganes", logo: "LaLIGA/lgLeganes.png" },
    { name: "Madrid", logo: "LaLIGA/lgMadrid.png" },
    { name: "Mallorca", logo: "LaLIGA/lgMallorca.png" },
    { name: "Osasuna", logo: "LaLIGA/lgOsasuna.png" },
    { name: "Palmas", logo: "LaLIGA/lgPalmas.png" },
    { name: "RCD Espanyol", logo: "LaLIGA/lgRCDE.png" },
    { name: "R Sociedad", logo: "LaLIGA/lgRSociedad.png" },
    { name: "Sevilla", logo: "LaLIGA/lgSevilla.png" },
    { name: "Valencia", logo: "LaLIGA/lgValencia.png" },
    { name: "Valladolid", logo: "LaLIGA/lgValladolid.png" },
    { name: "Vallecano", logo: "LaLIGA/lgVallecano.png" },
    { name: "Villareal", logo: "LaLIGA/lgVillareal.png" },
  ],
  Premier: [
    { name: "Arsenal", logo: "Premier/lgArsenal.png" },
    { name: "Aston Villa", logo: "Premier/lgAston.png" },
    { name: "Bournemouth", logo: "Premier/lgBournemouth.png" },
    { name: "Brenford", logo: "Premier/lgBrenford.png" },
    { name: "Brighton & Hove Albion", logo: "Premier/lgBrighton.png" },
    { name: "Chelsea", logo: "Premier/lgChelsea.png" },
    { name: "Crystal Palace", logo: "Premier/lgCrystal.png" },
    { name: "Everton", logo: "Premier/lgEverton.png" },
    { name: "Fulham", logo: "Premier/lgFulham.png" },
    { name: "Ipswich Town", logo: "Premier/lgIpswich.png" },
    { name: "Leicester City", logo: "Premier/lgLeicester.png" },
    { name: "Liverpool", logo: "Premier/lgLiverpool.png" },
    { name: "Manchester City", logo: "Premier/lgManchester1.png" },
    { name: "Manchester United", logo: "Premier/lgManchester2.png" },
    { name: "Newcastle United", logo: "Premier/lgNewcastle.png" },
    { name: "Nottingham Forest", logo: "Premier/lgNottingham.png" },
    { name: "Southampton", logo: "Premier/lgSouthampton.png" },
    { name: "Tottenham Hotspur", logo: "Premier/lgTottenham.png" },
    { name: "West Ham United", logo: "Premier/lgWest.png" },
    { name: "Wolverhampton Wanderers", logo: "Premier/lgWolves.png" },
  ],
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

//Fondo de liga
const leagueBackgrounds = {
  LMX: "logos/LMX/background.png",
  LaLIGA: "logos/LaLIGA/background.png",
  Premier: "logos/Premier/background.png",
  LMP: "logos/LMP/background.png",
};

//Mensajes por liga
const leagueMessages = {
  LMX: "¡No te pierdas el torneo de Clausura 2025 de la Liga MX! 🥳⚽\n\n",
  LaLIGA: "¡No te pierdas LALIGA EA Sports 2024-25! 🥳⚽\n\n",
  Premier: "¡No te pierdas la Premier League 2024-25! 🥳⚽\n\n",
  LMP: "¡No te pierdas la temporada 2024 - 2025 de la 𝗟𝗠𝗣! 🥳⚾\n\n",
};

// Generar días dinámicos en el selector de día
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

  // Seleccionar liga y cargar fondo
  const selectedLeague = document.getElementById("league").value;
  const backgroundImage = new Image();
  backgroundImage.src =
    leagueBackgrounds[selectedLeague] || "default_background.jpg";
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
    ctx.fillText(`${matchTime}`, 615, 750);
    ctx.textAlign = "right";
    ctx.fillText(`${matchMonth}`, 512, 750);

    ctx.font = "900 41px Roboto";
    ctx.fillStyle = "#FD730C";
    ctx.fillText(`${matchDay}`, 432, 750);

    // Generar el texto dinámico para copiar
    const leagueMessage =
      leagueMessages[selectedLeague] ||
      "¡No te pierdas este gran partido! 🎉\n\n";
    const dynamicText = `${leagueMessage}${teamA} vs ${teamB} hoy a las ${matchTime} CT. 🏟 \n\n✅ ¡Disponible en 𝗩𝗶𝘅𝗶 𝗧𝗩! ✅\n\n¿𝗔𝘂́𝗻 𝗻𝗼 𝗲𝗿𝗲𝘀 𝗰𝗹𝗶𝗲𝗻𝘁𝗲? ¡𝗦𝗼𝗹𝗶𝗰𝗶𝘁𝗮 𝗵𝗼𝘆 𝘁𝘂 𝗽𝗿𝘂𝗲𝗯𝗮 𝗴𝗿𝗮𝘁𝗶𝘀! 😍\n➡️ https://wa.me/message/WIUSJB3VUFE5I1\n\n#Entretenimiento #tv #vixitv #Deportes`;

    document.getElementById("dynamicText").value = dynamicText;
    document.getElementById("buttonContainer").classList.remove("hidden");
  };
}

document.getElementById("downloadBtn").addEventListener("click", function () {
  const canvas = document.getElementById("flyerCanvas");
  const image = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = image;
  link.download = "flyerDeportes.png";
  link.click();
});

document.getElementById("copyTextBtn").addEventListener("click", function () {
  const dynamicText = document.getElementById("dynamicText");
  dynamicText.style.display = "block";
  dynamicText.select();
  document.execCommand("copy");
  dynamicText.style.display = "none";
  alert("Texto copiado al portapapeles");
});

// Inicializar con la primera liga seleccionada
updateTeams();
