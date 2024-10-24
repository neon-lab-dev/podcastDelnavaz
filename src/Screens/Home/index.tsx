import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppInput from '../../components/AppInput';
import EventCard from '../../components/EventCard';
import ScholarCard from '../../components/ScholarCard';
import TopPodcastCard from '../../components/TopPodcastCard';
import RecentPodcastCard from '../../components/RecentPodcastCard';
import SearchInput from '../../components/SearchInput';
import AppIcon from '../../assets/images/logo/AppIcon';
import {ms, s, vs} from 'react-native-size-matters';
import ProgramCard from '../../components/ProgramCard';
import CardHeader from '../../components/CardHeader';

const HomeScreen = ({navigation}) => {
  const DATA: ItemData[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center'}}
      style={{flex: 1}}>
      {/* Header  */}
      <View style={{gap: 15, paddingTop: vs(25)}}>
        <View style={styles.header}>
          <AppIcon width={s(48)} height={vs(48)} />
          <Image
            source={require('../../assets/icons/bell.png')}
            style={{width: s(48), height: vs(48)}}
          />
        </View>
        <Text style={styles.headerTitle}>
          What kind of podcast do you want to hear today?
        </Text>
        <SearchInput onChangeText={() => {}} placeholder="Search Podcast" />
      </View>
      {/* Header */}
      {/* podcast Card */}
      <View style={{paddingVertical: vs(30)}}>
        <RecentPodcastCard />
      </View>
      {/* podcast Card */}
      {/* carousel card list */}
      <CardHeader header={'Top podcast of the week'} />
      <FlatList
        contentContainerStyle={{
          gap: 15,
          paddingBottom: vs(10),
          paddingLeft: s(15),
        }}
        data={DATA}
        renderItem={({item}) => <TopPodcastCard />}
        horizontal
      />
      {/* carousel card list */}

      <CardHeader header={'Interview with scholars'} />
      <FlatList
        contentContainerStyle={{paddingLeft: s(15)}}
        data={DATA}
        renderItem={({item}) => <ScholarCard />}
        horizontal
      />

      <CardHeader header={'Events Happening'} />
      <FlatList
        contentContainerStyle={{gap: 25, paddingLeft: s(15)}}
        data={DATA}
        renderItem={({item}) => <EventCard />}
        horizontal
      />
      <CardHeader header={'Top Programs Curated for you'} />
      <FlatList
        contentContainerStyle={{gap: 30, paddingLeft: s(15)}}
        data={DATA}
        renderItem={({item}) => <ProgramCard />}
        horizontal
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(24),
    color: '#251605',
  },
});
