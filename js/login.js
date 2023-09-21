// alertBox 
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


// login form
document.getElementById('login-button').addEventListener('click', function () {
    document.getElementById('form-title').textContent = 'ورود';
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-button').classList.add('active');
    document.getElementById('signup-button').classList.remove('active');
});

document.getElementById('signup-button').addEventListener('click', function () {
    document.getElementById('form-title').textContent = 'ثبت نام';
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-button').classList.add('active');
    document.getElementById('login-button').classList.remove('active');
});
// Register
document.getElementById('Register').addEventListener('click', signUp);
function signUp() {
    const name = document.getElementById('Name').value;
    const email = document.getElementById('SignupEmail').value;
    const password = document.getElementById('SignupPassword').value;
    const phoneNumber = document.getElementById('Phone').value;
    const pet = document.getElementById('Pet').value;
    const address = document.getElementById('Address').value;
    const signupData = {
        name: name,
        email: email,
        password: password,
        pet: pet,
        address: address,
        phoneNumber: phoneNumber
    };
    fetch('http://localhost:3000/api/v0/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
    })
        .then(response => response.json())
        .then(signupData => {
            console.log('Success:', signupData);
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
// Login
document.getElementById('Login').addEventListener('click', logIn);
function logIn() {
    const email = document.getElementById('LoginEmail').value;
    const password = document.getElementById('LoginPassword').value;
    const loginData = {
        password: password,
        email: email
    };
    fetch('http://localhost:3000/api/v0/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // Add this line
        body: JSON.stringify(loginData)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 401) {
                throw new Error('Unauthorized'); // Throw an error for 401 response
            } else {
                throw new Error('Something went wrong');
            }
        })
        .then(loginData => {

            console.log('Success:', loginData);
            localStorage.clear();
            const userID = loginData._id;
            localStorage.setItem('userID', userID);
            console.log(userID);
            showAlert("green", "Welcome back!");
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error('Error:', error);
            if (error.message === 'Unauthorized') {
                alert('نام کاربری یا رمز عبور اشتباه می باشد');
            } else {
                alert('An error occurred. Please try again later.');
            }
        });
}
