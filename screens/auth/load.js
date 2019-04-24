import React from 'react';
import { USER } from '../../asyncs.js';
import AsyncStorage from '@react-native-community/async-storage';

import { Container } from 'native-base';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const style = StyleSheet.create({
  lg: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
})

class Load extends React.Component {

  constructor(props){
    super(props);
    this.bootstrapAsync = this.bootstrapAsync.bind(this);
  }

  componentDidMount() {
    setTimeout(this.bootstrapAsync, 2000);
  }

  bootstrapAsync = async () => {
    try{
      let state = await AsyncStorage.getItem(USER);
      state = await JSON.parse(state);
      if(state && state.isLoggedIn){
        this.props.navigation.navigate("App");
        // Show
        return;
      }
      this.props.navigation.navigate("Auth");
    } catch(e){
      throw e;
    }
  }

  render(){
    return (
      <Container>
        <LinearGradient
          style={style.lg}
          colors={['#00beda', '#007990', '#004050']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          >

        </LinearGradient>
      </Container>
    );
  }
}

export default Load;
