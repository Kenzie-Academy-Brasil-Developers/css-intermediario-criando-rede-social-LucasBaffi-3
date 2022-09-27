let creatModal = () => {
    let divModalMain = document.createElement('div')
let divModal = document.createElement('div')
let divHeader = document.createElement('div')
let divPerfil = document.createElement('div')
let img = document.createElement('img')
let div = document.createElement('div')
let h3 = document.createElement('h3')
let p = document.createElement('p')
let button = document.createElement('button')
let divCard = document.createElement('div')
let h3Card = document.createElement('h3')
let pCard = document.createElement('p')

img.src = users.img
h3.innerText = users.user
p.innerText = users.stack
h3Card.innerText = users.title
pCard.innerText = users.text

divModalMain.classList.add('modal-main')
divModal.classList = `modal show-modal`
divHeader.classList.add('modal-header')
divPerfil.classList.add('perfil')
divCard.classList.add('card')
button.innerText = 'x'
button.classList.add('button-close-modal')

divModal.append(divHeader, divPerfil, divCard)
divHeader.append(divPerfil, div, button)
divPerfil.append(img, div)

div.append(h3, p)
divCard.append(h3Card, pCard)

divModalMain.append(divModal)

return divModalMain

}





function showModal () {
    const openPost = document.querySelector('.button-openPost')
    const body = document.querySelector('body')

    openPost.addEventListener('click', () => {

        const modal = creatModal()

        body.appendChild(modal)
        closeModal()
    }) 
    
 }


 function closeModal () {
   
    const modalClose = document.querySelector('.button-close-modal')
    const modalMain = document.querySelector('.modal-main')

    modalClose.addEventListener('click', () => {
        
        modalMain.remove()
    })

 }

 showModal ()


