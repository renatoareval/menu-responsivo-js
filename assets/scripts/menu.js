const menu = document.querySelector('#menu');

const menuIcon = document.querySelector('#menu-icon')


function showMenu(){
  menu.classList.toggle('show')
  changeMenuIcon()
}

menuIcon.addEventListener('click',showMenu)


function changeMenuIcon(){
  if(menuIcon.classList.contains('show')){
    menuIcon.src = 'assets/imgs/close.svg'
  }
  else{
    menuIcon.src = 'assets/imgs/menu-hamburguer.svg'
  }
}