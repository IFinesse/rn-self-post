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

    // console.log(typeof data, data, "+++++++++ß");
    if(data.length == 0)  {
      return <View style={styles.message}><Text style={styles.noItemsText}>The list of posts is empty</Text></View>
    }

     return <View style={styles.wrapper}>
     <FlatList
       data={data}
       keyExtractor={(post) => post.id.toString()}
       renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
     />
   </View>
  }

  const styles = StyleSheet.create({
    message: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noItemsText: {
      fontSize: 17
    },
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