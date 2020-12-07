import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const StartGameScreen = props => {
  return(
    <View style={styles.screen}>
      <Text>The game screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'gray'
  }
});

export default StartGameScreen;
