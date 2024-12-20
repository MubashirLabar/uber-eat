import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";

const Stack = createStackNavigator();

const App = () => {
  console.log("App Screen");

  const [loadedFont, error] = useFonts({
    Light: require("./assets/fonts/Inter_28pt-Light.ttf"),
    Regular: require("./assets/fonts/Inter_28pt-Regular.ttf"),
    Medium: require("./assets/fonts/Inter_28pt-Medium.ttf"),
    SemiBold: require("./assets/fonts/Inter_28pt-SemiBold.ttf"),
    Bold: require("./assets/fonts/Inter_28pt-Bold.ttf"),
  });

  if (!loadedFont && !error) {
    return null;
  }

  return (
    <View style={style.app}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={
            {
              // headerShown: false,
            }
          }
        >
          <Stack.Screen
            options={{ title: "Login", headerShown: false }}
            name="login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ title: "Home" }}
            name="home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  app: {
    flex: 1,
  },
});
