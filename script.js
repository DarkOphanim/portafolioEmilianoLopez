let navBar = document.getElementById("navBar");
let navBarItem = document.getElementsByClassName("menuDiv");
let cntcUlLi = document.getElementsByClassName("cntcUlLi");
let perPracUlLi = document.getElementsByClassName("perPracUlLi");
let windowWidth = window.innerWidth;
let navIcon = `
    <select
    id="navIconRes"
    style="
    background-color: transparent;
    backdrop-filter: blur(100px);
    border-radius: 10px;
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
    ">
        <option disabled selected>Menú</option>
        <option onclick="location.href='#'">Inicio</option>
        <option onclick="location.href='#aboutMe'">Sobre mí</option>
        <option onclick="location.href='#hobbiesSkills'">Hobbies/Skills</option>
        <option onclick="location.href='#education'">Educación</option>
        <option onclick="location.href='#programmingExp'">Exp. en programación</option>
        <option onclick="location.href='#personalPractice'">Pract. personales</option>
        <option onclick="location.href='#contact'">Contacto</option>
    </select>
`;

if(windowWidth <= 1024) {
    navBar.innerHTML = "";
    navBar.innerHTML = navIcon;
};

// Changing window location when clicking nav bar
navBarItem[0].addEventListener('click', () => {
    location.href = "#";
});
navBarItem[1].addEventListener('click', () => {
    location.href = "#aboutMe";
});
navBarItem[2].addEventListener('click', () => {
    location.href = "#hobbiesSkills";
});
navBarItem[3].addEventListener('click', () => {
    location.href = "#education";
});
navBarItem[4].addEventListener('click', () => {
    location.href = "#programmingExp";
});
navBarItem[5].addEventListener('click', () => {
    location.href = "#personalPractice";
});
navBarItem[6].addEventListener('click', () => {
    location.href = "#contact";
});

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