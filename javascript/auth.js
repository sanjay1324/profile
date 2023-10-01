// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, fetchSignInMethodsForEmail } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARE7XW4aOweDK0qhoShpaPeXHogKDs2lY",
  authDomain: "restapi-9ddcf.firebaseapp.com",
  databaseURL: "https://restapi-9ddcf-default-rtdb.firebaseio.com",
  projectId: "restapi-9ddcf",
  storageBucket: "restapi-9ddcf.appspot.com",
  messagingSenderId: "200206877715",
  appId: "1:200206877715:web:13a2d71ea8db679aa3abe6",
  measurementId: "G-5HCPXG2GKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(app);

function clearInputFields() {
	document.getElementById("login_email").value = "";
	document.getElementById("login_password").value = "";
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
  }

const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const forgotPasswordForm = document.querySelector(".forgot-password-form");

// Function to toggle the login and signup forms
function toggleForms() {
  loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
  signupForm.style.display = signupForm.style.display === "none" ? "block" : "none";
  forgotPasswordForm.style.display = "none";
}

// Function to send a password reset email
async function sendResetEmail() {
  const email = document.getElementById("forgot_email").value;
  try {
	const methods = await fetchSignInMethodsForEmail(auth, email);
	if (methods.includes("password")) {
	  await sendPasswordResetEmail(auth, email);
	  alert("Password reset email sent to " + email);
	} else {
	  alert("User does not exist.");
	}
  } catch (error) {
	console.error(error.message);
	alert(error.message);
  }
}

// Event listeners
document.getElementById("login-btn").addEventListener("click", toggleForms);
document.getElementById("switch-to-signup").addEventListener("click", toggleForms);
document.getElementById("back-to-login").addEventListener("click", toggleForms);

document.getElementById("forgot-password").addEventListener("click", () => {
  loginForm.style.display = "none";
  signupForm.style.display = "none";
  forgotPasswordForm.style.display = "block";
});
document.getElementById("back-to-login-forgot").addEventListener("click", () => {
  loginForm.style.display = "block";
  signupForm.style.display = "none";
  forgotPasswordForm.style.display = "none";
});

document.getElementById("switch-to-signup").addEventListener("click", () => {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
  forgotPasswordForm.style.display = "none";
});
document.getElementById("register-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
	  const user = userCredential.user;
	  console.log(user);
	  clearInputFields()
	  alert("Registration successful!!");
	})
	.catch((error) => {
	  const errorMessage = error.message;
	  console.log(errorMessage);
	  alert(errorMessage);
	});
});

document.getElementById("login-btn").addEventListener("click", function () {
	var email = document.getElementById("login_email").value;
	var password = document.getElementById("login_password").value;

	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			console.log(user);
			alert(user.email + " Login successfully!!!");
			clearInputFields()
			window.location.href = 'Home.html';
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorMessage);
			alert(errorMessage);
		});
});
document.getElementById("send-reset-email").addEventListener("click", sendResetEmail);
const passwordInput = document.getElementById('login_password');
        const showPasswordCheckbox = document.getElementById('showPassword');

        showPasswordCheckbox.addEventListener('change', function () {
            if (this.checked) {
                passwordInput.type = 'text'; // Change input type to text to reveal password
            } else {
                passwordInput.type = 'password'; // Change input type back to password
            }
        });

