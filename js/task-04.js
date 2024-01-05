// Create a variable, counterValue, that will store the current counter value and initialize it with 0.
// Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
// Update the interface with the new value of the variable counterValue.

const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

let counter = 0;

decrementEl.addEventListener("click", function () {
  counter--;
  counterValue.textContent = counter;
});

incrementEl.addEventListener("click", function () {
  counter++;
  counterValue.textContent = counter;
});