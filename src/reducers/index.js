import {ADD_GUESS, START_NEW_GAME, CHANGE_INFOMODAL} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal:false
};

export const GameReducer = (state=initialState, action) => {
    if (action.type === ADD_GUESS) {
        if(isNaN(action.guess)) {
            return Object.assign({}, state, {
            feedback: 'Please enter a valid number'
            });
        }
        const difference = Math.abs(action.guess - state.correctAnswer);
        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        return Object.assign({}, state, {
            guesses: [...state.guesses, action.guess],
            feedback
        });
        
    }
    else if (action.type === CHANGE_INFOMODAL) {
        return Object.assign({}, state, {
            showInfoModal: !state.showInfoModal
        });
    }
    else if (action.type === START_NEW_GAME) {
        return initialState;
    }
    return state;
};

