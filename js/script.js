const stelle = [];
const span = document.getElementById("stella");
for(let i = 1; i <=10; i++){
    const img = document.createElement('img');
    img.src = '../assets/images/star.copy.svg';
    img.dataset.index = i;
    img.classList.add('stella');
    img.style.margin = '10px';

    img.addEventListener('click',() => {
      const index = parseInt(img.dataset.index);
        for(let j = 0; j < stelle.length; j++){
         if(j <= index) {
            stelle[j].src = '../assets/images/star.svg';
         }
         else{
            stelle[j].src = '../assets/images/star.copy.svg';
         }
        }
    });
    stelle.push(img);
    span.appendChild(img);
}
   
/*const feedBack = function (){
    img.addEventListener("click", () => {
        if(img.dataset.attiva === 'ture'){
            img.src ='../assets/images/star.svg';
            img.dataset.attiva === 'false';
        }
    });img.dataset.attiva === 'true';
}
*/