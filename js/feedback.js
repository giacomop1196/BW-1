
/* ---------- FEEDBACK PAGE ---------- */
// DIV STAR
const stars = [];
const span = document.getElementById("stars");

for(let i = 1; i <=10; i++){
  const img = document.createElement('img');
  img.src = '../assets/images/star.copy.svg';
  img.dataset.index = i;
  img.classList.add('star');
  img.style.margin = '10px';

  img.addEventListener('click',() => {
    const index = parseInt(img.dataset.index) -1;
    for(let j = 0; j < stars.length; j++){
      if(j <= index) {
        stars[j].src = '../assets/images/star.svg';
      } else {
        stars[j].src = '../assets/images/star.copy.svg';
      }
    }
  });
  
  stars.push(img);
  span.appendChild(img);
}

// DIV COMMENT
const button = document.getElementsByClassName('button-style')[0];
const feedback = document.querySelector('.feedback');

button.addEventListener('click', () => {
  alert('Feedback Inviato');
  location.reload();
});

feedback.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    button.click();
  }
});
/* ========== FEEDBACK PAGE ========== */