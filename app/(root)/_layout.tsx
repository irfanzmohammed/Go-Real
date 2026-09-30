import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/expo'
import { Slot,Redirect } from 'expo-router'

export default function RootLayout() {
    const { isLoaded, isSignedIn } = useAuth()
     
    //sync clerk user -> supabase
      if (!isLoaded) {
        return null
      }
    
       if (!isSignedIn) {
         return <Redirect href ="/sign-in" />
      }
  
   return <Slot />
  }
