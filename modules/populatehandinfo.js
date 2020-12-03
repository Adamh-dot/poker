/* Function to put all hand information into object to analyse for hands later on*/
const populateHandInfo = (sevenCardHand, playerObject) => {
    const handSplit = sevenCardHand.join("").split("");
    console.log(handSplit);
    const handSuits = []; //need to try to get these into a global object so can run multiple hands
    const handRanks = []; //need to try to get these into a global object so can run multiple hands
    for (let i=0; i<handSplit.length; i++){
        if (i % 2) {
            handSuits.push(handSplit[i]);
        } else {
            handRanks.push(handSplit[i])
        }
    };
    console.log(handRanks);
    handRanks.forEach(card => {
        switch(card) {
            case 'A':
                //finalHandInfo.ranks.Aces++;
                playerObject.finalHandInfo.ranks.Aces++;
            break;
            case '2':
                //finalHandInfo.ranks.Twos++;
                playerObject.finalHandInfo.ranks.Twos++;
            break;
            case '3':
                //finalHandInfo.ranks.Threes++;
                playerObject.finalHandInfo.ranks.Threes++;
            break;
            case '4':
                //finalHandInfo.ranks.Fours++;
                playerObject.finalHandInfo.ranks.Fours++;
            break;
            case '5':
                //finalHandInfo.ranks.Fives++;
                playerObject.finalHandInfo.ranks.Fives++;
            break;
            case '6':
                //finalHandInfo.ranks.Sixes++;
                playerObject.finalHandInfo.ranks.Sixes++;
            break;
            case '7':
                //finalHandInfo.ranks.Sevens++;
                playerObject.finalHandInfo.ranks.Sevens++;
            break;
            case '8':
                //finalHandInfo.ranks.Eights++;
                playerObject.finalHandInfo.ranks.Eights++;
            break;
            case '9':
                //finalHandInfo.ranks.Nines++;
                playerObject.finalHandInfo.ranks.Nines++;
            break;
            case 'T':
                //finalHandInfo.ranks.Tens++;
                playerObject.finalHandInfo.ranks.Tens++;
            break;
            case 'J':
                //finalHandInfo.ranks.Jacks++;
                playerObject.finalHandInfo.ranks.Jacks++;
            break;
            case 'Q':
                //finalHandInfo.ranks.Queens++;
                playerObject.finalHandInfo.ranks.Queens++;
            break;
            case 'K':
                //finalHandInfo.ranks.Kings++;
                playerObject.finalHandInfo.ranks.Kings++;
            break;
        }
    })
    handSuits.forEach(card => {
        switch(card) {
            case 'H':
                playerObject.finalHandInfo.suits.hearts++;
            break;
            case 'D':
                playerObject.finalHandInfo.suits.diamonds++
            break;
            case 'S':
                playerObject.finalHandInfo.suits.spades++;
            break;
            case 'C':
                playerObject.finalHandInfo.suits.clubs++
            break;
        }
    })
}

export default populateHandInfo;