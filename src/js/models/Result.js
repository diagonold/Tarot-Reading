import axios from 'axios';
import { otherData } from '../../../dist/data/otherData';
export default class Result {

    constructor( chosenCardValues ){
        // array of chosen card values
        this.chosenCardValues = chosenCardValues;
        this.cardsData = [];
    
    }

    // takes all the results and store it into cardAnswers
    async getResults(){
        for(var i = 0; i<this.chosenCardValues.length; i++){
            var data = await this.getResult(this.chosenCardValues[i]);
            this.cardsData.push(data);
        }
    }

    // get individual results
    async getResult(value){
        var cardData;
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const num = this.correctNum(value);

        try{
            const jsonRes = await axios.get(`${proxy}https://rws-cards-api.herokuapp.com/api/v1/cards/ar${num}`);

            // we need to parse this data to only grab the necessary data
            cardData = this.parseData(jsonRes);
            // pushing the data into our array
            //console.log(cardData);

            // this.cardsData.push(cardData);

            return cardData;
            // this.cardsData.push(cardData);
            //console.log(this.cardsData);

            
        }catch(error){
            console.log(`error in fetching data`);
            console.log(error);

        }

    }

    // if a single digit, need to add a 0 in front
    correctNum(value){
        var num;
        console.log(value);
        if( value.toString().length === 1 ){
            num = `0${value}`;
        } else{
            num = value;
        }

        return num;
    }

    parseData(jsonData){
        var cardData = {};

        cardData.name = jsonData.data.card.name;
        cardData.nameShort = jsonData.data.card.name_short;
        cardData.type = jsonData.data.card.type;   // type is major
        cardData.value = jsonData.data.card.value;      // 0-21
        cardData.meaningUp = jsonData.data.card.meaning_up;     
        cardData.meaningRev = jsonData.data.card.meaning_rev;

        // grabbing data from our personal json data
        cardData.summary = otherData.cards[cardData.value].summary;

        return cardData;
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