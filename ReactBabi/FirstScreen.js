import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {createStackNavigator,} from 'react-navigation';

export default class FirstScreen extends React.Component {
  lol(){
    console.log('yeah, seriously.')
    this.props.navigation.navigate('SecondScreen', {name:"bololo"})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={ () => this.lol()}>Open up FirstScreen.js to start working on your app! yay</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
