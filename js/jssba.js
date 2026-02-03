


const registerForm = document.getElementById('register-form')
const inputs = document.querySelectorAll('input')
const passwordInput = document.getElementById('Password')
const confirmPasswordInput = document.getElementById('CPassword')


registerForm.addEventListener('submit',(e) => {
    e.preventDefault(); // prevents page reload so JS can run

    // at least one court preference must be selected
    const courtCheckboxes = document.querySelectorAll('input[name="courtPref"]:checked');
    if (courtCheckboxes.length === 0) {
        alert('Please select at least one court preference.');
        submitBtn.removeAttribute('disabled');
        submitBtn.textContent = 'Register';
        return;
    }
    const submitBtn = document.getElementById('register-button');
    submitBtn.setAttribute('disabled', 'true');
    submitBtn.textContent = 'Processing...';

    const formData = new FormData(registerForm);
    const userData = Object.fromEntries(formData);
    console.log('Form Data Submitted:', userData);

    const password = passwordInput.value
    const confirmPassword = confirmPasswordInput.value;

    //empty check
    if (password === '' || confirmPassword === '') {
        alert('Please fill out both password fields.');
        passwordInput.style.border = '2px solid red';
        confirmPasswordInput.style.border = '2px solid red';
        submitBtn.removeAttribute('disabled');
        submitBtn.textContent = 'Register';
        return;
    }

    //length check
    if (password.length < 8 || password.length > 20) {
        alert('Password must be between 8 and 20 characters.');
        passwordInput.style.border = '2px solid red';
        passwordInput.focus();
        submitBtn.removeAttribute('disabled');
        submitBtn.textContent = 'Register';
        return;
    }

    //match check
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        passwordInput.style.border = '2px solid red';
        confirmPasswordInput.style.border = '2px solid red';
        confirmPasswordInput.focus();
        submitBtn.removeAttribute('disabled');
        submitBtn.textContent = 'Register';
        return;
    }
    //success message (using template)
    const template = document.getElementById('success-template');
    const clone = template.content.cloneNode(true);
    const successDiv = clone.querySelector('.success-message');
    successDiv.style.color = 'green';
    successDiv.style.textAlign = 'center';
    registerForm.appendChild(clone);

    //success alert/redirect
    alert('Registration successful!')
    window.location.href = 'jslogin.html'

    //reset styles
    passwordInput.style.border = '';
    confirmPasswordInput.style.border = '';
});

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        const label = input.previousElementSibling;
        if (label && label.tagName === 'LABEL') {
            label.style.color = '';
        }
    });
});
