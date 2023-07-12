const form = document.getElementById("form")
const email = document.getElementById("email")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput()
})

function checkInput() {
    const emailValue = email.value 

    if (emailValue === '') {
        setErroFor(email, 'Looks like this is not an email.');
    } else if (!checkEmail(emailValue)) {
        setErroFor(email, 'Please provide a valid email address');
    } else {
        setSuccessFor(email)
    }
}

function setErroFor(input, message) {
    const formControl = input.parentElement;
    const small = document.querySelector('small');

    formControl.className = 'form-control erro';

    small.innerText = message;
}

function  setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}