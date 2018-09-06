import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator,} from 'react-navigation'; //Screen Navigation
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
/**
 * transitionConfig for StackNavigator
 */
const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 200,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {      
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}
/**
 * Define all the available screens with createStackNavigator
 */
const App = createStackNavigator({
  FirstScreen: { screen: FirstScreen }, // Assign the screens
  SecondScreen: { screen: SecondScreen },
},{
  initialRouteName: 'FirstScreen', // Assign the home screen
  transitionConfig
});

export default App;

/*export default class App extends React.Component {
  lol(){
    console.log('yeah, seriously.')
    navigate('SecondScreen', {})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={ () => this.lol()}>Open up SecondScreen.js to start working on your app! yay</Text>
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
*/