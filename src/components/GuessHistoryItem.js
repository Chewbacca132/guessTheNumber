import { Text } from 'react-native';

export default function GuessHistoryItem({guess, target}){
    const sign = target > guess ? '>' : '<';
    return <Text>{sign}{guess}</Text>
}