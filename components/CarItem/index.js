/** @format */
import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./styles";
import StyleButton from "../Stylebutton";

const CarItem = () => {
  return (
    <View style={styles.carcontainer}>
      <ImageBackground
        style={styles.imagestyle}
        source={require("../../images/Model3.jpeg")}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <StyleButton />
    </View>
  );
};
export default CarItem;
