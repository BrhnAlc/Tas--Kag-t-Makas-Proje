
                //! SELECTORS 

   const selectionArticle=document.querySelector(`.selection`);

                 
           //! SEÇİLEN ELEMANLARIN TAYİNİCİSİ
      const yourChoiceDiv=document.getElementById(`your-choice`);
     const pcChoiceDiv=document.getElementById(`pc-choice`)
                         //! VARİABLES
            let userSelectImg=document.createElement("img");
            let pcSlectImg=document.createElement(`img`)
            //!EVENT

selectionArticle.addEventListener(`click`, (e)=>{
    console.log(e.target.id);

if(e.target.id){
    userSelectImg.src=`./assets/${e.target.id}.png`
    userSelectImg.alt=e.target.id
    yourChoiceDiv.appendChild(userSelectImg)


    createPcSelection()
}});

const createPcSelection=()=>{
const pcArr=["rock","paper","scissor"]
const pcRandom=pcArr[Math.floor(Math.random()*3)]

pcSlectImg.src=`./assets/${pcRandom}.png`
pcSlectImg.alt=pcRandom
pcChoiceDiv.appendChild(pcSlectImg)

}














// //? RESİMLER

// const rockImg=document.getElementById(`rock`);
// const paperImg =document.getElementById(`paper`);
// const scissorImg=document.getElementById(`scissor`);

    //                     //!EVENT LİSTENERS
    //   rockImg.addEventListener(`click`,()=>{

    //     image.src="./assets/rock.png"
    //     image.alt="rock"
    //     yourChoiceDiv.appendChild(image)
    //   })
              
    //      paperImg.addEventListener(`click`,()=>{
    //         image.src="./assets/paper.png"
    //         image.alt="paper"
    //         yourChoiceDiv.appendChild(image)
    //      })


    //      scissorImg.addEventListener(`click`,()=>{
    //         image.src="./assets/scissor.png"
    //         image.alt="scissor"
    //         yourChoiceDiv.appendChild(image)
    //      })