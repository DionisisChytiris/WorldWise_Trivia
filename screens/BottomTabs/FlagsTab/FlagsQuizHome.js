import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";

const FlagsQuizHome = ({ navigation }) => {
  const route = useRoute();
  const score1 = route.params?.score1;
  const score2 = route.params?.score2;
  const score3 = route.params?.score3;
  const score4 = route.params?.score4;
  const score5 = route.params?.score5;
  const score6 = route.params?.score6;
  const score7 = route.params?.score7;
  const score8 = route.params?.score8;
  const score9 = route.params?.score9;
  const score10 = route.params?.score10;
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
          // console.log(score);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView horizontal={true}>
      <ImageBackground
        source={require("../../../assets/continents/worldMap.png")}
        style={{ width: 900, height: "100%" }}
      >
        <Text>FlagsQuizHome</Text>

        {/* Photo Level */}
        <View style={{ position: "absolute", bottom: 30, left: 30 }}>
          <Image
            source={require("../../../assets/more/university.png")}
            style={{ width: 100, height: 180 }}
          />
          <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 18 }}>
            Ambassador
          </Text>
        </View>

        {/* Quiz 1 */}
        <View
          style={{
            position: "absolute",
            top: "25%",
            left: "14%",
            flexDirection: "row",
          }}
        >
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate("Quiz1")}
          >
            <Text>1</Text>
          </Pressable>
          <Text style={{ fontSize: 10 }}> {score1 ? score1 : 0}%</Text>
        </View>

        {/* Quiz  2 */}
        {score1 > 50 ? (
          <View style={{ position: "absolute", top: "43%", left: "14%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("Quiz2")}
            >
              <Text>2</Text>
            </Pressable>
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >
              {score2 ? score2 : 0}%
            </Text>
          </View>
        ) : (
          <View style={{ position: "absolute", top: "43%", left: "14%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => alert("Complete the previous level.")}
            >
              <Text>2</Text>
            </Pressable>
            <Image
              source={require("../../../assets/more/padlock.png")}
              style={{ width: 35, height: 35, position: 'absolute', bottom: -10, right: -10}}
            />
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >
              {score2 ? score2 : 0}%
            </Text>
          </View>
        )}

        {/* Quiz  3 */}
        {score2 > 50 ? (
          <View style={{ position: "absolute", bottom: "22%", left: "28%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("Quiz3")}
            >
              <Text>3</Text>
            </Pressable>
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >
            {score3 ? score3 : 0}%
            </Text>
          </View>
        ) : (
          <View style={{ position: "absolute", bottom: "22%", left: "28%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => alert("Complete the previous level.")}
            >
              <Text>3</Text>
            </Pressable>
            <Image
              source={require("../../../assets/more/padlock.png")}
              style={{ width: 35, height: 35, position: 'absolute', bottom: -10, right: -10 }}
            />
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >
              {score3 ? score3 : 0}%
            </Text>
          </View>
        )}

        {/* Quiz  4*/}
        {score3 > 50 ? (
          <View style={{ position: "absolute", top: "68%", left: "54%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("Quiz4")}
            >
              <Text>4</Text>
            </Pressable>
            <Text style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}>{score4 ? score4 : 0}%</Text>
          </View>
        ) : (
          <View style={{ position: "absolute", top: "68%", left: "54%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => alert("Complete the previous level.")}
            >
              <Text>4</Text>
            </Pressable>
            <Image
              source={require("../../../assets/more/padlock.png")}
              style={{ width: 35, height: 35, position: 'absolute', bottom: -10, right: -10 }}
            />
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >
              {score4 ? score4 : 0}%
            </Text>
          </View>
        )}

        {/*  Quiz  5 */}
        {score4 > 50 ? (
          <View style={{ position: "absolute", top: "52%", left: "50%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("Quiz5")}
            >
              <Text>5</Text>
            </Pressable>
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >{score5 ? score5 : 0}%</Text>
          </View>
        ) : (
          <View style={{ position: "absolute", top: "52%", left: "50%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => alert("Complete the previous level.")}
            >
              <Text>5</Text>
            </Pressable>
            <Image
              source={require("../../../assets/more/padlock.png")}
              style={{ width: 35, height: 35, position: 'absolute', bottom: -10, right: -10 }}
            />
            <Text
              style={{ position: "absolute", top: 0, right: -25, fontSize: 10 }}
            >
              {score5 ? score5 : 0}%
            </Text>
          </View>
        )}

        {/* Quiz  6 */}
        {score5 > 50 ? (
          <View style={{ position: "absolute", top: "38%", left: "45%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("Quiz6")}
            >
              <Text>6</Text>
            </Pressable>
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >{score6 ? score6 : 0}%</Text>
          </View>
        ) : (
          <View style={{ position: "absolute", top: "38%", left: "45%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => alert("Complete the previous level.")}
            >
              <Text>6</Text>
            </Pressable>
            <Image
              source={require("../../../assets/more/padlock.png")}
              style={{ width: 35, height: 35, position: 'absolute', bottom: -10, right: -10 }}
            />
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10  }}
            >
              {score6 ? score6 : 0}%
            </Text>
          </View>
        )}

        {/* Quiz  7 */}
        {score6 > 50 ? (
          <View style={{ position: "absolute", top: "33%", left: "57%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("Quiz7")}
            >
              <Text>7</Text>
            </Pressable>
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >{score7 ? score7 : 0}%</Text>
          </View>
        ) : (
          <View style={{ position: "absolute", top: "33%", left: "57%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => alert("Complete the previous level.")}
            >
              <Text>7</Text>
            </Pressable>
            <Image
              source={require("../../../assets/more/padlock.png")}
              style={{ width: 35, height: 35, position: 'absolute', bottom: -10, right: -10 }}
            />
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >
              {score7 ? score7 : 0}%
            </Text>
          </View>
        )}

        {/* Quiz  8 */}
        {score7 > 50 ? (
          <View style={{ position: "absolute", top: "45%", left: "70%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("Quiz8")}
            >
              <Text>8</Text>
            </Pressable>
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >{score8 ? score8 : 0}%</Text>
          </View>
        ) : (
          <View style={{ position: "absolute", top: "45%", left: "70%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => alert("Complete the previous level.")}
            >
              <Text>8</Text>
            </Pressable>
            <Image
              source={require("../../../assets/more/padlock.png")}
              style={{ width: 35, height: 35, position: 'absolute', bottom: -10, right: -10 }}
            />
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >
              {score8 ? score8 : 0}%
            </Text>
          </View>
        )}

        {/* Quiz  9 */}
        {score8 > 50 ? (
          <View style={{ position: "absolute", top: "33%", right: "10%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("Quiz5")}
            >
              <Text>9</Text>
            </Pressable>
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >{score9 ? score9 : 0}%</Text>
          </View>
        ) : (
          <View style={{ position: "absolute", top: "33%", right: "12%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => alert("Complete the previous level.")}
            >
              <Text>9</Text>
            </Pressable>
            <Image
              source={require("../../../assets/more/padlock.png")}
              style={{ width: 35, height: 35, position: 'absolute', bottom: -10, right: -10 }}
            />
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >
              {score9 ? score9 : 0}%
            </Text>
          </View>
        )}

        {/* Quiz  10 */}
        {score9 > 50 ? (
          <View style={{ position: "absolute", bottom: "18%", right: "6%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("Quiz5")}
            >
              <Text>10</Text>
            </Pressable>
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >{score10 ? score10 : 0}%</Text>
          </View>
        ) : (
          <View style={{ position: "absolute", bottom: "18%", right: "6%" }}>
            <Pressable
              style={styles.btn}
              onPress={() => alert("Complete the previous level.")}
            >
              <Text>10</Text>
            </Pressable>
            <Image
              source={require("../../../assets/more/padlock.png")}
              style={{ width: 35, height: 35, position: 'absolute', bottom: -10, right: -10 }}
            />
            <Text
              style={{ position: "absolute", top: 0, right: -20, fontSize: 10 }}
            >
              {score10 ? score10 : 0}%
            </Text>
          </View>
        )}
      </ImageBackground>
    </ScrollView>
  );
};

export default FlagsQuizHome;

const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1.0,
  },
});
