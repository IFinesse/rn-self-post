import React, {useEffect} from "react";
import {
  StyleSheet,
  View,
  Platform,
} from "react-native";
import {useDispatch, useSelector} from 'react-redux'
// import { DATA } from "../data";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";
import { PostList } from "../components/PostList";
import { MenuIcon } from "../components/MenuIcon";
import { loadPosts } from "../store/actions/post";

export const MainScreen = ({ navigation }) => {
  const onOpenHandler = (post) => {
    navigation.navigate("Post", { postId: post.id, date: post.date, booked: post.booked });
  };
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(loadPosts())
  }, [dispatch])

  const allPosts = useSelector(state => state.post.allPosts)
  console.log(allPosts);

  return (
    <PostList data={allPosts} onOpen={onOpenHandler}/>
  );
};

MainScreen.navigationOptions = ( {navigation} ) => ({
  headerTitle: "Main",
  headerRight: () => {
    return (
      <View style={styles.cameraIconContainer}>
        <Ionicons
          color={Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR}
          name="camera"
          size={24}>
        </Ionicons>
      </View>
    );
  },
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
  cameraIconContainer: {
      width: 90,
      height: 90,
      padding: 30,
  }
});