

import * as React from 'react';
import { View, Text,TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearcView from './views/search';
import HistoryView from './views/history';
import FavoriteView from './views/favorite';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search" component={SearcView} />
        <Tab.Screen name="History" component={HistoryView} />
        <Tab.Screen name="Favorite" component={FavoriteView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
