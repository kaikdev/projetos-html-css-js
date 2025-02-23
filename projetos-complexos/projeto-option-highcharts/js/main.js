/* Blur Infos Perfil */
document.getElementById('btnBlurPerfil').addEventListener('click', function () {
    var eyeSlashIcon = this.querySelector('.fa-eye-slash');
    var eyeIcon = this.querySelector('.fa-eye');
    var blurElements = document.querySelectorAll('.blur-perfil');

    if (eyeSlashIcon.style.display !== 'none') {
        eyeSlashIcon.style.display = 'none';
        eyeIcon.style.display = 'block';
        blurElements.forEach(function (element) {
            element.style.filter = 'blur(3px)';
        });
    } else {
        eyeSlashIcon.style.display = 'block';
        eyeIcon.style.display = 'none';
        blurElements.forEach(function (element) {
            element.style.filter = 'none';
        });
    }
});

/* Tooltip Botstraop */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

/* Tabs Sidebar */
function openTab(element, tabName) {
    var i;
    var x = document.getElementsByClassName("tab-item");

    var buttonstab = document.querySelectorAll(".header-tabs-sidebar button.item");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";

        buttonstab[i].classList.remove("active");
        buttonstab[i].classList.add("off");
    }

    document.getElementById(tabName).style.display = "block";
    element.classList.add("active");
    element.classList.remove("off");
}

/* Hidden Operações */
function toggleHidden(element) {
    var infoPedido = element.nextElementSibling;

    infoPedido.classList.toggle("hidden");
}

function handleButtonClick(event) {
    event.stopPropagation();
}

/* Buttons Filter */
var buttonsFilter = document.querySelectorAll('.btns-filter button');

function alternarActive(button) {
    buttonsFilter.forEach(function (btn) {
        btn.classList.remove('active');
    });

    button.classList.add('active');
}

buttonsFilter.forEach(function (btn) {
    btn.addEventListener('click', function () {
        alternarActive(btn);
    });
});

/* Code Deposito Fast */
function toggleCodePromo() {
    var checkboxPromo = document.getElementById("checkCodePromo");
    var codePromoDiv = document.getElementById("codePromo");

    if (checkboxPromo.checked) {
        codePromoDiv.style.display = "block";
    } else {
        codePromoDiv.style.display = "none";
    }
}

/* Move Aside */
function moveAside() {
    const asideElement = document.querySelector('aside.aside-main');
    const areaAsideMain = document.querySelector('.area-aside-main');
    const offcanvasMenu = document.getElementById('offcanvasMenu');

    if (window.innerWidth < 601) {
        if (asideElement && areaAsideMain.contains(asideElement)) {
            offcanvasMenu.appendChild(asideElement);
        }
    } 
    else {
        if (asideElement && offcanvasMenu.contains(asideElement)) {
            areaAsideMain.appendChild(asideElement);
        }
    }
}
document.addEventListener("DOMContentLoaded", moveAside);
window.addEventListener('resize', moveAside);

/* Move Bottom Sidebar */
function moveSidebar() {
    const sidebarElement = document.querySelector('.bottom-sidebar');
    const areaSidebar = document.querySelector('.area-sidebar-main');
    const collapseOperacoes = document.getElementById('collapseOperacoes');

    if (window.innerWidth < 801) {
        if (sidebarElement && areaSidebar.contains(sidebarElement)) {
            collapseOperacoes.appendChild(sidebarElement);
        }
    } 
    else {
        if (sidebarElement && collapseOperacoes.contains(sidebarElement)) {
            areaSidebar.appendChild(sidebarElement);
        }
    }
}
document.addEventListener("DOMContentLoaded", moveSidebar);
window.addEventListener('resize', moveSidebar);

/* Progress Range */
var slider = document.getElementById("rangeSidebar");
var valueLeft = document.getElementById("valueLeft");
var valueRight = document.getElementById("valueRight");

if (slider && valueLeft && valueRight) {
    updateValues();

    slider.oninput = function () {
        updateValues();
    };

    function updateValues() {
        var value = parseInt(slider.value);
        valueLeft.textContent = value + "%";
        valueRight.textContent = (100 - value) + "%";
    }
}

/* Tabs Dashboard */
function openTabDash(element, tabName) {
    var i;
    var x = document.getElementsByClassName("tab-item-dash");

    var buttonstab = document.querySelectorAll(".tabs-dashboard button.item");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";

        buttonstab[i].classList.remove("active");
        buttonstab[i].classList.add("off");
    }

    document.getElementById(tabName).style.display = "flex";
    element.classList.add("active");
    element.classList.remove("off");
}