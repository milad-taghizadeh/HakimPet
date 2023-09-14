// Messages
document.getElementById('submitBtn').addEventListener('click' , sendMessage);
function sendMessage () {
    const name = document.getElementById('Name').value ;
    const email = document.getElementById('Email').value ;
    const message = document.getElementById('Message').value;
    const messageData = {
        name: name,
        email: email,
        text: message
    };
    fetch('http://localhost:3000/api/v0/massages/' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageData)
    })
        .then(response => response.json())
        .then(messageData => {
            console.log('Success:', messageData);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
