
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



function itemNames(nameType) {
                  const itemNamesEntry = document.getElementById('item-entry');
                  const count = itemNamesEntry.childElementCount;

                  const p = document.createElement('p');
                  p.innerHTML = ` ${count + 1}.${nameType} `
                  itemNamesEntry.appendChild(p);



};



// first kitchens items card
document.getElementById('k-first-card').addEventListener('click', function () { 
                  const textAmount = cardElementText('first-card-amount');
                  const priceAmount = cardElementText('total-price');
                  const amountTotal = cardElementText('Total');

                  const Amount = textAmount + priceAmount;
                  setTextAmount('total-price', Amount);
                  const grandAmount = textAmount + amountTotal;
                  setTextAmount('Total', grandAmount);
                  itemNames("K. Accessories");
                  
});

// second kitchens items card
document.getElementById('k-second-card').addEventListener('click', function () {
                  const secondTextAmount = cardElementText('second-card-amount');
                  const secondPriceAmount = cardElementText('total-price');
                  const secondAmountTotal = cardElementText('Total');

                  const secondAmount = secondTextAmount + secondPriceAmount;
                  setTextAmount('total-price', secondAmount);
                  const secondGrantAmount = secondTextAmount + secondAmountTotal;
                  setTextAmount('Total', secondGrantAmount);
                  itemNames('K. Accessories');
});
// third kitchens items card
document.getElementById('k-third-card').addEventListener('click', function () {
                  const thirdTextAmount = cardElementText('third-card-amount');
                  const thirdPriceAmount = cardElementText('total-price');
                  const thirdAmountTotal = cardElementText('Total');
                  const thirdAmount = thirdTextAmount + thirdPriceAmount;
                  setTextAmount("total-price", thirdAmount);
                  const grandThirdAmount = thirdTextAmount + thirdAmountTotal;
                  setTextAmount('Total', grandThirdAmount);
                  itemNames('Home cooker');


});

// sportswear's item card


// spots wears first cads 
document.getElementById('sports-first-card').addEventListener('click', function () {
                  const firstSportsItemAmount = cardElementText('sports-item-balence');
                  const firstSportsBalence = cardElementText('total-price');
                  const sportsItemTotal = cardElementText('Total');
                  const sportsTotalAmount = firstSportsItemAmount + firstSportsBalence;
                  setTextAmount('total-price', sportsTotalAmount);
                  const itemTotal = firstSportsItemAmount + sportsItemTotal;
                  setTextAmount('Total', itemTotal);
                  itemNames("Sports Back Cap")

});
// spots wears second cads 
document.getElementById('sports-second-card').addEventListener('click', function () {
                  const secondSportsItemAmount = cardElementText('sports-item-balence-two');
                  const secondSportsBalence = cardElementText('total-price');
                  const secondSportsItemTotal = cardElementText('Total');
                  const secondSportsTotalAmount = secondSportsItemAmount + secondSportsBalence;
                  setTextAmount('total-price', secondSportsTotalAmount);
                  const itemTotal = secondSportsItemAmount + secondSportsItemTotal;
                  setTextAmount('Total', itemTotal);
                  itemNames('fully jursy set');

});
// spots wears third cads 
document.getElementById('sports-third-card').addEventListener('click', function () {
                  const thirdSportsItemAmount = cardElementText('sports-item-balence-three');
                  const thirdSportsBalence = cardElementText('total-price');
                  const thirdSportsItemTotal = cardElementText('Total');
                  const thirdSportsTotalAmount = thirdSportsItemAmount + thirdSportsBalence;
                  setTextAmount('total-price', thirdSportsTotalAmount);
                  const itemTotal = thirdSportsItemAmount + thirdSportsItemTotal;
                  setTextAmount('Total', itemTotal);
                  itemNames('sports cates set')

});





 


