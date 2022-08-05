import React from 'react';
import { View } from 'react-native';

function Padder({ size }) {
  return <View style={{ marginBottom: size }} />;
}

export default Padder;
