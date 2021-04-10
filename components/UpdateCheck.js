import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default class UpdateCheck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedData: false,
      data: {}
    }

    this.props = props;
  }

  async componentDidMount() {
    const url = 'https://cinemax-backend.glitch.me/update';
    try {
      const ft = await fetch(url);
      if(ft.statusText === 'OK') {
        const data = await ft.json();
        this.setState({fetchedData: true, data});
      }
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <View>
          <Text 
            style={{
              textAlign: 'center', 
              color: '#555', 
              padding: 5,
              fontSize: 12,
              justifyContent: 'center',
              display: this.state.fetchedData ? 'flex' : 'none'
            }}>
              Actualização de - {this.state.data.date}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#34ffc0',
              padding: 10,
              borderRadius: 2,
              color: '#fff',
              margin: 5,
              display: this.state.fetchedData ? 'flex' : 'none'
            }}
          >
            <Text style={{color: '#fff', textAlign: 'center'}}>Baixar</Text>
          </TouchableOpacity>

          <Text
            style={{display: this.state.fetchedData ? 'none' : 'flex', padding: 5}}
            >
              <Text style={{marginRight: 5, color: '#ff0000'}}>{'#'}</Text>Quando estiver online verá aqui a últma actualização desponibilizada!
          </Text>
      </View>
    );
  }
}
