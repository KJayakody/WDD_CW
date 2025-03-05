document.addEventListener("DOMContentLoaded", function () {
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

    // Event Listeners
    searchInput.addEventListener("keyup", filterPrograms);
    categorySelect.addEventListener("change", filterPrograms);
});
