import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../themes/colors';
import fontFamily from '../themes/typography';

function EmptyState({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

export default EmptyState;

const styles = StyleSheet.create({
  title: { color: Colors.white, textAlign: 'center', fontFamily: fontFamily.nunitoBold },
});
