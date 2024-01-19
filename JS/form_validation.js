//form validation
let form = document.querySelector("form");
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
let error1 = document.querySelector('.error1');
let error2 = document.querySelector('.error2');
let error3 = document.querySelector('.error3');
let btn = document.querySelector(".btn");


form.addEventListener(('submit'), (e)=> {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    let validEmail = /\b[A-Za-z0-9._-]+@(gmail|yahoo).com/;
    let validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d@$!%*?&])[a-zA-Z\d]{8,10}$/;

    if (!email.match(validEmail) && !(password.match(validPassword))) {
        error3.style.display = "block";
    } else if (!(password.match(validPassword))) {
        error2.style.display = "block";
    } else if (!email.match(validEmail)) {
        error1.style.display = "block";
    } else {
        window.location.href = "home.html";
    }

    btn.onclick = function () {
        error1.style.display = "none";
        error2.style.display = "none";
        error3.style.display = "none";
    }
});   