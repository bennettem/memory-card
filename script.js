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
function shuffleCards() {}
