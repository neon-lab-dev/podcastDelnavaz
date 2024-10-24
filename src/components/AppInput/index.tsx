import React from 'react';
import {View, TextInput, StyleSheet, TextInputProps, Text} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

interface AppInputProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Inter-Regular',
    color: '#424242',
    fontWeight: '400',
    fontSize: ms(16),
  },
  container: {
    margin: 10,
  },
  input: {
    width: s(310),
    height: vs(40),
    borderColor: '#C6C6C6',
    borderWidth: s(2),
    paddingLeft: 10,
    borderRadius: ms(6),
    marginTop: vs(4),
  },
});

export default AppInput;
