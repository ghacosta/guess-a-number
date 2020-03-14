import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    borderBottomColor: Platform.OS === 'android' ? 'transparent' : '#ccc',
    borderBottomWidth: Platform.OS === 'android' ? 0 : 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: Platform.OS === 'android' ? 'white' : Colors.primary,
    fontSize: 18
  }
});

export default Header;
