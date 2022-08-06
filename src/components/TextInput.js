import React from 'react';
import { TextInput as ReactNativeTextInput, View, Text, StyleSheet } from 'react-native';
import Colors from '../themes/colors';
import fontFamily from '../themes/typography';

function TextInput({
  isTextArea,
  isNumber,
  title,
  marginBottom,
  handleTextChange,
  handleOnBlur,
  placeHolder = 'placeholder here',
  editable = true,
  value,
}) {
  return (
    <View style={{ marginBottom: marginBottom ? 12 : 0 }}>
      <Text style={styles.title}>{title}</Text>
      <ReactNativeTextInput
        keyboardType={isNumber ? 'number-pad' : 'default'}
        multiline={isTextArea}
        numberOfLines={isTextArea ? 4 : 1}
        editable={editable}
        style={[styles.textInput]}
        placeholder={placeHolder}
        onChangeText={handleTextChange}
        onBlur={handleOnBlur}
        value={value}
      />
    </View>
  );
}

export default TextInput;

const styles = StyleSheet.create({
  title: { fontFamily: fontFamily.nunitoBold, marginBottom: 4 },
  textInput: {
    fontFamily: fontFamily.nunitoLight,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.grey,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
});
