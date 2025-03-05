document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.getElementById("contactBtn");
    const modal = document.getElementById("contactModal");
    const closeBtn = document.querySelector(".close-btn");

    // Open Modal
    contactBtn.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    // Close Modal
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the content box
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     const contactBtn = document.getElementById("contactBtn");
//     const modal = document.getElementById("contactModal");
//     const closeBtn = document.querySelector(".close-btn");

//     // Open Modal
//     contactBtn.addEventListener("click", function() {
//         modal.classList.add("show");
//     });

//     // Close Modal
//     closeBtn.addEventListener("click", function() {
//         modal.classList.remove("show");
//     });

//     // Close modal when clicking outside the content box
//     window.addEventListener("click", function(event) {
//         if (event.target === modal) {
//             modal.classList.remove("show");
//         }
//     });
// });