import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutScreen = ({ navigation }) => {
  return (
    <View style={[styles.background]}>
      <Text style={styles.heading}>App Details</Text>
      <Text style={[styles.aboutText]}>
        "This is an image app where you can log in and view pictures. The main task was to connect multiple screens with each other using React
        Navigation."
      </Text>
    </View>
  );
};

export default AboutScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#f7dedd",
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  aboutText: {
    fontSize: 25,
    color: "#000000",
    textAlign: "center",
  },
  heading: {
    fontSize: 50,
    fontFamily: "Roboto-Regular",
  },
});