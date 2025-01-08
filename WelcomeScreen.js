import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const WelcomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/Rubik_Vinyl (1)/RubikVinyl-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={[styles.background]}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.jpg")} // Same logo image
          style={styles.logo}
        />
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to MyApp!</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7dedd",
    padding: 20,
  },
  logoContainer: {
    borderRadius: 20,
  },
  logo: {
    width: 190,
    height: 190,
    resizeMode: "contain",
    borderRadius: 50,
  },
  welcomeText: {
    margin: 20,
    fontSize: 50,
    color: "#000000",
    fontFamily: "Roboto-Regular",
    textAlign: "center",
  },
  button: {
    width: "100%",
    padding: 20,
    backgroundColor: "#b28482",
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fefefd",
    fontSize: 20,
    fontFamily: "Roboto-Regular",
  },
});
