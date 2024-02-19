import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeMode/ThemeProvider";
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const QuizScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("score").then((value) => {
        if (value != null) {
          let score = JSON.parse(value);
          setScore(score);
          console.log(score);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={[
            styles.container,
            { backgroundColor: colors.backgroundDrawer },
          ]}
        >
          <View style={styles.title}>
            <Text style={[styles.textTitle, { color: colors.textDrawer }]}>
              {t("categories")}
            </Text>
          </View>
          <View style={styles.content}>
            {/* Capitals */}
            <Pressable
              onPress={() => navigation.navigate("Capitals")}
              style={[
                styles.button,
                {
                  backgroundColor: colors.buttonContextQuiz,
                  borderColor: colors.borderColor,
                  borderWidth: 2,
                },
              ]}
            >
              <View style={styles.buttonContext}>
                <Image
                  style={styles.image}
                  source={require("../assets/QuizScreen/lon.png")}
                />
                <Text style={[styles.text, { color: colors.textDrawer }]}>
                  {t("capitals")}
                </Text>
              </View>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressBarColor,
                    { width: `${Math.floor((score / 100) * 100)}%` },
                  ]}
                />
                {/* width: `${Math.floor((score / 100) * 100)}%`, */}
              </View>
            </Pressable>
            {/* Flags */}
            <Pressable
              onPress={() => navigation.navigate("Flags")}
              style={[
                styles.button,
                {
                  backgroundColor: colors.buttonContextQuiz,
                  borderColor: colors.borderColor,
                  borderWidth: 2,
                },
              ]}
            >
              <View style={styles.buttonContext}>
                <Image
                  style={styles.image}
                  source={require("../assets/QuizScreen/flag.png")}
                />
                <Text style={[styles.text, { color: colors.textDrawer }]}>
                  {t("flags")}
                </Text>
              </View>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressBarColor,
                    { width: `${Math.floor((score / 100) * 100)}%` },
                  ]}
                />
                {/* width: `${Math.floor((score / 100) * 100)}%`, */}
              </View>
            </Pressable>
            {/* Animals */}
            <Pressable
              onPress={() => navigation.navigate("Animals")}
              style={[
                styles.button,
                {
                  backgroundColor: colors.buttonContextQuiz,
                  borderColor: colors.borderColor,
                  borderWidth: 2,
                },
              ]}
            >
              <View style={styles.buttonContext}>
                <Image
                  style={styles.image}
                  source={require("../assets/QuizScreen/animals.jpg")}
                />
                <Text style={[styles.text, { color: colors.textDrawer }]}>
                  {t("animals")}
                </Text>
              </View>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressBarColor,
                    { width: `${Math.floor((score / 100) * 100)}%` },
                  ]}
                />
                {/* width: `${Math.floor((score / 100) * 100)}%`, */}
              </View>
            </Pressable>
            {/* Animals/Home */}
            <Pressable
              onPress={() => navigation.navigate("Home")}
              style={[
                styles.button,
                {
                  backgroundColor: colors.buttonContextQuiz,
                  borderColor: colors.borderColor,
                  borderWidth: 2,
                },
              ]}
            >
              <View style={styles.buttonContext}>
                <Image
                  style={styles.image}
                  source={require("../assets/QuizScreen/animals.jpg")}
                />
                <Text style={[styles.text, { color: colors.textDrawer }]}>
                  {t("animals")}
                </Text>
              </View>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressBarColor,
                    { width: `${Math.floor((score / 100) * 100)}%` },
                  ]}
                />
                {/* width: `${Math.floor((score / 100) * 100)}%`, */}
              </View>
            </Pressable>
            {/* Science */}
            <Pressable
              onPress={() => navigation.navigate("Home")}
              style={[
                styles.button,
                {
                  backgroundColor: colors.buttonContextQuiz,
                  borderColor: colors.borderColor,
                  borderWidth: 2,
                },
              ]}
            >
              <View style={styles.buttonContext}>
                <Image
                  style={styles.image}
                  source={require("../assets/QuizScreen/science.jpg")}
                />
                <Text style={[styles.text, { color: colors.textDrawer }]}>
                  {t("science")}
                </Text>
              </View>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressBarColor,
                    { width: `${Math.floor((score / 100) * 100)}%` },
                  ]}
                />
                {/* width: `${Math.floor((score / 100) * 100)}%`, */}
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
  },
  title: { marginTop: 25 },
  content: {
    marginTop: 24,
    justifyContent: "center",
  },
  image: {
    width: width * 0.38,
    height: height * 0.14,
    borderRadius: 20,
  },
  textTitle: {
    fontSize: RFValue(16, 580),
    fontWeight: "bold",
  },
  text: {
    fontSize: RFValue(10, 450),
    fontWeight: "bold",
    width: width * 0.27,
  },
  progressBar: {
    backgroundColor: "#f5f5f5",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    height: 5,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: "3%",
    marginBottom: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
  progressBarColor: {
    backgroundColor: "lightblue",
    borderRadius: 12,
    position: "absolute",
    left: 0,
    height: 5,
    right: 0,
  },
  button: {
    width: width * 0.8,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  buttonContext: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.05,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});
