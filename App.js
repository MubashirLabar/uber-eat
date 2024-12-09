import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

// Screens
import LoginScreen from "./screens/Login";

const App = () => {
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
      <LoginScreen />
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  app: {
    flex: 1,
  },
});
