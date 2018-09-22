import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Map from './components/Map'
import Localizar from './components/Location'

export default class App extends React.Component {
  handleLocationChange = coordinates => {
    console.log(coordinates)
  }

  render() {
    return (
      <View style={styles.container}>
        <Map onLocationChange={this.handleLocationChange} />
      </View>
    )
  }
}

// <Map onLocationChange={this.handleLocationChange} />

// <Localizar/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
