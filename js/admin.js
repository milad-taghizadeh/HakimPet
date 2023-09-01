javascript
function showDashboard() {
    hideAllSections();
    document.getElementById("dashboard").style.display = "block";
}

function showUsers() {
    hideAllSections();
    document.getElementById("users").style.display = "block";
}

function showProducts() {
    hideAllSections();
    document.getElementById("products").style.display = "block";
}

function showSettings() {
    hideAllSections();
    document.getElementById("settings").style.display = "block";
}

function hideAllSections() {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
}

// Show the dashboard section by default
showDashboard();