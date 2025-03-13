const billInput = document.querySelector('.upper-number');
const peopleInput = document.querySelector(".lower-number");
const tipAmountDisplay = document.querySelector(".amount-per-person");
const totalAmountDisplay = document.querySelector(".total-per-person");
const resetButton = document.querySelector(".reset");
const form = document.querySelector('.calculator');
const radioButtons = document.querySelectorAll('.tip-input');
const customTipInput = document.querySelector(".custom-tip");
const inputs = document.querySelectorAll('input');
const alert = document.querySelector('.alert');

document.getElementById("custom-tip-value").addEventListener(`click`, handleEvent);
document.getElementById("custom-tip-value").addEventListener(`keydown`, handleEvent);

function handleEvent(event) {
    if (event.type === "click" || (event.type === "keydown" && event.key === "Enter")) {
        document.getElementById("custom-tip").checked = true;
        document.querySelector('#custom-tip').value = event.target.value <= 9 ? `0${event.target.value}`: event.target.value;
    }
}

function enter(e) {
    if(e.key === 'Enter' || e.type === 'change') {
        e.preventDefault();
        submiting(e);
    } 
}

inputs.forEach(input => {
    input.addEventListener('keydown', enter)
})

radioButtons.forEach(radioBtn => {
    radioBtn.addEventListener('change', enter)
})

function submiting(e) {
e.preventDefault();
calculateTip();
}

function calculateTip(){
    let selectedValue = document.querySelector('input[name="tip"]:checked')?.value;

    let percent = parseFloat(`1.${selectedValue}`);

    let total = billInput.value / peopleInput.value * percent;
    peopleInput.value == 0 ? total = 0 : "";
    peopleInput.value == 0 ? total = 0 : "";
    total = total.toFixed(2);

    totalAmountDisplay.innerHTML = `$${total}`;
    let tipPerAmount = ((billInput.value * percent) - billInput.value) / peopleInput.value;

    if(peopleInput.value == 0) {
        tipPerAmount = 0;
        peopleInput.parentNode.style.outline = "2px solid #e17052";
        alert.style.display = "block";
    } else {
        alert.style.display = "none";
        peopleInput.parentNode.style.outline = "none";
    }

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
