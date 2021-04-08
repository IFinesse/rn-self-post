import React from "react";
import {
  StyleSheet,
  View,
  // Text,
  // Button,
  // FlatList,
  Platform,
} from "react-native";
// import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import { Post } from "../components/Post";
import { DATA } from "../data";
// import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";
import {PostList} from '../components/PostList'

export const FavouritesScreen = ({ navigation }) => {
  const onOpenHandler = (post) => {
    navigation.navigate("Post", { postId: post.id, date: post.date, booked: post.booked });
  };
  return (
    <PostList data={DATA.filter(post=>post.booked===true)} onOpen={onOpenHandler}/>
  );
};

FavouritesScreen.navigationOptions = {
  headerTitle: "Favourites",
  // headerRight: () => {
  //   return (
  //     <View style={styles.cameraIconContainer}>
  //       <Ionicons
  //         color={Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR}
  //         name="camera"
  //         size={24}>
  //       </Ionicons>
  //     </View>
  //   );
  // },
  headerLeft: () => {
    return (
      <View style={styles.menuIconContainer}>
        <Ionicons
          color={Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR}
          name="ios-menu"
          size={24}>
        </Ionicons>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  cameraIconContainer: {
      width: 90,
      height: 90,
      padding: 30,
    //   backgroundColor: 'green'
  }
});

//   headerRight: (<Ionicons.Button><Ionicons />),
//   headerRight: (
//       <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
//         <Item title='take photo' iconName='camera' onPress={() => {}}/>
//       </HeaderButtons>
//   )
