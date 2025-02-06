// global JS functions

// Function to fade in the body when the site is first loaded
function fadeInBody() {
    let body = document.querySelector("body");
    body.style.opacity = "0";
    body.style.transition = "opacity 1s ease-in-out";
    
    setTimeout(() => {
        body.style.opacity = "1";
    }, 100);
}

document.addEventListener("DOMContentLoaded", function() {
    // Select all elements inside the body
    let elements = document.querySelectorAll(".sub-body *");

    // Set initial opacity to 0 and apply a transition effect
    elements.forEach(element => {
        element.style.opacity = "0";
        element.style.transition = "opacity 1s ease-in-out";
    });
    
    // Delay to ensure the transition effect takes place
    setTimeout(() => {
        elements.forEach(element => {
            element.style.opacity = "1"; // Gradually fade in elements
        });
    }, 100);
});

// homepage JS functions

// Event listener for clicking on the workspace div
document.getElementById("workspace").addEventListener("click", function() {
    let workspace = this;

    // Define the original content (a div with class 'logo-and-text')
    let originalContent = 
    `<div class="logo-and-text">
        <div class="logo-container">
            <img src="assets/dawlogotransparent.png" alt="DAW Logo">
        </div>
        <div class = "Digital-Audio-Workspace">
            <h1>Digital Audio Workspace. </h1>
        </div>
    </div>`; // original HTML content 

    // Define the new content with the organization's description
    let newContent = `<p> <span class="bolded">Digital Audio Workspace</span> is a music technology organization committed to providing a collaborative 
        space built on values of support and equity. Our goal is to bring together a diverse group of 
        students passionate about celebrating musicians and artists at the University of California, Los Angeles. 
        Each quarter, we offer frequent social programming and community events, 
        as well as opportunities to learn about and collaborate on electronic music.</p>`; // mission statement
    
    // Apply fade-out transition
    workspace.style.transition = "opacity 1s ease-in-out";
    workspace.style.opacity = "0";
    
    // Wait for fade-out to complete before switching content
    setTimeout(() => {
        if (workspace.innerHTML.includes("<p>")) {
            workspace.innerHTML = originalContent; // Switch back to original content
        } else {
            workspace.innerHTML = newContent; // Switch to new content
        }
        workspace.style.opacity = "1"; // Apply fade-in effect
    }, 500);
});
