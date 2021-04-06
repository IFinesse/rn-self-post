import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { DATA } from "../data";
import { THEME } from "../theme";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");

  const post = DATA.find((p) => p.id === postId);

  const onRemove = () => {
    Alert.alert(
        'Removing posts',
        "Are you sure you want to remove the post?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "Remove", style:'destructive', onPress: () => {}}
        ]
      );
  }

  return (
    <ScrollView>
      <ImageBackground source={{ uri: post.img }} style={styles.image}></ImageBackground>
      <View style={styles.TextWrap}>
        <Text style={styles.text}>{post.text}</Text>
      </View>
      <Button title='Remove' onPress={onRemove} color={THEME.DANGER_COLOR}></Button>
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam("date");
  return {
    headerTitle: `post from ${new Date(date).toLocaleDateString()}`,
  };
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TextWrap: {
    padding: 10
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
  },
  image: {
    width: "100%",
    height: 200
  },
});
