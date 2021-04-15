import React, {useEffect} from "react";
import {
  StyleSheet,
  View,
  Platform,
  ActivityIndicator
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
  const loading = useSelector(state=> state.post.loading);
  // console.log(allPosts);

  if (loading) return <View style={styles.loading}>
    <ActivityIndicator color={THEME.MAIN_COLOR}/>
  </View>

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
          size={24}
          onPress={()=> navigation.push('Create')}
          >
          
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
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});