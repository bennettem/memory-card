const unflipped = document.querySelectorAll(".unflipped");
const flipped = document.querySelector(".flipped");
const matchImgs = document.getElementById("match-img");
const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

//controls flipped/unflipped cards
cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("unflipped");
    card.classList.toggle("match-img.active");
  });
});
