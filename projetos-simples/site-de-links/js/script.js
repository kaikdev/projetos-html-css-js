function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Meus Links',
			text: 'Nesse site tem os meus links',
			url: 'https://kaikdev.github.io/projetos-html-css-js/projetos-simples/site-de-links/',
		})
		.then(() => console.log('Compartilhado com sucesso'))
		.catch((error) => console.log('Erro em compartilhar', error));
	}
}

exibirVideo.addEventListener('click', () => {
    exibirVideo.classList.toggle('ocultar');
})

ocultarVideo.addEventListener('click', () => {
    exibirVideo.classList.toggle('ocultar');
})

exibirDescricao.addEventListener('click', () => {
    exibirDescricao.classList.toggle('ocultar');
})

ocultarDescricao.addEventListener('click', () => {
    exibirDescricao.classList.toggle('ocultar');
})

emailAtivado.addEventListener('click', () => {
    emailAtivado.classList.toggle('ativado');
    
    telefoneAtivado.classList.toggle('ativado');
    
    collapseTelefone.style.display = 'none';

    collapseEmail.style.display = 'block';
})

telefoneAtivado.addEventListener('click', () => {
    telefoneAtivado.classList.toggle('ativado');

    emailAtivado.classList.toggle('ativado');

    collapseEmail.style.display = 'none';

    collapseTelefone.style.display = 'block';
})