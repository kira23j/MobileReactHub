import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  Tabs } from 'expo-router'

const _layout = () => {
  return (
<Tabs screenOptions={{headerShown:false}}>
<Tabs.Screen name='home' options={{tabBarLabel:"Home", }}/>
<Tabs.Screen name='explore' />
<Tabs.Screen name='profile' />
</Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})