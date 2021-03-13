import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.props = props;
  }

  render() {
    return (
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        backgroundColor: '#000000'
      }}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../assets/logo.png')}
            style={{width: 30, height: 30, marginRight: 5}}
          />
          <Text style={{fontWeight: '100', color: '#ccc', fontSize: 24}}>Cinemax</Text>
        </View>
        {this.props.bars}
      </View>
    );
  }
}
