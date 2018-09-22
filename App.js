import React from "react";
import { StyleSheet, Text, View } from "react-native";

//import Map from "./components/Map";
import CameraExample from "./components/CameraExample";
import ImageSnap from "./components/ImageSnap";

export default class App extends React.Component {
  state = { photoUrl: undefined };

  handleLocationChange = coordinates => {
    console.log(coordinates);
  };

  handlePictureTake = photoUrl => {
    //alert(photoUrl.uri);
    this.setState({ photoUrl: photoUrl.uri });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Map onLocationChange={this.handleLocationChange} /> */}
        <CameraExample onPictureTake={this.handlePictureTake} />
        <ImageSnap url={this.state.photoUrl} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
