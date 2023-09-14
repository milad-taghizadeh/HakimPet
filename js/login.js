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
    fetch('http://localhost:3000/api/v0/auth/register' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
    })
        .then(response => response.json())
        .then(signupData => {
            console.log('Success:', signupData);
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
    console.log(email);
    console.log(password);
    const loginData = {
        password: password,
        email: email
    };
    fetch('http://localhost:3000/api/v0/auth/login' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(signupData => {
        console.log('Success:', signupData);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
