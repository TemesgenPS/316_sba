


const registerForm = document.getElementById('register-form')
const inputs = document.querySelectorAll('input')
const passwordInput = document.getElementById('Password')
const confirmPasswordInput = document.getElementById('CPassword')


registerForm.addEventListener('submit',(e) => {
    e.preventDefault();

    const password = passwordInput.value
    const confirmPassword = confirmPasswordInput.value;
//empty check
    if (password === '' || confirmPassword === '') {
        alert('Please fill out both password fields.');
        passwordInput.style.border = '2px solid red';
        confirmPasswordInput.style.border = '2px solid red';
        return;
    }

//length check
    if (password.length < 8 || password.length > 20) {
        alert('Password must be between 8 and 20 characters.');
        passwordInput.style.border = '2px solid red';
        passwordInput.focus();
        return;
    }

//match check
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        passwordInput.style.border = '2px solid red';
        confirmPasswordInput.style.border = '2px solid red';
        confirmPasswordInput.focus();
        return;
    }
//success
    alert('Registration successful!')
    window.location.href = 'jslogin.html'
    passwordInput.style.border = '';
    confirmPasswordInput.style.border = '';
} )

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        const label = input.previousElementSibling;
        if (label && label.tagName === 'LABEL') {
            label.style.color = '#3A5A40';
        }
    });
});
