
// *** ----- Selectors-----*/



//!resimler
const rockImg=document.getElementById("rock")
const paperImg=document.getElementById("paper")
const scissorImg=document.getElementById("scissor") 


//! seçilen elemanların taşıyıcıları
const yourChoiceDiv = document.getElementById("your-choice")





// **---- Variables ---***/
let image =document.createElement("img")






// *** Event Listeners -----**/

rockImg.addEventListener("click" , ()=>{
    
    image.src="./assets/rock.png"
    image.alt="rock"
    yourChoiceDiv.appendChild(image)

// yourChoiceDiv.innerHTML=`<img src="./assets/rock.png" alt="rock">`
    
})

paperImg.addEventListener("click" , ()=>{
    
    image.src="./assets/paper.png"
    image.alt="paper"
    yourChoiceDiv.appendChild(image)})

yourChoiceDiv.innerHTML=`<img src="./assets/paper.png" alt="paper">`


// ****--Functions