import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer, TouchableRipple } from "react-native-paper";
import { useTheme } from "../../utils/ThemeMode/ThemeProvider";
import i18next, { languageResources } from "../../MultiLanguage/i18next";
import { useTranslation } from "react-i18next";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { flagsEl, flagsEn, flagsEs } from "../../ReduxSetUp/flagSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  flgAfEl,
  flgAfEn,
  flgAfEs,
  flgAsEl,
  flgAsEn,
  flgAsEs,
  flgOcEl,
  flgOcEn,
  flgOcEs,
  flagsEuEl,
  flagsEuEn,
  flagsEuEs,
  flgAmEl,
  flgAmEn,
  flgAmEs,
  quiz1El,
  quiz1En,
  quiz1Es,
  quiz2El,
  quiz2En,
  quiz2Es,
  quiz3El,
  quiz3En,
  quiz3Es,
  quiz4El,
  quiz4En,
  quiz4Es,
  quiz5El,
  quiz5En,
  quiz5Es,
  quiz6El,
  quiz6En,
  quiz6Es,
  quiz7El,
  quiz7En,
  quiz7Es,
  quiz8El,
  quiz8En,
  quiz8Es,
  quiz9El,
  quiz9En,
  quiz9Es,
  quiz10El,
  quiz10En,
  quiz10Es,
} from "../../ReduxSetUp/FlagsQuizSlices";
import {
  quizCpt1El,
  quizCpt1En,
  quizCpt1Es,
  quizCpt2El,
  quizCpt2En,
  quizCpt2Es,
  quizCpt3El,
  quizCpt3En,
  quizCpt3Es,
  quizCpt4El,
  quizCpt4En,
  quizCpt4Es,
  quizCpt5El,
  quizCpt5En,
  quizCpt5Es,
  quizCpt6El,
  quizCpt6En,
  quizCpt6Es,
  quizCpt7El,
  quizCpt7En,
  quizCpt7Es,
  quizCpt8El,
  quizCpt8En,
  quizCpt8Es,
  quizCpt9El,
  quizCpt9En,
  quizCpt9Es,
  quizCpt10El,
  quizCpt10En,
  quizCpt10Es,
} from "../../ReduxSetUp/CapitalsQuizSlices";

const DrawerContent = (props) => {
  const navigation = useNavigation();
  const { dark, colors, setScheme } = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  // const [color1, setColor1] = useState("#003a6e");
  // const [color2, setColor2] = useState("");
  // const [color3, setColor3] = useState("");
  const lightMode = require("../../assets/settings/day-mode.png");
  const darkMode = require("../../assets/settings/moon.png");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserName").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      // await AsyncStorage.removeItem('score1');
      navigation.navigate("NameInput");
      setName(user.Name);
    } catch (error) {
      console.log(error);
    }
  };

  const English = () => {
    dispatch(flagsEn());
    dispatch(flagsEuEn());
    dispatch(flgAmEn());
    dispatch(flgAfEn());
    dispatch(flgAsEn());
    dispatch(flgOcEn());
    dispatch(quiz1En());
    dispatch(quiz2En());
    dispatch(quiz3En());
    dispatch(quiz4En());
    dispatch(quiz5En());
    dispatch(quiz6En());
    dispatch(quiz7En());
    dispatch(quiz8En());
    dispatch(quiz9En());
    dispatch(quiz10En());
    dispatch(quizCpt1En());
    dispatch(quizCpt2En());
    dispatch(quizCpt3En());
    dispatch(quizCpt4En());
    dispatch(quizCpt5En());
    dispatch(quizCpt6En());
    dispatch(quizCpt7En());
    dispatch(quizCpt8En());
    dispatch(quizCpt9En());
    dispatch(quizCpt10En());
    // setColor1(colors.buttonDrawerBackground);
    // setColor2("");
    // setColor3("");
  };
  const Spanish = () => {
    dispatch(flagsEs());
    dispatch(flagsEuEs());
    dispatch(flgAmEs());
    dispatch(flgAfEs());
    dispatch(flgAsEs());
    dispatch(flgOcEs());
    dispatch(quiz1Es());
    dispatch(quiz2Es());
    dispatch(quiz3Es());
    dispatch(quiz4Es());
    dispatch(quiz5Es());
    dispatch(quiz6Es());
    dispatch(quiz7Es());
    dispatch(quiz8Es());
    dispatch(quiz9Es());
    dispatch(quiz10Es());
    dispatch(quizCpt1Es());
    dispatch(quizCpt2Es());
    dispatch(quizCpt3Es());
    dispatch(quizCpt4Es());
    dispatch(quizCpt5Es());
    dispatch(quizCpt6Es());
    dispatch(quizCpt7Es());
    dispatch(quizCpt8Es());
    dispatch(quizCpt9Es());
    dispatch(quizCpt10Es());
    // setColor2(colors.buttonDrawerBackground);
    // setColor1("");
    // setColor3("");
  };
  const Greek = () => {
    dispatch(flagsEl());
    dispatch(flagsEuEl());
    dispatch(flgAmEl());
    dispatch(flgAfEl());
    dispatch(flgAsEl());
    dispatch(flgOcEl());
    dispatch(quiz1El());
    dispatch(quiz2El());
    dispatch(quiz3El());
    dispatch(quiz4El());
    dispatch(quiz5El());
    dispatch(quiz6El());
    dispatch(quiz7El());
    dispatch(quiz8El());
    dispatch(quiz9El());
    dispatch(quiz10El());
    dispatch(quizCpt1El());
    dispatch(quizCpt2El());
    dispatch(quizCpt3El());
    dispatch(quizCpt4El());
    dispatch(quizCpt5El());
    dispatch(quizCpt6El());
    dispatch(quizCpt7El());
    dispatch(quizCpt8El());
    dispatch(quizCpt9El());
    dispatch(quizCpt10El());
    // setColor3(colors.buttonDrawerBackground);
    // setColor1("");
    // setColor2("");
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundDrawer }]}
    >
      <Drawer.Section>
        <TouchableRipple>
          <View style={styles.userTitle}>
            <Text style={[styles.userText, { color: colors.textDrawer }]}>
              {t("hello")} {name}!!!
            </Text>
            <Pressable
              style={{ position: "absolute", right: 20 }}
              onPress={removeData}
            >
              <Text style={{ fontSize: 12, color: colors.textDrawer }}>
                Edit
              </Text>
            </Pressable>
          </View>
        </TouchableRipple>
      </Drawer.Section>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <TouchableRipple>
            <View style={[styles.flowDirectionRow, { marginBottom: 50 }]}>
              <Image
                style={{ width: 28, height: 28 }}
                source={require("../../assets/settings/settings.png")}
              />
              <Text style={[styles.settingText, { color: colors.textDrawer }]}>
                {t("settings")}
              </Text>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={{ marginBottom: 70 }}>
              <View style={styles.flowDirectionRow}>
                <MaterialCommunityIcons
                  name="theme-light-dark"
                  size={22}
                  color={colors.textDrawer}
                />
                <Text
                  style={[styles.theme_lngText, { color: colors.textDrawer }]}
                >
                  {t("change-theme")}
                </Text>
              </View>
              <Pressable
                onPress={() => {
                  dark ? setScheme("light") : setScheme("dark");
                }}
                // style={[styles.lngBtn, {backgroundColor: colors.bgLngBtn}]}
                style={[
                  styles.changeTheme,
                  { backgroundColor: colors.buttonDrawerBackground },
                ]}
              >
                <View style={styles.flowDirectionRow}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={dark ? lightMode : darkMode}
                  />
                  <Text style={{ color: colors.text, fontSize: 13 }}>
                    {dark ? t("lightMode") : t("darkMode")}
                  </Text>
                </View>
              </Pressable>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={{ marginBottom: 20 }}>
              <View style={styles.flowDirectionRow}>
                <MaterialIcons
                  name="language"
                  size={22}
                  color={colors.textDrawer}
                />
                <Text
                  style={[styles.theme_lngText, { color: colors.textDrawer }]}
                >
                  {t("change-language")}
                </Text>
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View>
              {/* English */}
              <Pressable
                style={[styles.lngBtn, { backgroundColor: colors.bgLngBtn }]}
                onPress={() => {
                  i18next.changeLanguage(Object.keys(languageResources)[0]);
                  English();
                }}
              >
                <Image
                  source={require("../../assets/Flags/uk.png")}
                  style={{ width: 22, height: 15, borderRadius: 3 }}
                />
                <Text style={{ color: colors.text }}>English</Text>
              </Pressable>

              {/* Spanish */}
              <Pressable
                style={[styles.lngBtn, { backgroundColor: colors.bgLngBtn }]}
                onPress={() => {
                  i18next.changeLanguage(Object.keys(languageResources)[1]);
                  Spanish();
                }}
              >
                <Image
                  source={require("../../assets/Flags/spain.png")}
                  style={{ width: 22, height: 15, borderRadius: 3 }}
                />
                <Text style={{ color: colors.text }}>Spanish</Text>
              </Pressable>

              {/* Greek */}
              <Pressable
                style={[styles.lngBtn, { backgroundColor: colors.bgLngBtn }]}
                onPress={() => {
                  i18next.changeLanguage(Object.keys(languageResources)[2]);
                  Greek();
                }}
              >
                <Image
                  source={require("../../assets/Flags/greece.png")}
                  style={{ width: 22, height: 15, borderRadius: 3 }}
                />
                <Text style={{ color: colors.text }}>Greek</Text>
              </Pressable>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    paddingLeft: 20,
  },
  userTitle: {
    marginTop: 60,
    flexDirection: "row",
    gap: 50,
    alignItems: "center",
  },
  userText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  settingText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  theme_lngText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  // Change Theme Button
  changeTheme: {
    width: 180,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  // Change Language Button
  lngBtn: {
    flexDirection: "row",
    gap: 10,
    width: 180,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "#e8e8e8",
  },
  flowDirectionRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 5,
    alignItems: "center",
  },
});

/*<View style={{ marginTop: 10 }}>
      <Text>DrawerContent</Text>
    </View> */

/*<Drawer.Section>
      <DrawerItem
        label="Categories"
        onPress={() => props.navigation.navigate("QuizScreen")}
      />
      <DrawerItem
        label="ChangeMode"
        onPress={() => props.navigation.navigate("ToggleBtn")}
      />
    </Drawer.Section> */

/* {Object.keys(languageResources).map((item, index) => (
              <View key={index}>
                <Pressable
                  onPress={() => {
                    changeLng(item);
                    setScreenIndex(index);
                  }}
                  style={[
                    styles.lngBtn,
                    {
                      backgroundColor:
                        index === screenIndex
                          ? colors.buttonDrawerBackground
                          : "transparent",
                    },
                  ]}
                >
                  <View style={styles.flowDirectionRow}>
                    {Flags.map((item, i) => {
                      return (
                        <View key={i} style={{ marginLeft: -10 }}>
                          <Image
                            style={[
                              { width: 22, height: 15, borderRadius: 2 },
                              { marginLeft: index === i ? 0 : -10 },
                            ]}
                            source={index === i ? item.img : null}
                          />
                        </View>
                      );
                    })}
                    <Text
                      style={{
                        color: colors.text,
                        fontSize: 13,
                        marginLeft: -5,
                      }}
                    >
                      {languagesList[item].nativeName}
                    </Text>
                  </View>
                </Pressable>
              </View>
            ))} */

// const changeLng = (lng) => {
//   i18next.changeLanguage(lng);
// };

// const Flags = [
//   { img: require("../../assets/Flags/uk.png") },
//   { img: require("../../assets/Flags/spain.png") },
//   { img: require("../../assets/Flags/greece.png") },
// ];
