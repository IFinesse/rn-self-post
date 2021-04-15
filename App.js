// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Provider} from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'
// import {bootstrap} from './src/bootstrap'
import { AppNavigation } from './src/navigation/AppNavigation';
import store from './src/store'
import {DB} from './src/db'

import { 
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold_Italic,
} from '@expo-google-fonts/open-sans'

export default function App() {

  let [fontsLoaded, error] = useFonts( {
    OpenSans_400Regular,
    OpenSans_700Bold_Italic,
  })

  const [isReady, setIsReady] = useState(false)

  

  DB.init()

  if (!fontsLoaded) return (
    <AppLoading 
      // startAsync = {bootstrap}
      // onFinish= {()=> setIsReady(true)}
      // onError={(error)=> console.log(error)}
    />
  )
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
