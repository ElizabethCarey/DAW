// global JS functions

document.addEventListener("DOMContentLoaded", function() {

    // Select all elements inside the body
    let elements = document.querySelectorAll(".sub-body *");

    // Set initial opacity to 0 and apply a transition effect
    elements.forEach(element => {
        element.style.opacity = "0";
        element.style.transition = "opacity 1s ease-in-out";
    });

    // animateLogoAndText();

    // Delay to ensure the transition effect takes place
    setTimeout(() => {
        elements.forEach(element => {
            element.style.opacity = "1"; // Gradually fade in elements
        });
    }, 50);

});