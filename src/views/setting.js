import * as React from 'react';
import {View, Text} from 'react-native';
import BoxCenter from '../components/box-center';
import {Settings} from '../components/icons';

function SettingView() {
  return (
    <BoxCenter>
      <Text>Ayarlar </Text>
      <Settings width={50} height={50} stroke="black" />
    </BoxCenter>
  );
}

export default SettingView;
