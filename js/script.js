// document.getElementById('k-first-card').addEventListener('click', function () {
//                   const firstCardElement = document.getElementById('first-card-amount');
//                   const firstCardElementValue = firstCardElement.innerText;
//                   const firstCardValue = parseFloat(firstCardElementValue);
                  
//                   const totalPriceElement = document.getElementById('total-price');
//                   const totalPriceString = totalPriceElement.innerText;
//                   const totalPrice = parseFloat(totalPriceString);
//                   const totalAmount = firstCardValue + totalPrice;
//                   totalPriceElement.innerText = totalAmount;
// });


function cardElementText(textId) {
                  const totalElementAmount = document.getElementById(textId);
                  const totalElementAmountString = totalElementAmount.innerText;
                  const totalAmount = parseFloat(totalElementAmountString);
                  return totalAmount;
};

function setTextAmount(elementId, newValue) {
                  const setAmount = document.getElementById(elementId);
                  setAmount.innerText =newValue;
}

// first kitchens items
document.getElementById('k-first-card').addEventListener('click', function () { 
                  const textAmount = cardElementText('first-card-amount');
                  const priceAmount = cardElementText('total-price');
                  const amountTotal = cardElementText('Total');

                  const Amount = textAmount + priceAmount;
                  setTextAmount('total-price', Amount);
                  const grandAmount = textAmount + amountTotal;
                  setTextAmount('Total', grandAmount);
                  
                   

 });

