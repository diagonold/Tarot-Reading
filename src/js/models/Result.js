import axios from 'axios';
export default class Result {

    constructor( chosenCardValues){
        // array of chosen card values
        this.chosenCardValues = chosenCardValues;
        this.cardsData = [];
    }

    // takes all the results and store it into cardAnswers
    async getResults(){


        console.log('here');
        console.log(this.chosenCardValues);
        this.chosenCardValues.forEach((value) =>  {
            this.getResult(value);
        });

        return this.cardsData;
    }

    async getResult(value){

        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const num = this.correctNum(value);

        try{
            const cardData = await axios.get(`${proxy}https://rws-cards-api.herokuapp.com/api/v1/cards/ar${num}`);

            this.cardsData.push(cardData);
            console.log(cardData);
        }catch(error){
            console.log(`error in fetching data`);
            console.log(error);
        }
    }

    // if a single digit, need to add a 0 in front
    correctNum(value){
        var num;

        console.log(`value is ${value}`);
        if( value.legnth === 1 ){
            num = `0${value}`;
        } else{
            num = value;
        }

        return num;
    }

}



/*
const getCards = async () => {

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    try{
        const cards = await axios.get(`${proxy}https://rws-cards-api.herokuapp.com/api/v1/cards/wakn`);
        console.log(cards);

    }catch(error){
        console.log(`error in fetching data`);
        console.log(error);
    }
}

getCards();
*/