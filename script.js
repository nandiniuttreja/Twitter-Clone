document.getElementById("showModalBtn").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "flex";
});

document.getElementById("overlay").addEventListener("click", function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
