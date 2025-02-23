var btnNormal = document.getElementById("btnNormal");
var btnAuto = document.getElementById("btnAuto");
var gameAuto = document.querySelectorAll(".game-auto");
var gameNormal = document.querySelectorAll(".game-normal");

btnNormal.addEventListener("click", function() {
    if (btnAuto.classList.contains("active")) {
        btnAuto.classList.remove("active");
        btnNormal.classList.add("active");
        
        gameAuto.forEach(function(game) {
            game.style.display = "none";
        });

        gameNormal.forEach(function(game) {
            game.style.display = "block";
        });
    }
});

btnAuto.addEventListener("click", function() {
    if (btnNormal.classList.contains("active")) {
        btnNormal.classList.remove("active");
        btnAuto.classList.add("active");
        
        gameAuto.forEach(function(game) {
            game.style.display = "flex";
        });

        gameNormal.forEach(function(game) {
            game.style.display = "none";
        });
    }
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => {
    const tooltip = new bootstrap.Tooltip(tooltipTriggerEl);
    tooltipTriggerEl.addEventListener('click', () => tooltip.hide());
    
    return tooltip;
});

document.getElementById('copyButton').addEventListener('click', function() {
    var rodadaIdValue = document.getElementById('rodadaId').value;

    navigator.clipboard.writeText(rodadaIdValue)
    .then(() => {
        alert('ID da rodada copiado para a área de transferência.');
    })
    .catch((error) => {
        alert('Erro ao copiar o ID da rodada: Tente novamente ou manualmente.');
    });
});

function showTutorial() {
    document.getElementById('titleRegras').classList.remove('active');
    document.getElementById('titleTutorial').classList.add('active');

    document.getElementById('areaRegras').style.display = 'none';
    document.getElementById('areaTutorial').style.display = 'block';
}

function showRegras() {
    document.getElementById('titleTutorial').classList.remove('active');
    document.getElementById('titleRegras').classList.add('active');

    document.getElementById('areaTutorial').style.display = 'none';
    document.getElementById('areaRegras').style.display = 'block';
}

document.getElementById('btnTutorial').addEventListener('click', showTutorial);
document.getElementById('titleTutorial').addEventListener('click', showTutorial);

document.getElementById('btnRegras').addEventListener('click', showRegras);
document.getElementById('titleRegras').addEventListener('click', showRegras);


let buttons = Array.from(document.querySelectorAll('.list-tutorial li button'));
let nextButton = document.getElementById('nextEtapa');
let currentStepIndex = 0;

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let divs = Array.from(document.getElementsByClassName('etapa'));
        
        divs.forEach((div, i) => {
            if (i !== index) {
                div.style.display = 'none';
            } else {
                div.style.display = 'block';
            }
        });

        currentStepIndex = index;
        updateNextButtonText(currentStepIndex);

        buttons.forEach((btn, i) => {
            btn.classList.remove('active');
        });

        button.classList.add('active');
    });
});

function updateNextButtonText(currentStepIndex) {
    let totalSteps = buttons.length;

    if (currentStepIndex === totalSteps - 1) {
        nextButton.textContent = 'Começe a Jogar';
        nextButton.setAttribute('data-bs-dismiss', 'modal');
    } else {
        nextButton.textContent = 'Próximo Passo';
        nextButton.removeAttribute('data-bs-dismiss');
    }
}

nextButton.addEventListener('click', () => {
    if (currentStepIndex < buttons.length - 1) {
        buttons[++currentStepIndex].click();
    }
});

const modalTutorialRegras = document.getElementById('modalTutorialRegras');
const btnEtapaOne = document.getElementById('btnEtapaOne');

modalTutorialRegras.addEventListener('hidden.bs.modal', () => {
    btnEtapaOne.click();
});

btnEtapaOne.addEventListener('click', () => {
    console.log('Botão Etapa One clicado!');
});

// Start Game
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-start-game');
    const gameDiv = document.getElementById('game');
    const preGameDiv = document.getElementById('pre-game');
    const gameGoingDiv = document.getElementById('game-going');
    const gameFinishDiv = document.getElementById('game-finish');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.disabled = true);

            gameDiv.classList.add('bg-animation-up');
            preGameDiv.style.display = 'none';
            gameGoingDiv.style.display = 'flex';

            setTimeout(() => {
                gameDiv.classList.replace('bg-animation-up', 'bg-animation-paused');
                gameGoingDiv.style.display = 'none';
                gameFinishDiv.style.display = 'flex';

                setTimeout(() => {
                    gameDiv.classList.remove('bg-animation-paused');
                    gameFinishDiv.style.display = 'none';
                    preGameDiv.style.display = 'flex';

                    buttons.forEach(btn => btn.disabled = false);
                }, 5000);
            }, 7000);
        });
    });
});