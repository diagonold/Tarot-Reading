import axios from "axios";
import {elements} from "./views/base";
import * as modeView from "./views/modeView";
import Card from "./models/Card";
import * as cardView from "./views/cardView";
import Result from "./models/Result";
import * as resultView from "./views/resultView";
// This will store the state of the user in the app
var state = {
    // stage 0 is single spread
    // stage 1 is triple spread
    // stage -1 is landing page
    // stage 2 is result page
    chooseNumCards: -1,

    // cardData is an array of object
    // this object is the data of each card


};

// We need this in the initial
state.cards = new Card();
state.cardShown = false;


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
    modeView.changeView(state.stage);


    // change the title
    modeView.renderStage(state.stage);
});

elements.tripleSpread.addEventListener("click", event =>{


    // initialize card Arrays
    init();

    // assign the reading mode in the state 
    state.stage = 1;

    // set the number of card allowed to be chosen
    state.chooseNumCards = 3;

    // show the UI of the pressed state
    modeView.changeView(state.stage);

    // change the title 
    modeView.renderStage(state.stage);

    // choosing card stage

});

const init = () => {

    state.stage = -1;
    state.chosenCardPositions = [];
    state.chosenCardValues =  [];


    // clear the previous reading results
    resultView.clearReading();
    
    // render cards and listeners
    if(!state.cardShown){
        cardView.showCards();
        state.cardShown = true;
        
        // added here so that only one listener is created
        createCardEventListeners(state.cardShown);
    }
    
    // close all cards
    cardView.closeAllCardPanel();
    
    // we need a shuffle every time we choose a new reading mode
    state.cards.shuffle();


    
}


/*************** Card controller*********/

var createCardEventListeners = async (cardShown) => {
    if(cardShown){
        // create event listeners
        listenCardEvents();
    }
}

var removeCardEventListeners = () => {
    state.cards.cardRange.forEach( val => {
        var el = document.getElementById(`card__${val}`);
        if(el){
            el.removeEventListener('click', event => {
                console.log(`card event ${val} listeners removed`);
            });
        }


    })
}

var listenCardEvents = async() => {
    // Checks each card if it is clicked
    state.cards.cardRange.forEach( val => {
        document.getElementById(`card__${val}`).addEventListener('click', event => {

            // only allow card choosing if does not exceed choosecards
            if( state.chosenCardPositions.length < state.chooseNumCards ){

                // add the val to cards chosen
                // this seems redundant
                state.chosenCardPositions.push(val);

                // assign card values based on cardPosition
                var cardValue = state.cards.cardValues[val];
                state.chosenCardValues.push(cardValue);

                // change view of that card
                cardView.changeCardPanel(val);
            }
            
            if (state.chosenCardPositions.length === state.chooseNumCards && state.stage !== 2){
                
                // remove the choices from the cards and event listeners
                cardView.removeAllCards();
                removeCardEventListeners();
                state.cardShown = false;

                // going to result state
                state.stage = 2
                modeView.renderStage(state.stage);
                
                // get the results of the cards
                controlResult(state.chooseNumCards);

                // show the results of the cards
                // here we pass the chooseNumCards to the view

            }
        })   
    });
}





/**********************Result Controller**************/
// We need to consider 2 result controller,
// single reading and triple reading


const controlResult = async (numCards) => {

    state.result = new Result(state.chosenCardValues);

    try{
        await state.result.getResults();

        if(state.chooseNumCards ===1 ){
            console.log(state.result.cardsData[0]);
            resultView.showSingleReading(state.result.cardsData[0]);  
        }
        
        if(state.chooseNumCards === 3){
            console.log(state.result.cardsData);
            resultView.showThreeReading(...state.result.cardsData);  

        }


    } catch(error){
        console.log('Result display error');
    }


    // if(numCards === 1){
    //     console.log(`rererere ${state.cardsData} nothing
    //     `);

    //     // takes in the available data and show it to user
    //     resultView.showSingleReading(state.cardsData);
    // }else if( numCards === 3){
    //     resultView.showThreeReading(state.cardsData);
    // }
   
}


