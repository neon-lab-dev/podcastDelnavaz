import {Image, StyleSheet, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';

const {height} = Dimensions.get('window'); // Get the height of the screen

const Splash = () => {
  const logoRef = React.useRef(null);

  useEffect(() => {
    // Start the transition when the component mounts
    if (logoRef.current) {
      logoRef.current.transitionTo(
        {
          translateY: -height / 2.5, // Move to center
        },
        2000,
      ); // Duration of 1 second
    }
  }, []);

  return (
    <View style={styles.logoContainer}>
      <Animatable.View ref={logoRef} style={styles.logoWrapper} useNativeDriver>
        <Image
          source={require('../../assets/images/logo/delnavaz-radio.png')}
          style={styles.logo}
        />
      </Animatable.View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2E3BC', // Background color
  },
  logoWrapper: {
    position: 'absolute',
    bottom: 0, // Start from bottom
  },
  logo: {
    width: 200, // Desired width of the logo
    height: 200, // Desired height of the logo
  },
});
