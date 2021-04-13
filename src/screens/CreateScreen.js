import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageEditor
} from "react-native";
import {useDispatch} from 'react-redux'
import { MenuIcon } from "../components/MenuIcon";
import { addPost } from "../store/actions/post";
import { ADD_POST } from "../store/types";
import { THEME } from "../theme";

export const CreateScreen = ({navigation}) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'

  const saveHandler = () => {

    const post = {
      date: new Date().toJSON(),
      text,
      img,
      booked: false
    }
    dispatch(addPost(post))
    navigation.navigate('Main');
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create new post</Text>
          <TextInput
            style={styles.textarea}
            placeholder="write the post text here"
            onChangeText={setText}
            multiline
          />
          <Image
            source={{
              uri:
                "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg",
            }}
            style={{ width: "100%", height: 200, marginBottom: 20 }}
          />
          <Button
            title="Save"
            color={THEME.MAIN_COLOR}
            onPress={() => saveHandler()}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Create new post",
  headerLeft: () => {
    return <MenuIcon onPressHandler={navigation.toggleDrawer} />;
  },
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "OpenSans_400Regular",
    marginVertical: 10,
  },
  textarea: {
    padding: 10,
    marginBottom: 10,
  },
});
