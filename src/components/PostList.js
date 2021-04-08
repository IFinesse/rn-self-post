import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    FlatList,
    Platform,
  } from "react-native";
  import {Post} from './Post.js'

  export const PostList = ( {data, onOpen} ) => {
     return <View style={styles.wrapper}>
     <FlatList
       data={data}
       keyExtractor={(post) => post.id.toString()}
       renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
     />
   </View>
  }

  const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    cameraIconContainer: {
        width: 90,
        height: 90,
        padding: 30,
      //   backgroundColor: 'green'
    }
  });