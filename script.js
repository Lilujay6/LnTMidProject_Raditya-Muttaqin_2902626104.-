document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let fullname = document.getElementById('fullname').value.trim();
        let email = document.getElementById('email').value.trim();
        let comment = document.getElementById('comment').value.trim();

        clearAllErrors();

        let valid = true;

        if (!fullname) {
            showError('fullname', 'Full name is required');
            valid = false;
        }

        if (!email) {
            showError('email', 'Email is required');
            valid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Invalid email');
            valid = false;
        }

        if (!comment) {
            showError('comment', 'Message is required');
            valid = false;
        }

        if (valid) {
            let msg = document.getElementById('success-message');
            msg.textContent = 'Message sent!';
            msg.classList.add('show');
            form.reset();

            setTimeout(() => {
                msg.classList.remove('show');
            }, 3000);
        }
    });
});

function isValidEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showError(id, msg) {
    document.getElementById(id + '-error').textContent = msg;
    document.getElementById(id + '-error').classList.add('show');
    document.getElementById(id).classList.add('error');
}

function clearAllErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
        el.classList.remove('show');
    });
    document.querySelectorAll('.error').forEach(el => {
        el.classList.remove('error');
    });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
