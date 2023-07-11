let form1 = document.querySelector("div.first");
let form2 = document.querySelector("div.second");
let form3 = document.querySelector("div.third");
let form4 = document.querySelector("div.forth");
let form5 = document.querySelector("div.fifth");

function hideSlide1() {
    form1.classList.add("hide")
    form2.classList.add("show")
    form2.style.display = 'flex';
}
function hideSlide2() {
    form2.classList.add("hide")
    form2.classList.remove("show")
    form3.classList.add("show")
    form3.style.display = 'flex';
}
function hideSlide3() {
    form3.classList.add("hide")
    form3.classList.remove("show")
    form4.classList.add("show")
    form4.style.display = 'flex';
}
function hideSlide4() {
    form4.classList.add("hide")
    form4.classList.remove("show")
    form5.classList.add("show")
    form5.style.display = 'flex';
}

function goHome() {
    location.href = "index.html";
}
