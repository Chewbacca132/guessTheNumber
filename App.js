import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/components/Nav';
import views from './src/navConfig';

export default function App() {
  return (
      <View style={styles.container}>
          <Nav
              views = {views}
              defaultView = 'Home'
          />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


function random(min, max){
  return min + Math.floor(Math.random() * (max - min));
}