const hearts = ['AH','2H','3H','4H','5H','6H','7H','8H','9H','10H','JH','QH','KH'];
const diamonds = ['AD','2D','3D','4D','5D','6D','7D','8D','9D','10D','JD','QD','KD'];
const clubs = ['AC','2C','3C','4C','5C','6C','7C','8C','9C','10C','JC','QC','KC'];
const spades = ['AS','2S','3S','4S','5S','6S','7S','8S','9S','10S','JS','QS','KS'];
const pack = hearts.concat(diamonds, clubs, spades);
const dealCardButton = document.getElementById('deal-card');
const cardResult = document.getElementById('card1');
//const $cardDiv = [$('card1'), $('card2')];
let newPack = [];
let card1 = '';
let card2 = '';
let hand = '';

function getRandomCard() {
    card1 = pack[(Math.floor(Math.random() * pack.length))];
    const cardIndex = pack.indexOf(card1);
    newPack = pack.filter(val => val !== card1); //removes card1 from pack so it cannot be dealt again
    card2 = newPack[(Math.floor(Math.random() * newPack.length))]; //gets 2nd card from reduced pack size
    hand = `${card1} ${card2}`;
    console.log(hand);
}

dealCardButton.addEventListener('click', () => {
    console.log('click');
    getRandomCard(pack);
    cardResult.innerText = hand;
})

//render card hand in html


//const renderCard = (getRandomCard) => {
//    const cardImgSrc = `PNG/${card1}.png`;
//    let cardContent = `<img src=${cardImgSrc} />`;
//    $cardDiv.append(cardContent);
//}