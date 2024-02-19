import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Test1 from "./Test";
import Test from "./Test";
import TabTest1 from "./TabTest1";
import TabTest2 from "./TabTest2";
import QuizScreen from "../QuizScreen";
import { AntDesign } from "@expo/vector-icons";
import { Button, TouchableWithoutFeedback } from "react-native";
// import Hello from "../Drawer/Hello";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const Tab2 = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          //   ...style.shadow,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Open"
        options={{
          tabBarButton: (props) => (
            <Button
              title="Cfjksdlfjkl"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
        component={Test}
      />
      <Tab.Screen name="Flags">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="TabTest1" component={TabTest1} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="TabT2"
        // name="Feed"
        // component={Feed}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <AntDesign name="home" size={24} color="blue" />,
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="QuizScreen" component={QuizScreen} />
            {/* <Stack.Screen name='TabTest2' component={TabTest2}/> */}
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tab2;
