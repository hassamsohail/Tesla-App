/** @format */

import React from "react";
import { View, Pressable, Text } from "react-native";

import styles from "./styles";
const StyleButton = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.warn("hello");
        }}
      >
        <Text style={styles.text}>Custom Order</Text>
      </Pressable>
    </View>
  );
};
export default StyleButton;
