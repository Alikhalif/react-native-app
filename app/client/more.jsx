import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { theme } from '../../constants/Colors'
import Icon from '../../assets/icons'
import ScreenClient from '../../components/ScreenClient'
import { useNavigation, useRouter } from 'expo-router'

const More = () => {
    const router = useRouter();

    return (
        <ScreenClient>
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
            
        </ScreenClient>
        
    )
}

export default More;

const styles = StyleSheet.create({
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