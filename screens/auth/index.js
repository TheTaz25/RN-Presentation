import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { USER } from '../../asyncs.js';

import { Container, Text, Input, Form, Item, Content, Label, Button } from 'native-base';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const password = "asdf1234";

const style = {
  viewcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingLeft: 25,
    paddingRight: 25
  },
  lg: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  label: {
    color: "white"
  },
  button: {
    marginTop: 15,
    backgroundColor: "#252525"
  },
  input: {
    color: "white"
  }
};

class AuthScreen extends React.Component {

  state = {
    username: "",
    password: ""
  }

  async handlePress(){
    if(this.state.password === password && this.state.username){
      const x = {
        isLoggedIn: true,
        username: this.state.username
      }
      try{
        await AsyncStorage.setItem(USER, JSON.stringify(x));
        this.props.navigation.navigate("App");
      } catch(e){
        alert("Something went wrong!");
      }
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
          <View style={style.viewcontainer}>
            <Item floatingLabel>
              <Label style={style.label}>Username</Label>
              <Input
                value={this.state.username}
                onChangeText={(username) => {this.setState({username})}}
                style={style.input}
                />
            </Item>

            <Item floatingLabel>
              <Label style={style.label}>Password</Label>
              <Input
                value={this.state.password}
                onChangeText={(password) => {this.setState({password})}}
                style={style.input}
                />
            </Item>
            <Button
              full
              style={style.button}
              onPress={this.handlePress.bind(this)}
              >
              <Text>Log in!</Text>
            </Button>
          </View>
        </LinearGradient>

      </Container>
    );
  }
}

export default AuthScreen;
