import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo'
import {bootstrap} from './src/bootstrap'


export default function App() {

  conbst [isReady, setIsReady] = useState(false)

  if (!isdReady) return (
    <AppLoading 
      startAsync = {bootstrap}
      onFinish= {()=> setIsReady(true)}
      onError={(error)=> console.log(error)}
    />
  )
  return (
    <View style={styles.container}>
      <Text>start</Text>
      <StatusBar style="auto" />
    </View>
  );
}
