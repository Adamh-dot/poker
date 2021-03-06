import PlayerInfo from './modules/playerclass.js';
import populateHandInfo from './modules/populatehandinfo.js';

const player1 = new PlayerInfo('Adam');
const compPlayer = new PlayerInfo('Computer');

const playerArray = [player1, compPlayer];
console.log(playerArray);


const hearts = ['AH','2H','3H','4H','5H','6H','7H','8H','9H','TH','JH','QH','KH'];
const diamonds = ['AD','2D','3D','4D','5D','6D','7D','8D','9D','TD','JD','QD','KD'];
const clubs = ['AC','2C','3C','4C','5C','6C','7C','8C','9C','TC','JC','QC','KC'];
const spades = ['AS','2S','3S','4S','5S','6S','7S','8S','9S','TS','JS','QS','KS'];
const players = 2;
const pack = hearts.concat(diamonds, clubs, spades);
const dealCardButton = document.getElementById('deal-card');
const cardResult = document.getElementById('card1');
let newPack = [];
let dealtCards = [];
let playerCard1 = '';
let playerCard2 = '';
let compCard1 = '';
let compCard2 = '';
let playerHand = [];
let compHand = [];
let flop =[];

function getRandomCard() {
    playerCard1 = pack[(Math.floor(Math.random() * pack.length))]; //selects player 1's first card
    dealtCards.push(playerCard1); //adds first card to 
    newPack = pack.filter(val => val !== playerCard1); //removes card1 from pack so it cannot be dealt again
    compCard1 = newPack[(Math.floor(Math.random() * newPack.length))] //selects computer's first card
    dealtCards.push(compCard1);
    newPack = newPack.filter(val => val !== compCard1);
    playerCard2 = newPack[(Math.floor(Math.random() * newPack.length))]; //gets 2nd card from reduced pack size
    dealtCards.push(playerCard2);
    newPack = newPack.filter(val => val !== playerCard2); //removes card2 from pack so it cannot be dealt again
    compCard2 = newPack[(Math.floor(Math.random() * newPack.length))];
    dealtCards.push(compCard2); 
    newPack = newPack.filter(val => val !== compCard2); 
    playerHand.push(playerCard1, playerCard2);
    compHand.push(compCard1, compCard2);
    console.log(playerHand);
    console.log(compHand);
    const card1Url = `PNG/${playerCard1}.png`;
    const card2Url = `PNG/${playerCard2}.png`;
    document.getElementById('card1Img').src = card1Url;
    document.getElementById('card2Img').src = card2Url;
}

const dealFlop = () => {
    if (newPack.length === (52 - players * 2)) {
        const flop1 = newPack[(Math.floor(Math.random() * newPack.length))];
        newPack = newPack.filter(val => val !== flop1);
        const flop2 = newPack[(Math.floor(Math.random() * newPack.length))];
        newPack = newPack.filter(val => val !== flop2);
        const flop3 = newPack[(Math.floor(Math.random() * newPack.length))];
        newPack = newPack.filter(val => val !== flop3);
        dealtCards.push(flop1, flop2, flop3);
        const flop1Url = `PNG/${flop1}.png`;
        const flop2Url = `PNG/${flop2}.png`;
        const flop3Url = `PNG/${flop3}.png`;
        document.getElementById('flop1Img').src = flop1Url;
        document.getElementById('flop2Img').src = flop2Url;
        document.getElementById('flop3Img').src = flop3Url;
        flop.push(flop1, flop2, flop3);
        console.log(flop);
        playerHand = playerHand.concat(flop);
        compHand = compHand.concat(flop);
        console.log(playerHand);
        console.log(compHand);
    }
}

const dealTurn = () => {
    const turn = newPack[(Math.floor(Math.random() * newPack.length))];
    newPack = newPack.filter(val => val !== turn);
    dealtCards.push(turn);
    const turnUrl = `PNG/${turn}.png`;
    document.getElementById('turnImg').setAttribute("style", "height: 200px; width: 140px;");
    document.getElementById('turnImg').src = turnUrl;
    playerHand.push(turn);
    compHand.push(turn);
    console.log(turn);
}

const dealRiver = () => {
    const river = newPack[(Math.floor(Math.random() * newPack.length))];
    newPack = newPack.filter(val => val !== river);
    dealtCards.push(river);
    const riverUrl = `PNG/${river}.png`;
    document.getElementById('riverImg').setAttribute("style", "height: 200px; width: 140px;");
    document.getElementById('riverImg').src = riverUrl;
    playerHand.push(river);
    compHand.push(river);
    console.log(river);
    console.log(newPack);
}

const revealCompCards = () => {
    const compCard1Url = `PNG/${compCard1}.png`;
    const compCard2Url = `PNG/${compCard2}.png`;
    document.getElementById('compCard1Img').src = compCard1Url;
    document.getElementById('compCard2Img').src = compCard2Url;
}

/* function checks if hand has a pair (or three of a kind) by looking at finalHandInfo.ranks object for a property value of 2 or 3 */
const handHasPair = (finalHandInfo) => {
    const pairs = [];
    const threes = [];
    for (const prop in finalHandInfo.ranks) {
        if (finalHandInfo.ranks[prop] === 2) {
            pairs.push(prop);
        } else if (finalHandInfo.ranks[prop] === 3) {
            threes.push(prop);
        }
    }
    if(pairs.length === 1 && threes.length === 1) {
        console.log(`You have a FULL HOUSE: ${threes[0]} over ${pairs[0]}!`); //@ADAM - need to protect for scenario of two lots of three of a kind or three of a kind and two pairs??
        document.getElementById('handResult').innerHTML = `You have a FULL HOUSE: ${threes[0]} over ${pairs[0]}!`;
        document.getElementById("handResult").style.visibility = 'visible';
    } else if (threes.length === 1) {
        console.log(`You have THREE ${threes[0]}!`); //@ADAM - need to protect for scenario of two lots of three of a kind or three of a kind and two pairs??
        document.getElementById('handResult').innerHTML = `You have THREE ${threes[0]}!`;
        document.getElementById("handResult").style.visibility = 'visible';
    } else if (pairs.length === 1) {
        console.log(`You have a PAIR of ${pairs[0]}`);
        document.getElementById('handResult').innerHTML = `You have a PAIR of ${pairs[0]}!`;
        document.getElementById("handResult").style.visibility = 'visible';
    } else if (pairs.length === 2) {
        console.log(`You have TWO PAIRS: ${pairs[0]} and ${pairs[1]}`);
        document.getElementById('handResult').innerHTML = `You have TWO PAIRS: ${pairs[0]} and ${pairs[1]}`;
        document.getElementById("handResult").style.visibility = 'visible';
    }
}

/* function checks if hand has a flush by looking at finalHandInfo.suits object for a property value >=5 */
const handHasFlush = (finalHandInfo) => {
    if(Object.values(finalHandInfo.suits).some(element => element >= 5)) {
        console.log(`You have a FLUSH!`);
        document.getElementById('handResult').innerHTML = `You have a FLUSH!`;
        document.getElementById("handResult").style.visibility = 'visible';
        return true;
    }
}

dealCardButton.addEventListener('click', () => {
    if(dealCardButton.value === 'Deal Hand') {
        getRandomCard(pack);
        dealCardButton.value = 'Flop!';
    } else if (dealCardButton.value === 'Flop!') {
        dealFlop();
        dealCardButton.value = 'Turn!';
    } else if (dealCardButton.value === 'Turn!') {
        dealTurn();
        dealCardButton.value = 'River!';
    } else if (dealCardButton.value === 'River!') {
        dealRiver();
        populateHandInfo(playerHand, player1);
        populateHandInfo(compHand, compPlayer);
        handHasPair(player1.finalHandInfo);
        handHasFlush(player1.finalHandInfo);
        dealCardButton.value = 'Reveal!';
        console.log(player1);
        console.log(compPlayer);
    } else if (dealCardButton.value === 'Reveal!') {
        revealCompCards();
        dealCardButton.value = 'New Game!';
        dealCardButton.setAttribute("style", "background-color: red;")
        //findFlush(playerHand);
        //findFlush(compHand);
    } else if (dealCardButton.value === 'New Game!') {
        location.reload();
    }
});