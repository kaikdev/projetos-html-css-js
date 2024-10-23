//CARTAO ATIVADO
cartaoDeCredito.addEventListener('click', () => {
    collapseCartao.style.display = 'block';
    collapseBoleto.style.display = 'none';
    collapsePix.style.display = 'none';
    collapseCripto.style.display = 'none';
})
labelCartao.addEventListener('click', () => {
    collapseCartao.style.display = 'block';
    collapseBoleto.style.display = 'none';
    collapsePix.style.display = 'none';
    collapseCripto.style.display = 'none';
})

//BOLETO ATIVADO
boleto.addEventListener('click', () => {
    collapseCartao.style.display = 'none';
    collapseBoleto.style.display = 'block';
    collapsePix.style.display = 'none';
    collapseCripto.style.display = 'none';
})
labelBoleto.addEventListener('click', () => {
    collapseCartao.style.display = 'none';
    collapseBoleto.style.display = 'block';
    collapsePix.style.display = 'none';
    collapseCripto.style.display = 'none';
})

//PIX ATIVADO
pix.addEventListener('click', () => {
    collapseCartao.style.display = 'none';
    collapseBoleto.style.display = 'none';
    collapsePix.style.display = 'block';
})
labelPix.addEventListener('click', () => {
    collapseCartao.style.display = 'none';
    collapseBoleto.style.display = 'none';
    collapsePix.style.display = 'block';
    collapseCripto.style.display = 'none';
})

//CRIPTO ATIVADO
cripto.addEventListener('click', () => {
    collapseCartao.style.display = 'none';
    collapseBoleto.style.display = 'none';
    collapsePix.style.display = 'none';
    collapseCripto.style.display = 'block';
})
labelCripto.addEventListener('click', () => {
    collapseCartao.style.display = 'none';
    collapseBoleto.style.display = 'none';
    collapsePix.style.display = 'none';
    collapseCripto.style.display = 'block';
})

//UM CARTÃO ATIVADO
optOnecard.addEventListener('click', () => {
    collapseOneCard.style.display = 'block';
    collapseTwoCard.style.display = 'none';
    optOnecard.classList.toggle('ativado');
    optTwocard.classList.toggle('ativado');
})

//DOIS CARTÕES ATIVADO
optTwocard.addEventListener('click', () => {
    collapseOneCard.style.display = 'none';
    collapseTwoCard.style.display = 'block';
    optOnecard.classList.toggle('ativado');
    optTwocard.classList.toggle('ativado');
})

document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}