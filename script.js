var modal = document.getElementById("MyModal");
var btn = document.getElementById("pop-btn");
var span = document.getElementById("close");

btn.onclick = function(){
    modal.style.display = "flex";
}

span.onclick = function(){
    modal.style.display = "none";
}