import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Image, Platform, Pressable } from "react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
import React from "react";
import WorldMonumentsHome from "./WorldMonumentsHome";
import { useNavigation } from "@react-navigation/native";
import Return from "./Return";
import Settings from '../Settings'
import { Quiz1, Quiz10, Quiz2, Quiz3, Quiz4, Quiz5, Quiz6, Quiz7, Quiz8, Quiz9 } from "./Quizzes";
import TopTabMonuments from "./TopTabMonuments/topTabMonuments";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavMonuments = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.backgroundBottomTab
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            tabBarActiveTintColor: 'white',
            tabBarStyle: {
                backgroundColor: colors.backgroundBottomTab,
                height: Platform.OS == 'ios' ? 90 : 70,
                paddingBottom: Platform.OS == 'ios' ? 30: 10,
            }
        }}
    >
      <Tab.Screen
        name='WorldMonumentsScreen'
        options={{
            headerShown: false,
            tabBarLabel: 'Quizzes',
            tabBarIcon: ()=>(
                <Image
                    style={{width: 30, height: 30, marginTop: 12}}
                    source={require('../../../assets/settings/apps.png')}
                />
            )
        }}
      >
        {() => (
          <Stack.Navigator initialRouteName="WorldMonumentsHome">
            <Stack.Group screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="WorldMonumentsHome"
                component={WorldMonumentsHome}
              />
              <Stack.Screen name='Quiz1' component={Quiz1}/>
              <Stack.Screen name='Quiz2' component={Quiz2}/>
              <Stack.Screen name='Quiz3' component={Quiz3}/>
              <Stack.Screen name='Quiz4' component={Quiz4}/>
              <Stack.Screen name='Quiz5' component={Quiz5}/>
              <Stack.Screen name='Quiz6' component={Quiz6}/>
              <Stack.Screen name='Quiz7' component={Quiz7}/>
              <Stack.Screen name='Quiz8' component={Quiz8}/>
              <Stack.Screen name='Quiz9' component={Quiz9}/>
              <Stack.Screen name='Quiz10' component={Quiz10}/>
            </Stack.Group>
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name='Learn'
        options={{
            headerShown: false,
            tabBarLabel: 'Learn',
            tabBarLabelStyle: {marginBottom: -1},
            tabBarIcon: ()=>(
                <Image
                    style={{width: 30, height: 30, marginTop: 14, borderRadius: 16}}
                    source={require('../../../assets/QuizScreen/monument.jpg')}
                />
            )
        }}
      >
        {() => (
          <Stack.Navigator initialRouteName="TopTabMonument">
            <Stack.Group screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="TopTabMonument"
                component={TopTabMonuments}
              />
            </Stack.Group>
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name='Return'
        options={{
            headerShown: false,
            tabBarLabel: 'Return',
            tabBarIcon: ()=>(
                <Image
                    style={{width: 30, height: 30, marginTop: 12}}
                    source={require('../../../assets/settings/undo.png')}
                />
            )
        }}
      >
        {() => (
          <Stack.Navigator initialRouteName="WorldMonumentsHome">
            <Stack.Group screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="ReturnMonument"
                component={Return}
              />
            </Stack.Group>
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Open"
        options={{
          headerShown: false,
          tabBarButton: () => (
            <Pressable
              // title=""
              onPress={() => navigation.openDrawer()}
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                width: "25%",
                marginTop: 12,
              }}
            >
              <Image
                style={{ width: 35, height: 35, marginBottom: -2 }}
                source={require("../../../assets/settings/settings.png")}
              />
              <Text style={{ fontSize: 10, color: "gray" }}>
                {t("settings")}
              </Text>
            </Pressable>
          ),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default TabNavMonuments;
