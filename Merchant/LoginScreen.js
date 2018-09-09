import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView } from 'react-native';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.parentContainer}>
          <View style={styles.imageContainer}>
            <View style={imageStyles.iconContainer}>
              <View style={{backgroundColor: '#FFFFFF', width: 50, height: 50}}>
                <Text>
                  LOGO
                </Text>
              </View>
            </View>
            <View style={imageStyles.textContainer}>
              <Text>
                Merchant App by ANZ
              </Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <View style={formStyles.textInputContainer}>
              <Text style={formStyles.text}>
                Username
              </Text>
              <TextInput
                style={formStyles.form}
                onChangeText={(text) => this.setState({username: text})}
                value={this.state.username}
                underlineColorAndroid='transparent'
              />
            </View>
            <View style={[formStyles.textInputContainer, {marginTop: 20}]}>
              <Text style={formStyles.text}>
                Password
              </Text>
              <TextInput
                style={formStyles.form}
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                underlineColorAndroid='transparent'
              />
            </View>
          </View>
          <View style={styles.buttonContainer}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center'
  }, 
  parentContainer: {
    flex: 0.8,
    backgroundColor: '#EEEEEE',
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  imageContainer:{
    flex:1,
    backgroundColor: '#AAAAAA',
    //alignItems: 'center'
  }, 
  formContainer: {
    flex:1,
    backgroundColor: '#BBBBBB',
    //alignItems: 'center',
    justifyContent: 'center'
  }, 
  buttonContainer: {
    flex:1,
    backgroundColor: '#CCCCCC',
    //alignItems: 'center'
  }
});

const imageStyles = StyleSheet.create({
  iconContainer: {
    flex:0.7,
    backgroundColor: '#AAAAAA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    backgroundColor: '#BBBBBB',
    alignItems: 'center'
  }
});

const formStyles = StyleSheet.create({
  textInputContainer: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form:{
    backgroundColor: '#FFFFFF', flex: 0.5
  },
  text:{
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
});
