import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CustomButton from '../CustomButton';
import Title from '../Title';
//import { Button } from '@rneui/base';

import Nav from '../Nav';

export default function Home(){
    return (
        <View>
            <Title/>
            <CustomButton 
                title = 'Play'
                onPress = {() => Nav.navigate('Play', {
                    min : 1,
                    max : 10,
                    guessLimit : 10
                })}
            />
        </View>
    )
}