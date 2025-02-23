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

const btnPerfil = document.querySelector('#btn-perfil');
const btnLink = document.querySelector('#btn-link');
const btnRelatorio = document.querySelector('#btn-relatorio');
const conteudoPerfil = document.querySelector('#conteudo-perfil');
const conteudoLink = document.querySelector('#conteudo-link');
const conteudoRelatorio = document.querySelector('#conteudo-relatorio');

btnPerfil.addEventListener('click', () => {
  conteudoPerfil.style.display = 'block';
  conteudoLink.style.display = 'none';
  conteudoRelatorio.style.display = 'none';
  btnPerfil.classList.add('ativo');
  btnLink.classList.remove('ativo');
  btnRelatorio.classList.remove('ativo');
});

btnLink.addEventListener('click', () => {
  conteudoLink.style.display = 'block';
  conteudoPerfil.style.display = 'none';
  conteudoRelatorio.style.display = 'none';
  btnLink.classList.add('ativo');
  btnPerfil.classList.remove('ativo');
  btnRelatorio.classList.remove('ativo');
});

btnRelatorio.addEventListener('click', () => {
  conteudoRelatorio.style.display = 'block';
  conteudoPerfil.style.display = 'none';
  conteudoLink.style.display = 'none';
  btnRelatorio.classList.add('ativo');
  btnPerfil.classList.remove('ativo');
  btnLink.classList.remove('ativo');
});

const closeDash = document.querySelector('#closeDash');

closeDash.addEventListener('click', () => {
  conteudoLink.style.display = 'none';
  conteudoRelatorio.style.display = 'none';
  conteudoPerfil.style.display = 'block';
  btnLink.classList.remove('ativo');
  btnRelatorio.classList.remove('ativo');
  btnPerfil.classList.add('ativo');
});

const modal = document.querySelector('#modalDashboard');

modal.addEventListener('click', (event) => {
  if (event.target == modal) {
    closeDash.click();
  }
});