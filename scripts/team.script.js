const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

// function for selecting a card. If a card is selected, it will be unselected and vice versa
function cardSelection(card, event) {
  cards.forEach((c) => c.classList.add("not-selected"));
  card.classList.toggle("not-selected");
  card.classList.toggle("selected");
  // Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event. | https://www.w3schools.com/jsref/event_stoppropagation.asp
  event.stopPropagation();
}

// Event listeners for each card
cards.forEach((card) => {
  // Event listener for clicking on a card
  card.addEventListener("click", (event) => {
    resetSelection();
    cardSelection(card, event);
  });

  // Event listener for pressing enter on a card
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      cardSelection(card, event);
    }
  });
});

// Function for resetting the selection of all cards
function resetSelection() {
  cards.forEach((c) => {
    c.classList.remove("not-selected");
    c.classList.remove("selected");
  });
}

// Event listener for clicking outside of the card container
document.addEventListener("click", (event) => {
  if (!cardContainer.contains(event.target)) {
    resetSelection();
  }
});
