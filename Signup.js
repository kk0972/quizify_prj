
// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYH6QBwGZEwt88OTLWh3Z9yP4S44c7iGU",
  authDomain: "almostdone-66212.firebaseapp.com",
  projectId: "almostdone-66212",
  storageBucket: "almostdone-66212.appspot.com",
  messagingSenderId: "722717516267",
  appId: "1:722717516267:web:6d03c2f782032edfe139ae"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, set, child, get, update, remove}
from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const db = getDatabase();
const usrname = document.getElementById('name-a30d');
const username = document.getElementById('username-a30d');
const pass = document.getElementById('password-a30d');
var submitButtn = document.getElementById('sub_btn');
const email = document.getElementById('email-a30d');
const phone = document.getElementById('phone-a30d');

function isEmptyOrSpace(str) 
        {
            return str === null || str.match(/^ *$/) !== null;
        }
        function Validation(){
            let nameregex = /^[a-zA-Z\s]+$/;
            let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
            let userregex = /^[a-zA-Z0-9]{5,}$/;
            let phoneregex = /^[0-9]/;
            
            if(isEmptyOrSpace(usrname.value) || isEmptyOrSpace(email.value)|| isEmptyOrSpace(username.value)|| isEmptyOrSpace(pass.value)||
            isEmptyOrSpace(phone.value))
            {
                alert("You can not let any field empty");
                return false;
            }
        
            if(!nameregex.test(usrname.value)){
                alert("the name should only contain alphabets");
                return false;
            }

            if(!emailregex.test(email.value)){
                alert("enter a valid email");
                return false;
            }

            if(!phoneregex.test(phone.value)){
                alert("enter a valid phone number");
                return false;
            }

            if(!userregex.test(username.value)){
                alert("-user name can only be alphanumeric \n-username must aleast 5 characters \n-username can not contain space");
                return false;
            }
            return true;
        }
        const dbRef = ref(db);
        function RegisterUser () {
            if(!Validation()){
                return;
            };
            
            get(child(dbRef, "UserList/" + username.value)).then((snapshot)=> {
                if(snapshot.exists()){
                    alert("Account already exist");
                }
                else{
                    set(ref(db,"UserList/" + username.value),
                    {
                        fullname: usrname.value,
                        email: email.value,
                        phone: phone.value,
                        username: username.value,
                        password: encPass()
                    })
                    .then(()=> {
                        alert("User added successfully");
                    })
                    .catch((error)=> {
                        alert("error" + error);
                    } )
                }
            });
        }
        function encPass(){
            var passEnc = CryptoJS.AES.encrypt(pass.value, pass.value);
            return passEnc.toString();
        }
        submitButtn.addEventListener('click', RegisterUser);