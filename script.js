var modal = document.getElementById("MyModal");
var btn = document.getElementById("pop-btn");
var span = document.getElementById("close");

btn.onclick = function(){
    modal.style.display = "flex";
    history.pushState({form:true},"","./#form");
}

span.onclick = function(){
    modal.style.display = "none";
    history.pushState({form:false},"","./");
}

window.addEventListener("popstate", (eve)=>{
    var hash = window.location.hash;
    if(hash===""){
        modal.style.display = "none";
    }
    else{
        modal.style.display = "flex";
    }
});

var subBut = document.getElementById("submit-button");
subBut.onclick = function(){
    let httpRequest = new XMLHttpRequest(); 
    httpRequest.open('POST', 'https://formcarry.com/s/Xa1Z35ocuV');
    //httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.setRequestHeader('ACCEPT', 'application/json');

    var formData = new FormData();
    var name = document.getElementById("user-name").value;
    formData.append("user-name", name)
    var email = document.getElementById("user-email").value;
    formData.append("user-email", email);
    var phone = document.getElementById("user-phone").value;
    formData.append("user-phone", phone);
    var organisation = document.getElementById("user-organisation").value;
    formData.append("user-organisation", organisation);
    var message = document.getElementById("user-message").value;
    formData.append("user-message", message);
    var acception = document.getElementById("user-acception").checked;
    if(!acception){
        alert("You need to agree with the privacy politics");
        return;
    }
    httpRequest.send(formData);
    
    httpRequest.onreadystatechange = function() {//Вызывает функцию при смене состояния.
        if(httpRequest.readyState === XMLHttpRequest.DONE ){
            if(httpRequest.status == 200) {
                alert("Form was sent");
            }
            else{
                alert("An error has occurred.Status code: " + httpRequest.status);
            }
        }
    }
    document.getElementById("user-name").value = "";
    document.getElementById("user-email").value = "";
    document.getElementById("user-phone").value = "";
    document.getElementById("user-organisation").value = "";
    document.getElementById("user-message").value = "";
    document.getElementById("user-acception").checked = false;
}

var nameEl = document.getElementById("user-name");
nameEl.addEventListener("change",saveLast);
var phone = document.getElementById("user-phone");
phone.addEventListener("change",saveLast);
var email = document.getElementById("user-email");
email.addEventListener("change",saveLast);
var organisation = document.getElementById("user-organisation");
organisation.addEventListener("change",saveLast);
var message = document.getElementById("user-message");
message.addEventListener("change",saveLast);

function saveLast(event){
    let elementId = event.target.id;
    let elementValue = event.target.value;
    localStorage.setItem(elementId, elementValue);
}

document.addEventListener("DOMContentLoaded", (event) => {
     nameEl.value = localStorage.getItem(nameEl.id);
     email.value = localStorage.getItem(email.id);
     phone.value = localStorage.getItem(phone.id);
     organisation.value = localStorage.getItem(organisation.id);
     message.value = localStorage.getItem(message.id);
  });
