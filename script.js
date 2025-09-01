let navBarBtn = document.getElementById("navBarBtn");
let navBarDiv = document.getElementById("navBarDiv");
let perPracUlLi = document.getElementsByClassName("perPracUlLi");
let cntcUlLi = document.getElementsByClassName("cntcUlLi");

window.location.href = "#";


let isNavBarDivOn = () => {
    if(navBarDiv.style.display == "") {
        navBarDiv.style.display = "none";
    };
};

navBarBtn.onclick = () => {
    isNavBarDivOn();
    if(navBarDiv.style.display == "none") {
        navBarDiv.style.display = "flex";
    }
    else {
        navBarDiv.style.display = "none";
    };
};

window.onclick = (event) => {
    if(event.target !== navBarBtn) {
        isNavBarDivOn();
        if(navBarDiv.style.display == "flex") {
            navBarDiv.style.display = "none";
        }
    };
};

alert("Portafolio en actualizacion");

// Opening new tabs when clicking any contact logo
cntcUlLi[0].addEventListener('click', () => {
    window.open("https://www.facebook.com/LopezEmiliano26");
});
cntcUlLi[1].addEventListener('click', () => {
    window.open("https://x.com/_AdrianAvalos");
});
cntcUlLi[2].addEventListener('click', () => {
    window.open("https://www.linkedin.com/in/emiliano-lopez-808685258/");
});
cntcUlLi[3].addEventListener('click', () => {
    window.open("https://github.com/DarkOphanim");
});
cntcUlLi[4].addEventListener('click', () => {
    window.open("mailto:adrianemilianolopezavalos@gmail.com");
});

// This are for the personal projects, opening new tabs
perPracUlLi[0].addEventListener('click', () => {
    window.open("https://darkophanim.github.io/Encriptador/");
});
perPracUlLi[1].addEventListener('click', () => {
    window.open("https://darkophanim.github.io/my-favorite-games/");
});
perPracUlLi[2].addEventListener('click', () => {
    window.open("https://darkophanim.github.io/ComplicadorDeContrasenhas/");
});