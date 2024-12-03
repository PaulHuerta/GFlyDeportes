async function generateShortURL(user) {
    const baseUrl = `https://wa.me/522214444315?text=${encodeURIComponent(
      `Hola, ${user} me recomendo su servicio y estoy interesad@ en conocer más. ☺️`
    )}`;
  
    try {
      const response = await fetch(
        `https://api.tinyurl.com/create?api_token=ENhg6ekB5JMy8HhjU7UgoWToTkkYtdGgRTbYkFIjSjENIsW3D879VhS9iLCA`, // Reemplaza con tu API Token
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: baseUrl,
            domain: 'tiny.one',
          }),
        }
      );
  
      if (!response.ok) {
        throw new Error('No se pudo acortar la URL');
      }
  
      const data = await response.json();
      return data.data.tiny_url;
    } catch (error) {
      console.error(error);
      alert('Error al generar la URL. Por favor, intenta de nuevo.');
    }
  }
  
  document.getElementById('urlForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    if (!username) {
      alert('Por favor, ingresa un nombre de usuario.');
      return;
    }
  
    document.getElementById('generateBtn').disabled = true;
    const shortURL = await generateShortURL(username);
    document.getElementById('generateBtn').disabled = false;
  
    if (shortURL) {
      const resultEl = document.getElementById('result');
      resultEl.textContent = shortURL;
      resultEl.classList.remove('hidden');
  
      const copyBtn = document.getElementById('copyBtn');
      copyBtn.classList.remove('hidden');
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(shortURL).then(() => {
          alert('URL copiada al portapapeles');
        });
      };
    }
  });