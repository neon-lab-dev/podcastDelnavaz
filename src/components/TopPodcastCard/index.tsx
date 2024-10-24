import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';

const TopPodcastCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/cards/topPodcastCard.png')}
          style={styles.image}
        />
      </View>
      <View style={{paddingHorizontal: s(12)}}>
        <Text style={styles.title}>نیایش کورش کبیر</Text>
        <Text style={styles.category}>History</Text>
      </View>
    </View>
  );
};

export default TopPodcastCard;

const styles = StyleSheet.create({
  container: {
    width: s(170),
    height: vs(220),
    // backgroundColor: 'red',
  },
  category: {
    color: '#424242',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    textAlign: 'left',
    fontSize: ms(20),
    color: '#251605',
  },
  image: {width: '100%', height: '100%', resizeMode: 'contain'},
  imageContainer: {
    width: '100%',
    height: '75%',
    borderRadius: ms(16),
    overflow: 'hidden',
  },
});
