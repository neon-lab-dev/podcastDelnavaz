import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';

const RecentPodcastCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/cards/recent.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Delnavaz  global podcast</Text>
        <Text style={styles.company}>
          Iranian Radio from Southern California
        </Text>
      </View>
    </View>
  );
};

export default RecentPodcastCard;

const styles = StyleSheet.create({
  mainContainer: {width: s(330), height: vs(230)},
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: ms(10),
    overflow: 'hidden',
  },
  image: {width: '100%', height: '100%', resizeMode: 'contain'},
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(20),
    color: '#251605',
  },
  company: {
    fontFamily: 'Inter-regular',
    fontSize: ms(16),
    color: '#424242',
  },
  contentContainer: {padding: 6},
});
