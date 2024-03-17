import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizScreen from "../QuizScreen";
import DrawerContent from "./DrawerContent";
import TabNavCapitals from "../BottomTabs/CapitalsTab/TabNavCapitals";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../utils/ThemeMode/ThemeProvider";
import TabNavFlags from "../BottomTabs/FlagsTab/TabNavFlags";
import React from "react";
import TabNavAnimals from "../BottomTabs/AnimalsTab/TabNavAnimals";
import TabNavScience from "../BottomTabs/ScienceTab/TabNavScience";
import TabNavMonuments from "../BottomTabs/WorldMonuments/TabNavMonuments";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawNavigator = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  // const [show, setShow] = React.useState(true);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setShow(false);
  //   }, 3000);
  // }, []);

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Drawer"
        options={{ headerShown: false, gestureEnabled: false }}
      >
        {() => (
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.backgroundBottomTab,
                // height: 100
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                color: colors.text,
              },
              tabBarActiveTintColor: "magenta",
              tabBarStyle: {
                backgroundColor: colors.backgroundBottomTab,
                height: 70,
              },
            }}
          >
            {/* <Stack.Screen name="Hello" component={Hello} /> */}
            <Stack.Screen
              name=" "
              component={QuizScreen}
              options={{
                title: t("welcome"),
                headerShown: true,
                headerStyle: { backgroundColor: colors.backgroundBottomTab },
                headerTintColor: colors.textDrawer,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 14,
                },
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Capitals"
              component={TabNavCapitals}
              options={{
                title: t("capitals"),
                headerShown: true,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Flags"
              component={TabNavFlags}
              options={{
                title: t("flags"),
                headerShown: true,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="WorldMonuments"
              component={TabNavMonuments}
              options={{
                title: t("worldMonuments"),
                headerShown: true,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Animals"
              component={TabNavAnimals}
              options={{
                title: t("animals"),
                headerShown: true,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Science"
              component={TabNavScience}
              options={{ headerShown: true, gestureEnabled: false }}
            />
          </Stack.Navigator>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawNavigator;
