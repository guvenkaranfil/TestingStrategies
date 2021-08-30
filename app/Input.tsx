import React from 'react';
import {StyleSheet, Text, TextInput, Dimensions} from 'react-native';

interface Props {
  testId?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: string;
}

export default function Input({
  testId,
  placeholder,
  value,
  onChangeText,
  error,
}: Props) {
  return (
    <>
      <TextInput
        testID={testId}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text>{error}</Text>}
    </>
  );
}

const {width: deviceWidth} = Dimensions.get('window');
const styles = StyleSheet.create({
  input: {
    width: deviceWidth,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },

  error: {
    paddingTop: 10,
    color: 'red',
  },
});
