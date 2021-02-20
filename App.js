import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
  Text, 
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Animated,
  Dimensions,
  TextInput
} from 'react-native';

import { Video, AVPlaybackStatus } from 'expo-av';

import Constants from 'expo-constants';

import Header from './components/Header';

const screen = {
  width: new Dimensions.get('window').width,
  height: new Dimensions.get('window').height
}

const movies = require('./data/movies');

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesShown: false,
      activeTab: 'search',
      movies,
      videoPaused: true,
      videoSrc: movies[0].url,
      anm: new Animated.Value(40 - screen.width)
    }
  }

  anm(shown) {
    const left = shown ? 40 - screen.width : 0;
    
    Animated.timing(this.state.anm, {
      toValue: left,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  // Search Movie given text
  searchMovie(text) {
    let results = [];

    for (let i = 0; i < this.state.movies.length; i++) {
      const movie = this.state.movies[i];
      if(movie.title.toLowerCase().includes(text.toLowerCase())) {
        results.push(movie);
      }
    }

    if(results.length > 0 && text.length > 0) {
      this.setState({movies: results});
    } else {
      this.setState({movies});
    }
  }

  // Play movie given it's id
  playMovie(m) {
    this.setState({videoSrc: m.url});
  }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0.5}}>
          <Header
            bars={
              <TouchableOpacity 
                style={{
                  width: 30,
                  height: 30,
                  padding: 5,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onPress={()=> {
                  this.setState({categoriesShown: !this.state.categoriesShown});
                  this.anm(this.state.categoriesShown);
                }}
              >
                <Image
                  source={
                    this.state.categoriesShown ? 
                    require('./assets/icons/bars.png') : 
                    require('./assets/icons/bars.png')
                  }

                  style={{
                    width: 30, 
                    height: 30,
                    marginRight: 5
                  }}
                />
              </TouchableOpacity>
            }
          />

          <View
            style={{
              // backgroundColor: '#ccc',
              height: 0.35 * screen.height
              
            }}
          >
            {/* Video */}
            <Video
              style={{
                height: 0.35 * screen.height,
                backgroundColor: '#000000'
              }}
              ref={'video'}
              source={{
                uri: this.state.videoSrc,
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
            />
          </View>
        </View>
        
        <KeyboardAvoidingView
          //  behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{
            flex: 0.5
          }}
        >

        </KeyboardAvoidingView>
        
        {/* Categories */}
        <Animated.View
          style={{
            width: screen.width - 40,
            left: this.state.anm,
            bottom: 0,
            top: 0,
            backgroundColor: '#fff',
            borderRightWidth: 1,
            borderRightColor: '#eee',
            position: 'absolute'
          }}
        >
          <View 
            style={{
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'center', 
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              padding: 5
            }}>
            <Image
              source={require('./assets/logo.png')}
              style={{width: 30, height: 30, marginRight: 5}}
            />
            <Text style={{fontWeight: '100', color: '#000', fontSize: 24}}>Cinemax</Text>
          </View>


          <View
            style={{flexDirection: 'row', justifyContent: 'space-between'}}
          >
            <TouchableOpacity
              onPress={()=> this.setState({activeTab: 'search'})}
              style={{flexDirection: 'row', flex: 1, justifyContent: 'center', padding: 5, borderBottomWidth: 1, borderBottomColor: this.state.activeTab === 'search' ? '#ff0000' : '#eee'}}              
            >
            <Image
              source={require('./assets/search_50px.png')}
              style={{width: 20, height: 20, marginRight: 5}}
            />
            {/* <Text>Search</Text> */}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=> this.setState({activeTab: 'config'})}
              style={{flexDirection: 'row', flex: 1, justifyContent: 'center', padding: 5, borderBottomWidth: 1, borderBottomColor: this.state.activeTab === 'config' ? '#ff0000' : '#eee'}}
            >
            <Image
              source={require('./assets/settings_50px.png')}
              style={{width: 20, height: 20, marginRight: 5}}
            />
            {/* <Text>Config</Text> */}
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={()=> this.setState({activeTab: 'notifications'})}
              style={{flexDirection: 'row', flex: 1, justifyContent: 'center', padding: 5, borderBottomWidth: 1, borderBottomColor: this.state.activeTab === 'notifications' ? '#ff0000' : '#eee'}}
            >
            <Image
              source={require('./assets/notification_100px.png')}
              style={{width: 20, height: 20, marginRight: 5}}
            />
            {/* <Text>Notifications</Text> */}
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=> this.setState({activeTab: 'donate'})}
                style={{flexDirection: 'row', flex: 1, justifyContent: 'center', padding: 5, borderBottomWidth: 1, borderBottomColor: this.state.activeTab === 'donate' ? '#ff0000' : '#eee'}}
              >
              <Image
                source={require('./assets/heart.png')}
                style={{width: 20, height: 20, marginRight: 5}}
              />
              {/* <Text>Donate</Text> */}
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=> this.setState({activeTab: 'share'})}
                style={{flexDirection: 'row', flex: 1, justifyContent: 'center', padding: 5, borderBottomWidth: 1, borderBottomColor: this.state.activeTab === 'share' ? '#ff0000' : '#eee'}}
              >
              <Image
                source={require('./assets/share.png')}
                style={{width: 20, height: 20, marginRight: 5}}
              />
              {/* <Text>Donate</Text> */}
            </TouchableOpacity>
          </View>

          {/* Tabs */}
          <View
            style={{
              flex: 1
            }}
          >
            {/* Tab search */}
            <View
              style={{
                flex: 1,
                backgroundColor: '#fcfcfc',
                display: this.state.activeTab === 'search' ? 'flex' : 'none'
              }}
            >
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#eee',
                  padding: 10,
                  margin: 5,
                  borderRadius: 2,
                  backgroundColor: '#f1f1f1'
                }}

                placeholder={'Pesquisar no cinemax'}
                onChangeText={(text)=> this.searchMovie(text)}
              />

                <ScrollView
                  style={{
                  }}
                >

                {
                  this.state.movies.map(m=> {
                    return (
                      <TouchableOpacity
                      key={m.id}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                      }}
                      onPress={()=> this.playMovie(m)}
                    >
                      <Image
                        style={{
                          width: 30,
                          height: 30,
                          backgroundColor: '#eeeeee',
                          borderRadius: 5,
                          margin: 5
                        }}
                      />
                      <Text>{m.title}</Text>
                    </TouchableOpacity>
                    )
                  })
                }
              </ScrollView>
            </View>
            
            {/* Config tab */}
            <View
              style={{
                flex: 1,
                backgroundColor: '#fcfcfc',
                justifyContent: 'center',
                alignItems: 'center',
                display: this.state.activeTab === 'config' ? 'flex' : 'none'
              }}
            >
              <Text>Config</Text>
            </View>

            {/* Notifications tab */}
            <View
              style={{
                flex: 1,
                backgroundColor: '#fcfcfc',
                justifyContent: 'center',
                alignItems: 'center',
                display: this.state.activeTab === 'notifications' ? 'flex' : 'none'
              }}
            >
              <Text>Notifications</Text>
            </View>
            
            {/* Donate tab */}
            <View
              style={{
                flex: 1,
                backgroundColor: '#fcfcfc',
                justifyContent: 'center',
                alignItems: 'center',
                display: this.state.activeTab === 'donate' ? 'flex' : 'none'
              }}
            >
              <Text>Donate</Text>
            </View>

            {/* Share tab */}
            <View
              style={{
                flex: 1,
                backgroundColor: '#fcfcfc',
                justifyContent: 'center',
                alignItems: 'center',
                display: this.state.activeTab === 'share' ? 'flex' : 'none'
              }}
            >
              <Text>Share</Text>
            </View>
            

          </View>

        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
});
