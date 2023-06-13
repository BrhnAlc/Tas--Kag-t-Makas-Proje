




const selectionArticle = document.querySelector('.selection');

const yourChoiceDiv = document.querySelector('#your-choice');
const pcChoiceDiv = document.querySelector('#pc-choice');
const messagePar=document.querySelector(`.message`)

let userSelectImage;
let pcSelectImage;

selectionArticle.addEventListener('click', function(e) {
  if (e.target.id) {
    // Kullanıcının seçimini temsil eden görüntüyü oluştur
    userSelectImage = document.createElement('img');
    userSelectImage.src = `./assets/${e.target.id}.png`;
    userSelectImage.alt = e.target.id;
    
    // Önceki seçimleri temizle
    yourChoiceDiv.innerHTML = '';
    
    // Kullanıcının seçimini ekle
    yourChoiceDiv.appendChild(userSelectImage);

    createPcSelection();
  }
});

const createPcSelection = function() {
  const pcArr = ["rock", "paper", "scissor"];
  const pcRandom = pcArr[Math.floor(Math.random() * 3)];
  
  // Bilgisayarın seçimini temsil eden görüntüyü oluştur
  pcSelectImage = document.createElement('img');
  pcSelectImage.src = `./assets/${pcRandom}.png`;
  pcSelectImage.alt = pcRandom;
  
  // Önceki seçimleri temizle
  pcChoiceDiv.innerHTML = '';
  
  // Bilgisayarın seçimini ekle
  pcChoiceDiv.appendChild(pcSelectImage);

  calculateResult()
};


const calculateResult=function(){
    if(userSelectImage.alt===pcSelectImage.alt){
        draw()
    }}

    const draw =function(){
        messagePar.textContent="Its a draw"
    }