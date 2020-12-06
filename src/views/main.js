import * as React from 'react';
import {View, Text} from 'react-native';
import Box from '../components/box';
import BoxCenter from '../components/box-center';
import {Settings} from '../components/icons';

function MainView() {
  return (
    <BoxCenter>
      <Text>Harita ve Anasayfa!</Text>
      <Box size={20} bg="blue" />
      <Settings width={50} height={50} stroke="black" />
    </BoxCenter>
  );
}

export default MainView;
