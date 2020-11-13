const HeartsObjectFactory = (cardStr) => {
    const suit = cardStr.slice(-1); 
    return {
        suit: suit,
        id: (cardStr) => {
        if (cardStr.length === 3) {
            return cardStr.slice(0,1);
        } else {
            return cardStr.slice(0,0)
        }
    },
        value: (cardStr) => {
            if (id === 'A') {
                return 14;
            } else if (id === 'K') {
                return 13;
            } else if (id === 'Q') {
                return 12;
            } else if (id === 'J') {
                return 11;
            } else {
                return parseInt(id);
            }
        },
    };
}
