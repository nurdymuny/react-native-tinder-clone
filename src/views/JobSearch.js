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
      "Make a pre-trip and post-trip inspection of truck and trailer; fill out DOT inspection forms at end of each trip.",
      "Drive to and from farms, making 1 to 4 trips day and night with a driving range of 30 minutes to 4 hours without a stop.",
      "Must carry cover during winter and assist with covering load when temperature is below 30 degrees",
      "Must cross scale with tractor and trailer before going to farms and when returning fill trucks with fuel before scaling the full load.",
      "Demonstrate excellent attendance and punctuality.",
    ],
    qualifications: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
    details: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
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
        duties={item.duties}
        qualifications={item.qualifications}
        details={item.details}
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