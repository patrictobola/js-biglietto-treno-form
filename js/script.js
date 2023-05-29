console.log('JS OK')

// Definiamo le variabili necessarie allo svolgimento della traccia
// Variabili nel form 
const userName = document.getElementById('userName');
const age = document.getElementById('age');
const button = document.getElementById('button')


// Variabili nella table
const table = document.getElementById('table')
const passengerName = document.getElementById('passengerName')
const offer = document.getElementById('offer')
const cab = document.getElementById('cab');
const ticketNumberPlaceholder = document.getElementById('ticketNumber');
const ticketCost = document.getElementById('ticketCost');

// Variabili per calcolare il costo del biglietto
const yourAge = document.getElementById('age');
const pricePerKm = 0.21;
let errorMessage = 'Inserisci il numero di km da effettuare!'

console.log(pricePerKm)

let finalPrice = null;

button.addEventListener('click', function(){
    // Il numero di km selezionati l'ho messi all'interno del addEventListener perché altrimenti non avremmo potuto aggiornare il prezzo del biglietto ad ogni click in caso di cambio di km
    const kmSelected = parseInt(document.getElementById('kmSelected').value);

    if (userName.value === '' || isNaN(kmSelected) || kmSelected <= 0) {
        alert('Inserisci dei dati validi')
    } else {
        table.className = 'd-table';
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
        


        random = Math.random();
        // Quì generiamo il numero della carrozza 
        let maxCab = 5;
        const cabNumber = Math.floor(random * maxCab) + 1;
        cab.innerText = cabNumber;


        // Quì generiamo il numero del biglietto
        let min = 10000;
        let max = 99999;
        const ticketNumber = Math.floor(random * (max + 1 - min)) + min;
        ticketNumberPlaceholder.innerText = ticketNumber;
        
        console.log(userName.value, kmSelected, finalPrice)

    }

})





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
