import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";

const Test = () => {
  return (
    <ScrollView horizontal={true}>
      <View>
        <ImageBackground
          source={require("../../assets/QuizScreen/capitals.png")}
          style={{ width: 700, height: "100%" }}
        >
          <Pressable onPress={() => alert("hello")}>
            <Text style={{ color: "white", paddingTop: 30, paddingLeft: 150 }}>
              Hello
            </Text>
          </Pressable>
          <Pressable onPress={() => alert("world")}>
            <Text style={{ color: "white", paddingTop: 160, paddingLeft: 450 }}>
              world
            </Text>
          </Pressable>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Test;
