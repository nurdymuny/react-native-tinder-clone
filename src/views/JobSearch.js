import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Deck from '../components/deck';
import JobCard from '../components/JobCard';
import NoMoreCard from '../components/no_more_card';
import { Styles } from '../helpers/theme';
import { Logo1, Logo2, Logo3, Logo4 } from '../assets';

const DATA = [
  {
    id: 1, logo: Logo1, title: 'Live Haul Drive', subtitle: 'Perdue Farms', hours: 'Full Time', location: 'Accomac, VA', rate: 13, summary: 'Provides general office support with a variety of clerical activities and related tasks.',
    duties: [
      
    ],
    qualifications: [
    ],
    details: [
    ],
  },
  { id: 2, logo: Logo2, title: 'Live Haul Cooker', subtitle: 'Perdue Farms', hours: 'Full Time', location: 'Accomac, VA', rate: 24, summary: 'Provides general office support with a variety of clerical activities and related tasks.' },
  { id: 3, logo: Logo3, title: 'Live Haul Singer', subtitle: 'Perdue Farms', hours: 'Full Time', location: 'Accomac, VA', rate: 18, summary: 'Provides general office support with a variety of clerical activities and related tasks.' },
  { id: 4, logo: Logo4, title: 'Live Haul Secretary', subtitle: 'Perdue Farms', hours: 'Full Time', location: 'Accomac, VA', rate: 20, summary: 'Provides general office support with a variety of clerical activities and related tasks.' },
];

export default class JobSearch extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  onSwipeLeft = (item) => {
    console.log('left bro', item)
  }

  onSwipeRight = (item) => {
    console.log('right bro', item)
  }

  renderCard = (item) => {
    return (
      <JobCard
        key={item.id}
        logo={item.logo}
        title={item.title}
        subtitle={item.subtitle}
        hours={item.hours}
        location={item.location}
        rate={item.rate}
        summary={item.summary}
      />
    );
  }

  renderEmptyState = () => {
    return (
      <NoMoreCard />
    )
  }

  render() {
    return (
      <View style={Styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
          renderNoMoreCards={this.renderEmptyState}
          isStack={true}
        />
      </View>
    );
  }
}