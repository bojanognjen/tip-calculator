const billInput = document.querySelector('.upper-number');
const peopleInput = document.querySelector(".lower-number");
const tipAmountDisplay = document.querySelector(".amount-per-person");
const totalAmountDisplay = document.querySelector(".total-per-person");
const resetButton = document.querySelector(".reset");
const form = document.querySelector('.calculator');
const radioButtons = document.querySelectorAll('.tip-input');
const customTipInput = document.querySelector(".custom input");
const inputs = document.querySelectorAll('input');

document.getElementById("custom-tip-value").addEventListener("focus", function() {
    document.getElementById("custom-tip").checked = true;
});

inputs.forEach(input => {
    input.addEventListener('keydown', (e)=> {
        if(e.key === 'Enter') {
            e.preventDefault();
            submiting(e);
        }

})

})

radioButtons.forEach(radioBtn => {
    radioBtn.addEventListener('change', (e)=> {
            e.preventDefault();
            submiting(e);

})
})

customTipInput.addEventListener('change', (event)=> {
    document.querySelector('#custom-tip').value = event.target.value;
});

function submiting(e) {
e.preventDefault();
calculateTip();
}

function calculateTip(){
    let selectedValue = document.querySelector('input[name="tip"]:checked')?.value;
    console.log(selectedValue);

    let percent = parseFloat(`1.${selectedValue}`);

    let total = billInput.value / peopleInput.value * percent;
    peopleInput.value == 0 ? total = 0 : "";
    peopleInput.value == 0 ? total = 0 : "";
    total = total.toFixed(2);

    totalAmountDisplay.innerHTML = `$${total}`;
    let tipPerAmount = ((billInput.value * percent) - billInput.value) / 5;
    peopleInput.value == 0 ? tipPerAmount = 0 : "";
    tipPerAmount = tipPerAmount.toFixed(2);
    tipAmountDisplay.innerHTML = `$${tipPerAmount}`;
}

resetButton.addEventListener('click', (e)=> {
    e.preventDefault();
    billInput.value = "";
    customTipInput.value = "";
    peopleInput.value = "";
    calculateTip();
})

form.addEventListener('submit', submiting);





// const customTipInput = document.querySelector(".custom input");

// const tipButtons = document.querySelectorAll(".percent-button:not(.custom)");


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