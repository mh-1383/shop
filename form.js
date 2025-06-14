
let fullName = document.getElementById('fullname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let repassword = document.getElementById('repassword');
let signUp = document.getElementById('signUp');
let singInEmail = document.getElementById('signInemail');
let signInPassword = document.getElementById('signInpassword');
let signIn = document.getElementById('signIn');

signUp.addEventListener('click', () => {
    if (repassword.value === password.value) {
        if (fullName.value && email.value && password.value !== '') {
            let userData = { // phone number
                oFullname: fullName.value,
                oEmail: email.value,
                oPassword: password.value
            };

            fetch('https://shop-83-default-rtdb.firebaseio.com/user.json', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(userData)
            })
                .then(res => alert('حساب با موفقیت ایجاد شد'))
                .catch(err => console.log('Error connecting to Firebase for Sign Up:', err));
        } else {
            alert('لطفاً همه فیلدها را پر کنید.');
        }
    } else {
        alert('پسوردها با هم مطابقت ندارند.');
    }
});

signIn.addEventListener('click', () => {
    if (singInEmail.value && signInPassword.value !== '') {
        let userData = {
            signinPassword: signInPassword.value,
            signinEmail: singInEmail.value
        };

        fetch('https://shop-83-default-rtdb.firebaseio.com/user.json')
            .then(res => res.json())
            .then(data => {
                let arr = Object.entries(data);
                console.log(arr);

                let userFound = false;
                for (let i = 0; i < arr.length; i++) {
                    if (userData.signinEmail === arr[i][1].oEmail && userData.signinPassword === arr[i][1].oPassword) {
                        userFound = true;
                        location.href = './index.html'; // Redirect if user found
                        break;
                    }
                }

                if (!userFound) {
                    alert('نام کاربری یا رمز عبور اشتباه است.');
                }
            })
            .catch(err => console.log('Error connecting to Firebase for Sign In:', err));
    } else {
        alert('لطفاً همه فیلدها را پر کنید.');
    }
});
