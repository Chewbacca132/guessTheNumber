import { Platform, Text} from 'react-native';

export default function Title(){
    let platform;
    switch (Platform.OS)
    {
        case 'android':
            platform = 'Android'
        case 'ios':
            platform = 'iOS'
        case 'native':
            platform = 'mobile'
        default:
            platform = 'web'
    }
    return (
        <Text>
            Welcome to the guess the number {platform} app!
        </Text>
    )
}