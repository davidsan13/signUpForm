password = document.getElementById("password");
confirmPassword = document.getElementById("confirm_password");

inputPassword = document.querySelectorAll(".password");
button = document.querySelector("button");





function passwordCheck() {
    if(password.value != confirmPassword.value) {
        // document.getElementById('submit').disabled = true;
        console.log('dontmatch')
        inputPassword.forEach((item) => {
            item.classList.add('error')
        }) 
    } else {
        inputPassword.forEach((item) => {
            item.classList.remove('error')
            
        }) 
    }
}

button.addEventListener('click', e => {
    e.preventDefault();
    passwordCheck();
    console.log('ehllo')
})

console.log(password)