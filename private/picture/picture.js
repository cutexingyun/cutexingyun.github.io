// script.js
const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitButton');
const gallery = document.getElementById('gallery');
const passwordContainer = document.getElementById('passwordContainer');

const correctPassword = 'xingyun'; // 替换成你的密码

submitButton.addEventListener('click', function() {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        // 显示图库
        passwordContainer.style.display = 'none';
        gallery.style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
});
