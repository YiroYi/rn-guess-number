import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOverScreen = props => {
  return(
    <View style={styles.screen}>
      <TitleText>The Game is Over </TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image}
               source={require('../assets/mega.jpg')}
               //source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaj8pKfxsl4tAQSpZQAbXFOcxf1CgqZ2mAw&usqp=CAU'}}
               resizeMode="cover"
               fadeDuration={300}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>Your phone needed
                  <Text style={styles.highlight}> {props.roundsNumber} </Text>
                  rounds to guess the number
                  <Text style={styles.highlight}> {props.setUserNumber} </Text>
        </BodyText>
      </View>
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
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText:{
    textAlign: 'center',
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',

  }
});

export default GameOverScreen;
