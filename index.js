password = document.getElementById("password");
confirmPassword = document.getElementById("confirm_password");

inputPassword = document.querySelectorAll(".error");
button = document.querySelector("button");





function passwordCheck() {
    if(password.value != confirmPassword.value) {
        // document.getElementById('submit').disabled = true;
        console.log('dontmatch')
        inputPassword.forEach((item) => {
            item.style.border = "1px solid red";
        }) 
    }
}

button.addEventListener('click', e => {
    e.preventDefault();
    passwordCheck();
    console.log('ehllo')
})

console.log(password)