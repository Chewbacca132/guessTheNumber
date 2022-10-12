import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import Nav from '../Nav';

import random from '../../random';

export default function Play({min, max, guessLimit}){
    const [number, _setNumber] = useState(random(min, max));
    const [input, setInput] = useState('');
    const [guess, setGuess] = useState(NaN);
    const [guessCount, setGuessCount] = useState(0);

    const limitGuesses = typeof guessLimit === 'number';

    const check = function(){
        const guess_ = parseInt(input);
        if (guess_ === number){
            Nav.navigate('GameOver', {message : winMessage(number)});
        }
        if (limitGuesses && guessCount >= guessLimit - 1)
        {
            Nav.navigate('GameOver', {message : guessLimitReachedMessage(number)});
        }
        setGuess(guess_);
        setGuessCount(guessCount + 1);
        setInput('');
    }
    
    return (
        <View>
            <Text>Guess a number from {min} to {max}</Text>
            <TextInput
                style = {styles.input}
                value = {input}
                onChangeText = {setInput}
                keyboardType = 'numeric'
            />
            <Button
                title = 'Guess'
                onPress = {check}
            />
            <Text>{message(guess, number)}</Text>
            <Text>
                {
                    limitGuesses ? (
                        'You have ' + (guessLimit - guessCount) +
                        ' guesses remaining'
                    ) : ''
                }
            </Text>
        </View>
    );
}

function message(guess, target, guessCount){
    if (isNaN(guess)){
        return '';
    }
    const compare = guess < target ? 'greater' : 'less';
    return 'The number is ' + compare + ' than ' + guess;
}

function winMessage(number){
    return `You guessed the number ${number}, congrats!`;
}

function guessLimitReachedMessage(number){
    return `Sorry, you have reached the guess limit. The number was ${number}.`;
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})