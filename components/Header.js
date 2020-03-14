import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerAndroid,
          android: styles.headerAndroid
        })
      }}
    >
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: Colors.primary
  },
  headerTitle: {
    color: Platform.OS === 'android' ? 'white' : Colors.primary,
    fontSize: 18
  }
});

export default Header;
