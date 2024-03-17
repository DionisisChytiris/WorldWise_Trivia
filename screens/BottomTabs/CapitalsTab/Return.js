import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const Return = () => {
  const { height, width, scale, fontScale } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 20}}>
        <Text style={styles.header}>Window Dimension Data</Text>
        <Text>Height: {height}</Text>
        <Text>Width: {width}</Text>
        <Text>Font scale: {fontScale}</Text>
        <Text>Pixel ratio: {scale}</Text>
      </View>
      <View style={{width: '100%', height: 400}}>
        <MapView style={styles.map} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    marginBottom: 12,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Return;
