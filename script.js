const hearts = ['AH','2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH'];
const diamonds = ['AD','2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KD'];
const clubs = ['AC','2C','3C','4C','5C','6C','7C','8C','9C','10C','JC','QC','KC'];
const spades = ['AS','2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS'];
const players = 2;
const pack = hearts.concat(diamonds, clubs, spades);
const dealCardButton = document.getElementById('deal-card');
const cardResult = document.getElementById('card1');
//const $cardDiv = [$('card1'), $('card2')];
let newPack = [];
let playerCard1 = '';
let playerCard2 = '';
let compCard1 = '';
let compCard2 = '';
let playerHand = '';

function getRandomCard() {
    playerCard1 = pack[(Math.floor(Math.random() * pack.length))];
    newPack = pack.filter(val => val !== playerCard1); //removes card1 from pack so it cannot be dealt again
    compCard1 = newPack[(Math.floor(Math.random() * newPack.length))]
    newPack = newPack.filter(val => val !== compCard1);
    playerCard2 = newPack[(Math.floor(Math.random() * newPack.length))]; //gets 2nd card from reduced pack size
    newPack = newPack.filter(val => val !== playerCard2); //removes card2 from pack so it cannot be dealt again
    compCard2 = newPack[(Math.floor(Math.random() * newPack.length))]; 
    newPack = newPack.filter(val => val !== compCard2); 
    console.log(newPack);
    playerHand = `${playerCard1} ${playerCard2}`;
    compHand = `${compCard1} ${compCard2}`;
    console.log(playerHand);
    console.log(compHand);
    const card1Url = `PNG/${playerCard1}.png`;
    const card2Url = `PNG/${playerCard2}.png`;
    document.getElementById('card1Img').src = card1Url;
    document.getElementById('card2Img').src = card2Url;
    console.log(dealCardButton.value);
}

const dealFlop = () => {
    if (newPack.length === (52 - players * 2)) {
        const flop1 = newPack[(Math.floor(Math.random() * newPack.length))];
        newPack = newPack.filter(val => val !== flop1);
        const flop2 = newPack[(Math.floor(Math.random() * newPack.length))];
        newPack = newPack.filter(val => val !== flop2);
        const flop3 = newPack[(Math.floor(Math.random() * newPack.length))];
        newPack = newPack.filter(val => val !== flop3);
        const flop1Url = `PNG/${flop1}.png`;
        const flop2Url = `PNG/${flop2}.png`;
        const flop3Url = `PNG/${flop3}.png`;
        //document.getElementById('flop1Img').setAttribute("style", "height: 200px; width: 140px;");
        //document.getElementById('flop2Img').setAttribute("style", "height: 200px; width: 140px;");
        //document.getElementById('flop3Img').setAttribute("style", "height: 200px; width: 140px;");
        document.getElementById('flop1Img').src = flop1Url;
        document.getElementById('flop2Img').src = flop2Url;
        document.getElementById('flop3Img').src = flop3Url;
        console.log(flop1, flop2, flop3);
    }
}

const dealTurn = () => {
    const turn = newPack[(Math.floor(Math.random() * newPack.length))];
    newPack = newPack.filter(val => val !== turn);
    const turnUrl = `PNG/${turn}.png`;
    document.getElementById('turnImg').setAttribute("style", "height: 200px; width: 140px;");
    document.getElementById('turnImg').src = turnUrl;
}

const dealRiver = () => {
    const river = newPack[(Math.floor(Math.random() * newPack.length))];
    newPack = newPack.filter(val => val !== river);
    const riverUrl = `PNG/${river}.png`;
    document.getElementById('riverImg').setAttribute("style", "height: 200px; width: 140px;");
    document.getElementById('riverImg').src = riverUrl;
}

const revealCompCards = () => {
    const compCard1Url = `PNG/${compCard1}.png`;
    const compCard2Url = `PNG/${compCard2}.png`;
    document.getElementById('compCard1Img').src = compCard1Url;
    document.getElementById('compCard2Img').src = compCard2Url;
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
        console.log(newPack);
        dealCardButton.value = 'Reveal!';
    } else if (dealCardButton.value === 'Reveal!') {
        revealCompCards();
        dealCardButton.value = 'New Game!';
        dealCardButton.setAttribute("style", "background-color: red;")
    } else if (dealCardButton.value === 'New Game!') {
        location.reload();
    }
})