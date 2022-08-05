import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import fontFamily from '../themes/typography';
import Colors from '../themes/colors';

function Header({ children }) {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.headerText}>{children}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerBox: {
    width: '100%',
    marginBottom: 12,
    alignItems: 'center',
  },
  headerText: { fontFamily: fontFamily.nunitoBold, fontSize: 24, color: Colors.white },
});
