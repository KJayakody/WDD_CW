/*TODO
 * Check stopPropagation()
 */

const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

function cardSelection(card, event) {
  cards.forEach((c) => c.classList.add("not-selected"));
  card.classList.toggle("not-selected");
  card.classList.toggle("selected");
  event.stopPropagation();
}

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    resetSelection();
    cardSelection(card, event);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      cardSelection(card, event);
    }
  });
});

function resetSelection() {
  cards.forEach((c) => {
    c.classList.remove("not-selected");
    c.classList.remove("selected");
  });
}

document.addEventListener("click", (event) => {
  if (!cardContainer.contains(event.target)) {
    resetSelection();
  }
});
