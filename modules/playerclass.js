export default class PlayerInfo {
    constructor(name) {
        this._name = name;
        this._finalHandInfo = {
            suits: {
                hearts: 0,
                diamonds: 0,
                clubs: 0,
                spades: 0
            },
            ranks: {
                Aces: 0,
                Twos: 0,
                Threes: 0,
                Fours: 0,
                Fives: 0,
                Sixes: 0,
                Sevens: 0,
                Eights: 0,
                Nines: 0,
                Tens: 0,
                Jacks: 0,
                Queens: 0,
                Kings: 0
            }
        }
    }
    get name() {
        return this._name;
    }

    get finalHandInfo() {
        return this._finalHandInfo;
    }
};

//const player1 = new PlayerInfo('Player 1');
//const compPlayer = new PlayerInfo('Computer');

//console.log(player1.name);
//console.log(player1.finalHandInfo);

//console.log(compPlayer.name);
//console.log(compPlayer.finalHandInfo);

//module.exports = { PlayerInfo };