import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Colors from '../themes/colors';
import fontFamily from '../themes/typography';

function TextPresable({ size, handleOnPress, children }) {
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Text
        style={{
          fontSize: size,
          color: Colors.white,
          fontFamily: fontFamily.nunitoRegular,
          textDecorationLine: 'underline',
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default TextPresable;
