
{/* <li >
<div class="perfil">
  <img src="./assets/img/Ellipse 1.png" alt="" />
<div>
  <h3>Samuel Leao</h3>
  <p>Front end Enginner</p>
</div>
</div>

<div class="card">
  <h3>laskdhakshdkjahsdksa</h3>
  <p>laskjhdlkasjdlkahskldhakshd</p>
</div>

<div class= "div-buttons">
  <button class="button-openPost">Abrir Post</button>
  <input type="radio" />
</div> */}


let renderPost = (users) => {

let li = document.createElement('li')
let divPerfil = document.createElement('div')
let img = document.createElement('img')
let div = document.createElement('div')
let h3 = document.createElement('h3')
let p = document.createElement('p')
let divCard = document.createElement('div')
let h3Card = document.createElement('h3')
let pCard = document.createElement('p')
let divButton = document.createElement('div')
let button = document.createElement('button')
let input = document.createElement('input')

img.src = users.img
h3.innerText = users.user
p.innerText = users.stack
h3Card.innerText = users.title
pCard.innerText = users.text
button.innerText = 'Abrir post'

divPerfil.classList.add('perfil')
divCard.classList.add('card')
divButton.classList.add('div-buttons')
img.classList.add('img-post')
button.classList.add('button-openPost')
input.type = ('radio')



divPerfil.append(img, div)
div.append(h3, p)
divCard.append(h3Card, pCard)

divButton.append(button, input)

li.append(divPerfil, divCard, divButton)

return li

}


let ulPosts = document.querySelector('.posts')
let listaPosts = (listarPosts) => { 

  ulPosts.innerHTML = ""

listarPosts.forEach((element) => {
  let posts = renderPost(element)
  ulPosts.append(posts)

});
}
listaPosts(users)