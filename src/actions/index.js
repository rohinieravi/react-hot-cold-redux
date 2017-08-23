export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
    type: ADD_GUESS,
    guess
});

export const CHANGE_INFOMODAL = 'CHANGE_INFOMODAL';
export const changeInfoModal = () => ({
    type: CHANGE_INFOMODAL
});

export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () => ({
	type: START_NEW_GAME
});