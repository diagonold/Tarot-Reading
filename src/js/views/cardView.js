import Cards from "../models/Card";

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