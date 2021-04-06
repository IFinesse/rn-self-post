import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'
import {bootstrap} from './src/bootstrap'
import { AppNavigation } from './src/navigation/AppNavigation';
// import { 
//   OpenSans_400Regular,
//   OpenSans_700Bold,
// } from '@expo-google-fonts/open-sans'
// import { 
//   OpenSans_400Regular,
//   OpenSans_700Bold,
// } from '@expo-google-fonts/dev'

import { 
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic 
} from '@expo-google-fonts/open-sans'




export default function App() {

  let [fontsLoaded, error] = useFonts( {
    OpenSans_400Regular,
    OpenSans_300Light,
    OpenSans_800ExtraBold,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
  })

  const [isReady, setIsReady] = useState(false)

  if (!fontsLoaded) return (
    <AppLoading 
      // startAsync = {bootstrap}
      // onFinish= {()=> setIsReady(true)}
      // onError={(error)=> console.log(error)}
    />
  )
  return (
    <AppNavigation />
  );
}
