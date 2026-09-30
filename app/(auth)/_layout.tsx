import { View, Text } from 'react-native'
import React from 'react'
import { Redirect,Stack } from 'expo-router'
import { useAuth } from '@clerk/expo'
export default function AuthRoutesLayout() {

     const { isLoaded, isSignedIn } = useAuth()
     
      if (!isLoaded) {
        return null
      }
    
       if (isSignedIn) {
         return <Redirect href ={"/"} />
      }
  return  <Stack screenOptions={{headerShown:false}}/>
  
}