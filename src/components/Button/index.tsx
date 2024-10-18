import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {s, vs} from 'react-native-size-matters';

const AppButton = ({text, onPress}) => {
  return (
    <View
      style={{
        width: s(300),
        height: vs(50),
        backgroundColor: '#463730',
        borderRadius: 8,
      }}>
      <Text>{text}</Text>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
