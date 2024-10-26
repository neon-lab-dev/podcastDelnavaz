import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Founders = ({navigation}) => {
  const goToFeed = () => {
    navigation.navigate('App', {screen: 'Profile'});
  };
  return (
    <View>
      <Text onPress={goToFeed}>Button</Text>
    </View>
  );
};

export default Founders;

const styles = StyleSheet.create({});
