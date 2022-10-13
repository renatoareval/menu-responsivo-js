const menu = document.querySelector('#menu');

const menuIcon = document.querySelector('#menu-icon')


function showMenu() {
  menu.classList.toggle('show')
  changeMenuIcon()
}

menuIcon.addEventListener('click', showMenu)


function changeMenuIcon() {
  if (menu.classList.contains('show')) {
    menuIcon.src = "assets/images/close.svg"
    menuIcon.title = 'Fechar Menu'

  } else {
    menuIcon.src = "assets/images/iconHamburguer.svg"
    menuIcon.title = 'Mostrar Menu'

  }
}


