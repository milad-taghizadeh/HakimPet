function showAlert(color, content) {
    var alertBox = document.getElementById("alertBox");
    var progressBar = document.getElementById("progressBar");
    var alertContent = document.getElementById("alertContent");

    alertBox.style.display = "block";
    alertContent.innerHTML = content;
    alertBox.classList.remove("green", "red");
    alertBox.classList.add(color);

    var width = 0;
    var interval = setInterval(frame, 50);

    function frame() {
        if (width >= 100) {
            clearInterval(interval);
            alertBox.style.display = "none";
            progressBar.style.width = 0;
        } else {
            width++;
            progressBar.style.width = width + "%";
        }
    }
}
