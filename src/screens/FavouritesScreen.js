import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const FavouritesScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>FavouritesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
