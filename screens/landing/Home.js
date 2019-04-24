import React from 'react';
import { items } from './items.js';
import _ from 'lodash';

import { Container, Content, Card, CardItem, Icon, Text, H3, Header } from 'native-base';
import { View } from 'react-native';

class HomeScreen extends React.Component {

  _renderMenu(){
    let ret = [];
    _.forEach(items, item => {
      ret.push(
        <Card
          key={item.id}
          style={{ marginRight: 15, marginLeft: 15 }}
          >
          <CardItem
            cardBody
            button
            onPress={() => {
              this.props.navigation.navigate(item.activity);
            }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 70, height: 70, margin: 15, flex: 0, justifyContent: "center", alignItems: "center"}}>
                <Icon type={item.icon_type} name={item.icon_name} style={{ fontSize: 50 }}/>
              </View>
              <View style={{ flex: 1, justifyContent: "center"}}>
                <H3 style={{ fontSize: 17, fontWeight: "bold"}}>{item.title}</H3>
                <Text style={{ fontSize: 14 }}>{item.subtitle}</Text>
              </View>
            </View>
          </CardItem>
        </Card>
      );
    })
    return ret;
  }

  render(){
    return (
      <Container>
        <Header />
        <Content>
          {this._renderMenu()}
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
