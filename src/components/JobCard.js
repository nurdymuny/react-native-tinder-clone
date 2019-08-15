import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
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
import { DEVICE_HEIGHT } from '../helpers/statics';
import {
  svgWorkTypeIcon, svgLocationIcon, svgRateIcon, svgInfoIcon,
  CheckListIcon, CollapseIcon, ExpandIcon,
} from '../assets';
import { Styles, Colors } from '../helpers/theme';

export default class JobCard extends Component {

  state = {
    statusBarHeight: 20,
    topBarHeight: 44,
    isSummaryOrDetail: true,
    activeSections: [],
  }

  componentDidMount() {
    Navigation.constants()
      .then(value => {
          this.setState({
            statusBarHeight: value.statusBarHeight,
            topBarHeight: value.topBarHeight,
          })
      })
      .catch(err => console.warn('Navigation.constants error:', err));
  }

  onPressInfo = () => {
    this.setState({ isSummaryOrDetail: !this.state.isSummaryOrDetail });
  }

  renderHeader = (section, index, isActive) => {
    return (
      <View style={styles.collapsibleHeader}>
        <Text style={StyleSheet.flatten([Styles.textNormal, { color: Colors.WHITE, fontWeight: '600' }])}>{section.title}</Text>
        <Image style={styles.collapsibleImage} source={isActive ? CollapseIcon : ExpandIcon} />
      </View>
    );
  };
  renderContent = (section) => {
    if (Array.isArray(section.content)) {
      return section.content.map((_content, _c) => (
        <View style={styles.collapsibleListContent}>
          <Text key={_c} style={StyleSheet.flatten([Styles.textNormal, { color: Colors.WHITE }])}>{_content}</Text>
        </View>
      ))
    }
    return (
      <View style={styles.collapsibleContent}>
        <Text style={StyleSheet.flatten([Styles.textNormal, { color: Colors.WHITE, textAlign: 'left' }])}>{section.content}</Text>
      </View>
    );
  };
  updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    const { logo, title, subtitle, hours, location, rate, summary, duties = [], qualifications = "", details = "" } = this.props;
    const { isSummaryOrDetail, activeSections, statusBarHeight, topBarHeight } = this.state;

    return (
      <View style={StyleSheet.flatten([Styles.cardContainer, { height: isSummaryOrDetail ? undefined : (DEVICE_HEIGHT - statusBarHeight - topBarHeight * 2 - size(66)) }])}>
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
        <View style={StyleSheet.flatten([Styles.cardFooter, { padding: isSummaryOrDetail ? size(25) : 0, flex: isSummaryOrDetail ? undefined : 1 }])}>
          {isSummaryOrDetail ? (
            <View>
              <View style={styles.footerTitle}>
                <Text style={StyleSheet.flatten([Styles.textNormal, { color: Colors.GRAY_TEXT }])}>SUMMARY</Text>
                <TouchableOpacity onPress={this.onPressInfo}><SvgUri width={size(40)} height={size(40)} source={svgInfoIcon} /></TouchableOpacity>
              </View>
              <Text style={Styles.textNormal} numberOfLines={3}>{summary}</Text>
            </View>
          ) : (
            <ScrollView style={{ flex: isSummaryOrDetail ? undefined : 1 }}>
              <Accordion
                sections={[
                  { title: 'Responsibilities/Duties', content: duties },
                  { title: 'Required Qualifications', content: qualifications },
                  { title: 'Details', content: details },
                ]}
                activeSections={activeSections}
                renderHeader={this.renderHeader}
                renderContent={this.renderContent}
                onChange={this.updateSections}
              />
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
  collapsibleHeader: {
    borderColor: Colors.GRAY_TEXT, borderTopWidth: StyleSheet.hairlineWidth,
    padding: size(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  collapsibleImage: {
    width: size(15),
    height: size(15),
    resizeMode: 'contain',
  },
  collapsibleContent: {
    padding: size(25),
    paddingTop: 0
  },
  collapsibleListContent: {

  }
}