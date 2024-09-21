import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { theme } from '../../constants/Colors'
import Icon from '../../assets/icons'
import ScreenClient from '../../components/ScreenClient'
import { useNavigation, useRouter } from 'expo-router'
import HeaderNavigation from '../../components/HeaderNavigation'
import { hp } from '../../helpers/common'

const Staff = () => {
    const router = useRouter();
    // const navigate = useNavigation();
    return (
        <ScreenWrapper bg='white'>
            <HeaderNavigation title="Staff"/>
            <View style={styles.container}>
                <Pressable onPress={() => router.push('Staffs/employeeSpace')} style={styles.button}>
                    <View style={styles.card}>
                        <Text>Employee Space </Text>
                        <Icon name="next"/>
                    </View>
                </Pressable>
                <Pressable onPress={() => router.push('Staffs/clientSpace')} style={styles.button}>
                    <View style={styles.card}>
                        <Text>Client Space </Text>
                        <Icon name="next"/>
                    </View>
                </Pressable>
            </View>
            
        </ScreenWrapper>
        
    )
}

export default Staff;

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
        shadowColor: 'gray',
        shadowOpacity: 12,
    }
})