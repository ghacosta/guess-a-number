import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over</TitleText>
        <View style={styles.imageContainer}>
          <Image
            //source={require('../assets/success.png')}
            source={{
              uri:
                'https://www.summitstrength.com.au/uploads/1/2/3/8/123813322/edited/6_1.jpg?1547150368'
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{' '}
            <Text style={styles.highlight}>
              &nbsp;{props.guessRounds}&nbsp;
            </Text>{' '}
            rounds to guess the number{' '}
            <Text style={styles.highlight}>&nbsp;{props.userNumber}&nbsp;</Text>
          </BodyText>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton title="NEW GAME" onPress={props.onRestart} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  buttonContainer: {
    marginTop: 10
  },
  imageContainer: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    borderRadius: Dimensions.get('window').height * 0.2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height > 400 ? 18 : 14,
    lineHeight: Dimensions.get('window').height > 400 ? 24 : 20
  },
  highlight: {
    backgroundColor: Colors.primary,
    fontFamily: 'open-sans-bold',
    color: 'white'
  }
});
export default GameOverScreen;
