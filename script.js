const email =  document.getElementById('email');
const password =  document.getElementById('password');

email.addEventListener('input', ()=> {
    const emailBox = document.querySelector('.emailBox');
    const emailText = document.querySelector('.emailText')
    const emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/';

    if(email.value.match(emailPattern)){
        emailBox.classList.add('valid');
        emailBox.classList.remove('invalid');
        emailText.innerHTML = 'Your Email Address is valid';
    } else {
        emailBox.classList.add('invalid');
        emailBox.classList.remove('valid');
        emailText.innerHTML = 'Must be a valid email addres';
    }
})