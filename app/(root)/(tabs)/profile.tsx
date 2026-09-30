import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/expo'
import { useRouter } from 'expo-router';

export default function Profile() {
 const router=useRouter();
  const {signOut}=useAuth();
  const handleSignOut=async()=>{
      try{
        await signOut();
        router.replace("/sign-in");
      }
      catch(error){
             console.error("Error signing out:",error)
      }
  }
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={handleSignOut}>
          <Text>SignOut</Text>
      </TouchableOpacity>
     
    </View>
  )
}