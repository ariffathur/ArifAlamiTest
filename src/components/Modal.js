import React from 'react';
import { View, Text, Image } from 'react-native';
import fontFamily from '../themes/typography';

function Modal({ ilustration, title, desc }) {
  return (
    <View style={{ padding: 24, alignItems: 'center' }}>
      {ilustration ? (
        <Image
          source={ilustration}
          style={{ width: 200, height: 300, marginBottom: 12 }}
          resizeMode="cover"
        />
      ) : null}
      <Text style={{ fontFamily: fontFamily.nunitoBold, fontSize: 24, marginBottom: 12 }}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: fontFamily.nunitoSemi,
          fontSize: 14,
          marginBottom: 12,
          textAlign: 'center',
        }}
      >
        {desc}
      </Text>
    </View>
  );
}

export default Modal;
