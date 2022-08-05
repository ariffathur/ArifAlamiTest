import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../themes/colors';
import fontFamily from '../themes/typography';

function Button({ bottom, children, handleOnpress, isDisabled = false }) {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[
        styles.buttonTouchable,
        {
          ...(bottom && { position: 'absolute', bottom: 24 }),
          backgroundColor: isDisabled ? Colors.grey : Colors.green,
        },
      ]}
      onPress={handleOnpress}
    >
      <Text style={styles.buttonTitle}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonTouchable: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  buttonTitle: { fontFamily: fontFamily.nunitoBold, color: Colors.white },
});
