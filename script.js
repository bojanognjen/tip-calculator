// const billInput = document.querySelector('.upper-number');
// const peopleInput = document.querySelector(".lower-number");
// const tipAmountDisplay = document.querySelector(".amount-per-person");
// const totalAmountDisplay = document.querySelector(".total-per-person");
// const resetButton = document.querySelector(".reset");

// let billValue = 0;
// let tipValue = 0;
// let peopleCount = 1;



// const billInput = document.querySelector(".upper-number");
// const customTipInput = document.querySelector(".custom input");
// const peopleInput = document.querySelector(".lower-number");
// const tipButtons = document.querySelectorAll(".percent-button:not(.custom)");
// const tipAmountDisplay = document.querySelector(".amount-per-person");
// const totalAmountDisplay = document.querySelector(".total-per-person");
// const resetButton = document.querySelector(".reset");

// let billValue = 0;
// let tipValue = 0;
// let peopleCount = 1;

// // Function to calculate and update values
// function calculateTip() {
//   if (billValue > 0 && peopleCount > 0) {
//     let tipAmount = (billValue * (tipValue / 100)) / peopleCount;
//     let totalAmount = (billValue / peopleCount) + tipAmount;

//     tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
//     totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
//   } else {
//     tipAmountDisplay.textContent = "$0.00";
//     totalAmountDisplay.textContent = "$0.00";
//   }
// }

// // Event Listeners
// billInput.addEventListener("input", (e) => {
//   billValue = parseFloat(e.target.value) || 0;
//   calculateTip();
// });

// peopleInput.addEventListener("input", (e) => {
//   peopleCount = parseInt(e.target.value) || 1;
//   calculateTip();
// });

// tipButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     tipButtons.forEach(btn => btn.classList.remove("active"));
//     e.target.classList.add("active");

//     tipValue = parseInt(e.target.textContent.replace("%", "")) || 0;
//     customTipInput.value = ""; // Clear custom input if a button is selected
//     calculateTip();
//   });
// });

//customTipInput.addEventListener("input", (e) => {
//  tipValue = parseFloat(e.target.value) || 0;
//  tipButtons.forEach(btn => btn.classList.remove("active")); // Remove active class from buttons
//  calculateTip();
//});
//// Reset button functionality
//resetButton.addEventListener("click", () => {
//  billInput.value = "";
//  customTipInput.value = "";
//  peopleInput.value = "";
//  tipButtons.forEach(btn => btn.classList.remove("active"));
//  billValue = 0;
//  tipValue = 0;
//  peopleCount = 1;

//  calculateTip();
//});
//// Initial Calculation
//calculateTip();