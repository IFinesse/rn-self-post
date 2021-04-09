import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {THEME} from '../theme'
import { MenuIcon } from "../components/MenuIcon"

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>AboutScreen</Text>
    </View>
  );
};

AboutScreen.navigationOptions = ( {navigation} ) => ({
  headerTitle: "About us",
  headerLeft: () => {
    return (
      <MenuIcon onPressHandler={navigation.toggleDrawer}/>
    );
  },
});

const styles = StyleSheet.create({
  menuIconContainer: {
    paddingLeft: 20
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
