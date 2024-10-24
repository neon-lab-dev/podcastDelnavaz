import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppIcon from '../../assets/images/logo/AppIcon';
import {ms, vs} from 'react-native-size-matters';
import Mic from '../../assets/images/getstarted/Mic';
import AppButton from '../../components/Button';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <AppIcon height={ms(88)} width={ms(88)} />
      <Mic width={ms(359)} height={360} style={{marginTop: vs(20)}} />
      <Text
        style={{
          fontFamily: 'Inter-Regular',
          fontSize: ms(32),
          color: '#251605',
          fontWeight: '700',
        }}>
        An Iranian Radio from Southern California.
      </Text>
      <Text
        style={{
          fontFamily: 'Inter-Regular',
          fontSize: ms(18),
          fontWeight: '400',
          paddingHorizontal: 20,
          color: '#424242',
          textAlign: 'left',
        }}>
        The Future Belongs to the Nation of the Past Know Yourself Well.
      </Text>
      <AppButton
        onPress={() => {
          navigation.navigate('Login');
        }}
        text="Get Started"
      />
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    paddingTop: vs(20),
  },
});
