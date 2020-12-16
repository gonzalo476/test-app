import { StatusBar } from 'expo-status-bar';
import React,{ useState, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import ButtonStack from "./HomeStack/ButtonStack"

export default function App() {

  return (
    <View style={styles.container}>
      <ButtonStack/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center", 
  },
});
