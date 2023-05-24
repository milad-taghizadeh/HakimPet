//index.js  
var emailText = document.getElementById("#email");
console.log(emailText);

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "taghizadehmilad1382@gmail.com",
	Password : "mt8289milad",
	To : 'miladtaghizadeh1382@outlook.com',
	From : "taghizadehmilad1382@gmail.com",
	Subject : "test message",
	Body : "test",
	}).then(
		message => alert("mail sent successfully")
	);
}


