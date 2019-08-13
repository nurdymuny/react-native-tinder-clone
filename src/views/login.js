import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import CheckBox from 'react-native-check-box';

import { setRootMainTabs } from '../helpers/routes';
import { svgCheckIcon, svgCheckActiveIcon } from '../assets';
import { size } from '../helpers/devices';
import { Styles, Colors } from '../helpers/theme';
import { Collapsable, Header } from '../components';

export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', remember: false }
  }

  popLogin = () => {
    Navigation.pop(this.props.componentId);
  }

  onChangeEmail = (email) => {
    this.setState({ email });
  }

  onChangePassword = (password) => {
    this.setState({ password });
  }

  onChangeRemember = () => {
    this.setState({ remember: !this.state.remember });
  }

  render() {
    const { email, password, remember } = this.state;
    return (
      <View style={Styles.container}>
        <Collapsable
          renderHeader={
            <Header
              title={''}
              leftButton={this.popLogin}
            />
          }
        >
          <ScrollView style={Styles.contentContainer}>
            <View>
              <Text style={StyleSheet.flatten([Styles.textTitle, Styles.section])}>Login now</Text>
              <Text style={StyleSheet.flatten([Styles.textNormal, Styles.section])}>Please login to continue using our app.</Text>
            </View>

            <View style={Styles.section} />
            <View style={StyleSheet.flatten([Styles.section, Styles.inputGroup])}>
              <Text style={Styles.inputLabel}>Email address</Text>
              <View style={Styles.inputContainer}>
                <TextInput style={Styles.input} keyboardType="email-address" autoFocus={true} maxLength={64} value={email} onChangeText={this.onChangeEmail} placeholder="john.smith@gmail.com" underlineColorAndroid={Colors.BLACK} />
                <SvgUri width={Styles.inputIconSize} height={Styles.inputIconSize} source={svgCheckActiveIcon} />
              </View>
            </View>

            <View style={StyleSheet.flatten([Styles.sectionLast, Styles.inputGroup])}>
              <Text style={Styles.inputLabel}>Password</Text>
              <View style={Styles.inputContainer}>
                <TextInput style={Styles.input} secureTextEntry={true} maxLength={64} value={password} onChangeText={this.onChangePassword} placeholder="" underlineColorAndroid={Colors.BLACK} />
              </View>
            </View>

            <View style={StyleSheet.flatten([Styles.section, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }])}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  isChecked={remember} onClick={this.onChangeRemember}
                  checkedImage={<SvgUri width={Styles.inputIconSize} height={Styles.inputIconSize} source={svgCheckActiveIcon} />}
                  unCheckedImage={<SvgUri width={Styles.inputIconSize} height={Styles.inputIconSize} source={svgCheckIcon} />}
                />
                <TouchableOpacity style={Styles.buttonLink} onPress={this.onChangeRemember}>
                  <Text style={StyleSheet.flatten([Styles.textNormal, { paddingLeft: size(5) }])}>Remember Me</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={Styles.buttonLink}>
                <Text style={Styles.textNormal}>Forget Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.section}>
              <TouchableOpacity style={Styles.button} onPress={setRootMainTabs}>
                <Text style={Styles.buttonText}>Get Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={StyleSheet.flatten([Styles.button, { backgroundColor: Colors.WHITE }])}>
                <Text style={StyleSheet.flatten([Styles.buttonText, { color: Colors.BLACK }])}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Collapsable>
      </View>
    );
  }

}
