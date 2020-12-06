import * as React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  RefreshControl,
  Dimensions,
  ScrollView,
  Alert,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
//import {View, Text, } from 'react-native';
import {Settings} from '../components/icons';

import {StackActions} from '@react-navigation/native';

state = {
  email: '',
  password: '',
  loading: true,
};

const {width, height} = Dimensions.get('window');
//const jumpToAction = TabActions.jumpTo('', {user: 'Satya'});

function AccountView() {
  loginApp = () => {
    Alert.alert('Successful', 'Welcome', [{text: 'Okey'}]);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{width: width, height: 44}} />
      <View style={{width: width, alignItems: 'center', padding: 10}}>
        <Settings
          name="twitter"
          size={40}
          type="material-community"
          color="#00aced"
        />
      </View>
      <View style={{width: width, paddingLeft: 20, marginTop: 20}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Log in</Text>
        <TextInput
          placeholder="Phone, email, or username"
          style={{
            width: width - 20,
            paddingVertical: 20,
            borderBottomWidth: 0.5,
            borderColor: 'lightgray',
            color: '#00aced',
          }}
          underlineColorAndroid="transparent"
          onChangeText={(email) => this.setState({email: email})}
          value={this.state.email}
          keyboardType="email-address"
          placeholderTextColor="gray"
        />
        <TextInput
          placeholder="Password"
          style={{
            width: width - 20,
            paddingVertical: 20,
            borderBottomWidth: 0.5,
            borderColor: 'lightgray',
            color: '#00aced',
          }}
          underlineColorAndroid="transparent"
          // onChangeText={(password) => this.setState({password: password})}
          // value={this.state.password}
          secureTextEntry
          placeholderTextColor="gray"
        />
      </View>
      <View style={{width: width, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.loginApp()}>
          <View
            style={{
              alignItems: 'center',
              width: width - 20,
              padding: 15,
              borderRadius: 4,
              backgroundColor: '#E11E3C',
              marginVertical: 15,
            }}>
            <Text style={{fontSize: 12, color: '#fff'}}>Log in</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.goSignUp()}>
          <Text style={{fontSize: 12, color: '#000'}}>
            Sign up for new account{' '}
            <Text style={{fontWeight: 'bold', fontSize: 12, color: '#000'}}>
              Forgot password?
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AccountView;

//import React from 'react';
//import { StatusBar, StyleSheet, Text, TextInput, View, RefreshControl, Dimensions, ScrollView, Alert, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
//import { Icon } from 'react-native-elements'

//import * as firebase from "firebase";
//import { StackActions } from '@react-navigation/native';

//const { width, height } = Dimensions.get('window');

//export default class Login extends React.Component {
// state = {
// email: '',
//password: '',
//    loading: true,
//  }
