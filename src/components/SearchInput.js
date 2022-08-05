import React from 'react';
import { TextInput as ReactNativeTextInput, View, StyleSheet, Image } from 'react-native';
import Colors from '../themes/colors';
import images from '../themes/images';
import fontFamily from '../themes/typography';

function SearchInput({ marginBottom, handleTextChange, placeHolder = 'placeholder here' }) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 6,
        borderColor: Colors.grey,
        paddingVertical: 0,
        paddingHorizontal: 12,
        flexDirection: 'row',
        marginBottom: marginBottom ? 12 : 0,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <ReactNativeTextInput
        style={[styles.textInput]}
        placeholder={placeHolder}
        onChangeText={(text) => handleTextChange(text)}
      />
      <Image source={images.icon.search} style={{ alignItems: 'center', height: 20, width: 20 }} />
    </View>
  );
}

export default SearchInput;

const styles = StyleSheet.create({
  textInput: {
    fontFamily: fontFamily.nunitoLight,
  },
});
