import { View, Text, Button} from 'react-native';
import Nav from '../Nav';

export default function GameOver(props){
    return (
        <View>
            <Text>
                {props.message}
            </Text>
            <Button
                title = 'Play Again'
                onPress = {() => Nav.navigate('Play', {
                    min: 1, 
                    max: 10, 
                    guessLimit: 10
                })}
            />
            <Button
                title = 'Return Home'
                onPress = {() => Nav.navigate('Home')}
            />
        </View>
    )
}