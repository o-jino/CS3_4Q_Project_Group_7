function outputinfo() {

    var N=document.getElementById("username").value;
    var U=document.getElementById("username2").value;
    var P=document.getElementById("password").value;
    var E=document.getElementById("email").value;
    var A=document.getElementById("Numberz").value;
    var I=document.getElementById("interest").value;
    var G=document.getElementById("gender").value;
    
    switch(G){
        case "PFNT":
            G="preferred not to be stated";
            break;
        case "male":
            G="male"
            break;
        case "female":
            G="female"
            break;
        default:
            G=""
            break;
    }

    localStorage.setItem("username", N);
    localStorage.setItem("username2", U);
    localStorage.setItem("password", P);
    localStorage.setItem("email", E);
    localStorage.setItem("Numberz", A);
    localStorage.setItem("interest", I);
    localStorage.setItem("gender", G);

    

    //open the second page
    window.location.href = "about.html";


}

document.addEventListener('DOMContentLoaded', (event) => {
    let usernameinfo = localStorage.getItem("username");
    let username2info = localStorage.getItem("username2");
    let passwordinfo = localStorage.getItem("password");
    let emailinfo = localStorage.getItem("email");
    let Numberinfo = localStorage.getItem("Numberz");
    let Interestinfo = localStorage.getItem("interest");
    let genderinfo = localStorage.getItem("gender");

    if (usernameinfo) document.getElementById("outputname").innerText = usernameinfo;
    if (username2info) document.getElementById("outputusername").innerText = username2info;
    if (passwordinfo) document.getElementById("outputpassword").innerText = passwordinfo;
    if (emailinfo) document.getElementById("outputEmail").innerText = emailinfo;
    if (Numberinfo) document.getElementById("outputNumber").innerText = Numberinfo;
    if (Interestinfo) document.getElementById("outputinterest").innerText = Interestinfo;
    if (genderinfo) document.getElementById("outputgender").innerText = genderinfo;

});

function onblur1(){
    var x = document.getElementById("username").value;
    var errorSpan = document.getElementById("usernameError");
    if (x == ""){
        username.style.borderColor = "red";
        errorSpan.textContent = "Required";
    }
    else{
        username.style.borderColor = "lightgreen";
        errorSpan.textContent = " ";
    }
}
function onblur2(){
    var x = document.getElementById("username2").value;
    var errorSpan = document.getElementById("username2Error");
    if (x == ""){
        username2.style.borderColor = "red";
        errorSpan.textContent = "Required";
    }
    else{
        username2.style.borderColor = "lightgreen";
        errorSpan.textContent = " ";
    }
}
function onblur3(){
    var x = document.getElementById("email").value;
    var errorSpan = document.getElementById("emailError");
    if (x == ""){
        email.style.borderColor = "red";
        errorSpan.textContent = "Required";
    }
    else{
        email.style.borderColor = "lightgreen";
        errorSpan.textContent = " ";
    }
}
function onblur4(){
    var x = document.getElementById("password").value;
    var errorSpan = document.getElementById("passwordError");
    if (x == ""){
        password.style.borderColor = "red";
        errorSpan.textContent = "Required";
    }
    else{
        password.style.borderColor = "lightgreen";
        errorSpan.textContent = " ";
    }
}
function onblur5(){
    var x = document.getElementById("Numberz").value;
    if (x == ""){
        Numberz.style.borderColor = "red";
    }
    else{
        Numberz.style.borderColor = "lightgreen";
    }
}
function onblur6(){
    var x = document.getElementById("interest").value;
    var errorSpan = document.getElementById("interestError");
    if (x == ""){
        interest.style.borderColor = "red";
        errorSpan.textContent = "Required";
    }
    else{
        interest.style.borderColor = "lightgreen";
        errorSpan.textContent = " ";
    }
}
function selectonblur(){
    var x=document.getElementById("gender").value;
    if (x == ""){
        gender.style.borderColor = "red";
    }
    else{
        gender.style.borderColor = "lightgreen";
    }
}
function resetinfo(){
    var R=""
    document.getElementById("outputname").innerText=R;
    document.getElementById("outputgender").innerText=R;
    document.getElementById("outputusername").innerText=R;
    document.getElementById("outputpassword").innerText=R;
    document.getElementById("outputEmail").innerText=R;
    document.getElementById("outputNumber").innerText=R;
    document.getElementById("outputinterest").innerText=R;
    
}