/**
* Android Landing Page
 */
'use strict';
import {
  Button,
  Card
} from 'react-native-material-design';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

class client extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Booom App!
        </Text>
        <Text style={styles.instructions}>
          Login Page.
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    top: 0,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('client', () => client);
