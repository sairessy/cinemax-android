import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
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

import { Button, RadioButton } from 'react-native-paper';

import { Video, AVPlaybackStatus } from 'expo-av';
import Constants from 'expo-constants';

import Header from './components/Header';
import Contact from './components/Contact';
import UpdateCheck from './components/UpdateCheck';

import AsyncStorage from '@react-native-async-storage/async-storage';

const screen = {
  width: new Dimensions.get('window').width,
  height: new Dimensions.get('window').height
}

const movies = require('./data/movies');
const theme = require('./modules/theme');

function getLimitedMovies(limit) {
  let mvs = [];
  for (let i = 0; i < limit; i++) {
    mvs.push(movies[i]);
  }

  return mvs;
}

export default class App extends React.Component {
  constructor() {
    super();

    this.limit = 40;
    this.increment = 40;

    this.moviesLTD = getLimitedMovies(this.limit);

    this.state = {
      categoriesShown: false,
      activeTab: 'search',
      movies: this.moviesLTD,
      video: this.moviesLTD[39],
      searchFocus: false,
      isFavorite: false,
      searchText: '',
      favMovies: [],
      readyToDisplay: false,
      moviePlaying: false,
      alertShown: false,
      theme: theme.light,
      checked: 'first',
      stillHaveData: true,
      anm: new Animated.Value(40 - screen.width)
    }

    this.video = null;

    this.history = [];

    this.favorites = []

    activateKeepAwake();
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
    this.setState({searchText: text});
    let results = [];
    
    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i];
      if(movie.title.toLowerCase().includes(text.toLowerCase())) {
        results.push(movie);
      }
    }

    if(results.length > 0 && text.length > 3) {
      this.setState({movies: results});
    } else {
      this.setState({movies: this.moviesLTD});
    }
  }

  // Play movie given movie object
  playMovie(m) {

    this.setState({
      movies: this.moviesLTD,
      video: m,
      categoriesShown: false,
      readyToDisplay: false,
      isFavorite: this.favorites.includes(m.id.toString()),
      moviePlaying: false
    });

    this.anm(true);
    this.setState({ categoriesShown: false});
    this.addViewToMovie(m.id);    
  }

  // Play movie given it's id (related movie)
  playRelatedMovie(id) {
    let movie = {};
    for (let i = 0; i < this.state.movies.length; i++) {
      const m = this.state.movies[i];
      if(m.id === id.toString()) {
        movie = m;
        break;
      }
    }

    this.setState({
      readyToDisplay: false,
      video: movie,
      isFavorite: this.favorites.includes(id.toString()),
      moviePlaying: false
    });
  }

  // Check if movie has view
  movieHasView(id) {
    let has = false;

    for (let i = 0; i < this.history.length; i++) {
      const h = this.history[i];
      if(h === id) {
        has = true;
        break;
      }
    }

    return has;
  }

  // Add view to video
  addViewToMovie(id) {
    let has = false;

    for (let i = 0; i < this.history.length; i++) {
      const h = this.history[i];
      if(h === id) {
        has = true;
        break;
      }
    }

    if(!has) {
      this.history.push(id);
    }
  }

  // Get movie by it's id
  getMovieById(id) {
    let movieTitle = '';
    for (let i = 0; i < this.state.movies.length; i++) {
      const movie = this.state.movies[i];
      if(movie.id === id.toString()) {
        movieTitle = movie.title;
        break;
      }
    }

    return movieTitle;
  }

  getMoreMovies() {
    this.limit += this.increment;
    
    if(this.limit >= movies.length) {
      this.limit = movies.length;
      this.setState({stillHaveData: false});
    }
    
    this.moviesLTD = getLimitedMovies(this.limit);
    
    this.setState({movies: this.moviesLTD});
  }

  // Change Theme
  changeTheme(val) {
    this.setState({checked: val}, ()=> {
      switch (this.state.checked) {
        case 'first':
          this.setState({theme: theme.light});
        break;
      
        case 'second':
          this.setState({theme: theme.dark});
        break;
      }
    });
  }

  componentDidMount = async ()=> {
  }
 
  render() {
    return (
      <View style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: this.state.theme.background
      }}>
        <View style={{flex: 0.4}}>
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
                    require('./assets/icons/times-solid.png') : 
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
            }}
          >
            {/* Video */}
            <Video
              ref={this.video}
              style={{
                backgroundColor: '#000000',
                height: 0.3 * screen.height              
              }}
              source={{
                uri: this.state.video.url,
              }}
              useNativeControls
              resizeMode="contain"
              onReadyForDisplay={()=> this.setState({readyToDisplay: true})}
              onPlaybackStatusUpdate={(status)=> {
                // if(Math.round(status.positionMillis) > 10000 && !this.state.alertShown) {
                //   console.log('Eventually you will have to pay a tiny amount to watch full move!')
                //   this.setState({alertShown: true})
                // }
              }}
            />

            {/* Logging gif and play button */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: 'auto',
                display: this.state.readyToDisplay ? 'none' : 'flex'
              }}
            >
              <Image
                style={{
                  width: 60,
                  height: 60,
                  // display: this.state.readyToDisplay ? 'none' : 'flex'
                }}
                source={require('./assets/icons/loader.gif')}
              />
            </View>
          </View>

          
        </View>
        
        <KeyboardAvoidingView
          //  behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{
            flex: 0.6,
            backgroundColor: this.state.theme.background
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 5,
            }}>
           

            <Text
              style={{
                fontSize: 18,
                padding: 5,
                textAlign: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#000',
                color: this.state.theme.id === 'dark' ? '#111' : '#444',
              }}
            >
              {this.state.video.title}
            </Text>
          </View>
         
        
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}
            >
              <Text style={{padding: 10, textAlign: 'justify'}}>{this.state.video.description}</Text>
             
              {/* {this.state.movies.map(r=> {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: this.state.theme.id === 'dark' ? '#222' : '#DDD',
                      padding: 5,
                      margin: 5,
                      borderRadius: 25
                    }}
                    key={r}
                    onPress={()=> this.playRelatedMovie(r)}
                  >
                    <Text style={{color: '#555'}}>{this.getMovieById(r)}</Text>
                  </TouchableOpacity>
                )
              })} */}
            </View>
          </ScrollView>

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
              borderBottomColor: '#DDDDDD',
              padding: 5,
              backgroundColor: '#FFFFFF'
            }}>
            <Image
              source={require('./assets/logo.png')}
              style={{width: 30, height: 30, marginRight: 5}}
            />
            <Text style={{fontWeight: '100', color: '#000', fontSize: 24}}>Cinemax</Text>
          </View>


          <View
            style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#EEEEEE'}}
          >
            <TouchableOpacity
              onPress={()=> this.setState({activeTab: 'search'})}
              style={{
                flexDirection: 'row', 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: 5,
                borderBottomWidth: 1,
                borderBottomColor: this.state.activeTab === 'search' ? '#ff0000' : '#ccc'
              }}              
            >
            <Image
              source={
                this.state.activeTab === 'search' ?
                require('./assets/icons/search-solid-active.png') :
                require('./assets/icons/search-solid.png')
              }
              style={{width: 25, height: 25, marginRight: 5}}
            />
            <Text style={{color: this.state.activeTab === 'search' ? '#ff0000' : '#000000'}}>Pesquisa</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=> {this.setState({activeTab: 'config'})}}
              style={{
                color: this.state.activeTab === 'config' ? '#ff0000' : '#000000', 
                flexDirection: 'row', 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: 5,
                borderBottomWidth: 1,
                borderBottomColor: this.state.activeTab === 'config' ? '#ff0000' : '#ccc'
              }}
            >
            <Image
              source={
                this.state.activeTab === 'config' ?
                require('./assets/icons/cog-solid-active.png') :
                require('./assets/icons/cog-solid.png')
              }
              style={{width: 25, height: 25, marginRight: 5}}
            />
            <Text style={{color: this.state.activeTab === 'config' ? '#ff0000' : '#000000'}}>Config.</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=> {this.setState({activeTab: 'info'})}}
              style={{
                color: this.state.activeTab === 'info' ? '#ff0000' : '#000', 
                flexDirection: 'row', 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: 5,
                borderBottomWidth: 1,
                borderBottomColor: this.state.activeTab === 'info' ? '#ff0000' : '#ccc'
              }}
            >
            <Image
              source={
                this.state.activeTab === 'info' ?
                require('./assets/icons/info-circle-solid-active.png') :
                require('./assets/icons/info-circle-solid.png') 
              }
              style={{width: 25, height: 25, marginRight: 5}}
            />
            <Text style={{color: this.state.activeTab === 'info' ? '#ff0000' : '#000000'}}>Info</Text>
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
                backgroundColor: '#FCFCFC',
                display: this.state.activeTab === 'search' ? 'flex' : 'none'
              }}
            >
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#CCCCCC',
                  padding: 10,
                  margin: 5,
                  borderRadius: 5,
                  backgroundColor: this.state.searchFocus ? '#FFFFFF' : '#F1F1F1'
                }}

                placeholder={'Pesquisar no cinemax'}
                onChangeText={(text)=> this.searchMovie(text)}
                onFocus={()=> this.setState({searchFocus: true})}
                onBlur={()=> this.setState({searchFocus: false})}
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
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                      onPress={()=> this.playMovie(m)}
                    > 
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center'
                        }}
                      >
                        <Image
                          style={{
                            width: 30,
                            height: 40,
                            backgroundColor: '#EEEEEE',
                            borderRadius: 5,
                            margin: 5
                          }}
                          source={{uri: m.img}}
                        />
                        <Text style={{flexWrap: 'wrap', fontSize: 12}}>{m.title}</Text>
                      </View>

                      <Image 
                        style={{
                          width: 20,
                          height: 20,
                          margin: 5,
                          display: this.movieHasView(m.id) ? 'flex' : 'none'
                        }}
                        source={require('./assets/icons/history-solid.png')}
                      />
                    </TouchableOpacity>
                    )
                  })
                }

                {/* Get more movies */}
                <TouchableOpacity
                  style={{
                    backgroundColor: '#4285F4',
                    padding: 7,
                    borderRadius: 2,
                    margin: 5,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: (this.state.searchText === '' && this.state.stillHaveData) ? 'flex' : 'none'
                  }}
                  activeOpacity={0.8}
                  onPress={()=>this.getMoreMovies()}
                >
                  <Image style={{width: 25, height: 25, marginRight: 5}} source={require('./assets/icons/plus-solid.png')} />
                  <Text style={{color: '#fff', textAlign: 'center'}}>Mostrar mais</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
            
            {/* Config tab */}
            <View
              style={{
                flex: 1,
                backgroundColor: '#fcfcfc',
                display: this.state.activeTab === 'config' ? 'flex' : 'none'
              }}
            >
              <Text style={{margin: 5, color: '#555', textAlign: 'center'}}>Tema</Text>
              <View>

              <RadioButton.Group
                onValueChange={(val)=> {
                  this.changeTheme(val);
                }}

                value={this.state.checked}
              >
                <RadioButton.Item label="Claro" value="first" color="#ff0000" uncheckedColor="#000"/>
                <RadioButton.Item label="Escuro" value="second" color="#ff0000" uncheckedColor="#000" />
              </RadioButton.Group>
              </View>
            </View>

            
            {/* Info tab */}
            <View
              style={{
                flex: 1,
                backgroundColor: '#fcfcfc',
                display: this.state.activeTab === 'info' ? 'flex' : 'none'
              }}
            >
              <Text style={{textAlign: 'center', color: '#555'}}>Fale connosco</Text>
              <Contact />

              <UpdateCheck />
            </View>

          </View>

        </Animated.View>
      </View>
    );
  }
}
