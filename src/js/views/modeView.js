import {elements}  from "./base";

export const renderStage = (stage) => {
    var title;

    if (stage === -1){
        title = "Tarot Reading";
    } else if ( stage === 0){
        title = "Choose 1 card";
    }else if ( stage === 1){
        title = "Choose your Past, Present and Future card";
    }

    elements.titlePage.innerHTML = title;
}

export const changeView = (readingMode) => {    
    // initializes them to be closed after every press
    elements.singleSpread.classList.add("closed");
    elements.tripleSpread.classList.add("closed");

    if (readingMode === 0){
        elements.singleSpread.classList.toggle("closed");
    } else if (readingMode === 1){
        elements.tripleSpread.classList.toggle("closed");
    }

    // Change the value of top panel

    // remove the landing panel
}