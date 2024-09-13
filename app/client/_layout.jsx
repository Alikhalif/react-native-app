import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'

const _layout = () => {
  return (
    // <Stack
    //     screenOptions={{
    //         headerShown: false
    //     }}
    // />

    <Tabs
      tabBar={props => <TabBar {...props}/>}
    >

      <Tabs.Screen
        name="home"
        options={{
          title:"Home",
          headerShown: false,
        }}
      />
      
      {/* <Tabs.Screen
        name="profile"
        options={{
          title:"Profile",
          headerShown: false,
        }}
      /> */}
      <Tabs.Screen
        name="staff"
        options={{
          title:"Staff",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="deliveries"
        options={{
          title:"Deliveries",
          headerShown: false,
        }}
      />
      
      
      <Tabs.Screen
        name="notification"
        options={{
          title:"Notification",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title:"More",
          headerShown: false,
        }}
      />
      
      {/* <Tabs.Screen
        name="plan"
        options={{
          title:"Plan",
          headerShown: false,
        }}
      /> */}

    </Tabs>
  )
}

export default _layout