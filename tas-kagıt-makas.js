            //!SELECTORS
  const rockImg=document.querySelector(`#rock`);
  
  const paperImg=document.querySelector(`#paper`);

  const scissorImg=document.querySelector(`#scissor`);

  const yourChoiceDiv=document.querySelector(`#your-choice`);

  const pcChoice=document.querySelector(`#your-choice`);
  

          //! VARİABLES


          //!EVENT

    rockImg.addEventListener(`click`,function(){
        let image=document.createElement(`img`);

     image.src="./assets/rock.png";

     image.alt="rock";

    yourChoiceDiv.appendChild(image);
     



    })