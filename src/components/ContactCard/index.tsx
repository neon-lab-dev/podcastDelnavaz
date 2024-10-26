import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {s, vs} from 'react-native-size-matters';

const ContactCard = () => {
  return (
    <View style={{backgroundColor: '#463730'}}>
      <Image
        source={require('../../assets/ContactCard/logo.png')}
        style={{width: s(100), height: vs(100)}}
      />
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({});
