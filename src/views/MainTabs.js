/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Home, Chat, Profile } from './';
import CustomTabBar from '../components/custom_tab_bar';
import { Tinder, User, Message } from '../assets';

export default class MainTabs extends Component {
  
  constructor(props) {
    super(props);
    // Navigation.events().bindComponent(this);
  }

  render() {
    return (
      <ScrollableTabView
        prerenderingSiblingsNumber={2}
        renderTabBar={(tabBarProps) => <CustomTabBar {...tabBarProps} />}
        locked
        initialPage={1}
        style={{flex: 1}}
      >
        <Profile tabLabel={User} />
        <Home tabLabel={Tinder} />
        <Chat tabLabel={Message} />
      </ScrollableTabView>
    );
  }
}
