var password = document.getElementById("new-password")
var confirmPassword = document.getElementById("new-password-confirm");

function validatePassword(){
  if(password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Τα συνθηματικά δεν ταιριάζουν");
  } else {
    confirmPassword.setCustomValidity('');
  }
}

var currentDate = new Date();

function validateAge(){
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword; 
