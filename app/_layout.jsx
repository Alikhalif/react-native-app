import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
    return (
        // <Stack
        //     screenOptions={{
        //         headerShown: false
        //     }}
        // />
        <Stack
            // screenOptions={{
            //         headerShown: false
            //     }}
        >
            <Stack.Screen name='index' options={{headerShown: false}}/>
            <Stack.Screen name='welcome' options={{headerShown: false}}/>
            <Stack.Screen name='clients' options={{headerShown: false}}/>
            <Stack.Screen name='login' options={{headerShown: false}}/>
            <Stack.Screen name='signUp' options={{headerShown: false}}/>
            <Stack.Screen name='congrats' options={{headerShown: false}}/>

            {/* <Stack.Screen /> */}
        </Stack>
    )
}

export default _layout