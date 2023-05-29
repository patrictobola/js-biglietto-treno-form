console.log('JS OK')

// Definiamo le variabili necessarie allo svolgimento della traccia
// Variabili nel form 
const userName = document.getElementById('userName');
const age = document.getElementById('age');


// Variabili nella table
const passengerName = document.getElementById('passengerName')
const offer = document.getElementById('offer')
const cab = document.getElementById('cab');
const ticketNumber = document.getElementById('ticketNumber');
const ticketCost = document.getElementById('ticketCost');

// Variabili per calcolare il costo del biglietto
const yourAge = document.getElementById('age');
const kmSelected = parseInt(document.getElementById('kmSelected').value);
const pricePerKm = 0.21;
// const under18 = 18;
// const over65 = 65;
const discount = null;
let errorMessage = 'Inserisci il numero di km da effettuare!'

console.log(pricePerKm)

let finalPrice = null;

// Quì mettiamo il nome e cognome dell'utente nella tabella di acquisto del biglietto
if (userName.value !== '') passengerName.innerText = userName.value;

// Quì printiamo nella tabella il tipo di offerta applicata 
if (age.value === 'minorenne') {
    offer.innerText = 'Under 18'
} else if (age.value === 'over65') {
    offer.innerText = 'Over 65'
} else {
    offer.innerText = 'Standard'
}

// Qui printiamo il costo del biglietto
finalPrice = kmSelected * pricePerKm;
if (age.value === 'minorenne') {
    finalPrice *= 0.8; //Sconto 20%
} else if (age.value === 'over65') {
    finalPrice *= 0.6;  //Sconto 40%
}
ticketCost.innerText = finalPrice.toFixed(2) + '€';
console.log(userName.value, kmSelected, finalPrice)





// // Calcoliamo il prezzo al km 
// let finalPrice = 0;
// if (isNaN(kms) || kms <= 0) {
//     alert(errorMessage);
// }   else {
//     const age = parseInt(prompt(`Quanti anni hai?`, 20).trim());
//     // Verifichiamo che l'utente ha messo un'età plausibile 
//     if (isNaN(age) || (age <= 0 || age >= 150)) {
//         alert(errorMessage = `Inserisci un'età valida, pls!`)
//     }   else {

//         finalPrice = kms * pricePerKm;

//         // Vediamo se possiamo applicare o meno uno sconto e informiamo l'utente di un eventuale sconto
//         if ((age > over65) && !(age >= 150)) {
//             discountApplied.innerText = 
//             `Il prezzo del biglietto era di: ${finalPrice.toFixed(2)}€
//             Abbiamo applicato uno sconto del ${discount65}%
//             Pari a: ${(finalPrice * discount65 / 100).toFixed(2)}€`;
        
//             finalPrice = finalPrice - (finalPrice * discount65 / 100);
//         }   else if ((age < under18) && !(age <= 0)) {
//             discountApplied.innerText = 
//             `Il prezzo del biglietto era di: ${finalPrice.toFixed(2)}€
//             Abbiamo applicato uno sconto del ${discount18}%
//             Pari a: ${(finalPrice * discount18 / 100).toFixed(2)}€`;
        
//             finalPrice = finalPrice - (finalPrice * discount18 / 100);
//         }
        
//         ticketPlaceholder.innerText = `Il prezzo del tuo biglietto è: ${finalPrice.toFixed(2)}€`
//         yourAge.innerText = `Hai ${age} anni!`;
//         kmSelected.innerText = `Hai selezionato ${kms} kilometri.`
        
        
//         console.log(finalPrice, age, kms)
//     }
// }