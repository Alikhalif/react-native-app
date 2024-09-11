import { View, Text, Image, Button, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated'
import ScreenWrapper from '../components/ScreenWrapper'
import { useRouter } from 'expo-router'

const index = () => {
    const router = useRouter();
    const { width, height} = useWindowDimensions();

    useEffect(() => {
        setTimeout(() => {
            router.push("/welcome")
        }, 2000);
    }, []);
    

    return (
        <View  style={styles.contant}>
            <Animated.View 
                className="flex-1 justify-center content-center "
                entering={FadeInDown.duration(500).springify()}

            >
                <Image  
                    source={require('@/assets/images/logo-liveriliya.png')}
                    style={{ alignSelf: 'center', width: 240, height: 60 }} 
                /> 

            </Animated.View>

        </View>
    )
}

export default index;

const styles = StyleSheet.create({
    contant:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFA451', 

    }
})