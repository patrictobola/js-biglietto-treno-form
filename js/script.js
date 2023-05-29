console.log('JS OK')

// Definiamo le variabili necessarie allo svolgimento della traccia
// Variabili nel form 
const userName = document.getElementById('userName');
const age = document.getElementById('age');
const buyButton = document.getElementById('buyButton')
const resetButton = document.getElementById('resetButton')


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

console.log(pricePerKm)

let finalPrice = null;
// Per resettare i valori negli input 
resetButton.addEventListener('click', function(){
    userName.value = '';
    kmSelected.value = '';
    age.value = 'maggiorenne'
    table.classList.add('d-none');
    table.classList.remove('d-table');
})



// Per stampare il biglietto 
buyButton.addEventListener('click', function(){

    // Il numero di km selezionati l'ho messi all'interno del addEventListener perché altrimenti non avremmo potuto aggiornare il prezzo del biglietto ad ogni click in caso di cambio di km
    const kmSelected = parseInt(document.getElementById('kmSelected').value);

    if (userName.value === '')  {
        alert('Inserisci un nome valido')
    } else if (isNaN(kmSelected) || kmSelected <= 0) {
        alert('Inserisci un kilometraggio valido')
    } else {
        // Facciamo apparire la tabella con il biglietto 
        table.classList.add('d-table');
        table.classList.remove('d-none');

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