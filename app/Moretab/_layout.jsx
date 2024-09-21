import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import ButtonBack from '../../components/ButtonBack'

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name='plan' options={{headerShown: false}}/>
            <Stack.Screen name='profile' options={{headerShown: false}}/>
        </Stack>
    )
}

export default _layout;