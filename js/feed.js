// Rutas de imágenes de fondo
const backgrounds = {
  fondo1: "background-feed.png",
};

document
  .getElementById("movieForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    generarFlyer();
  });

function generarFlyer() {
  const canvas = document.getElementById("flyerCanvas");
  const ctx = canvas.getContext("2d");

  // Obtener datos del formulario
  const titulo = document.getElementById("title").value;
  const tipo = document.getElementById("category").value;
  const sinopsis = document.getElementById("synopsis").value;
  const fondo = document.getElementById("background").value;
  const posterUrl = document.getElementById("posterUrl").value;

  // Configuración del canvas
  canvas.width = 1080;
  canvas.height = 1080;

  // Fondo
  const imgFondo = new Image();
  imgFondo.src = fondo;
  imgFondo.onload = function () {
    ctx.drawImage(imgFondo, 0, 0, canvas.width, canvas.height);

    // Agregar Título
    ctx.font = "bold 36px Roboto";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.fillText(titulo, 275, 240, 450);

    // Agregar Tipo (Serie o Película)
    ctx.font = "800 60px Roboto";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("¡NUEVA " + tipo + " AÑADIDA!", canvas.width / 2, 95);

    // Agregar Sinopsis
    const maxWidth = 450; // Ancho máximo para el texto de sinopsis
    const maxHeight = 450; // Altura máxima para el texto de sinopsis
    const x = 50; // Posición inicial en X para la sinopsis
    const y = 350; // Posición inicial en Y para la sinopsis
    const lineHeight = 38; // Altura de cada línea
    ctx.font = "500 32px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "left";

    wrapText(ctx, sinopsis, x, y, maxWidth, lineHeight, maxHeight);

    // Agregar Imagen del Poster
    if (posterUrl) {
      const poster = new Image();

      poster.src = posterUrl;
      poster.onload = function () {
        const imgX = 545;
        const imgY = 170;
        ctx.drawImage(poster, imgX, imgY, 490, 740);

        // Mostrar el botón de descarga después de generar la imagen
        document.getElementById("buttonContainer").classList.remove("hidden");
      };
    } else {
      document.getElementById("downloadBtn").classList.remove("hidden");
    }
  };
}

// Función para dividir y ajustar el texto de la sinopsis con salto de línea
function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxHeight) {
  const words = text.split(" ");
  let line = "";
  let testLine = "";
  let testWidth = 0;
  let yOffset = 0;

  for (let i = 0; i < words.length; i++) {
    testLine = line + words[i] + " ";
    testWidth = ctx.measureText(testLine).width;

    if (testWidth > maxWidth && i > 0) {
      ctx.fillText(line, x, y + yOffset);
      line = words[i] + " ";
      yOffset += lineHeight;
      if (yOffset >= maxHeight) break;
    } else {
      line = testLine;
    }
  }
  if (yOffset < maxHeight) ctx.fillText(line, x, y + yOffset);
}

document.getElementById("downloadBtn").addEventListener("click", function () {
  const flyerCanvas = document.getElementById("flyerCanvas");
  const image = flyerCanvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = image;
  link.download = "flyer.png";
  link.click();
});

///TExto dniasd

function generarTextoDinamico() {
  const titulo = document.getElementById("title").value;
  const tipo = document.getElementById("category").value;
  const sinopsis = document.getElementById("synopsis").value;

  // Texto dinámico basado en los datos ingresados
  const texto = `¡𝗡𝘂𝗲𝘃𝗮 𝗮𝗰𝘁𝘂𝗮𝗹𝗶𝘇𝗮𝗰𝗶𝗼́𝗻 𝗱𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝗶𝗱𝗼! 🥳\n\n${titulo} - 𝗬𝗮 𝗗𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲 ✅\n\n¿𝗔𝘂́𝗻 𝗻𝗼 𝗲𝗿𝗲𝘀 𝗰𝗹𝗶𝗲𝗻𝘁𝗲? ¡𝗦𝗼𝗹𝗶𝗰𝗶𝘁𝗮 𝗵𝗼𝘆 𝘁𝘂 𝗽𝗿𝘂𝗲𝗯𝗮 𝗴𝗿𝗮𝘁𝗶𝘀! 😍
➡️ https://wa.me/message/WIUSJB3VUFE5I1 \n\n#streaming #peliculas #Entretenimiento #tv #cine #series #vixitv`;

  // Asignar el texto al campo de texto oculto
  document.getElementById("dynamicText").value = texto;
}

function copiarTexto() {
  // Llamar a generarTextoDinamico para actualizar el contenido del campo oculto
  generarTextoDinamico();

  // Seleccionar y copiar el texto
  const textoDinamico = document.getElementById("dynamicText");
  textoDinamico.classList.remove("hidden"); // Mostrar temporalmente para selección
  textoDinamico.select();
  document.execCommand("copy");
  textoDinamico.classList.add("hidden"); // Ocultar nuevamente

  // Confirmación visual
  alert("Texto copiado al portapapeles");
}
