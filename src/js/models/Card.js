export default class Cards {
    /**
     * Required functions
     * 1. shuffle
     *                  
     */

    constructor(){
        this.cardRange = Array.from(Array(22).keys());
        this.cardValues;    // 0-21 in random position

    }



    shuffle(){
        this.cardValues = this.cardRange.map( val => val);

        for( var i = this.cardValues.length -1; i > 0 ; i-- ){
            var j = Math.floor(Math.random() * (i  + 1 ));

            // swap elements array[i] and array[j]
            var holder = this.cardValues[i];
            this.cardValues[i] = this.cardValues[j];
            this.cardValues[j] = holder;
        }
    }

}