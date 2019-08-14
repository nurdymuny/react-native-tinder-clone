import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import { size } from '../helpers/devices';
import { Styles } from '../helpers/theme';

export default class NoMoreCard extends Component {
  render() {
    return (
      <View style={StyleSheet.flatten([Styles.container, { alignItems: 'center' }])}>
        <Image 
          style={StyleSheet.flatten([Styles.avatar, { marginTop: size(30), marginBottom: size(30) }])}
          source={{uri: 'https://avatars0.githubusercontent.com/u/7205900?s=400&v=4'}} 
        />
        <Text style={Styles.textNormal}>No more jobs.</Text>
      </View>
    )
  }
}
