import React from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.props = props;
  }

  render() {
    return (
      <View style={{
        alignItems: 'center',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <TouchableOpacity
          onPress={()=> Linking.openURL('ttps://mail.google.com/mail/?view=cm&fs=1&to=sairessy@gmail.com')}
        >
          <Image
            source={require('../assets/icons/at-solid.png')}
            style={{width: 30, height: 30, margin: 5}}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('../assets/icons/phone-solid.png')}
            style={{width: 30, height: 30, margin: 5}}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('../assets/icons/whatsapp.png')}
            style={{width: 30, height: 30, margin: 5}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=> Linking.openURL('http://fb.com/sairessyvictorino')}
        >
          <Image
            source={require('../assets/icons/facebook-square.png')}
            style={{width: 30, height: 30, margin: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
