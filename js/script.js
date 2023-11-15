
function cardElementText(textId) {
                  const totalElementAmount = document.getElementById(textId);
                  const totalElementAmountString = totalElementAmount.innerText;
                  const totalAmount = parseFloat(totalElementAmountString);
                  return totalAmount;
};

function setTextAmount(elementId, newValue) {
                  const setAmount = document.getElementById(elementId);
                  setAmount.innerText =newValue;
};

// first kitchens card
document.getElementById('k-first-card').addEventListener('click', function () { 
                  const textAmount = cardElementText('first-card-amount');
                  const priceAmount = cardElementText('total-price');
                  const amountTotal = cardElementText('Total');

                  const Amount = textAmount + priceAmount;
                  setTextAmount('total-price', Amount);
                  const grandAmount = textAmount + amountTotal;
                  setTextAmount('Total', grandAmount);
                  
});

// second kitchens card
document.getElementById('k-second-card').addEventListener('click', function () {
                  const secondTextAmount = cardElementText('second-card-amount');
                  const secondPriceAmount = cardElementText('total-price');
                  const secondAmountTotal = cardElementText('Total');

                  const secondAmount = secondTextAmount + secondPriceAmount;
                  setTextAmount('total-price', secondAmount);
                  const secondGrantAmount = secondTextAmount + secondAmountTotal;
                  setTextAmount('Total', secondGrantAmount);
});
// third kitchens card
document.getElementById('k-third-card').addEventListener('click', function () {
                  const thirdTextAmount = cardElementText('third-card-amount');
                  const thirdPriceAmount = cardElementText('total-price');
                  const thirdAmountTotal = cardElementText('Total');
                  const thirdAmount = thirdTextAmount + thirdPriceAmount;
                  setTextAmount("total-price", thirdAmount);
                  const grandThirdAmount = thirdTextAmount + thirdAmountTotal;
                  setTextAmount('Total', grandThirdAmount);


});



 


