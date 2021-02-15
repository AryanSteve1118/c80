import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';
import AppTabNavigator from './components/AppTabNavigator'
import { AppDrawerNavigator } from './components/AppDrawerNavigator'

export default class App extends Component {
 render(){ 
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  AppDrawerNavigator:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
