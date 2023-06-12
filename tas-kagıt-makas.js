             //! SELECTİON
       
const selectionArticle=document.querySelector(`.selection`)    
const yourChoiceDiv=document.querySelector(`#your-choice`)
          //! VARİABLES

          let userSelectImage=document.createElement(`img`);
          //!EVENT

    selectionArticle.addEventListener(`click`,function(e){
 console.log(e.target.id);
if(e.target.id){
   userSelectImage.src=`./assets/${e.target.id}.png`
    userSelectImage.alt=e.target.id
    yourChoiceDiv.appendChild(userSelectImage)
}



    })
    