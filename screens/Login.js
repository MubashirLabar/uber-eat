import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () => {
    if (username === "") {
      Alert.alert("Login Error", "Username is required");
    } else if (password === "") {
      Alert.alert("Login Error", "Password is required");
    } else {
      navigation.navigate("home");
      console.log("username:", username);
      console.log("password:", password);
    }
  };

  return (
    <View style={style.loginScreen}>
      <Text style={style.title}>Login</Text>
      <View style={style.inputFiled}>
        <TextInput
          placeholder="Enter username"
          style={style.input}
          autoCorrect={false}
          value={username}
          onChangeText={(value) => {
            setUsername(value);
            username1 = value;
          }}
        />
      </View>
      <View style={[style.inputFiled, { marginBottom: 32 }]}>
        <TextInput
          placeholder="Enter password"
          style={style.input}
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <View style={style.actions}>
        <TouchableOpacity style={style.loginBtn} onPress={() => submitLogin()}>
          <Text style={style.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  loginScreen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 32,
    fontFamily: "SemiBold",
  },
  inputFiled: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#ddd",
    height: 56,
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 24,
    borderRadius: 50,
    fontFamily: "Regular",
  },
  actions: {
    flexDirection: "row",
  },
  loginBtn: {
    backgroundColor: "black",
    flex: 1,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  loginText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Medium",
  },
});
