import React from "react";
import {
  StyleSheet,
  View,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";

export const MenuIcon = ( {onPressHandler}) => {
  return (
    <View style={styles.menuIconContainer}>
      <Ionicons
        color={Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR}
        name="ios-menu"
        size={35}
        onPress={() => onPressHandler()}
      ></Ionicons>
    </View>
  );
};

const styles = StyleSheet.create({
  menuIconContainer: {
    paddingLeft: 20,
  },
});
