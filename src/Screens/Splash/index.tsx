import {StyleSheet, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import AppIcon from '../../assets/images/logo/AppIcon';

const {height} = Dimensions.get('window'); // Get the height of the screen

const Splash = ({navigation}) => {
  const logoRef = React.useRef(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    // Start the transition when the component mounts
    if (logoRef.current) {
      logoRef.current.transitionTo(
        {
          translateY: -height / 2.5, // Move to center
        },
        2000,
      ); // Duration of 2 seconds
    }

    // Navigate after 2 seconds based on authentication status
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        navigation.replace('App'); // Navigate to app if authenticated
      } else {
        navigation.replace('Auth'); // Navigate to auth if not authenticated
      }
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigation, isAuthenticated]); // Add dependencies

  return (
    <View style={styles.logoContainer}>
      <Animatable.View ref={logoRef} style={styles.logoWrapper} useNativeDriver>
        <AppIcon />
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
