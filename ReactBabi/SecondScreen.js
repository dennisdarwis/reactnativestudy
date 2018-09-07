import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListName from './ListName'

export default class SecondScreen extends React.Component {
  lol(){
    console.log('yeah, seriously.')
  }
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'lul');
    const sampleData = [
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
    ];
    return (
      <View style={styles.parent}>
        <View style={styles.container}>
          <Text onPress={ () => this.lol()}>Open up SecondScreen.js to start working on your app! yay</Text>
          <Text>Changes you make will automatically reload.{name}</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
        <ListName listItem = {sampleData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, parent: {
    flex: 1
  }
});