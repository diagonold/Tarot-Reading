import name from "./test";
import axios from "axios";



const getCards = async () => {
    try{
        const cards = await axios.get(`https://cors-anywhere.herokuapp.com/https://rws-cards-api.herokuapp.com/api/v1/cards/wakn`);
        console.log(cards);

    }catch(error){
        console.log(error);
    }
}

getCards();