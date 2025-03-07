document.addEventListener("DOMContentLoaded", function () {
    // Program Filtering
    let searchInput = document.getElementById("programFilter");
    let categorySelect = document.getElementById("categoryFilter");
    let cards = document.querySelectorAll(".card");

    function filterPrograms() {
        let searchValue = searchInput.value.toLowerCase();
        let selectedCategory = categorySelect.value;

        cards.forEach(card => {
            let programName = card.querySelector("h3").textContent.toLowerCase();
            let cardCategories = card.getAttribute("data-category").toLowerCase().split(" ");

            let matchesSearch = programName.includes(searchValue);
            let matchesCategory = selectedCategory === "all" || cardCategories.includes(selectedCategory);

            if (matchesSearch && matchesCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Event Listeners for filtering
    searchInput.addEventListener("keyup", filterPrograms);
    categorySelect.addEventListener("change", filterPrograms);

    // Rating System
    let ratingButtons = document.querySelectorAll(".rating-btn");
    let selectedRating = null;

    ratingButtons.forEach(button => {
        button.addEventListener("click", function () {
            ratingButtons.forEach(btn => btn.classList.remove("selected")); // Remove previous selection
            button.classList.add("selected"); // Highlight selected emoji
            selectedRating = button.textContent;
        });
    });

    // Submit Review
    document.querySelector(".submit-button").addEventListener("click", function () {
        if (selectedRating) {
            document.getElementById("popup").style.display = "block"; // Show popup
        } else {
            alert("Please select a rating before submitting!");
        }
    });
});

// Close popup function
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
