import axios from "axios";
import {elements} from "./views/base";
import * as Mode from "./views/modeView";
import Card from "./models/Card";
import * as cardView from "./views/cardView";
import Result from "./models/Result";
// This will store the state of the user in the app
var state = {
    // stage 0 is single spread
    // stage 1 is triple spread
    // stage -1 is landing page
    chooseNumCards: -1,


};

// We need this in the initial
state.cards = new Card();


/*States of the application 
    1. User choose the reading mode
    2. User can choose the cards
    3. Result of cards is show to the user

    Extra Features:
    1. Back button
        user should be allowed to go back to previous state


*/

/********** Mode controller *************/
// Have 2 separate event listeners for the reading mode
elements.singleSpread.addEventListener("click", event =>{

    // initialize card Arrays
    init();

    // assign the reading mode in the state
    state.stage = 0;

    // set the number of card allowed to be chosen
    state.chooseNumCards = 1;

    // show the UI of the pressed state
    Mode.changeView(state.stage);


    // change the title
    Mode.renderStage(state.stage);
});

elements.tripleSpread.addEventListener("click", event =>{


    // initialize card Arrays
    init();

    // assign the reading mode in the state 
    state.stage = 1;

    // set the number of card allowed to be chosen
    state.chooseNumCards = 3;

    // show the UI of the pressed state
    Mode.changeView(state.stage);

    // change the title 
    Mode.renderStage(state.stage);

});

const init = () => {

    state.stage = -1;
    state.chosenCardPositions = [];
    state.chosenCardValues =  [];

    // close all cards
    cardView.closeAllCardPanel();
    
    // we need a shuffle every time we choose a new reading mode
    state.cards.shuffle();

    
}


/*************** Card controller*********/


// Depends on the game spread, we limit the number of cards to be chosen

// Checks each card if it is clicked
state.cards.cardRange.forEach( val => {
    document.getElementById(`card__${val}`).addEventListener('click', event => {

        
        // only allow card choosing if does not exceed choosecards
        if( state.chosenCardPositions.length < state.chooseNumCards){

            // add the val to cards chosen
            // this seems redundant
            state.chosenCardPositions.push(val);

            // assign card values based on cardPosition
            var cardValue = state.cards.cardValues[val];
            state.chosenCardValues.push(cardValue);

            // change view of that card
            cardView.changeCardPanel(val);

            console.log(state.chosenCardValues);
        }
        else if (state.chosenCardPositions.length === state.chooseNumCards){
        
            console.log('finish choosing');
            controlResult();
        }
    })
});



/**********************Result Controller**************/

const controlResult = async () => {

    state.result = new Result(state.chosenCardValues);
    state.cardsData = await state.result.getResults();

    console.log(state.cardsData);

}


