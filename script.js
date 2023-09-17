const unflipped = document.querySelectorAll(".unflipped");
const matchImgs = document.querySelectorAll(".match-img");
const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("unflipped");
    card.classList.toggle("match-img.active");
  });
});

//shuffle cards on page load for different order
function shuffleCards() {
  let cardOrder = Array.from(
    document.querySelectorAll(".card-container .card")
  );

  let currentIndex = cardOrder.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = cardOrder[currentIndex];
    cardOrder[currentIndex] = cardOrder[randomIndex];
    cardOrder[randomIndex] = temporaryValue;
  }

  // Append shuffled cards to container
  cardOrder.forEach(card => cardContainer.appendChild(card));
}

window.onload = shuffleCards;
