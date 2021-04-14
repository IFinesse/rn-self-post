import React, {useState} from 'react'
import {View, StyleSheet, Image, Button, Alert} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

async function askForPermission () {
    const {status} = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL,
    )

    if (status !== 'granted') {
        Alert.alert("Error", "You haven't allowed the app to add photos")
        return false
    }
    return true
}

export const PhotoPicker = ( {} ) => {

    const [image, setImage] = useState('null')
    const async addPhoto = () => {
        const hasPermissions = await askForPermission();
        if(!hasPermissions) {
            return
        } 

        const img = await ImagePicker.launchCameraAsync( {
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9]
        })

    }

    return <View style={styles.wrapper}>
        <Button title="Add photo" onPress={addPhoto}/>
        {image && <Image source={ {uri: image} } style={styles.image}/>}
    </View>
}

const styles = StyleSheet.create( {
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 20
    }
})