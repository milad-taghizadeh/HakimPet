javascript
function showMessages() {
    hideAllSections();
    document.getElementById("messages").style.display = "block";
}

function showFood() {
    hideAllSections();
    document.getElementById("food").style.display = "block";
}

function showSendVet() {
    hideAllSections();
    document.getElementById("sendVet").style.display = "block";
}

function showVaccine() {
    hideAllSections();
    document.getElementById("vaccine").style.display = "block";
}

function hideAllSections() {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
}

// Show the dashboard section by default
showMessages();