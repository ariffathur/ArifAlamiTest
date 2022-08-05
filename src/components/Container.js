import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Colors from '../themes/colors';

function Container({ withRadius, blue, children, withFlex }) {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: blue ? Colors.grey200 : Colors.white,
          borderRadius: withRadius || 0,
          ...(withFlex && { flex: 1 }),
        },
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

export default Container;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
