// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVmsz-UQoyUAhOECT1VFwUufDzD2Te7gk",
  authDomain: "shop-60394.firebaseapp.com",
  databaseURL: "https://shop-60394-default-rtdb.firebaseio.com",
  projectId: "shop-60394",
  storageBucket: "shop-60394.firebasestorage.app",
  messagingSenderId: "221226665515",
  appId: "1:221226665515:web:3d1673620471cbe9cf0c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const signUp = document.getElementById('signUp');
const singInEmail = document.getElementById('signInemail');
const signInPassword = document.getElementById('signInpassword');
const signIn = document.getElementById('signIn');

signUp.addEventListener('click', (event) => {
    event.preventDefault()
    alert('sdnvjsdnjfkd')
    // if (repassword.value === password.value) {
    //     if (fullName.value && email.value && password.value !== '') {
    //         let userData = { // phone number
    //             oFullname: fullName.value,
    //             oEmail: email.value,
    //             oPassword: password.value
    //         };

    //         fetch('https://shop-60394-default-rtdb.firebaseio.com/user.json', {
    //             method: 'POST',
    //             headers: { "Content-type": "application/json" },
    //             body: JSON.stringify(userData)
    //         })
    //             .then(res => alert('حساب با موفقیت ایجاد شد'))
    //             .catch(err => console.log('Error connecting to Firebase for Sign Up:', err));
    //     } else {
    //         alert('لطفاً همه فیلدها را پر کنید.');
    //     }
    // } else {
    //     alert('پسوردها با هم مطابقت ندارند.');
    // }
});

signIn.addEventListener('click', (event) => {
    event.preventDefault()
    alert(5)
    if (singInEmail.value && signInPassword.value !== '') {
        let userData = {
            signinPassword: signInPassword.value,
            signinEmail: singInEmail.value
        };

        fetch('https://shop-60394-default-rtdb.firebaseio.com/user.json')
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
