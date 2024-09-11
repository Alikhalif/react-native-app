import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Google from '../assets/icons/Google'
import { theme } from '../constants/Colors'
import { hp, wp } from '../helpers/common'
import Loading from './Loading'
import Icon from '../assets/icons'


const ButtonGoogle = ({
    buttonStyle,
    textStyle,
    title='',
    onPress=()=>{},
    loading = false,
    hasShadow = true,
}) => {
    
    const shadowStyle = {
        shadowColor: theme.colors.dark,
        shadowOffest: {width:2, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4
    }

    if(loading){
        return(
            <View style={[styles.button, {backgroundColor: 'white'}]}>
                <Loading/>
            </View>
        )
    }

    return (
        <Pressable
                onPress={onPress}
                style={[styles.button, buttonStyle]}
            >
            <Icon name="google"/>
        </Pressable>
    )
}

export default ButtonGoogle;

const styles = StyleSheet.create({
    button:{
        backgroundColor: theme.colors.gray,
        height: hp(6.6),
        justifyContent: 'center',
        alignItems: 'center',
        borderCurve: 'continuous',
        borderRadius: theme.radius.xxl
    },
    text:{
        fontSize: hp(2.5),
        color: 'white',
        fontWight: theme.fonts.bold
    }
})