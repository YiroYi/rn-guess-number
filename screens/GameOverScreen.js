import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
  return(
    <View style={styles.screen}>
      <TitleText>The Game is Over </TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image}
               source={require('../assets/mega.jpg')}
               resizeMode="contain"
        />
      </View>
      <BodyText>Number of rounds: {props.roundsNumber} </BodyText>
      <BodyText>Number of was user was: {props.setUserNumber} </BodyText>
      <Button title="New Game " onPress={props.onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'gray',
    overflow: 'hidden',
    marginVertical: 30
  }
});

export default GameOverScreen;
