console.log('JS OK', Vue)

// Estrapolo il metodo createApp 
const { createApp } = Vue;

// Starto l'app Vue 
const app = createApp({
    data() {
      return {
        price: 0.21,
        age: '',
        kmSelected: '',
        name: '',
        cab: 0,
        ticketNumber: 0,
        offer: '',
        finalPrice: 0,
        display: 'd-none'
      }
    },
    methods: {
        buyTicket () {
        if (this.age !== '' && this.name !== '' && this.kmSelected !== ''){

            this.display = 'd-table'
            
            // Quì printiamo nella tabella il tipo di offerta applicata 
            if (this.age === 'minorenne') this.offer = 'Under 18'
            else if (this.age === 'over65') this.offer = 'Over 65'
            else this.offer = 'Standard'
            // Calcolo il prezzo
            this.finalPrice = this.kmSelected * this.price;
            if (this.age === 'minorenne') {
                finalPrice *= 0.8; //Sconto 20%
            } else if (this.age === 'over65') {
                finalPrice *= 0.6;  //Sconto 40%
            }
            console.log(finalPrice)
            this.ticketNumber = this.randomNumber(1, 5000)
            this.cab = this.randomNumber(1, 5000)
        }
        },
        
        randomNumber (min, max) {
            return Math.floor(Math.random() * max) + min;
        },
        
        resetForm () {
            this.display = 'd-none';
            this.age = '';
            this.kmSelected = '';
            this.name = ''
        }


    }
  })
  app.mount("#app");
