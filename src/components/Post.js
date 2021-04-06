import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";

export const Post = ({ post }) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground style={styles.image} source={{ uri: post.img }}>
        <View style={styles.textContainer}>
          <Text style={styles.text}> { new Date(post.date).toLocaleDateString() } </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    textContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    text: {
        color: '#fff',
        fontFamily: 'open-regular'
    }
});
