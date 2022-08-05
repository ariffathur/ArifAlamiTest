import React from 'react';
import { TextInput as ReactNativeTextInput, View, Text, StyleSheet } from 'react-native';
import Colors from '../themes/colors';
import fontFamily from '../themes/typography';

function TextInput({
  isTextArea,
  title,
  marginBottom,
  handleTextChange,
  placeHolder = 'placeholder here',
  editable = true,
  value = null,
}) {
  return (
    <View style={{ marginBottom: marginBottom ? 12 : 0 }}>
      <Text style={styles.title}>{title}</Text>
      <ReactNativeTextInput
        multiline={isTextArea}
        numberOfLines={isTextArea ? 4 : 1}
        editable={editable}
        style={[styles.textInput]}
        placeholder={placeHolder}
        onChangeText={(text) => handleTextChange(text)}
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
