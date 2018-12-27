import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { Dimensions } from 'react-native'

import Home from '@screens/Home'
import MainDrawer from '@screens/MainDrawer'

import { navigationHeader } from './navigationHeader'

const { width } = Dimensions.get('window')

export const GeneralStackNav = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => navigationHeader(navigation, 'Home', true)
  }
})

export const Drawer = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => navigationHeader(navigation, 'Home', true)
  }
})

export const MainDrawerNav = createDrawerNavigator({
  Drawer: {
    screen: Drawer
  }
}, {
  drawerWidth: width - 60,
  drawerPosition: 'right',
  contentComponent: props => (<MainDrawer drawerProps={props} />),
  drawerBackgroundColor: '#fff'
})
