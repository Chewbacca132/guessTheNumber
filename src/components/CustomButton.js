import { Pressable, Text, StyleSheet} from 'react-native';

export default function CustomButton(props){
    return ( 
        <Pressable onPress = {props.onPress} style = {styles.button}>
            <Text>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor: 'red',
        justifyContent : 'center'
    }
})