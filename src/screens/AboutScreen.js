import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {THEME} from '../theme'

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
      <View style={styles.menuIconContainer}>
        <Ionicons
          color={Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR}
          name="ios-menu"
          size={24}
          onPress={() => navigation.toggleDrawer()}
          >
        </Ionicons>
      </View>
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
