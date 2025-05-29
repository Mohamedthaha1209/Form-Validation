
let form = document.getElementById("form-validate")

form.addEventListener('submit',function(event){
    event.preventDefault()
    let uName = document.getElementById("userName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let cPassword = document.getElementById("Confirmpassword").value.trim();

    //error
    let uname_err = document.getElementById("uName-error");
    let email_err = document.getElementById("email-Err");
    let password_err = document.getElementById("password-Err");
    let Confirmpassword_err = document.getElementById("Confirmpassword-Err");

    //regular expersion
    //mohamed thaha
    //abc@gmail.com
    let uNamePattern = /^[A-Za-z]+ [A-Za-z]+$/;
    let emailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/  // . kirathu regular expersion la varathu naala \ kuduthudhan . vaikkanum
    if(uName === ""){
        uname_err.innerText= "*Name Is Required"
    }
    else if(!uNamePattern.test(uName)){
        uname_err.innerText = "*Enter Your Full Name"
    }
    else if (uNamePattern.test(uName)){
        uname_err.innerText = ""
    }
    if(email === ""){
        email_err.innerText = "*Email Is Required"
    }
    else if(!emailPattern.test(email)){
        email_err.innerText = "*Enter a Valid Email"
    }
    else if (emailPattern.test(email)){
        email_err.innerText =""
    }
    if(password === ""){
        password_err.innerText = "*Password Is Required"
    }
    else if (password.length <=3 || password.length >=10){
    password_err.innerText ="*Enter a Password Charater Between 3 to 10"
    }
    else if (password.length >3 || password.length<10){
    password_err.innerText =""
    }
    if(cPassword === ""){
        Confirmpassword_err.innerText ="*Confirm Password Is Required"
    }
    else if (cPassword !== password){
        Confirmpassword_err.innerText = "*Password Not Macth"
    }
    else if (cPassword === password){
        Confirmpassword_err.innerText = ""
    }
})

