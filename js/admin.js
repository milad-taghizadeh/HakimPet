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
    .catch(error => {
        console.error(error);
    });

// SendVetBox
fetch('http://localhost:3000/api/v0/SV/')
    .then(response => response.json())
    .then(data => {
        let sendVetData = ``;
        for (let i = Object.keys(data).length - 1; i >= 0; i--) {
            const key = i.toString();
            sendVetData += `<div class="frame" id="frame">
            <div class="name"><span>نام : </span></span>
                <p id="Name">میلاد تقی زاده</p>
            </div>
            <div class="email"><span>آدرس ایمیل : </span></span>
                <p id="Email">miladtaghizadeh@gmail.com</p>
            </div>
            <div class="address"><span>آدرس : </span></span>
                <p id="Address">تهران شهرک غرب بلوار اندرزگو خیابان آزادی</p>
            </div>
            <div class="number"><span>شماره تلفن : </span></span>
                <p id="Number">09391234567</p>
            </div>
            <div class="pet"><span>حیوان : </span></span>
                <p id="Pet">سگ</p>
            </div>
            <div class="sendVetDate"><span>تاریخ درخواستی : </span></span>
                <p id="SendVetDate">${data[key].date}</p>
            </div>
        </div>`;
        }
        document.getElementById('sendVetBox').innerHTML = sendVetData;
    })
    .catch(error => {
        console.error(error);
    });
