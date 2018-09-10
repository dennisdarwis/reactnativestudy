import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Button } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      data: [
        {
          value: "0",
          label: 'Configure'
        },
        {
          value: "1",
          label: 'Catalogue'
        }
      ]
    };
  }
  /*state = {
    username: '',
    password: '',
    data: [
      {
        value: "0",
        label: 'Configure'
      },
      {
        value: "1",
        label: 'Catalogue'
      }
    ]
  };*/

  validateForm = () =>{
    var username = this.state.username;
    var password = this.state.password;
    var data = this.state.data.find(e => e.selected == true).value;;
    console.log('Result: \nusername: '+username+'\npassword: '+password+'\ndata: '+data);
  }

  login = () => {
    console.log('Log in button pressed');
    this.validateForm();
  }
  signUp = () => {
    console.log('Sign up button pressed');
  }
  forgotPassword = () => {
    console.log('Forgot password button pressed');
  }

  onRadioPress = data => {
    this.setState({ data });
    let selected = this.state.data.find(e => e.selected == true);
    console.log(selected.value, selected.label);
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.parentContainer}>
          <View style={styles.imageContainer}>
            <View style={imageStyles.iconContainer}>
              <View style={{backgroundColor: '#CCCCCC', width: 50, height: 50}}>
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
          <View style={styles.buttonContainer}>
            <View style={buttonStyles.subContainer}>
              <RadioGroup radioButtons={this.state.data} onPress={this.onRadioPress} flexDirection='row'/>
            </View>
            <View style={buttonStyles.subContainer}>
              <Button title='LOG IN' style={buttonStyles.loginButton} onPress={this.login} color="#2196f3" />
            </View>
            <View style={buttonStyles.subContainer}>
              <Text style={buttonStyles.hyperlinkText} onPress={this.signUp}>
                Sign-up
              </Text>
            </View>
            <View style={buttonStyles.subContainer}>
            <Text style={buttonStyles.hyperlinkText} onPress={this.forgotPassword}>
                Forgot Password
              </Text>
            </View>
          </View>
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
    backgroundColor: '#FFFFFF',
    flex: 0.5
  },
  text:{
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
});

const buttonStyles = StyleSheet.create({
  subContainer:{
    flexDirection:'row',
    flex:0.25,
    justifyContent: 'center',
    alignItems: 'center'
    /*marginRight: 80,
    marginLeft: 80*/
  },
  hyperlinkText:{
    color: '#2196f3',
    textDecorationLine: 'underline'
  },
  loginButton:{
    flex: 1
  }
});
