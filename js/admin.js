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


// MessagesBox
fetch('http://localhost:3000/api/v0/massages/')
    .then(response => response.json())
    .then(data => {
        let messageBoxdata = ``;
        for (let i = Object.keys(data).length - 1; i >= 0; i--) {
            const key = i.toString();
            messageBoxdata += `<div class="frame">
            <div class="name"><span>نام : </span></span><p id="Name">${data[key].name}</p></div>
            <div class="email"><span>آدرس ایمیل : </span></span><p id="Email">${data[key].email}</p></div>
            <div class="message"><span>پیام : </span></span><p id="Message">${data[key].text}</p></div>
            </div>`;
        }
        document.getElementById('messageBox').innerHTML = messageBoxdata;
    })
    // .then(data => console.log(data))
    .catch(error => {
        console.error(error);
    });