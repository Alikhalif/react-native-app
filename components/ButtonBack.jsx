import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Icon from '../assets/icons'
import { theme } from '../constants/Colors'

const ButtonBack = ({size=26, router}) => {
    return (
        <Pressable onPress={() => router.back()} style={styles.button}>
            <Icon name="back"/>
        </Pressable>
    )
}

export default ButtonBack;

const styles = StyleSheet.create({
    button:{
        alignSelf: 'flex-start',
        alignItems: 'center',
        padding: 5,
        marginVertical: 15,
        borderRadius: theme.radius.sm,
        backgroundColor: 'rgba(0,0,0,0.07)',
    }
})

