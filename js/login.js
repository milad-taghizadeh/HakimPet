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
