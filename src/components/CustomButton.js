import { Pressable, Text } from 'react-native';

export default function CustomButton(props){
    return (
        <Pressable onPress = {props.onPress}>
            <Text>
                {props.title}
            </Text>
        </Pressable>
    )
}