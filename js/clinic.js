let form1 = document.querySelector("div.first");
let form2 = document.querySelector("div.second");
let form3 = document.querySelector("div.third");
let form4 = document.querySelector("div.forth");
let form5 = document.querySelector("div.fifth");

function hideSlide1() {
    form1.style.display = 'none';
    form2.style.display = 'flex';
}
function hideSlide2() {
    form2.style.display = 'none';
    form3.style.display = 'flex';
}
function hideSlide3() {
    form3.style.display = 'none';
    form4.style.display = 'flex';
}
function hideSlide4() {
    form4.style.display = 'none';
    form5.style.display = 'flex';
}

function goHome() {
    location.href = "./../index.html";
}
