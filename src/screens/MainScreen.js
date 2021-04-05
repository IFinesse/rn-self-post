import React from "react";
import { StyleSheet, View, Text, Button} from "react-native";

export const MainScreen = ({navigation}) => {
    const goToPost = () => {
        navigation.navigate('Post')
    }
  return (
    <View style={styles.center}>
      <Text>MainScreen</Text>
      <Button title='Go to post' onPress={goToPost}></Button>
    </View>
  );
};

MainScreen.navigationOptions = {
    headerTitle: 'Main'
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
