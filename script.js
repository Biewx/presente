// === Contador de dias (index.html) ===
const dataInicio = new Date("2024-09-18"); // coloca a data que vocês começaram
const contador = document.getElementById("contador");
function atualizarContador() {
  if (contador) {
    const agora = new Date();
    const diff = agora - dataInicio;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);
    contador.innerText = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💕`;
  }
}
if (contador) {
  atualizarContador();
  setInterval(atualizarContador, 1000);
}

// === Quiz (quiz.html) ===
const quizForm = document.getElementById("quizForm");
if (quizForm) {
  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("resultadoQuiz").innerText =
      "Não importa o resultado… você é a minha resposta favorita 💖";
  });
}

// === Senha secreta (segredo.html) ===
function verificarSenha() {
  const senha = document.getElementById("senhaInput").value;
  if (senha === "30092025") { // troque pela senha real
    document.getElementById("mensagemSecreta").style.display = "block";
  } else {
    alert("Senha errada! Tente de novo 😉");
  }
}

// === Carrossel de imagens (memorias.html) ===
if (window.location.pathname.endsWith('memorias.html')) {
  document.addEventListener('DOMContentLoaded', function() {
    const imagens = [
      'img/Nois/20250518_181334.jpg',
      'img/Nois/20250814_164912.jpg',
      'img/Nois/20250817_174733.jpg',
      'img/Nois/20250823_232957.jpg',
      'img/Nois/20250823_234917.jpg',
      'img/Nois/IMG-20250227-WA0060.jpg',
      'img/Nois/IMG-20250306-WA0070.jpg',
      'img/Nois/IMG-20250425-WA0054.jpg',
      'img/Nois/IMG-20250913-WA0013.jpg',
      'img/Nois/IMG-20250914-WA0181.jpg',
      'img/Nois/IMG-20250916-WA0232.jpg',
      'img/Nois/IMG-20250916-WA0233.jpg',
      'img/Nois/IMG_20250227_122139_043.jpg',
      'img/Nois/IMG_20250814_175748_503.jpg'
    ];
    const altTexts = imagens.map((img) => 'Foto nossa');
    let idx = 0;
    const imgEl = document.getElementById('carousel-img');
    const altEl = document.getElementById('carousel-alt');
    if (imgEl && altEl) {
      function mostrarImagem(i) {
        imgEl.src = imagens[i];
        imgEl.alt = altTexts[i];
        altEl.textContent = altTexts[i];
      }
      mostrarImagem(idx);
      setInterval(() => {
        idx = (idx + 1) % imagens.length;
        mostrarImagem(idx);
      }, 3000);
    }
  });
}
