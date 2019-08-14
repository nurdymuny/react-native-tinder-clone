import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Accordion from 'react-native-collapsible/Accordion';

import { size } from '../helpers/devices';
import { svgWorkTypeIcon, svgLocationIcon, svgRateIcon, svgInfoIcon } from '../assets';
import { Styles, Colors } from '../helpers/theme';

export default class JobCard extends Component {

  state = {
    isSummaryOrDetail: true,
  }

  onPressInfo = () => {
    this.setState({ isSummaryOrDetail: !this.state.isSummaryOrDetail });
  }

  render() {
    const { logo, title, subtitle, hours, location, rate, summary, duties = [], qualifications = [], details = [] } = this.props;
    const { isSummaryOrDetail } = this.state;

    return (
      <View style={Styles.cardContainer}>
        <View style={Styles.cardHeader}>
          <Image style={styles.headerImage} source={logo} />
          <Text style={StyleSheet.flatten([Styles.textTitle, { marginBottom: size(10) }])}>{title}</Text>
          <Text style={StyleSheet.flatten([Styles.textNormal, { marginBottom: size(14) }])}>{subtitle}</Text>
        </View>
        <View style={Styles.cardBody}>
          <View style={styles.bodyItem}>
            <View style={styles.bodyIcon}><SvgUri width={size(26)} height={size(26)} source={svgWorkTypeIcon} /></View>
            <Text style={Styles.textSmall}>{hours}</Text>
          </View>
          <View style={styles.bodyItem}>
            <View style={styles.bodyIcon}><SvgUri width={size(26)} height={size(26)} source={svgLocationIcon} /></View>
            <Text style={Styles.textSmall}>{location}</Text>
          </View>
          <View style={styles.bodyItem}>
            <View style={styles.bodyIcon}><SvgUri width={size(26)} height={size(26)} source={svgRateIcon} /></View>
            <Text style={Styles.textSmall}>${rate} /hour</Text>
          </View>
        </View>
        <View style={Styles.cardFooter}>
          {isSummaryOrDetail ? (
            <View>
              <View style={styles.footerTitle}>
                <Text style={StyleSheet.flatten([Styles.textNormal, { color: Colors.GRAY_TEXT }])}>SUMMARY</Text>
                <TouchableOpacity onPress={this.onPressInfo}><SvgUri width={size(40)} height={size(40)} source={svgInfoIcon} /></TouchableOpacity>
              </View>
              <Text style={Styles.textNormal} numberOfLines={3}>{summary}</Text>
            </View>
          ) : (
            <ScrollView>
              <View style={{ height: 250 }}>
                <Text>Comming soon...</Text>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    );
  }
}

const styles = {
  headerImage: {
    width: size(150),
    height: size(100),
    resizeMode: 'contain',
    marginVertical: size(10),
  },
  bodyItem: {
    alignItems: 'center',
  },
  bodyIcon: {
    marginBottom: size(6),
  },
  footerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: size(10),
  },
}