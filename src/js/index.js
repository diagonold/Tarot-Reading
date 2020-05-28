import axios from "axios";



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