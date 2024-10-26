import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screens/Splash';
import AboutUs from '../Screens/AboutUs';
import AccountPrivacy from '../Screens/AccountPrivacy';
import EditProfile from '../Screens/EditProfile';
import Founders from '../Screens/Founders';
import NonProfit from '../Screens/NonProfit';
import PressAndEvents from '../Screens/PressAndEvents';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import ProgramsAndHosts from '../Screens/ProgramsAndHosts';
import HelpAndSupport from '../Screens/HelpAndSupport';

const Stack = createStackNavigator();

const MainNavigation = () => {
  const [isAuthorized, setIsAuthorized] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="App"
          component={AppNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen
          name="AccountPrivacy"
          component={AccountPrivacy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Founders"
          component={Founders}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HelpAndSupport"
          component={HelpAndSupport}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NonProfit"
          component={NonProfit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PressAndEvents"
          component={PressAndEvents}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProgramAndHost"
          component={ProgramsAndHosts}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
