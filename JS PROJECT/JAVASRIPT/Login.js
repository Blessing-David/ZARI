//select the id or class
let myForm = document.getElementById('form');
let myUsername = document.getElementById('username');
let myEmail = document.getElementById('email');
let myPassword = document.getElementById('password');
let myError = document.querySelector('.error');
let mySuccess = document.querySelector('.success');

//add an event listener to the login form//
myForm.addEventListener('submit', loginForm)

//create a function to handle the login//
function loginForm(e){
    e.preventDefault();
    if(myEmail.value === "" || myPassword.value === ""){
        myError.innerHTML = "Fields cannot be empty"
    }
    else{
        let emailBlessing = localStorage.getItem('email')
        let passwordBlessing = localStorage.getItem('password')
        if(emailBlessing === myEmail.value && passwordBlessing === myPassword.value){
            // mySuccess.innerHTML = "congratulations! you have successfully login"
            window.location.href = "bonus.html"
        }
        else{
            myError.innerHTML = "Invalid email or password"
            mySuccess.style.display = "none"
        }
    }
}