function validate() {

    let input = document.getElementById('email');
    let mailformat = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

    input.addEventListener('input', validateEmail);

    function validateEmail() {
        if (!input.value.match(mailformat)) {
            input.style.borderColor = 'red';
            return true;
        } else {
            input.style.borderColor = 'black';
            return false;
        }
    }
}