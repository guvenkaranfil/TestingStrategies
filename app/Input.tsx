import React from 'react';
import {StyleSheet, Text, TextInput, Dimensions} from 'react-native';

interface Props {
  error?: string;
}

export default function Input({error}: Props) {
  return (
    <>
      <TextInput style={styles.input} />
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
