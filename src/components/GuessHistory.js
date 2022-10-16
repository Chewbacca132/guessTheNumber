import { ScrollView, StyleSheet } from 'react-native';

import GuessHistoryItem from './GuessHistoryItem';

export default function GuessHistory({history, target}){
    const guessHistory = history.map((guess, i) => (
        <GuessHistoryItem
            key = {i}
            guess = {guess}
            target = {target}
        />
    ));
    return (
        <ScrollView style = {styles.scrollView}>
            {guessHistory}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView : {
        height : 50
    }
})