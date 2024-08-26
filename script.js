const initialScreen = document.getElementById('initial-screen');
const invitationScreen = document.getElementById('invitation-screen');
const helloButton = document.getElementById('hello-button');
const acceptButton = document.getElementById('accept-button');
const rejectButton = document.getElementById('reject-button');
const errorButton = document.getElementById('error-button');
const catImage = document.getElementById('cat-image');
const responseText = document.getElementById('response-text');
const invitationMusic = document.getElementById('invitation-music');

const alternatives = [
  { text: "La pasarás bien... I promise 😊", images: "https://media.giphy.com/media/wr7oA0rSjnWuiLJOY5/giphy.gif" },
  { text: "Piénselo bien 🫰", images: "https://media.giphy.com/media/f08cafueoCoRW/giphy.gif" },
  { text: "Come on milady 👑", images: "https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif" },
  { text: "Say yes to heaven 🌌", images: "https://media.giphy.com/media/gfl7CKcgs6exW/giphy.gif" }
];

const ohyes = { text: "Nos vemos a las 12, yo te busco y regreso 🌸", images: "https://media.giphy.com/media/5rnOnVhxwTBiE/giphy.gif" };

let count = 0;

function updateDisplay(item) {
  catImage.src = item.images;
  responseText.innerHTML = item.text;
}

// Mostrar la invitación al hacer clic en "Hola"
helloButton.addEventListener('click', () => {
  initialScreen.classList.add('hidden');
  invitationScreen.classList.remove('hidden');
  invitationMusic.play();
});

// Al hacer clic en "Aceptar"
acceptButton.addEventListener('click', () => {
  updateDisplay(ohyes);
  acceptButton.style.display = 'none';
  rejectButton.style.display = 'none';
});

// Al hacer clic en "Rechazar"
rejectButton.addEventListener('click', () => {
    count++;
    if (count < alternatives.length) {
      updateDisplay(alternatives[count]);
    } else {
      updateDisplay({ text: "Lamentablemente tiene que aceptar 😇", images: "https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif" });
      acceptButton.style.display = 'none';
      rejectButton.style.display = 'none';
      errorButton.style.display = 'inline-block';
    }
  });

// Reiniciar al hacer clic en "Error"
errorButton.addEventListener('click', () => {
  count = 0;
  updateDisplay(alternatives[count]);
  acceptButton.style.display = 'inline-block';
  rejectButton.style.display = 'inline-block';
  errorButton.style.display = 'none';
});
