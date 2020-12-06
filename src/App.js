import * as React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountView from './views/account';
import MainView from './views/main';
import SettingView from './views/setting';
import ChatBoxView from './views/chatbox';
import QrCodeView from './views/qr-code';

import {
  QrCode,
  Home,
  CreditCard,
  MessageCircle,
  Cpu,
  Settings,
} from './components/icons';

import TabBar from './components/tab-bar';

import Box from './components/box';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Main"
            // tabBarOptions={{
            // tabStyle: {justifyContent: 'center', backgroundColor: 'red'},
            // }}
            tabBarOptions={{
              activeTintColor: '#e91e63',
            }}
            TabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen
              name="Main"
              component={MainView}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                  <Home name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Account"
              component={AccountView}
              options={{
                tabBarLabel: 'Account',
                tabBarIcon: ({color, size}) => (
                  <CreditCard name="account" color={color} size={size} />
                ),
              }}
            />

            <Tab.Screen
              name="QrCode"
              component={QrCodeView}
              options={{
                tabBarLabel: 'QrCode',
                tabBarIcon: ({color, size, margin}) => (
                  <Cpu
                    name="qrCode"
                    color={color}
                    size={size}
                    marginBottom={10}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="ChatBox"
              component={ChatBoxView}
              options={{
                tabBarabel: 'ChatBox',
                tabBarIcon: ({color, size}) => (
                  <MessageCircle name="chatBox" color={color} size={size} />
                ),
              }}
            />

            <Tab.Screen
              name="Settings"
              component={SettingView}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({color, size}) => (
                  <Settings name="settings" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
