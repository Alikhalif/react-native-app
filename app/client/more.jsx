import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { theme } from '../../constants/Colors'
import Icon from '../../assets/icons'
import ScreenClient from '../../components/ScreenClient'
import { useNavigation, useRouter } from 'expo-router'
import HeaderNavigation from '../../components/HeaderNavigation'
import { hp, wp } from '../../helpers/common'

const More = () => {
    const router = useRouter();

    return (
        <ScreenWrapper bg='white'>
            <HeaderNavigation title="More"/>
            <View style={styles.container}>
                <Pressable onPress={() => router.push('/Moretab/profile')} style={styles.button}>
                    <View style={styles.card}>
                        <Text>My Profile </Text>
                        <Icon name="next"/>
                    </View>
                </Pressable>
                <Pressable onPress={() => router.push('/Moretab/plan')} style={styles.button}>
                    <View style={styles.card}>
                        <Text>My Plan</Text>
                        <Icon name="next"/>
                    </View>
                </Pressable>
            </View>
            
        </ScreenWrapper>
        
    )
}

export default More;

const styles = StyleSheet.create({
    container:{
        flex: 1,
      // gap: 45,
    //   paddingHorizontal: wp(5),
        paddingVertical: hp(2),
        backgroundColor: 'rgba(0,0,0,0.07)',
    },
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',      
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 20,
        borderRadius: theme.radius.xxl,
        backgroundColor: 'white',
        elevation: 4,  // Android shadow
        shadowColor: '#000',  // iOS shadow
        shadowOpacity: 12,
    }
})