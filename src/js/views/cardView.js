import Cards from "../models/Card";
import {elements} from './base';

var cards = new Cards();
// change the card value from closed to open
export const changeCardPanel = cardNumber => {
    document.getElementById(`card__${cardNumber}`).classList.toggle("closed");

    document.getElementById(`card__${cardNumber}`).classList.toggle("open");

}

export const closeAllCardPanel = () => {
    cards.cardRange.forEach( value => {
        document.getElementById(`card__${value}`).classList.add('closed');
        document.getElementById(`card__${value}`).classList.remove('open');

    });
}

// Add all the cards if the stage 2 has not yet been reached
export const showCards = () => {

    const markup = `
        <div id="card__list">
            <div class="row">
                <div class="col-md-2 cardPanel closed"  id="card__0">1</div>
                <div class="col-md-2 cardPanel closed" id="card__1">2</div>
                <div class="col-md-2 cardPanel closed" id="card__2">3</div>
                <div class="col-md-2 cardPanel closed" id="card__3">4</div>
                <div class="col-md-2 cardPanel closed" id="card__4">5</div>
                <div class="col-md-2 cardPanel closed" id="card__5">6</div>
            </div>
            <div class="row">
                <div class="col-md-2 cardPanel closed" id="card__6">7</div>
                <div class="col-md-2 cardPanel closed" id="card__7">8</div>
                <div class="col-md-2 cardPanel closed" id="card__8">9</div>
                <div class="col-md-2 cardPanel closed" id="card__9">10</div>
                <div class="col-md-2 cardPanel closed" id="card__10">11</div>
                <div class="col-md-2 cardPanel closed" id="card__11">12</div>
            </div>
            <div class="row">
                <div class="col-md-2 cardPanel closed" id="card__12">13</div>
                <div class="col-md-2 cardPanel closed" id="card__13">14</div>
                <div class="col-md-2 cardPanel closed" id="card__14">15</div>
                <div class="col-md-2 cardPanel closed" id="card__15">16</div>
                <div class="col-md-2 cardPanel closed" id="card__16">17</div>
                <div class="col-md-2 cardPanel closed" id="card__17">18</div>
            </div>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-2 cardPanel closed" id="card__18">19</div>
                <div class="col-md-2 cardPanel closed" id="card__19">20</div>
                <div class="col-md-2 cardPanel closed" id="card__20">21</div>
                <div class="col-md-2 cardPanel closed" id="card__21">22</div>
                <div class="col-md-2"></div>

            </div>
        </div> 
    `;

    elements.cardPanel.insertAdjacentHTML('beforeend', markup);


}

// Remove all cards after all cards are chosen
// implement logic in index
export const removeAllCards = () => {
    var el =document.getElementById("card__list");
    if(el) el.parentElement.removeChild(el);
}
