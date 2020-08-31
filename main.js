document.addEventListener("DOMContentLoaded", function() {
    var firstUp = document.querySelector("#first-up");
    var firstDown = document.querySelector("#first-down");
    firstUp.style.display = "none";
    firstDown.style.display = "block";
    firstUp.onclick = function() {
        document.querySelector("#general-data").style.height = "42px";
        firstDown.style.display = "block";
        firstUp.style.display = "none";
    };
    firstDown.onclick = function() {
        document.querySelector("#general-data").style.height = "auto";
        firstDown.style.display = "none";
        firstUp.style.display = "block";
    };

    var secondUp = document.querySelector("#second-up");
    var secondDown = document.querySelector("#second-down");
    secondUp.style.display = "none";
    secondDown.style.display = "block";
    secondUp.onclick = function() {
        document.querySelector("#desc-data").style.height = "42px";
        secondDown.style.display = "block";
        secondUp.style.display = "none";
    };
    secondDown.onclick = function() {
        document.querySelector("#desc-data").style.height = "auto";
        secondDown.style.display = "none";
        secondUp.style.display = "block";
    };
});