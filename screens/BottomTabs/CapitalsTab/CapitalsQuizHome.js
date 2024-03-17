import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CapitalsQuizHome = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true}>
      <View>
        <ImageBackground
          source={require("../../../assets/QuizScreen/capitals.png")}
          style={{ width: 1200, height: "100%" }}
        >
          <Pressable
            onPress={() => navigation.navigate("Quiz1")}
            style={styles.button1}
          >
            <Text style={{ color: "white" }}>Quiz 1</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Quiz2")}
            style={styles.button2}
          >
            <Text style={{ color: "white" }}>Quiz 2</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Quiz3")}
            style={styles.button3}
          >
            <Text style={{ color: "white" }}>Quiz 3</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Quiz4")}
            style={styles.button4}
          >
            <Text style={{ color: "white" }}>Quiz 4</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Quiz5")}
            style={styles.button5}
          >
            <Text style={{ color: "white" }}>Quiz 5</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Quiz6")}
            style={styles.button6}
          >
            <Text style={{ color: "white" }}>Quiz 6</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Quiz7")}
            style={styles.button7}
          >
            <Text style={{ color: "white" }}>Quiz 7</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Quiz8")}
            style={styles.button8}
          >
            <Text style={{ color: "white" }}>Quiz 8</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Quiz9")}
            style={styles.button9}
          >
            <Text style={{ color: "white" }}>Quiz 9</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Quiz10")}
            style={styles.button10}
          >
            <Text style={{ color: "white" }}>Quiz 10</Text>
          </Pressable>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default CapitalsQuizHome;

const styles = StyleSheet.create({
  button1: {
    backgroundColor: "red",
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 80,
    left: 80,
  },
  button2: {
    backgroundColor: "red",
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 140,
    left: 80,
  },
  button3: {
    backgroundColor: "red",
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 200,
    left: 80,
  },
  button4: {
    backgroundColor: "red",
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 260,
    left: 80,
  },
  button5: {
    backgroundColor: "red",
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 320,
    left: 80,
  },
  button6: {
    backgroundColor: "red",
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 380,
    left: 80,
  },
  button7: {
    backgroundColor: "red",
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 140,
    left: 80,
  },
  button8: {
    backgroundColor: "red",
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 80,
    left: 80,
  },
  button9: {
    backgroundColor: "red",
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    left: 80,
  },
  button10: {
    backgroundColor: "red",
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    left: 180,
  },
})