import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SecondScreen extends React.Component {
  lol(){
    console.log('yeah, seriously.')
  }
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'lul');
    return (
      <View style={styles.container}>
        <Text onPress={ () => this.lol()}>Open up SecondScreen.js to start working on your app! yay</Text>
        <Text>Changes you make will automatically reload.{name}</Text>
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