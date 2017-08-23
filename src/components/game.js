import React from 'react';
import {connect} from 'react-redux';
import {addGuess, startNewGame} from '../actions';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export class Game extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1,
        };
    }*/

    newGame() {
        this.props.dispatch(startNewGame());
    }

    guess(guess) {
        guess = parseInt(guess, 10);
        /*if (isNaN(guess)) {
            this.props.dispatch(addFeedback('Please enter a valid number'));
            this.setState({
                feedback: 'Please enter a valid number'
            });
            return;
        }

        const difference = Math.abs(guess - this.props.correctAnswer);

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

        this.props.dispatch(addFeedback(feedback));*/
        this.props.dispatch(addGuess(guess));
       /* this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        });*/
    }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    guesses: state.guesses,
    feedback: state.feedback,
    correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);