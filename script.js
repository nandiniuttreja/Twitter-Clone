document.getElementById("overlay").style.display = "none";
document.getElementById("opac").style.opacity = "1";

function saks() {
    document.getElementById("overlay").style.display = "flex"; 
    document.getElementById("opac").style.opacity = "0.3";  
}

function myFun() {
    const x = document.getElementById("overlay");
    x.style.display = "none";
    document.getElementById("opac").style.opacity = "1"; 
}