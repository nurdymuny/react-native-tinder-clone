import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Swiper from 'react-native-swiper';

import { Welcome, FacebookIcon } from '../assets';
import { size } from '../helpers/devices';
import { Styles, Colors } from '../helpers/theme';

export default class Launch extends Component {

  pushLogin = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Login',
      }
    })
  }

  pushFacebookLogin = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Main',
      }
    })
  }

  render() {
    return (
      <View style={Styles.container}>
        <ScrollView contentContainerStyle={Styles.contentContainer}>
          <View style={Styles.sectionFirst}>
            <Swiper autoplay={true} autoplayTimeout={2} style={{ height: size(390) }}>
              <View>
                <View style={Styles.section}>
                  <SvgUri width={size(202)} height={size(162)} source={Welcome} />
                </View>
                <View style={Styles.section}>
                  <Text numberOfLines={2} style={Styles.textTitle}>Misdemeanor And Felony-Friendly Jobs</Text>
                </View>
                <Text numberOfLines={3} style={Styles.textNormal}>70 Million Jobs will connect you with great companies that offer second chance jobs for people with criminal</Text>
              </View>
              <View>
                <View style={Styles.section}>
                  <SvgUri width={size(202)} height={size(162)} source={Welcome} />
                </View>
                <View style={Styles.section}>
                  <Text numberOfLines={2} style={Styles.textTitle}>Misdemeanor And Felony-Friendly Jobs</Text>
                </View>
                <Text numberOfLines={3} style={Styles.textNormal}>70 Million Jobs will connect you with great companies that offer second chance jobs for people with criminal</Text>
              </View>
              <View>
                <View style={Styles.section}>
                  <SvgUri width={size(202)} height={size(162)} source={Welcome} />
                </View>
                <View style={Styles.section}>
                  <Text numberOfLines={2} style={Styles.textTitle}>Misdemeanor And Felony-Friendly Jobs</Text>
                </View>
                <Text numberOfLines={3} style={Styles.textNormal}>70 Million Jobs will connect you with great companies that offer second chance jobs for people with criminal</Text>
              </View>
            </Swiper>
          </View>

          <View style={Styles.section}>
            <TouchableOpacity style={Styles.button} onPress={this.pushLogin}>
              <Text style={Styles.buttonText}>Login Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleSheet.flatten([Styles.button, { backgroundColor: Colors.FACEBOOK }])} onPress={this.pushFacebookLogin}>
              <View style={Styles.buttonIcon}><SvgUri width={Styles.buttonIconSize} height={Styles.buttonIconSize} source={FacebookIcon} /></View>
              <Text style={Styles.buttonText}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonLink}>
              <Text style={Styles.buttonLinkText}>Signup with Email</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

}
