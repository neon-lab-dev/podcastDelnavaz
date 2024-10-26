import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const AboutUs = () => {
  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{alignItems: 'center'}}>
      <View style={styles.firstContainer}>
        <Image
          source={require('../../assets/aboutus/one.png')}
          style={styles.imageContainer}
        />
        <Text
          style={{
            fontFamily: 'Inter-SemiBold',
            alignSelf: 'flex-start',
            fontSize: ms(20),
            color: '#251605',
          }}>
          Esteemed Global Podcast
        </Text>
        <View>
          <Text style={styles.paraText}>
            In this era of rapid technological advancement, radio remains one of
            the swiftest mediums for conveying messages and concepts.
          </Text>
          <Text style={styles.paraText}>
            Drawing from McLuhan’s framework, media are categorized into “hot”
            and “cool,” with radio falling into the “hot” category due to its
            primarily auditory nature. With minimal effort required from the
            audience beyond listening, radio offers a comforting presence and
            delivers diverse, uplifting programs, effectively alleviating life’s
            hardships and tensions.
          </Text>
          <Text style={styles.paraText}>
            Highlights of the Delnvaz podcast include its affordability as a
            communication tool and its effectiveness in disseminating daily
            news.
          </Text>
          <Text style={styles.paraText}>
            The podcast maintains a continuous and intimate connection with
            Persian-speaking communities in Southern California, providing
            essential updates, job listings, expert insights, and fostering
            social cohesion, national unity, and cultural exchange between
            America and Iran.
          </Text>
          <Text style={styles.paraText}>
            Additionally, it delves into the intellectual foundations of Western
            societies and promotes healthy living practices.
          </Text>
        </View>
      </View>
      <View style={[styles.secondContainer]}>
        <Image
          source={require('../../assets/aboutus/two.png')}
          style={styles.imageContainer}
        />
        <Text
          style={{
            fontFamily: 'Inter-SemiBold',
            alignSelf: 'flex-start',
            fontSize: ms(20),
            color: '#251605',
          }}>
          Sample of Programs
        </Text>
        <View>
          <Text style={styles.paraText}>
            “The future belongs to the nation that knows its past well” –
            Iranian Radio’s flagship global podcast from Irvine
          </Text>
          <Text style={styles.paraText}>
            Comedy and entertainment segment on Iran’s history and culture,
            featuring Iranian mysticism, literature, new poetry, Christopher
            Columbus’s farewell to the boundless world, Rumi unrequited love,
            and ObedZakani’s execution, along with stories of Mullah Nasreddin,
            Koresh Kabir’s prayer, and Parse city
          </Text>
          <Text style={styles.paraText}>
            Interviews with intellectuals from Iran’s children’s products
            department “Aunt Bear’s Tree of Knowledge” podcast segment
          </Text>
        </View>
      </View>
      <LinearGradient
        colors={['#BCE2B7', '#2E4E2E']}
        style={{
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: s(15),
          paddingTop: vs(30),
        }}>
        <Image
          source={require('../../assets/aboutus/three.png')}
          style={{width: '100%', height: 400, resizeMode: 'contain'}}
        />
        <Text
          style={{
            fontFamily: 'Inter-SemiBold',
            fontSize: ms(20),
            alignSelf: 'flex-start',
            color: '#ffffff',
            paddingVertical: vs(10),
          }}>
          Iranian Radio (Irvine)
        </Text>
        <View>
          <Text
            style={[
              styles.paraText,
              {paddingVertical: vs(10), color: '#ffffff'},
            ]}>
            Iranian World Radio Southern California presents.
          </Text>
          <Text
            style={[
              styles.paraText,
              {paddingVertical: vs(10), color: '#ffffff'},
            ]}>
            “Iranian Radio (Irvine),” a platform dedicated to exploring the rich
            history and culture of Iran and its profound impact on global
            civilization.
          </Text>
          <Text
            style={[
              styles.paraText,
              {paddingVertical: vs(10), color: '#ffffff'},
            ]}>
            Delnavaz Radio, an independent media outlet free from religious or
            political affiliations, will soon launch its weekly podcast series,
            covering cultural news, local events in Irvine, literary works,
            scientific wonders, historical insights, and educational content on
            mental, spiritual health, music history, immigration, and
            meditation.
          </Text>
          <Text
            style={[
              styles.paraText,
              {paddingVertical: vs(10), color: '#ffffff'},
            ]}>
            With a team boasting four decades of media experience, Delnavaz
            Radio aims to enrich immigrant communities through engaging
            programming and humor, nurturing the young generation’s connection
            to their heritage.
          </Text>
        </View>
      </LinearGradient>
      <AboutUs />
    </ScrollView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  firstContainer: {
    paddingHorizontal: s(14),
    alignItems: 'center',
    paddingVertical: vs(14),
  },
  secondContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: s(14),
    paddingVertical: vs(20),
  },
  imageContainer: {
    width: s(320),
    height: vs(200),
    marginVertical: vs(20),
    borderRadius: 10,
    resizeMode: 'cover',
  },
  paraText: {
    paddingVertical: vs(5),
    fontSize: ms(16),
    textAlign: 'left',
  },
});
