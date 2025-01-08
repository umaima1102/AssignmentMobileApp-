import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Folder 1 Images */}
      <Text style={styles.heading}>Alphabet Logo</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/folder/alpha/im5.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/folder/alpha/im2.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/folder/alpha/im3.jpg")}
          style={styles.image}
        />
      </View>

      {/* Folder 2 Images */}
      <Text style={styles.heading}>App Logo</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/folder/app/ap3.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/folder/app/ap2.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/folder/app/ap4.jpg")}
          style={styles.image}
        />
      </View>

      {/* Folder 3 Images */}
      <Text style={styles.heading}>Aesthetic Logo</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/folder/aesthetic/flo1.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/folder/aesthetic/flo2.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/folder/aesthetic/a4.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/folder/aesthetic/a5.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/folder/aesthetic/a7.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/folder/aesthetic/a8.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/folder/aesthetic/a5.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/folder/aesthetic/a7.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/folder/aesthetic/a9.jpg")}
          style={styles.image}
        />
      </View>
      <TouchableOpacity
        style={styles.button} onPress={() => navigation.navigate("About")}>
        <Text style={styles.AboutText}>About App Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  heading: {
    fontSize: 50,
    marginVertical: 10,
    fontFamily: "Roboto-Regular",
  },
  imageContainer: {
    flexWrap: "wrap",
    flexDirection: "row",

    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
    margin: 10,
  },
  button: {
    width: "100%",
    padding: 20,
    backgroundColor: "#b28482",
    borderRadius: 20,
    alignItems: "center",
  },
  AboutText: {
    color: "#000000",
    fontFamily: "Roboto-Regular",
    fontSize: 20,
  },
});

export default HomeScreen;
