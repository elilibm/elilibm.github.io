var modal = document.getElementById("resumeModal");
var btn = document.getElementById("openResume");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(event) {
    event.preventDefault(); 
    modal.style.display = "flex"; 
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}