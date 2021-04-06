import React from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { Post } from "../components/Post";
import {DATA} from '../data'

export const MainScreen = ({ navigation }) => {
  const onOpenHandler = (post) => {
    navigation.navigate("Post");
  };
  return (
    <View style={styles.wrapper}>
      <FlatList data={DATA} keyExtractor={post => post.id.toString()} renderItem={( {item} ) => <Post post={item} onOpen={onOpenHandler}/>}/>
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "Main",
};

const styles = StyleSheet.create({
  wrapper: {

  },
});
