import React from "react";
import { Image, View } from "react-native";

const imageSnap = props => {
  return (
    <Image source={{ uri: props.url }} style={{ width: 90, height: 90 }} />
  );
};

export default imageSnap;
