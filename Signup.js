const usrname = document.getElementById('name-a30d');
        const username = document.getElementById('username-a30d');
        const pass = document.getElementById('password-a30d');
        const submit = document.getElementById('sub_btn');
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

        function RegisterUser () {
            if(!Validation()){
                return;
            };
            const dbRef = ref(db);
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
                        role: 1,
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

        submit.addEventListener('click', RegisterUser);
        