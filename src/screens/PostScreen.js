import React, { useEffect, useCallback } from "react";
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
import {useDispatch,useSelector} from 'react-redux'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { Ionicons } from "@expo/vector-icons";
import { DATA } from "../data";
import { THEME } from "../theme";
import { toggleBooked } from "../store/actions/post";

export const PostScreen = ({ navigation }) => {

  const dispatch = useDispatch()

  const postId = navigation.getParam("postId");

  const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId))

  useEffect(()=> {
    navigation.setParams({booked})
  }, [booked])

  const toggleHandler = useCallback(() => {
    console.log(postId);
    dispatch(toggleBooked(postId))
  }, [dispatch, postId])

  useEffect( ()=> {
    navigation.setParams( {
      toggleHandler
    })
  }, [toggleHandler])

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
  const booked = navigation.getParam('booked');
  const toggleHandler = navigation.getParam('toggleHandler')
  const iconName = booked ? 'ios-star' : 'ios-star-outline'
  return {
    headerTitle: `post from ${new Date(date).toLocaleDateString()}`,
    headerRight: () => {
        return (
          <View style={styles.cameraIconContainer}>
            <Ionicons
              color={Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR}
              name={iconName}
              size={24}
              onPress = {toggleHandler}
              >
            </Ionicons>
          </View>
        );
      },
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
  cameraIconContainer: {
    width: 90,
    height: 90,
    padding: 30,
  //   backgroundColor: 'green'
}
});
