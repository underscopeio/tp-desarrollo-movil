import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { Camera, Permissions } from "expo";

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  takePicture = async () => {
    if (this.camera) {
      //
      let photo = await this.camera.takePictureAsync();
      this.props.onPictureTake(photo);
      //alert(photo);
    }

    //;
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  handleCameraRef = ref => (this.camera = ref);

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={this.handleCameraRef}
            style={{ flex: 1 }}
            type={this.state.type}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Flip{" "}
                </Text>
                <Button title="TAKE" onPress={this.takePicture} />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
