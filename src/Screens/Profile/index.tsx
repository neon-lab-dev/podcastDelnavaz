import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import ProfileOption from '../../components/ProfileOption';

const Profile = ({navigation}) => {
  const profileData = [
    {id: 1, title: 'Edit Profile', screenName: 'EditProfile'},
    {id: 2, title: 'Help & Support', screenName: 'HelpAndSupport'},
    {id: 3, title: 'About us', screenName: 'AboutUs'},
    {id: 4, title: 'Programs & Hosts', screenName: 'ProgramAndHost'},
    {id: 5, title: 'Founders', screenName: 'Founders'},
    {id: 6, title: 'Press & Events', screenName: 'PressAndEvents'},
    {id: 7, title: 'Nonprofit', screenName: 'NonProfit'},
    {id: 8, title: 'Privacy Policy', screenName: 'PrivacyPolicy'},
    {id: 9, title: 'Account Privacy', screenName: 'AccountPrivacy'},
    {id: 10, title: 'Logout'},
  ];

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.firstPart}>
        <View style={styles.profilePic} />
        <Text style={styles.profileName}>Gracia Tya</Text>
      </View>
      <View style={styles.profileMenuContainer}>
        <FlatList
          scrollEnabled={false}
          data={profileData}
          renderItem={({item}) => (
            <ProfileOption item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id.toString()} // Add keyExtractor
        />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#dfe4ed'},
  firstPart: {
    backgroundColor: '#251605',
    height: '35%',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 100,
  },
  profilePic: {
    width: s(100),
    height: vs(100),
    backgroundColor: '#463730',
    borderRadius: ms(64),
  },
  profileName: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(20),
    color: '#FFFFFF',
  },
  profileMenuContainer: {
    backgroundColor: '#ffffff',
    bottom: 70,
    width: '80%',
    left: '10%',
    borderRadius: ms(12),
  },
});
