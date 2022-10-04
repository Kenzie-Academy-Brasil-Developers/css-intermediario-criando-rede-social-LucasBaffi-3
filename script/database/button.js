function handleButton() {
    const buttonSeguir = document.querySelectorAll('.button-seguir')
  console.log(buttonSeguir);
    buttonSeguir.forEach((element) => {
        element.addEventListener('click', () => {
            element.classList.toggle('button-seguindo')
            
                element.innerText = "Seguindo"
            
          
        })
    });
   
}

handleButton()  


function buttonHearth() {
    const imgHearth = document.querySelectorAll('.imgCoracao')
  
    imgHearth.forEach((element) => {
        element.addEventListener('click', () => {
           element.src = './assets/img/hearthRed.svg'
           inicial = 0
          
        })
    });
   
}

buttonHearth() 

