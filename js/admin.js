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
    .then(svData => {
        // Get the ID from the first URL
        const promises = [];
        for (let i = Object.keys(svData).length - 1; i >= 0; i--) {
            const key = i.toString();
            const id = svData[key].userId;
            const userURL = `http://localhost:3000/api/v0/user/find/${id}`;

            // Fetch user data for each ID
            const promise = fetch(userURL, { credentials: 'include' })
                .then(response => response.json());
            promises.push(promise);
        }

        // Wait for all promises to resolve
        return Promise.all(promises)
            .then(userDataArray => {
                console.log(svData); // Access svData
                console.log(userDataArray); // Access userDataArray

                // Your logic here using svData and userDataArray
                let sendVetData = ``;
                for (let i = Object.keys(svData , userDataArray).length - 1; i >= 0; i--) {
                    const key = i.toString();
                    sendVetData += `<div class="frame" id="frame">
            <div class="name"><span>نام : </span></span>
            <p id="Name">${userDataArray[key].name}</p>
            </div>
            <div class="email"><span>آدرس ایمیل : </span></span>
            <p id="Email">${userDataArray[key].email}</p>
            </div>
            <div class="address"><span>آدرس : </span></span>
            <p id="Address">${userDataArray[key].address}</p>
            </div>
            <div class="number"><span>شماره تلفن : </span></span>
            <p id="Number">${userDataArray[key].phoneNumber}</p>
            </div>
            <div class="pet"><span>حیوان : </span></span>
            <p id="Pet">${userDataArray[key].pet}</p>
            </div>
            <div class="sendVetDate"><span>تاریخ درخواستی : </span></span>
            <p id="SendVetDate">${svData[key].date}</p>
            </div>
            </div>`;
                }
                document.getElementById('sendVetBox').innerHTML = sendVetData;
            });
    })
    .catch(error => {
        console.error(error);
    });

    // fetch('http://localhost:3000/api/v0/SV/')
    // .then(response => response.json())
    // .then(svData => {
    //     // Get the ID from the first URL
    //     for (let i = Object.keys(svData).length - 1; i >= 0; i--) {
    //         const key = i.toString();
    //         const id = svData[key].userId;
    //         const userURL = `http://localhost:3000/api/v0/user/find/${id}`;
        
    //     return fetch(userURL, { credentials: 'include' })
    //         .then(response => response.json())
    //         .then(userData => {
    //             console.log(svData); // Access svData
    //             console.log(userData); // Access userData

    //             // Your logic here using svData and userData
    //             let sendVetData = ``;
    //             for (let i = Object.keys(svData).length - 1; i >= 0; i--) {
    //                 const key = i.toString();
    //                 sendVetData += `<div class="frame" id="frame">
    //         <div class="name"><span>نام : </span></span>
    //         <p id="Name">${userData.name}</p>
    //         </div>
    //         <div class="email"><span>آدرس ایمیل : </span></span>
    //         <p id="Email">${userData.email}</p>
    //         </div>
    //         <div class="address"><span>آدرس : </span></span>
    //         <p id="Address">${userData.address}</p>
    //         </div>
    //         <div class="number"><span>شماره تلفن : </span></span>
    //         <p id="Number">${userData.phoneNumber}</p>
    //         </div>
    //         <div class="pet"><span>حیوان : </span></span>
    //         <p id="Pet">${userData.pet}</p>
    //         </div>
    //         <div class="sendVetDate"><span>تاریخ درخواستی : </span></span>
    //         <p id="SendVetDate">${svData[key].date}</p>
    //         </div>
    //       </div>`;
    //             }
    //             document.getElementById('sendVetBox').innerHTML = sendVetData;
    //         });
    //     }
    // })
    // .catch(error => {
    //     console.error(error);
    // });