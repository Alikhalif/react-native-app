import { View, Text } from 'react-native'
import React from 'react'
import ScreenClient from '../../components/ScreenClient'
import ScreenWrapper from '../../components/ScreenWrapper'
import HeaderNavigation from '../../components/HeaderNavigation'

const Notification = () => {
    return (
        <ScreenWrapper bg='white'>
            <HeaderNavigation title="Notification"/>
            <Text>notification</Text>
        </ScreenWrapper>
    )
}

export default Notification;