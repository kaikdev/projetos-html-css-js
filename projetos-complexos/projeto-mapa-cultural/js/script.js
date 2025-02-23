new window.VLibras.Widget('https://vlibras.gov.br/app');

//Inicio Menu Mobile
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
//Fim Menu Mobile

//Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
//Fim Tooltips

function toggleView(view) {
  var btnMapa = document.getElementById('btnMapa');
  var btnLista = document.getElementById('btnLista');
  var conteudoMapa = document.getElementById('conteudoMapa');
  var conteudoLista = document.getElementById('conteudoLista');

  if (view === 'mapa') {
      btnMapa.classList.add('ativado');
      btnLista.classList.remove('ativado');
      conteudoMapa.style.display = 'block';
      conteudoLista.style.display = 'none';
  } else if (view === 'lista') {
      btnMapa.classList.remove('ativado');
      btnLista.classList.add('ativado');
      conteudoMapa.style.display = 'none';
      conteudoLista.style.display = 'block';
  }
}
