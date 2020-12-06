import {View} from 'react-native';
import React from 'react';
import Button from './button';
import {QrCode, Home, CreditCard, MessageCircle, Settings} from './icons';
import Box from './box';
import theme from '../utils/theme';
function TabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'QrCode' ? (
          <Box p={15} mt={-15} bg="white">
            <Button
              key={label}
              size={56}
              bg="red"
              flex={1}
              //style={{backgroundColor: 'red'}}
              onPress={onPress}>
              <QrCode stroke="black" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            flexDirection="column"
            height={56}
            flex={1}
            mt={8}
            //style={{backgroundColor: 'red'}}
            onPress={onPress}>
            // {label === 'Settings' && <Settings />}
            // {label === 'ChatBox' && <MessageCircle />}
            // {label === 'Login' && <CreditCard />}
            // {label === 'Main' && <Home />}
            <Box size={4} bg={isFocused ? 'red' : 'white'} />
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
